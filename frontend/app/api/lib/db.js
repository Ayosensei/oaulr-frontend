import mongoose from "mongoose";
import dotenv  from "dotenv";
dotenv.config()

export const connectDB = async ()=> {
    try{
    if(mongoose.connections[0].readyState) return

    await mongoose.connect(process.env.MONGO_DB)
    console.log("moongoose is live")
    }catch(err){
        console.log("there was an error", err)

    }
}

