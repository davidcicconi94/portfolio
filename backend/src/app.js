import express from "express";
import { userRouter } from "../routes/users.routes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

export const app = express();
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(userRouter);
app.use(cookieParser());
app.use(morgan("dev"));
