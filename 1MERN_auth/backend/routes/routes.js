import express from 'express'
import Controller from '../controller/controller.js'

const router= express.Router()
export default router


router.get("/",Controller.getALL)
router.post("/reg",Controller.postregALL)
router.post("/log",Controller.postlogALL)
router.post("/gput",Controller.gputALL)
router.put("/put/:id",Controller.putALL)
router.delete("/del/:id",Controller.delALL)