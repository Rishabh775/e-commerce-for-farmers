import express from "express"
import multer from "multer"
import path from "path"

const Storage = multer.diskStorage({
   destination: "../public/uploads/",
   filename: (req, file, cb) => {
      cb(null, file.photo + "_" + Date.now + path.extname(file.originalname))
   }
},
)

export const upload = multer({
   storage:Storage
}).single('photo')
