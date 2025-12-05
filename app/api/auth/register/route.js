import {connectDB} from "../../lib/db.js";
import User from "@/app/api/models/userschema.js"
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req){
try{
    await connectDB()
    const {email, password, name, occupation = "Undergraduate Student (OAU)" } = await req.json()
    if (!email || !password || !name ){
        return NextResponse.json({error : "all feild required"}, {status: 400})
    }
    const exists = await User.findOne({email})
    if (exists){
        return NextResponse.json({error: "user already exists"}, {status: 400})
    }



    const hashed = await bcrypt.hash(password, 10)

    await User.create({
        name,
        email,
        password: hashed,
        occupation
    })
    return NextResponse.json({message:"user created succefully"}, {status: 201})

}catch(err){
    return NextResponse.json({error:"server error"}, {status: 500})
}
}
