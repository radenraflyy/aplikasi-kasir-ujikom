import prisma from "../../../../../lib/prisma"
import middleware from "../../../../midlleware"

export async function GET(request, { params }) {
  try {
    const { id } = params

    const res = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!res) {
      return Response.json({
        msg: "Product not found",
        status: 404,
      })
    }

    return middleware(request, res, "Successfully Get Data Product", 201)
  } catch (error) {
    console.error(error)
    return Response.json({
      msg: "Internal Server Error",
      error,
      status: 500,
    })
  }
}

export async function PATCH(request, { params }) {
  try {
    const { nameProduct, price, stock } = await request.json()
    const { id } = params

    const findId = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!findId.id) {
      return Response.json({
        msg: "id not found",
        status: 404,
      })
    }

    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(findId.id),
      },
      data: {
        nameProduct,
        price,
        stock,
      },
    })

    return middleware(
      request,
      updatedProduct,
      "Successfully Update Data Product",
      200
    )
  } catch (error) {
    console.error(error)
    return Response.json({
      msg: "Internal Server Error",
      error,
      status: 500,
    })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const findId = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    })

    console.log(id, findId)

    if (!findId) {
      return Response.json({
        msg: "id not found",
        status: 404,
      })
    }

    const res = await prisma.product.delete({
      where: {
        id: Number(findId.id),
      },
    })

    return middleware(request, res, "Successfully Delete Data Product", 200)
  } catch (error) {
    console.error(error)
    return Response.json({
      msg: "Internal Server Error",
      error,
      status: 500,
    })
  }
}
