import  express from "express";
import homeC from "../controller/homeCon.js";

export  const router=express.Router()

router.get('/',homeC)