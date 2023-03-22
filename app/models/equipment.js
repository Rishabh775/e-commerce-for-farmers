import mongoose, { Schema } from "mongoose";
// import { Schema } from "mongoose";
// import User from "../models/user.js"
export const equipmentSchema = mongoose.Schema({
   // _id: mongoose.Types.ObjectId(),
   title: {
      type: String,
      required: true
   },
   type: {
      type: String
   },
   photo: {
      type: String
   },
   totalEqu: {
      type: Number,
      min: 1
   },
   date: {
      type: Date,
      default: Date.now
   },
   price: {
      type: Number,
      required: true
   },
   // bookingDtl:{
   //    type:Schema.Types.ObjectId,
   //    ref:"BookingDtl"
   // }
   ownerId:{
      type: Schema.Types.ObjectId,
      ref:"User"
   }
}, { timestamps: true })

export default mongoose.model('Equipment', equipmentSchema)