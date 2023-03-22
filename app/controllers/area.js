import Area from "../models/area.js"

// CREATE AREA
export const createArea = async (req,res,next) =>{
   const newArea = new Area(req.body)
   try{
      const saveArea = await newArea.save()
      res.status(200).json(saveArea)
   }catch(err){
      next(err)
   }
}

// UPDATE AREA
export const updateArea = async (req, res, next) => {
   try {
      const updatedArea = await Area.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      res.status(200).json(updatedAdmin)
   } catch (err) {
      next(err)
   }
}

// DELETE AREA
export const deleteArea = async (req, res, next) => {
   try {
      await Area.findByIdAndDelete(req.params.id)
      res.status(200).json("adminDeleted")
   } catch (err) {
      next(err)
   }
}

// GET ALL AREAS
export const getAllAreas = async (req, res, next) => {
   try {
      const areas = await Area.find()
      res.status(200).json(areas)
   } catch (err) {
      next(err)
   }
}
