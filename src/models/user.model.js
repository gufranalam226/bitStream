import mongoose from "mongoose";

const userSchema = await mongoose.Schema({
    fullname : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    username : {
        type: String,
        required: true,
        toLowweCase : true,
        unique : true
    },
    gender : {
        type: String,
        required: true,
        enum : "Male" || "Female"
    },
    password : {
        type : String,
        required : true
    },
    refreshToken: {
        type: String,
    }

}, {timestamps : true})

export const User = mongoose.model("User", userSchema)