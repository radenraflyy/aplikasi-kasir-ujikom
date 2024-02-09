import prisma from "../../../../../lib/prisma"
import middleware from "../../../../midlleware"

export async function PUT(request, { params }) {
  try {
    const { id } = params
    const { name, address, noTelephone } = await request.json()

    const getId = await prisma.customer.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!getId) {
      return Response.json({
        msg: "id not found",
        status: 404,
      })
    }

    const res = await prisma.customer.update({
      where: {
        id: getId.id,
      },
      data: {
        name_customer: name,
        address,
        noTelephone,
      },
    })

    return middleware(request, res, "Successfully Update Data Customer", 200)
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

    if (!id) {
      return Response.json({
        msg: "id is required for delete",
        status: 404,
      })
    }

    const findCustomer = await prisma.customer.findUnique({
      where: {
        id: Number(id),
      },
    })

    if (!findCustomer) {
      return Response.json({
        msg: "Customer Not Found",
        status: 404,
      })
    }

    const res = await prisma.customer.delete({
      where: {
        id: Number(findCustomer.id),
      },
    })

    return middleware(request, res, "Successfully Delete Data Customer", 200)
  } catch (error) {
    console.error(error)
    return Response.json({
      msg: "Internal Server Error : " + error,
      error,
      status: 500,
    })
  }
}
