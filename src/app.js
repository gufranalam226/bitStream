import express from "express"
import { router } from "./routes/userroutes.js";


const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/", router);

export {app}