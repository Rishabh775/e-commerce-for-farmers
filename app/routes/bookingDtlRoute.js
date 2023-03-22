import express from "express"
import {createBookingDtl,updateBookingDtl,getBookingDtl,getAllBookingDtls, getBookingRequest, getEquipment} from "../controllers/bookingDtls.js"

const router = express.Router()

//CREATE
router.post('/newBookingDtl', createBookingDtl)
//UPDATE
router.post('/editBookingDtl', updateBookingDtl)
//GET 
router.get('/findBookingDtl',getBookingDtl)
//GET ALL
router.get('/findAllBookingDtls',getAllBookingDtls)

router.get('/bookingEquipment/:id',getEquipment)

router.get('/bookingRequest/:id',getBookingRequest)


export default router