import express from "express";
import { checkloginstatus, otpverify, signin, signout, signup } from "../controller/authcontroller.js";

const authRoutes = express.Router();

authRoutes.post("/singup" , signup)
authRoutes.post("/signin", signin)
authRoutes.get("/signout", signout)
authRoutes.post("/otpverify", otpverify)
authRoutes.get("/checkloginstatus", checkloginstatus)

export default authRoutes;
