import { NextFunction, Request, Response } from "express";

const handleErrors = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    console.log(error);
    return res.status(error.status).send(error.message);
  }
  console.log(error);
  return res.sendStatus(500);
};

export default handleErrors;
