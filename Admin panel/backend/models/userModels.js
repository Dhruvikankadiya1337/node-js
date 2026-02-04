import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    name: String,
    emp_id: String,
    phone: String,
    role: String,
    joining_date: String,
    salary: Number,
    education: String,
    exp: String,
    department: String,
    profile_pic: String,
    address: String,
}, { timestamps: true });

export const usercollection = mongoose.model("users", userSchema);
