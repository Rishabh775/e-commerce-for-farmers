import Admin from "../models/admin.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Register new user 
export const aRegister = async (req, res, next) => {
   try {
      // const salt = await bcrypt.genSaltSync(10)
      const hash = await bcrypt.hashSync(req.body.password, 10)
      const newAdmin = new Admin({
         name: req.body.name,
         phone: req.body.phone,
         email: req.body.email,
         password: hash,
         photo: req.file.filename
      })
      await newAdmin.save()
      res.status(200).send("admin has been created!")
      // return res.redirect('/login');
   } catch (error) {
      if (error.code === 11000) {
         return res.send({ status: 'error', error: 'admin already exists' })
      }
      throw error
   }
}

// Login function
const verifyAdminLogin = async (username, password) => {
   try {
      const user = await Admin.findOne({ email: username })
      if (!user) {
         return { status: "error", error: "admin not found" }
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password)
      if (isCorrectPassword) {
         const token = jwt.sign({ id: user._id, username: user.email, type: 'admin' }, process.env.JWT, { expiresIn: '2h' })
         const { password, ...otherDtl } = user._doc
         return { status: 'ok', data: token, details: { ...otherDtl } }
      }
      return { status: "error", error: "invalid id or password" }

   } catch (err) {
      console.log(err)
      return { status: "error", error: "time out" }
   }
}

// Admin login 
export const aLogin = async (req, res) => {
   const { username, password } = req.body;
   // we made a function to verify our user login
   const response = await verifyAdminLogin(username, password);
   if (response.status === 'ok') {
      // storing our JWT web token as a cookie in our browser
      res.cookie('aToken', response.data, {
         maxAge: 2 * 60 * 60 * 1000,
         httpOnly: true
      }).status(200).send(response.details)
   } else {
      res.json(response);
   }
}

export const aLogout = (req,res) => {
   res.clearCookie('aToken');
   res.redirect('/');
};