import prisma from "../../../../../lib/prisma"
import middleware from "../../../../midlleware"

export async function POST(request) {
  try {
    const { dateSale, customerId } = await request.json()

    const getIdCustomer = await prisma.customer.findUnique({
      where: {
        id: customerId,
      },
    })

    if (!getIdCustomer) {
      return Response.json({
        msg: "Customer Tidak ditemukan",
        status: 404,
      })
    }

    const res = await prisma.sale.create({
      data: {
        dateSale: new Date(dateSale),
        sumPrice: 20,
        customer: {
          connect: {
            id: getIdCustomer.id,
          },
        },
      },
    })

    const data = {
      res: res,
      detailCustomer: getIdCustomer,
    }
    return middleware(request, data, "Successfully Create Data Sale", 201)
  } catch (error) {
    console.error(error)
    return Response.json({ error: "Internal Servel Error", status: 500 })
  }
}
