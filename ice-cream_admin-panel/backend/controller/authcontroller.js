import { authCollection } from "../models/authmodels.js";
import bcrypt from "bcrypt";

/* SIGNUP */
export const signup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    if (!email || !password || !confirmPassword) {
      return res.json({ status: false, message: "All fields required" });
    }

    if (password !== confirmPassword) {
      return res.json({ status: false, message: "Passwords do not match" });
    }

    const exist = await authCollection.findOne({ email });
    if (exist) {
      return res.json({ status: false, message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await authCollection.create({
      email,
      password: hashed,
    });

    res.json({ status: true, message: "Signup successful" });

  } catch (error) {
    res.json({ status: false, message: "Signup failed" });
  }
};

/* SIGNIN */
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ status: false, message: "All fields required" });
    }

    const user = await authCollection.findOne({ email });
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ status: false, message: "Incorrect password" });
    }

    res.json({ status: true, message: "Signin successful" });

  } catch (error) {
    res.json({ status: false, message: "Signin failed" });
  }
};
