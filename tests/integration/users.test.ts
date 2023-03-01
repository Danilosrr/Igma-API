import supertest from "supertest";
import { app } from "../../src/app.js";
import UsersFactory from "../factories/users.factory.js";

const agent = supertest(app);
const factory = new UsersFactory();

beforeAll(async () => {
  await factory.clearDatabase();
});

describe("/users", () => {
  const data = factory.userData();

  it("Post", async () => {
    console.log(data);
    const request = await agent.post("/users").send(data);
    expect(request.status).toEqual(201);

    const requestUnprocessable = await agent
      .post("/users")
      .send({ ...data, cpf: 0 });
    expect(requestUnprocessable.status).toEqual(422);

    const requestConflict = await agent.post("/users").send(data);
    console.log(requestConflict.status)
    expect(requestConflict.status).toEqual(500);
  });

  it("Get all", async () => {
    const page = factory.pageNumber(1, 9);

    const request = await agent.get("/users");
    expect(request.body.length).toBe(1);

    const requestPaginated = await agent.get("/users" + `?page=${page}`);
    expect(requestPaginated.body.length).toBe(0);
  });

  it("Get user", async () => {
    const request = await agent.get("/users" + `?cpf=${data.cpf}`);
    expect(request.body).toBeDefined();

    const requestNotFound = await agent.get("/users" + `?cpf=${data.cpf}` + 1);
    expect(requestNotFound.status).toBe(404);
  });
});

afterAll(async () => {
  app.close();
});
