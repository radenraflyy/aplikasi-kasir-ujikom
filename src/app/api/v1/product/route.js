import prisma from "../../../../lib/prisma"
import middleware from "../../../midlleware"

export async function GET(request) {
  const res = await prisma.product.findMany({
    orderBy: { id: "asc" },
  })
  return middleware(request, res, "Successfully Get Data Product", 200)
}

export async function POST(request) {
  const { nameProduct, price, stock } = await request.json()

  const res = await prisma.product.create({
    data: {
      nameProduct,
      price,
      stock,
    },
  })

  return middleware(request, res, "Successfully Create Data Product", 201)
}
