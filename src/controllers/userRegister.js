import { APIResponse } from "../utils/APIresponse.js"
import {APIerror} from "../utils/APIerror.js"
import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import {asyncHandler} from "../utils/reqHandlerWraper.js"

const registerUser = asyncHandler(async (req, res) =>{
    const {fullname, email, username, gender, password, confirmPassword} = req.body



    // [fullname, email, username, password].some((field)=> field?.trim()=== "")  
    if(!email && !username){
        throw new APIerror(201, "All fields are required");
    }
    const checkUser = await User.findOne({$or : [ {email}, {username}]});
    if(checkUser){
        throw new APIerror(201, "User already exist!")
    }

    if(password != confirmPassword) {
        throw new APIerror(201, "Check your password")
    }

    const salt =await  bcrypt.genSalt(10);
    const hashPassword =await bcrypt.hash(password, salt)


    const user = await User.create({
        fullname,
        email,
        username,
        gender,
        password : hashPassword
    })

    user.save();

    return res.status(200)
    .json(
        new APIResponse(200, user, "User registered successfully")
    )

    
})


export {registerUser}