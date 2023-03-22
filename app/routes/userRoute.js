import express from "express"
import { upload } from "../controllers/upload.js"
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js"
import { verifyUser } from "../utils/verifyToken.js"
const router = express.Router()

//UPDATE
router.post('/editUser/:id',upload, updateUser)
//DELETE
router.post('/removeUser/:id', deleteUser)
//GET
router.get('/findUser/:id',getUser)
//GET ALL
router.get('/findAllUser',getAllUsers)

export default router