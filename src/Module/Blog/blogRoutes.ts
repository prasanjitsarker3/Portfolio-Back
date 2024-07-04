import express from "express";
import { blogController } from "./blogController";

const router = express.Router();

router.post("/create", blogController.createBlog);
router.delete("/:id", blogController.deleteBlog);
router.get("", blogController.getBlog);

export const blogRoutes = router;
