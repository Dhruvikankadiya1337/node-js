import express from "express";
import { changeforgetpassword, changepassword, checkloginstatus, forgetpassword, otpverify, signin, signout, signup } from "../controller/authcontroller.js";

const authRoutes = express.Router();
authRoutes.get("/checkloginstatus", checkloginstatus);
authRoutes.get("/signout", signout);

authRoutes.post("/change-password", changepassword);
authRoutes.post("/forget-password", forgetpassword);
authRoutes.post("/change-forget-password", changeforgetpassword);
authRoutes.post("/signup" , signup);
authRoutes.post("/signin", signin);
authRoutes.post("/otp-verify", otpverify);



export default authRoutes;
