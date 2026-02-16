import jwt from "jsonwebtoken";
import {usercollection as User} from "../models/user.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers["checkRole"];
  if (!token) return res.status(401).json({ status: false, message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ status: false, message: "Invalid token" });
  }
};
