import { app } from "./app.js";
import { connectDB } from "./database/mongoDBconnect.js";
import { APIerror } from "./utils/APIerror.js";
import dotenv from "dotenv"


dotenv.config({
    path :"./.env"
})

const PORT = process.env.PORT || 4000;

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port - ${PORT}`);
    })
}).catch((err)=>{
    throw new APIerror(202, "Something went wrong while listening server");
})