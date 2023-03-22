import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import { aLogin, aLogout, aRegister } from "../controllers/adminAuth.js";
import { upload } from "../controllers/upload.js";
const router = express.Router()

router.post('/register',upload, register)
router.post('/login', login)
router.post('/admin/register',upload, aRegister)
router.post('/admin/login', aLogin)

router.get('/logout',logout)
router.get('/admin/logout',aLogout)

export default router