import { Router, Request, Response } from "express";

class UsersRoute {
  public router: Router;
  public url: string;

  constructor() {
    this.router = Router();
    this.url = "/users";
    this.initialize();
  }

  private initialize() {
    this.router.post(this.url, (req: Request, res: Response) => {
      res.send("callback");
    });
    this.router.get(this.url, (req: Request, res: Response) => {
      res.send("callback");
    });
  }
}

export default UsersRoute;
