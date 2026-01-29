import mongoose from "mongoose";
import dotenv  from "dotenv";
dotenv.config();

export const connectDB = async ()=>{
        try{
         await   mongoose.connect(process.env.MONGO-URL);
        }catch(err){
            console.log("failed to connect mongodb", err);
        }
} 