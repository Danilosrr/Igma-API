import Server from "./server.js";

const server = new Server(+process.env.PORT);

export const app = server.initialize();
