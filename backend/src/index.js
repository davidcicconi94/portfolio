import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "../database/db.js";

dotenv.config({ path: "./config/config.env" });

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
