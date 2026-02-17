// import User from "../models/user.js";
import {authcollection} from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await authcollection.findOne({ email });
    if (existingUser) return res.json({ status: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await authcollection.create({ name, email, password: hashedPassword });
    res.json({ status: true, message: "User registered", user: newUser });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authcollection.findOne({ email });
    if (!user) return res.json({ status: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ status: false, message: "Incorrect password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1d" });
    res.json({ status: true, message: "Login successful", token, user });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};
