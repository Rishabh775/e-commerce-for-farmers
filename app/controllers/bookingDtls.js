import BookingDtl from "../models/bookingDtls.js"
import User from "../models/user.js"
import Equipment from "../models/equipment.js"

// CREATE BOOKING DETAILS
export const createBookingDtl = async (req, res, next) => {
   const newBookingDtl = new BookingDtl(req.body)
   try {
      const saveBookingDtl = await newBookingDtl.save()
      res.status(200).json(saveBookingDtl).then((bookingData) => {
         return Equipment.findOneAndUpdate({ _id: req.body.id }, { bookingDtl: bookingData._id }, { new: true })
      }).then((userData) => {
         res.json(userData)
      })
   } catch (err) {
      next(err)
   }
}

// UPDATE BOOKING DETAILS
export const updateBookingDtl = async (req, res, next) => {
   try {
      const updatedBookingDtl = await BookingDtl.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      res.status(200).json(updatedBookingDtl)
   } catch (err) {
      next(err)
   }
}


// GET BOOKING DETAILS
export const getBookingDtl = async (req, res, next) => {
   try {
      const bookingDtl = await BookingDtl.findById(req.params.id)
      res.status(200).json(bookingDtl)
   } catch (err) {
      next(err)
   }
}

// GET ALL BOOKING DETAILS
export const getAllBookingDtls = async (req, res, next) => {
   try {
      const bookingDtls = await BookingDtl.find()
      res.status(200).json(bookingDtls)
   } catch (err) {
      next(err)
   }
}

// GET ALL EQUIPMENT
export const getEquipment = async (req, res, next) => {
   try {
      const userEquipment = await User.findOne({ _id: req.params.id }).populate('equipment')
      res.status(200).json(userEquipment)
   }
   catch (err) {
      next(err)
   }
}

// GET ALL BOOKING REQUEST
export const getBookingRequest = async (req, res, next) => {
   try {
      const userBookingRequest = await User.findOne({ _id: req.params.id }).populate('equipment').populate('bookingDtl')
      res.status(200).json(userBookingRequest)
   }
   catch (err) {
      next(err)
   }
}
