import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the user is accessing a protected route
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        // Check for the session token cookie (adjust name based on your auth setup)
        // For now, we'll assume a cookie named 'token' or similar indicates logged in
        const token = request.cookies.get('token');

        // NOTE: This is a basic check. In a real app, you'd verify the token.
        // If no token, redirect to login
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',
};
