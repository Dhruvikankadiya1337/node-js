import mongoose from "mongoose";

const authschema = new mongoose.Schema({
    email: String,
    password: String

}, {timestamps: true}); 

export const authcollection = mongoose.model("auth", authschema);

