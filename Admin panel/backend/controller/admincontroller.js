import { usercollection } from '../models/userModels'

export const updateProfileByAdmin = async (req, res) => {
    const { email, name, role, emp_id, joining_date, department, salary, profile_pic, phone, education, exp, address } = req.body;
    try {
        const user = await usercollection.findOne({ email });
        if (!user) {
            return res.json({ status: false, message: "user not found" });
        }
        await usercollection.updateOne({ email }, {
            $set: {
                name, role, emp_id, joining_date, department, salary, profile_pic, phone, education, exp, address
            }
        });
        res.json({ status: true, message: "updated profile successfully" });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}


export const updateProfileByUser = async (req, res) => {
    const { email, name, joining_date, profile_pic, phone, education, exp, address } = req.body;
    try {
        const user = await usercollection.findOne({ email });
        if (!user) {
            return res.json({ status: false, message: "user not found !" });
        }
        await usercollection.updateOne({ email }, {
            $set: {
                name, joining_date, profile_pic, phone, education, exp, address
            }
        });
        res.json({ status: true, message: "profile updated successfully !!" });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}