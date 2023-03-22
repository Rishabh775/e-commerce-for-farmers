import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
// import { upload } from "./upload.js"

// Register new user 
export const register = async (req, res, next) => {
   try {
      // const salt = await bcrypt.genSaltSync(10)
      const hash = await bcrypt.hashSync(req.body.password, 10)
      const newUser = new User({
         name: req.body.name,
         phone: req.body.phone,
         email: req.body.email,
         aadhar: req.body.aadhar,
         address: req.body.address,
         password: hash,
         // accountNo: req.body.accountNo,
         // ifsc: req.body.ifsc,
         // photo: req.file.filename || null
      })
      await newUser.save()
      res.status(200).send({msg:"user has been create"})
      // return res.redirect('/login');
   } catch (error) {
      if (error.code === 11000) {
         return res.send({ status: 'error', error: 'user already exists' })
      }
      throw error
   }
}

// Login function
const verifyUserLogin = async (username, password) => {
   try {
      const user = await User.findOne({ aadhar: username })
      if (!user) {
         return { status: "error", error: "user not found" }
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password)
      if (isCorrectPassword) {
         const token = jwt.sign({ id: user._id, username: user.aadhar, type: 'user' }, process.env.JWT, { expiresIn: '2h' })
         const { password, ...otherDtl } = user._doc
         return { status: 'ok', data: token, details: { ...otherDtl } }
      }
      return { status: "error", error: "invalid id or password" }

   } catch (err) {
      console.log(err)
      return { status: "error", error: "time out" }
   }
}

// User login 
export const login = async (req, res) => {
   const { username, password } = req.body;
   // we made a function to verify our user login
   const response = await verifyUserLogin(username, password);
   if (response.status === 'ok') {
      // storing our JWT web token as a cookie in our browser
      res.cookie('uToken', response.data, {
         maxAge: 2 * 60 * 60 * 1000,
         httpOnly: true
      }).status(200).send(response.details)
      res.send(response.details)
   } else {
      res.json(response);
   }
}

// User logout
export const logout = (req,res) => {
   res.clearCookie('uToken');
   res.redirect('/');
};