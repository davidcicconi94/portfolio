import express, { Router } from "express";
import {
  addProject,
  contact,
  deleteProject,
  getMyProfile,
  getUser,
  login,
  logout,
  updateUser,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/user", getUser);
userRouter.get("/aboutme", getMyProfile);

userRouter.put("/admin/update", (isAuthenticated, updateUser));
userRouter.post("/admin/project/add", isAuthenticated, addProject);
userRouter.delete("/admin/project/:id", (isAuthenticated, deleteProject));

userRouter.post("/contact", contact);
