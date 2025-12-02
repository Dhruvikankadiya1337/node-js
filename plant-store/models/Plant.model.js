import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    plantName: { type: String, required: true },
    type: { type: String, required: true },         
    price: { type: Number, required: true },
    waterFrequency: { type: String, required: true }, 
    sunlightNeed: { type: String, required: true },    
    stock: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Plant", plantSchema);
