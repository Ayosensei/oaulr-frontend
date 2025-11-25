import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    
    },
      occupation: {
    type: String,
    required: false,
    default: "Undergraduate Student (OAU)",
  },

})

export default mongoose.models.User || mongoose.model("User", UserSchema)