import { authcollection } from "../models/authModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {sendotp} from "../services/otpServic.js"
import { otpcollection } from "../models/otpmodels.js";

// signup
export const signup = async(req,res)=>{
    const { email, password } = req.body;
    try{
        const hased = await bcrypt.hash(password,12);
        await authcollection.create({ email, password : hased});
        res.status(201).json({status:true , message:"user signup successfully"});
    }catch(err){
        res.json({status:false, message:"user signup failed"});
    }
}
// signin 
export const signin =  async (req,res)=>{
        const { email, password} = req.body
        const user = await authcollection.findOne({email})
        if(!user)
        {
            res.status(404).json({status:false , message: "user not fount"});
        }
        // password check
       const ismatch = await bcrypt.compare(password , user.password);
        if(!ismatch){
            res.json({status:false , message:"invalid password"});
        }
        // otp sent 
        const status = await sendotp(email)
        res.json(status);
}

// otp verification  
export const otpverify = async(req,res)=>{
    const {email , otp} = req.body
    try{
         const otpdata = await otpcollection.findOne({
            email ,
            otp: Number(otp)
        });
    if(!otpdata){
      return res.json({status:false, message:"otp invalid"});
    }
    // expiry check
    const currentTime = new Date(); 
    if(otpdata.expiry < currentTime)
    {
        return res.json({status:false , message:"your otp is expired"});
    }
    await otpcollection.deleteMany({email});

    const user = await authcollection.findOne({email});

    // jsonwebtoken- login 
    const token = jwt.sign({...user},process.env.SECRET_KEY,{
        expiresIn: 1000 * 60 * 60
    });
      res.cookie("auth_token", token, {
            maxAge: 1000 * 60 * 60 * 2,
            sameSite: "strict",
            httpOnly: true
        });
    res.json({ status: true, message: "otp is verify and Signin successfully"});
    }
    catch (err) {
        res.json({ status: false, message: "otp verification failed", err:err.message });
    }        

}
// signout
export const signout = (req,res)=>{
    try{
        res.clearcookie("auth_token",{
            maxAge : 1000 * 60 * 60 * 2,
             sameSite: "strict",
            httpOnly: true
        })
        res.json({status:true , message:"otp is verify and Signin successfully"})
    }catch(err){
        res.json({status:false , message: "failed signout"});
    }
}

// change password
export const changepassword = async(req,res)=>{
    const {email , oldpassword , newpassword} = req.body
   try{
     const user = await authcollection.findOne({ email });
        if(!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        // oldpassword
        const isMatch = await bcrypt.compare(oldpassword , user.password);
        if(!isMatch) {
            return res.json({ status: false, message: "old password is invalid"});
        }
        // update password
        const hashed = await bcrypt.hash(newpassword , 12);
        await authcollection.updateOne({ email }, {
            $set: {
                password: hashed
            }
        });
        return res.json({ status: true, message: "change password successfully" })
   }catch(err){
        return res.json({status:false , message:err.message});
   } 
}


//  forget password
export const  forgetpassword = async(req , res)=>{
    const {email} = req.body;
    try{
        const status = await sendotp(email);
        res.json(status);
    }catch(err){
         res.json({status : false , message:err.message});
    }
} 
// change forget password

export const changeforgetpassword = async(req, res)=>{
    const {email , password , otp} = req.body
    try{   
        const record = await otpcollection.findOne({
            email , 
            otp: Number(otp) 
        });
        if(!record){
            return res.json({status:false , message:"otp is invalid "});
        }

         const currentTime = new Date(); 
         if(record.expiry < currentTime){
                return res.json({status:false , message:"otp is expired"});
        }

        const user = await authcollection.findOne({email})
        if (!user) {
            return res.json({ status: false, message: "user not found" });
        }

         const hased = await bcrypt.hash(password , 12); 
         
    await authcollection.updateOne({email , 
        $set : {
            password :hased
        }
    })
     await otpcollection.deleteMany({ email });

    return res.json({
      status: true,
      message: "password updated successfully"
    });
    }catch(err){
         return res.json({status: false, message: err.message });
    }
}
// verify otp for create password
export const verifyotpForCreatePassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    try {
        const record = await otpcollectionn.findOne({ email, otp });
        if (!record) {
            return res.json({ status: false, message: "otp is invaild" })
        }
        const currentTime = new Date(); 
        if (record.expiryAt < currentTime) {
            return res.json({ status: false, message: "otp is expired" });
        }
        const hashed = await bcrypt.hash(newPassword, 12);
        await authcollection.updateOne({ email }, {
            $set: {
                password: hashed
            }
        })
        return res.json({ status: false, message: "password update successfully" });
    } catch (err) {
        return res.json({ status: false, message: "password not update !" });
    }
}

// login status

    export const  checkloginstatus = (req,res)=>{
        try{
            const token = res.cookie.auth_token;
        if(!token){
            return res.json({status:false , message:"signin firsr"});
        }

        const decoded = jwt.verify(token , process.env.SECRET_KEY , {expiresIn :"2h"})
        return res.json({status:true , message:"already login " , user: decoded.payload});

        }catch(err){
            return res.json({status:false , message: "login out, please login first", err});
        }
    }
