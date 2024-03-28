import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
  res.send("hellow this is auth endpoint")
})

router.get("/register", (req,res)=>{
  res.send("hellow this is auth endpoint")
})


export default router