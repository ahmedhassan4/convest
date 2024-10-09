import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "./config/routes";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const path = request.nextUrl.pathname;
  const isDocumentRequest = path === "/" || path.endsWith(".html");

  // Check if the request is for a static asset or API
  const isStaticAsset =
    path.startsWith("/_next/") || path.startsWith("/static/");
  const isApiRequest = path.startsWith("/api/");

  // Bypass the middleware for static assets and API requests
  if (isStaticAsset || isApiRequest) {
    return response;
  }

  // Set no-cache headers for HTML document requests
  if (isDocumentRequest) {
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  if (path === "/") {
    return NextResponse.redirect(new URL(routes.auth.login, request.url));
  }
  return response;
}

export const config = {
  matcher: "/((?!.*\\.).*)", // Applies to all document requests
};
