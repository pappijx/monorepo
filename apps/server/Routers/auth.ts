import express from "express";
import { signup, signin } from "../Controllers/auth";
const authRouter = express.Router();
// const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);

export { authRouter };
