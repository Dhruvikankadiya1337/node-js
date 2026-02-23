import mongoose from 'mongoose'

const todoSchema  = new mongoose.schema({
    
    title:{
      type: String,
      required: true
    },
     description:{
      type: String,
    },
     completed:{
      type: String,
      default:false
    },
        userId:{
      type: String,
      required: true
    },
    
},
         {timestamp:true}
)

export default mongoose.model("todo" , todoSchema)