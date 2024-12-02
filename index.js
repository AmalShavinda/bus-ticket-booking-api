import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import busRoute from "./routes/busRoute.js";
import employeeRoute from "./routes/employeeRoute.js";

const app = express();

const PORT = process.env.PORT;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
  });
};

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/buses", busRoute);
app.use("/api/v1/employees", employeeRoute);

app.listen(PORT || 8800, () => {
  connect();
  console.log(`Server started on port ${PORT || "8800"}`);
});
