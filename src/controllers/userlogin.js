import { User } from "../models/user.model.js";
import { APIResponse } from "../utils/APIresponse.js";
import { APIerror } from "../utils/APIerror.js";
import { asyncHandler } from "../utils/reqHandlerWraper.js";
import bcrypt from "bcryptjs"

const userlogin = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        throw new APIerror(201, "All fields are required");
    }

    const findUser = await User.findOne({email})
    if(!findUser){
        throw new APIerror(201, "User is not registered");
    }

    const passwordCheck = await bcrypt.compare(password, findUser.password)

    if(!passwordCheck){
        throw new APIerror(201, "Unauthorized access")
    }

    const loggedinUser = await User.findOne({_id : findUser._id}).select("-password -refreshToken")



    

    res.status(200)
    .json(new APIResponse(200, loggedinUser, "User logged in successfully"))
})

export {userlogin}