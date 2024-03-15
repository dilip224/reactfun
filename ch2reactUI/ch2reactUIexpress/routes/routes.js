import express from "express";
import RoutesController from "../controller/controller.js";

const router = express.Router();

router.get("/get", RoutesController.getAlldata);
router.post("/post", RoutesController.postAlldata);

export default router;
