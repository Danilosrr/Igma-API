import { NextFunction, Request, Response } from "express";
import { UserData } from "../Interfaces/users.interface.js";
import UsersService from "../Services/users.service.js";

class UsersController {
    private service = new UsersService();

    public getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const { cpf, page } = req.query;
      
      if (cpf) {
        const user: UserData = await this.service.queryUser(cpf as string);
        console.log("cpf query")
        res.status(200).send(user);
      }
      else {
        const allUsers: UserData[] = await this.service.allUsers(+page);
        console.log("normal query")
        res.status(200).send(allUsers);
      }
    }

    public postUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const data: UserData = req.body;

      const user: UserData  = await this.service.createUser(data);
      res.status(201).send(user);
    }
}

export default UsersController;
