import Admin from "../models/admin.js"

// CREATE ADMIN
// export const createAdmin = async (req,res,next) =>{
//    const newAdmin = new Admin(req.body)
//    try{
//       const saveAdmin = await newAdmin.save()
//       res.status(200).json(saveAdmin)
//    }catch(err){
//       next(err)
//    }
// }

// UPDATE ADMIN
export const updateAdmin = async (req, res, next) => {
   const content = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: hash,
      photo: req.file.filename
   }
   try {
      const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, { $set: content }, { new: true })
      res.status(200).json(updatedAdmin)
   } catch (err) {
      next(err)
   }
}

// DELETE ADMIN
export const deleteAdmin = async (req, res, next) => {
   try {
      await Admin.findByIdAndDelete(req.params.id)
      res.status(200).json("adminDeleted")
   } catch (err) {
      next(err)
   }
}
