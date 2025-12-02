import express from "express";
import Employee from "../models/employe.js";

const router = express.Router();
router.post("/add", async (req, res) => {
  const { name, age, role, salary, department, email } = req.body;

  if (!name || !role) {
    return res.json({ message: "Name and role are required" });
  }

  const newEmp = new Employee({
    name,
    age,
    role,
    salary,
    department,
    email
  });

  const saved = await newEmp.save();
  res.json({ message: "Employee Added", data: saved });
});


router.get("/all", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.put("/update/:id", async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updated) {
    return res.json({ message: "Employee not found" });
  }

  res.json({ message: "Employee Updated", data: updated });
});


router.delete("/delete/:id", async (req, res) => {
  const deleted = await Employee.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.json({ message: "Employee not found" });
  }

  res.json({ message: "Employee Deleted", data: deleted });
});

export default router;
