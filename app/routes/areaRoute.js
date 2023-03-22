import express from "express"
import { createArea,updateArea,deleteArea,getAllAreas } from "../controllers/area.js"

const router = express.Router()

//CREATE
router.post('/newArea', createArea)
//UPDATE
router.post('/editArea', updateArea)
//DELETE
router.post('/removeArea', deleteArea)
//GET ALL
router.get('/findAllAreas',getAllAreas)

export default router