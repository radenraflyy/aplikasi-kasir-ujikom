import prisma from "../../../../lib/prisma"
import midlleware from "../../../midlleware"
export async function GET(request) {
  try {
    const res = await prisma.product.findMany({
      select: {
        id: true,
        nameProduct: true,
        stock: true,
      },
    })

    return midlleware(request, res, "Successfully Get All Data Stock", 200)
  } catch (error) {
    console.error(error)
    return Response.json({
      data: res,
      msg: error,
      status: 400,
    })
  }
}

export async function PUT(request) {
  try {
    const { idProduct, stock } = await request.json()

    if (!idProduct) {
      return Response.json({
        msg: "id is required for update",
        status: 404,
      })
    }

    const findIdProduct = await prisma.product.findUnique({
      where: {
        id: Number(idProduct),
      },
      select: {
        id: true,
        stock: true,
      },
    })

    if (!findIdProduct) {
      return Response.json({
        msg: "product not found",
        status: 404,
      })
    }

    const res = await prisma.product.update({
      where: {
        id: Number(findIdProduct.id),
      },
      data: {
        stock: findIdProduct.stock + stock,
      },
      select: {
        nameProduct: true,
        stock: true,
      },
    })

    return midlleware(request, res, "Successfully Update Data Stock", 200)
  } catch (error) {
    console.error(error)
    return Response.json({
      data: res,
      msg: error,
      status: 400,
    })
  }
}
