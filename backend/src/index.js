import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "../database/db.js";
import cloudinary from "cloudinary";

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const { API_KEY, CLOUD_NAME, API_SECRET } = process.env;

cloudinary.v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

app.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
