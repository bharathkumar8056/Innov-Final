import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // If the path is the root, redirect to /agro
  if (path === "/") {
    return NextResponse.redirect(new URL("/agro", request.url))
  }

  // Handle future routes like /textiles by not interfering with them
  // This ensures that /agro and other future routes can coexist
  if (path.startsWith("/agro") || path.startsWith("/textiles") || path.startsWith("/api")) {
    return NextResponse.next()
  }

  // For any other paths that don't match specific routes, redirect to /agro
  return NextResponse.redirect(new URL("/agro", request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}

