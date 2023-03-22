import mongoose from "mongoose";

export const areaSchema = mongoose.Schema({
   area: {
      type: String,
      required: true
   },
   pinCode: {
      type: Number
   }
})

export default mongoose.model('Area', areaSchema)