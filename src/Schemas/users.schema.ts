import joi from "joi";
import date from "@joi/date";
import { UserData } from "../Interfaces/users.interface.js";

const Joi = joi.extend(date);

const userSchema = joi.object<UserData>({
  name: joi.string().required(),
  cpf: joi
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$|^\d{11}$/)
    .required(),
  birthdate: Joi.date().format("DD/MM/YYYY").required(),
});

export default userSchema;
