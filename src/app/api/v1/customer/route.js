import prisma from "../../../../lib/prisma"
import middleware from "../../../midlleware"

export async function POST(request) {
  try {
    const { name, address, noTelephone } = await request.json()

    const res = await prisma.customer.create({
      data: {
        name_customer: name,
        address,
        noTelephone,
      },
    })
    return middleware(request, res, "Successfully Create Data Customer", 201)
  } catch (error) {
    console.error(error)
    return Response.json({
      msg: "Internal Server Error",
      error,
      status: 500,
    })
  }
}

export async function GET(request) {
  try {
    const res = await prisma.customer.findMany({
      orderBy: { id: "asc" },
    })
    return middleware(request, res, "Successfully Get All Data Customer", 200)
  } catch (error) {
    console.error(error)
    return Response.json({
      msg: "Internal Server Error",
      error,
      status: 500,
    })
  }
}
