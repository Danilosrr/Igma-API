import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import cors from "cors";

import handleErrors from "./Middlewares/errorHandler.js";
import UsersRoute from "./Routers/users.route.js";

class Server {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    dotenv.config();
    this.port = port;
    this.app = express();
    this.useMiddlewares();
    this.useRouters();
  }

  private useMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(handleErrors);
    console.log("Middlewares");
  }

  private useRouters() {
    const { router } = new UsersRoute();
    this.app.use(router);
    console.log("Router");
  }

  public initialize() {
    this.app.listen(this.port, () => {
      console.log(`server is listening on port ${this.port}`);
    });
  }
}

export default Server;
