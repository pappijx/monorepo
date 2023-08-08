const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

import { Request, Response } from "express";
import { userModal } from "../Models/user.model";
import { encryptStrings } from "../utils/encryption";

const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      throw { message: "All fields are required" };
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const userStored = await userModal.create({
      name: name,
      email: email,
      password: encryptedPassword,
    });
    const token = jwt.sign(
      {
        id: userStored._id,
        email: userStored.email,
        name: userStored.name,
      },
      process.env.ENV_SECRET_STRING,
      {
        expiresIn: "2h",
      }
    );
    userStored.token = token;
    userStored.password = undefined;

    res
      .status(200)
      .json({ message: "User Resgistration successful", data: userStored });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};

const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      throw { message: "All fields are required" };
    }
    console.log(email, password);

    const userFound: any = await userModal.findOne({ email });
    if (userFound === null) {
      throw { message: "Invalid User" };
    }

    const passwordCheck = await bcrypt.compare(password, userFound?.password);
    if (userFound && passwordCheck) {
      console.log(email, password);
      const token = jwt.sign(
        {
          id: userFound._id,
          email: userFound.email,
          name: userFound.name,
        },
        process.env.ENV_SECRET_STRING,
        {
          expiresIn: "2h",
        }
      );
      console.log(email, password);
      userFound.token = token;
      userFound.password = undefined;

      // set cookies
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      // send token in user cookie
      res.status(200).cookie("token", token, options).json({
        success: true,
        message: "",
        token,
      });
    }
    // match password
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { signup, signin };
