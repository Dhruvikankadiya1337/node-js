import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
  emp_id: String,
  joining_date: Date,
  department: String,
  salary: Number,
  profile_pic: String,
  phone: String,
  education: String,
  exp: String,
  address: String,
}, { timestamps: true });

export const usercollection = mongoose.model("usercollection", userSchema)


