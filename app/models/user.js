import mongoose from "mongoose";
import { Schema } from "mongoose";

export const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   phone: {
      type: Number,
      // max: 10,
      required: true,
      unique: true
   },
   email: {
      type: String,
      default: null,
      unique: true
   },
   aadhar: {
      type: Number,
      required: true,
      // max: 12,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   accountNo: {
      type: Number,
      default: null
   },
   ifsc: {
      type: String,
      default: null
   },
   photo: {
      type: String,
      default: null
   },
   address: {
      type: String
   },
   // equipment:{
   //    type: Schema.Types.ObjectId,
   //    ref:"Equipment"
   // }
})

export default mongoose.model('User', userSchema)