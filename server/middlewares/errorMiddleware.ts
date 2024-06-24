import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";

interface CustomError extends Error {
  kind?: string;
}

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`${req.originalUrl} not found`);
  res.statusCode = 404;
  next(error);
};

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  console.log("An error has occured in "+req.method+" request on the URL: "+req.url);
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  if(err instanceof TokenExpiredError){
    statusCode=401;
    message="JWT token has expired."
  }


  console.log(err);
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export {notFound,errorHandler};