import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  try {
    // Get the pathname of the request
    const { pathname } = request.nextUrl

    // Define protected routes
    const protectedRoutes = ["/profile", "/dashboard"]

    // Check if the current route is protected
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

    if (isProtectedRoute) {
      // Get the token from the request
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-development",
      })

      // If no token, redirect to login
      if (!token) {
        const url = new URL("/login", request.url)
        url.searchParams.set("callbackUrl", pathname)
        return NextResponse.redirect(url)
      }
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
