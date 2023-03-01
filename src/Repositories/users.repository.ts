import { prisma } from "../Config/database.js";
import { UserData } from "../Interfaces/users.interface.js";

class UsersRepository {
  public async createUser(data: UserData) {
    return await prisma.users.create({ data });
  }

  public async queryUser(cpf: string) {
    return await prisma.users.findUnique({
      where: { cpf },
      select: { id: false, name: true, cpf: true, birthdate: true },
    });
  }

  public async allUsers(page: number, resultsPerPage: number) {
    return await prisma.users.findMany({
      skip: resultsPerPage * page,
      take: resultsPerPage,
      select: { id: false, name: true, cpf: true, birthdate: true },
    });
  }
}

export default UsersRepository;
