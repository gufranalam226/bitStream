import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";
import { Video } from "./videos.model";

const commentSchema = mongoose.Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref: User
    },
    video: {
        type : Schema.Types.ObjectId,
        ref: Video
    },
    comment : {
        type: String,
        required: true
    }
}, { timestamps : true})

export const Comment = mongoose.model("Comment", commentSchema)