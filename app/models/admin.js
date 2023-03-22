import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   phone: {
      type: Number,
      required: true,
      // max: 10
   },
   email: {
      type: String,
      unique:true
   },
   photo: {
      type: String
   }
})

export default mongoose.model('Admin', adminSchema)