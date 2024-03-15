import express  from 'express'
import Controller from '../controller/controller.js'
const router = express.Router()

router.get("/",Controller.getAll)
router.post("/",Controller.postAll)
router.put("/", Controller.putAll )
router.delete("/",Controller.deleteAll)

export default router