import prisma from "../../../../../lib/prisma"
import middleware from "../../../../midlleware"

export async function POST(request) {
  try {
    const { saleId, productId } = await request.json()

    const getSale = await prisma.sale.findUnique({
      where: {
        id: saleId,
      },
      select: {
        customer: true,
        dateSale: true,
        sumPrice: true,
        id: true,
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

    const data = {
      res,
      sale: getSale,
      product: getProuct,
    }
    return middleware(request, data, "Successfully Create Data Detailsale", 201)
  } catch (error) {
    console.error(error)
    return Response.json({ error: error, status: 500 })
  }
}

export async function GET(request) {
  try {
    const res = await prisma.detailsale.findMany({
      orderBy: { id: "asc" },
      select: {
        sale: true,
        products: true,
        subTotal: true,
        sumProduct: true,
      },
    })

    return middleware(request, res, "Successfully Get All Data Detailsale", 200)
  } catch (error) {
    console.error(error)
    return Response.json({ error: error, status: 500 })
  }
}
