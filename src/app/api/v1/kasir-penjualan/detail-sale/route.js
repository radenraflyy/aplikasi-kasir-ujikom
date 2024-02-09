import prisma from "../../../../../lib/prisma"
import middleware from "../../../../midlleware"

export async function POST(request) {
  try {
    const { saleId, productId } = await request.json()

    console.log(saleId)
    console.log(productId)

    const getSale = await prisma.sale.findUnique({
      where: {
        id: saleId,
      },
    })

    if (!getSale) {
      return Response.json({
        msg: "Sale Tidak ditemukan",
        status: 404,
      })
    }

    const getProuct = await prisma.product.findMany({
      where: {
        id: productId,
      },
    })

    console.log(getProuct.length)

    if (getProuct.length === 0) {
      return Response.json({
        msg: "Product Tidak ditemukan",
        status: 404,
      })
    }

    const res = await prisma.detailsale.create({
      data: {
        sale: {
          connect: {
            id: getSale.id,
          },
        },
        products: {
          connect: {
            id: getProuct[0].id,
          },
        },
        sumProduct: getProuct.length,
        subTotal: getProuct[0].price * getProuct.length,
      },
    })

    await prisma.product.update({
      where: {
        id: Number(getProuct[0].id),
      },
      data: {
        stock: Number(getProuct[0].stock) - Number(getProuct.length),
      },
    })

    // return Response.json({
    //   data: { res: res, sale: getSale, product: getProuct },
    //   msg: "Successfully Create Data Detailsale",
    //   status: 201,
    // })
    const data = {
      res,
      sale: getSale,
      product: getProuct
    }
    return middleware(request, data, "Successfully Create Data Detailsale", 201)
  } catch (error) {
    console.error(error)
    return Response.json({ error: error, status: 500 })
  }
}
