import dotenv from "dotenv"
dotenv.config()
export const JWT = ()=> {
const JWT = process.env.JWT
console.log(JWT)
}