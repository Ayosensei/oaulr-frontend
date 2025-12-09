
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT;


const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("auth_token")?.value;


  const publicRoutes = [
    "/login",
    "/register",
    "/api/auth/login",
    "/api/auth/register",
    "/forgot-password",

  ];

  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route) || pathname === route
  );

  
  if (isPublicRoute) {

    if (token) {
      try {
        await jwtVerify(token, secretKey);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {
    
      }
    }
    return NextResponse.next(); 
  }
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  
  try {
    await jwtVerify(token, secretKey);
    return NextResponse.next();
  } catch (error) {
    console.log("Invalid token, logging out user");
    
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("auth_token"); 
    return response;
  }
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public|api/auth/login|api/auth/register).*)",
  ],
};