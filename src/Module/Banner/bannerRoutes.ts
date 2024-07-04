import express from "express";
import { bannerController } from "./bannerController";
import validateRequest from "../../Middlewares.ts/validationRequest";
import { bannerValidationSchema } from "./bannerValidation";

const router = express.Router();

router.post(
  "/create",
  validateRequest(bannerValidationSchema),
  bannerController.createBanner
);
router.get("", bannerController.getBanner);
router.patch("/update/:id", bannerController.updateBanner);
router.delete("/:id", bannerController.deleteBanner);

export const bannerRoutes = router;
