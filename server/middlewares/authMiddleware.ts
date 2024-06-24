import { NextFunction, Request, Response } from "express";
import asyncHandler from "./asyncHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/userModel";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

const requireAuth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    // console.log("TOKEN: ",token);
    if (!token) {
      res.status(401);
      throw new Error("Not authorized.");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const user = await User.findById(payload.userId);
    if (!user) {
      res.status(401);
      throw new Error("Invalid token.");
    }
    req.user = user;
    next();
  }
);

const requireAdminAccess = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error("Current user is not admin");
    }
  }
);

export { requireAuth, requireAdminAccess };
