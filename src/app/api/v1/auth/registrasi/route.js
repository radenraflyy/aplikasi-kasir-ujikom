import prisma from "../../../../../lib/prisma"
import { hash } from "bcrypt"
import midlleware from "../../../../midlleware"

export async function POST(request) {
  try {
    const data = await request.formData()
    const email = data.get("email")
    const name = data.get("name")
    const role = data.get("role")
    const password = data.get("password")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 })
    }

    const rolesValidation = await prisma.role.findUnique({
      where: {
        id: Number(role),
      },
      select: {
        name: true,
        id: true,
      },
    })

    console.log(rolesValidation)

    if (!rolesValidation) throw new Error("Roles not Found!")

    const response = await prisma.user.create({
      data: {
        email,
        name,
        password: await hash(password, 10),
        role: {
          connect: {
            id: Number(rolesValidation.id),
          },
        },
      },
    })

    return Response.json({
      data: response,
      message: "Successfully Registrasi User",
      status: 201,
    })
  } catch (error) {
    return Response.json({
      error: "Error registration : " + error,
      status: 500,
    })
  }
}

export async function GET(request) {
  try {
    const res = await prisma.user.findMany({
      where: {
        role: {
          name: "petugas",
        },
      },
      select:{
        id: true,
        name: true,
        email: true,
        role: {
          select: {
            name: true
          }
        }
      }
    })

    return midlleware(request, res, "Successfully Get All Data User", 200)
  } catch (error) {
    return Response.json({
      error: "Error registration : " + error,
      status: 500,
    })
  }
}
