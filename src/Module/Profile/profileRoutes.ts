import express from "express";
import { profileController } from "./profileController";

const router = express.Router();

router.post("/create", profileController.createProfile);
router.get("", profileController.getProfile);
router.patch("/:id", profileController.updateProfile);
router.delete("/:id", profileController.deleteProfile);

export const profileRoutes = router;
