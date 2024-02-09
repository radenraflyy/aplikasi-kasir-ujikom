import prisma from "../../../../../lib/prisma"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const JWT_SECRET = process.env.JWT_ACCESS_SECRET
export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email) {
      return Response.json({
        status: 400,
        error: "Email is required",
      })
    }

    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        password: true,
      },
    })

    if (!findUser) {
      return Response.json({
        status: 404,
        error: "User not found",
      })
    }

    const token = jwt.sign(
      {
        data: findUser,
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    )

    const matchPassword = await bcrypt.compare(password, findUser.password)
    const { password: userPassword, ...userWithoutPassword } = findUser

    if (matchPassword) {
      return Response.json({
        status: 200,
        data: { token, data: userWithoutPassword },
      })
    } else {
      return Response.json({
        status: 400,
        error: "Email or Password Wrong",
      })
    }
  } catch (error) {
    console.error(error)
    return Response.json({
      status: 500,
      error: "Internal Server Error" + error,
    })
  }
}
