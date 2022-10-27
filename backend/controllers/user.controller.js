import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now + 30 * 60 * 1000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Welcome back!",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Good bye! Come back soon.",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = User.findOne().select("-password -email");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const user = User.findOne(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { email, name, message } = req.body;

    const userMessage = `Hi, i am ${name}. My email is ${email} and my message is: ${message}`;

    await sendMail(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message sent succesfully!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
