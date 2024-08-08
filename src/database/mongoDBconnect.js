import mongoose from "mongoose"
import { APIerror } from "../utils/APIerror.js"
import dotenv from "dotenv"

dotenv.config({
    path : "./.env"
})
const MONGODB_URI = process.env.MONGODB_URI


const connectDB = async () =>{
    await mongoose.connect(`${MONGODB_URI}`)
    .then(()=>{
        console.log("Database connected successfully.")
    }).catch((err)=>{
        throw new APIerror(201, "something went wrong while connecting with database", err)
    })
}

export {connectDB}