import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/main"]; // List of routes to protect

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl; // Get the requested URL path

  // Check if the request matches a protected route
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = req.cookies.get("token")?.value; // Get the auth token from cookies
    if (!token) {
      // If no token, redirect to the login page
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }


      return NextResponse.next();
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}
