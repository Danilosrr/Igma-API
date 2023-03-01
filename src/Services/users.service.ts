import { UserData } from "../Interfaces/users.interface.js";
import { CustomError } from "../Middlewares/errorHandler.js";
import UsersRepository from "../Repositories/users.repository.js";

class UsersService {
  private repository = new UsersRepository();

  public createUser = async (data: UserData) => {
    const cpf = this.verifyCpf(data.cpf);

    return await this.repository.createUser({ ...data, cpf });
  };

  public queryUser = async (cpf: string) => {
    cpf = cpf.replace(/\D/g, "");

    const query = await this.repository.queryUser(cpf);
    if (!!query) return query;
    else throw new CustomError("cpf not found", 404);
  };

  public allUsers = async (page?: number) => {
    if (isNaN(page)) return await this.repository.allUsers(0, 10);
    else return await this.repository.allUsers(page, 10);
  };

  private verifyCpf = (cpf: string) => {
    cpf = cpf.replace(/\D/g, "");

    this.verifyDigit(cpf, 1);
    this.verifyDigit(cpf, 2);

    return cpf;
  };

  private verifyDigit = (cpf: string, digit: 1 | 2) => {
    const limit = digit == 1 ? 9 : 10;
    const multiplier = digit == 1 ? 10 : 11;

    if (cpf.length != 11) throw new CustomError("invalid cpf format", 422);

    let sum = 0;
    for (let i = 0; i < limit; i++) {
      const digit = +cpf[i];
      sum += digit * (multiplier - i);
    }

    const division1 = sum / 11;
    const rest = Math.ceil((division1 % 1) * 10);
    const verifier = rest < 2 ? 0 : 11 - rest;
    if (+cpf[limit] != verifier) {
      throw new CustomError("invalid cpf", 422);
    }
  };
}

export default UsersService;
