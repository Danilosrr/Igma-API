import Server from "./server.js";

const server = new Server(+process.env.PORT || 4000);

export const app = server.initialize();
