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

    // Find user matching email AND password
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Return success (and the user's name/role to display on frontend)
    return NextResponse.json({ 
      message: 'Login successful',
      user: { name: user.name, email: user.email, occupation: user.occupation } 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}