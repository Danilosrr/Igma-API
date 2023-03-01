import { Router } from "express";
import UsersController from "../Controllers/users.controller.js";
import validSchema from "../Middlewares/validateSchema.js";
import userSchema from "../Schemas/users.schema.js";

class UsersRoute {
  public router: Router;
  public url: string;
  private controller = new UsersController();

  constructor() {
    this.router = Router();
    this.url = "/users";
    this.initialize();
  }

  private initialize() {
    this.router.post(this.url, validSchema(userSchema), this.controller.postUser);
    this.router.get(this.url, this.controller.getUser);
  }
}

export default UsersRoute;
