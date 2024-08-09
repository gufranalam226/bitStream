import express from "express"
import { router } from "./routes/userroutes.js";
import cookieParser from "cookie-parser";


const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser)
app.use("/", router);

export {app}