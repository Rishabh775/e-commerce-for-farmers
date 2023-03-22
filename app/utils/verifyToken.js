import express from "express";
import jwt from "jsonwebtoken"

// Verify token 
const verifyToken = (token)=>{
   try {
       const verify = jwt.verify(token,JWT_SECRET);
       if(verify.type==='user'|| verify.type==='admin'){return true;}
       else{return false};
   } catch (error) {
       console.log(JSON.stringify(error),"error");
       return false;
   }
}

export const verifyUser = (req,res) =>{
   const {token}=req.cookies;
    if(verifyToken(token)){
      return res.send('token is valid')
      //   return res.render('home');
    }else{
      return res.send("you are not authenticated")
      //   res.redirect('/login')
    }
}

export const verifyAdmin = (req,res) =>{
   const {token}=req.cookies;
    if(verifyToken(token)){
      return res.send('token is valid')
      //   return res.render('home');
    }else{
      return res.send("you are not authenticated")
      //   res.redirect('/login')
    }
}