import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.redirect(new URL('/login', 'http://localhost:3000')); // Redirect to login page

    // Clear the cookie
    response.cookies.set('token', '', {
        httpOnly: true,
        path: '/',
        maxAge: 0
    });

    return response;
}
