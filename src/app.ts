import Server from "./server.js";

const app = new Server(+process.env.PORT || 4000);
app.initialize();
