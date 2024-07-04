import { Router } from "express";
import { userRoutes } from "../Module/User/userRoute";
import { bannerRoutes } from "../Module/Banner/bannerRoutes";
import { technologyRoutes } from "../Module/Technology/technologyRoutes";
import { projectRoutes } from "../Module/Project/porjectRoutes";
import { profileRoutes } from "../Module/Profile/profileRoutes";
import { contactRoutes } from "../Module/Contact/contactRoutes";
import { blogRoutes } from "../Module/Blog/blogRoutes";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/banner",
    route: bannerRoutes,
  },
  {
    path: "/tech",
    route: technologyRoutes,
  },
  {
    path: "/project",
    route: projectRoutes,
  },
  {
    path: "/profile",
    route: profileRoutes,
  },
  {
    path: "/contact",
    route: contactRoutes,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
