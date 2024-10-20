import express from "express";
import { newRouter } from "./routes/index.js";
import cors from "cors";
import sequelize from "./config/dbConnection.js";
const PORT = 8000;
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

class Server {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  listen() {
    this.app.use("/", newRouter.router);
    this.app.listen(this.port, (err) => {
      if (err) {
        console.log("Error in creating server");
        return;
      }
      console.log("Server started on PORT " + this.port);
    });
  }

  authenticate() {
    async function auth() {
      try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    }
    auth();
  }
}

const server = new Server(app, PORT);
server.listen();
server.authenticate();
