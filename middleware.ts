import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("auth")
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth")

  // If user is not authenticated and trying to access protected routes
  if (
    !isAuthenticated &&
    (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/create-auction"))
  ) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  // If user is authenticated and trying to access auth pages
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/create-auction/:path*", "/auth/:path*"],
}

