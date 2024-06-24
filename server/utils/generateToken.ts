import { Response } from "express";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
export const generateToken = async (res: Response, userId: ObjectId) => {
  const token = jwt.sign({userId:userId.toString()}, process.env.JWT_SECRET!, {
    expiresIn: "24h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 1000 * 3600 * 24,
    secure: process.env.NODE_ENV === "production",
  });
};
