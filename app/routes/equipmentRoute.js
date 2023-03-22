import express from "express"
import { createEquipment,updateEquipment,deleteEquipment,getEquipment,getAllEquipments } from "../controllers/equipment.js"
import { upload } from "../controllers/upload.js"

const router = express.Router()

//CREATE
router.post('/newEquipment',upload, createEquipment)
//UPDATE
router.post('/editEquipment/:id',upload, updateEquipment)
//DELETE
router.post('/removeEquipment/:id', deleteEquipment)
//GET
router.get('/findEquipment/:id',getEquipment)
//GET ALL
router.get('/findAllEquipments',getAllEquipments)

export default router