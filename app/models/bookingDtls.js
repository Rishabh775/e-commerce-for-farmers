import mongoose, { Schema } from "mongoose";
import { userSchema } from "./user.js";
import { equipmentSchema } from "./equipment.js";
import { areaSchema } from "./area.js";
// import User from "../models/user.js"
// import Equipment from "../models/equipment.js"
const bookingDtlSchema = mongoose.Schema({
   customerId:{
      type:String,
   },  
   fromDate: {
      type: Date
   },
   toDate: {
      type: Date
   },
   status: {
      type: String,
      default: "Pending"
   },
   description: {
      type: String,
   },
   equId:{
      type:Schema.Types.ObjectId,
      ref:"Equipment"
   }
})

export default mongoose.model('BookingDtl', bookingDtlSchema)