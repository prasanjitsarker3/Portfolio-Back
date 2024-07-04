import express from "express";
import { projectController } from "./projectController";

const router = express.Router();

router.post("/create", projectController.createProject);
router.get("", projectController.allProject);
router.get("/:id", projectController.singleProject);
router.patch("/update/:id", projectController.updatedProject);
router.delete("/:id", projectController.deleteProject);

export const projectRoutes = router;
