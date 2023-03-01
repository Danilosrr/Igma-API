import { NextFunction, Request, Response } from "express";
import { stripHtml } from "string-strip-html";
import { CustomError } from "./errorHandler.js";

const validSchema = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schemaBody: object = {};
      const body: Object = req.body;

      for (const key in body) {
        if (typeof schemaBody[key] === "string") {
          schemaBody[key] = stripHtml(req.body[key]).result.trim();
        } else {
          schemaBody[key] = req.body[key];
        }
      }

      const validation = await schema.validateAsync(schemaBody, {
        abortEarly: false,
      });

      res.locals.body = validation;
    } catch (error) {
      console.log(error)
      throw new CustomError("unprocessable entity", 422);
    }

    next();
  };
};

export default validSchema;
