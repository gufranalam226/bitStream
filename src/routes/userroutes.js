import  Router from "express"
import { registerUser } from "../controllers/userRegister.js"

const router = Router()

router.route("/register").post(registerUser)


export {router}