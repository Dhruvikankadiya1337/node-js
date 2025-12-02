import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
  salary: Number,
  department: String,
  email: String
});

export default mongoose.model("employe", employeSchema);
