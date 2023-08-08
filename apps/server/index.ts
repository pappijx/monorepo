require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authRouter } from "./Routers/auth";
const app = express();
const port = process.env.ENV_PORT;
const cookieParser = require("cookie-parser");
mongoose.connect(process.env.ENV_MONGO_URI);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
