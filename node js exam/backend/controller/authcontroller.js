import user from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

// register
export const Register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    if (!email || !password || !confirmPassword) {
      return res.json({ status: false, message: "All fields required" });
    }

    if (password !== confirmPassword) {
      return res.json({ status: false, message: "Password don't match" });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.json({ status: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await user.create({
      email,
      password: hashedPassword,
    });

    res.json({ status: true, message: "Register successful" });

  } catch (error) {
    return res.json({ status: false, message: "Register failed" });
  }
};

// login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ status: false, message: "All fields required" });
    }

    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.json({ status: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.json({ status: false, message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRECT_KEY,
      { expiresIn: "1d" }
    );

    res.json({
      status: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
     console.log(error);
    res.json({ status: false, message: "Login failed" });
  }
};