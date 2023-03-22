import User from "../models/user.js"

// CREATE USER
// export const createUser = async (req,res,next) =>{
//    const newUser = new User(req.body)
//    try{
//       const saveUser = await newUser.save()
//       res.status(200).json(saveUser)
//    }catch(err){
//       next(err)
//    }
// }

// UPDATE USER
export const updateUser = async (req, res, next) => {
   try {
      const content = {
         name: req.body.name,
         phone: req.body.phone,
         email: req.body.email,
         address: req.body.address,
         accountNo: req.body.accountNo,
         ifsc: req.body.ifsc,
         photo: req.file.filename
      }
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      res.status(200).json(updatedUser)
   } catch (err) {
      res.send(err)
   }
}

// DELETE USER
export const deleteUser = async (req, res, next) => {
   try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("userDeleted")
   } catch (err) {
      next(err)
   }
}

// GET USER
export const getUser = async (req, res, next) => {
   try {
      const user = await User.findById(req.params.id)
      res.status(200).json(user)
   } catch (err) {
      next(err)
   }
}

// GET ALL USERS
export const getAllUsers = async (req, res, next) => {
   try {
      const users = await User.find()
      res.status(200).json(users)
   } catch (err) {
      next(err)
   }
}
