import mongoose, { Schema } from "mongoose";
import { User } from "./user.model.js";

const videoSchema = mongoose.Schema({
    uploadedBy :{
        type: Schema.Types.ObjectId,
        ref : User
    },
    title : {
        type : String,
        required : true
    },
    length :{
        type : String
    },
    description: {
        type : String,
        required : true
    },
    // likes :{
    //     type : string
    // },
    // comments : {
    //     type : Schema.Types.ObjectId
    // }
}, {timestamps : true})


export const Video = mongoose.model("Videos", videoSchema)