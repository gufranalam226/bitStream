import  Router from "express"
import { registerUser } from "../controllers/userRegister.js"
import {userlogin} from "../controllers/userlogin.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(userlogin)


export {router}