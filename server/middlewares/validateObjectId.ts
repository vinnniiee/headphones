import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

export function vaidateObjectId(req: Request, res: Response, next: NextFunction) {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    throw new Error(`Invalid ObjectId of:  ${req.params.id}`);
  }
  next();
}

// export default vaidateObjectId;
