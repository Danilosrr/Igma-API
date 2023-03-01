import { prisma } from "../../src/Config/database";
import faker from "faker-br";

class UsersFactory {
  public async clearDatabase() {
    await prisma.users.deleteMany();
  }

  public async userData() {
    const date = new Date().toJSON().slice(0,10).split('-').reverse().join('/'); //DD/MM/YYYY
    return { name: faker.name.firstName(), cpf: faker.br.cpf(), birthdate: date };
  }
}

export default UsersFactory;
