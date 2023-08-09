import express from "express";
import { signup, signin, verifyToken } from "../Controllers/auth";
const authRouter = express.Router();
// const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/verify-token", verifyToken);

export { authRouter };
