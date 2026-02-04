import { usercollection } from '../models/userModels.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export const addUserByAdmin = (req, res) => {
    const {
        email, name, emp_id, role, joining_date, salary, department
    } = req.body;
}
// updateprofilebyuser
export const updateProfileByUser = (req, res) => {
    const { education, phone, profile_pic, address, exp } = req.body;
}
// updateprofilebyadmin
export const updateProfileByAdmin = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await usercollection.updateOne({ email }, { $set: req.body });
        const token = jwt.sign({ ...user }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        res.cookie("auth_token", token, {
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "strict",
            httpOnly: true
        })
        return res.json({ status: true, message: "profile updated successfully" });
    }
    catch (err) {
        return res.json({ status: false, message: err.message });
    }
}
// getallusers
export const getallusers = async (req, res) => {
    try {
        const users = await usercollection.find();
        res.json({ status: true, message: "User Fetch Successfully", users });
    }
    catch (err) {
        res.json({ status: false, message: "users cant get", users: [] });
    }
}
// deleteuser
export const deleteuser = async (req, res) => {
    const id = req.query.id;
    try {
        await usercollection.findByIdAndDelete(id);
        return res.json({ status: true, message: "Employee Delete Successfully" });
    } catch (err) {
        console.log(err.message);
        return res.json({ status: false, message: err.message })
    }
}
// getuserbyid
export const getuserByid = async (req, res) => {
    const id = req.query.id;
    try {
        const user = await usercollection.findById(id);
        return res.json({ status: true, message: "user fetch successfully", user });
    } catch (err) {
        return res.json({ status: false, message: err.message })
    }
}