// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { name, email, occupation, password } = await request.json();

    // 1. Define path to JSON file
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    // 2. Read existing data
    const fileData = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(fileData);

    // 3. Check if user already exists
    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // 4. Add new user
    const newUser = { 
      id: Date.now(), 
      name, 
      email, 
      occupation, 
      password // Note: In a real app, you MUST hash this password!
    };

    users.push(newUser);

    // 5. Write back to file
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}