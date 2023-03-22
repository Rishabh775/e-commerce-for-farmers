import express from "express"
import { updateAdmin, deleteAdmin } from "../controllers/admin.js"
import { upload } from "../controllers/upload.js"

const router = express.Router()

// CREATE
// router.post('/newAdmin',createAdmin)
// UPDATE
router.post('/editAdmin',upload, updateAdmin)
// DELETE
router.post('/removeAdmin', deleteAdmin)

export default router