import jwt from "jsonwebtoken"
import prisma from "../../lib/prisma"

export default async function middleware(request, data, msg, status) {
  try {
    const user = await request.headers.get("Authorization")
    const token = user?.replace("Bearer ", "")

    if (!token) {
      return Response.json({
        status: 400,
        error: "Unauthorized",
      })
    }
    const tokenVerify = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    const userData = await prisma.user.findUnique({
      where: { id: tokenVerify.data.id },
    })

    if (userData) {
      return Response.json({
        status: status,
        msg,
        data,
      })
    }
  } catch (error) {
    console.error("Error:", error.message)
    return Response.json({
      status: 500,
      error: error.message,
    })
  }
}
