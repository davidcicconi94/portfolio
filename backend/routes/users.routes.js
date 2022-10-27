import express, { Router } from "express";
import { getUser, login, logout } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/user", getUser);
