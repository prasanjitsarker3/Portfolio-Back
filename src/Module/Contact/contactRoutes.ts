import express from "express";
import { contactController } from "./contactController";

const router = express.Router();

router.post("/create", contactController.createContact);
router.get("", contactController.getContact);

export const contactRoutes = router;
