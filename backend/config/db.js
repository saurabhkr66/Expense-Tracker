import mongoose from "mongoose";

const db=async()=>{
   try {
     await mongoose.connect(process.env.MONGO_BD_URI,)
  console.log("mongoose connected")
 }
    catch (error) {
        console.log('mongoose error',error)
    
   }
}
export default db;
