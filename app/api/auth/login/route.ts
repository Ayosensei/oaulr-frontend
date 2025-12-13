// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const fileData = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(fileData);

    interface User {
      name: string;
      email: string;
      occupation: string;
      password?: string;
    }
    // Find user matching email AND password
    const user = users.find((u: User) => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Return success (and the user's name/role to display on frontend)
    const response = NextResponse.json({
      message: 'Login successful',
      user: { name: user.name, email: user.email, occupation: user.occupation }
    }, { status: 200 });

    // Set a simple cookie
    response.cookies.set('token', 'logged-in', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return response;

  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}