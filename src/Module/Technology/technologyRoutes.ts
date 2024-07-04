import express from "express";
import { techController } from "./techController";

const router = express.Router();
router.post("/create", techController.createTech);
router.get("", techController.getTech);
router.patch("/update/:id", techController.updateTech);
router.delete("/:id", techController.deleteTech);

export const technologyRoutes = router;
