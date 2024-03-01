import { NextResponse } from "next/server"

export function middleware(request) {
  const token = request.cookies.get("token")
  const url = request.nextUrl.pathname

  if (
    !token?.value &&
    request.nextUrl.pathname.startsWith(url !== "/auth/login" ? url : null)
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
  
  if (request.nextUrl.pathname.startsWith("/auth/login") && token?.value) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (token?.value) {
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    "/collection/list",
    "/collection/stock",
    "/dashboard",
    "/customer",
    "/auth/login",
  ],
}
