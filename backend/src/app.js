import express from "express";
import { userRoutes } from "../routes/users.routes.js";

export const app = express();
app.use("/api/v1", userRoutes);
