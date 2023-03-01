import supertest from "supertest";
import { app } from "../../src/app.js";
import UsersFactory from "../factories/users.factory.js";

const agent = supertest(app);
const factory = new UsersFactory();

beforeAll(async () => {
  await factory.clearDatabase();
});

describe("/users", () => {
  it("Post", async () => {
    const data = await factory.userData();
    console.log(data);
    const request = await agent.post("/users").send(data);
    expect(request.status).toEqual(201);
  });
});

afterAll(async () => {
  app.close();
});
