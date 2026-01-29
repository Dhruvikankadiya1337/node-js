import nodemailer from "nodemailer";
import dotenv from "dotenv"
import { otpcollection } from "../models/otpmodels.js";

dotenv.config();

const transport = nodemailer.createTransport({
    services:"gmail",
    auth:{
        email:process.env.EMAIL,
        password:process.env.PASSWORD
    }
});

export const sendotp = async (email )=>{
    const otp = Math.floor(1000000 + Math.random() * 90000);
    const expiry = new Date(Date.now() + 1000 * 60 * 2);
    try{
        await otpcollection.create({email,otp,expiry});
    await transport.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "otp verification",
        text:`your otp is ${otp}, This code valid for 2 minutes`
    })
        res.json({status:true, message: "otp sent successfully"})
    }catch(err){
        res.json({status:false , message:"otp not found"});
    }
}
