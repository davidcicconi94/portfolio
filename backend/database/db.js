import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log(`Mongo connect to ${data.connection.host} `);
    })
    .catch((error) => {
      console.log(error);
    });
};
