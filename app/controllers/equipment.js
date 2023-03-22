import Equipment from "../models/equipment.js"
import User from "../models/user.js"
import mongoose from "mongoose"
// CREATE EQUIPMENT
export const createEquipment = async (req, res, next) => {
   const content = {
      title: req.body.title,
      type: req.body.type,
      // photo:req.file.filename,
      totalEqu: req.body.totalEqu,
      price: req.body.price
   }
   const newEquipment = new Equipment(content)
   try {
      const saveEquipment = await newEquipment.save((err)=>{
         if(err) return handleError
         res.status(200).json(saveEquipment)
      })
      
      // .then((EquipmentData) => {
         // return User.findOneAndUpdate({ _id: req.body.id }, { equipment: EquipmentData._id }, { new: true })
      // }).then((userData) => {
      //    res.json(userData)
      // })
   }

   catch (err) {
      next(err)
   }
}

// UPDATE EQUIPMENT
export const updateEquipment = async (req, res, next) => {
   try {
      const content = {
         // ownerId:req.body.ownerId,
         title: req.body.title,
         type: req.body.type,
         photo: req.file.filename,
         totalEqu: req.body.totalEqu,
         price: req.body.price
      }
      const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, { $set: content }, { new: true })
      res.status(200).json(updatedEquipment)
   } catch (err) {
      next(err)
   }
}

// DELETE EQUIPMENT
export const deleteEquipment = async (req, res, next) => {
   try {
      await Equipment.findByIdAndDelete(req.params.id)
      res.status(200).json("equipmentDeleted")
   } catch (err) {
      next(err)
   }
}

// GET EQUIPMENT
export const getEquipment = async (req, res, next) => {
   try {
      const equipment = await Equipment.findById(req.params.id)
      res.status(200).json(equipment)
   } catch (err) {
      next(err)
   }
}

// GET ALL EQUIPMENT
export const getAllEquipments = async (req, res, next) => {
   try {
      const equipments = await Equipment.find()
      res.status(200).json(equipments)
   } catch (err) {
      next(err)
   }
}
