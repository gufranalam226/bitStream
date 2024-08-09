import { app } from "./app.js";
import { connectDB } from "./database/mongoDBconnect.js";
import { APIerror } from "./utils/APIerror.js";
import dotenv from "dotenv"
import { stringify, parse } from 'flatted';



dotenv.config({
    path :"./.env"
})

const PORT = process.env.PORT || 4000;






// import axios from 'axios';


// // Replace with your actual Delhivery API key
// const API_KEY = process.env.API_KEY;

// // Route to check if a pincode is deliverable
// app.get('/check-pincode/:pincode', async (req, res) => {
//     // const pincode = req.params.pincode;

//     const url = `https://track.delhivery.com/waybill/api/bulk/json/?cl=B2CKEYTESTEXPRESS-B2C&count=3`;

//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 'Authorization': `Token ${API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log(response.data)


//         // Send JSON response
//         res.json({"Message" : "check console terminal"});

//         // Check the response structure and send appropriate response
//     } catch (error) {
//         console.log(error)
//         console.error('Error fetching pincode data:', error);
//         res.status(500).json({ error: 'Failed to check pincode deliverability' });
//     }
// });



connectDB()
.then(async()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port - ${PORT}`);
    })
}).catch((err)=>{
    throw new APIerror(202, "Something went wrong while listening server");
})