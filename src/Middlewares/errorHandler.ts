import { NextFunction, Request, Response } from "express";

export class CustomError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message, );
    this.status = status;
  }
}

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
