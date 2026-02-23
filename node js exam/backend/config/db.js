import mongoose from 'mongoose';

const connctDB = async()=>{
    try{
          await mongoose.connect(process.env.MONGO_URL);
          console.log("mongoDB connected successfully");
    }catch(error){
        console.log("mongoDB connection failed ", error.message);
    }
}

export default connctDB;
