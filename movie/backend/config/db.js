import mongoose from "mongoose";

const connectDB = async  ()=> {
       try{
           await  mongoose.connect("mongodb://127.0.0.1:27017/moviemanagement");
        console.log("mongoDB connected succefully!");
       }
       catch(err){
            console.log("MongoDB failed!", err.message);
            
       }
};

export default connectDB();


