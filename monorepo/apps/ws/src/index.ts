import { WebSocketServer } from "ws";
import { User } from "./User";

const wss = new WebSocketServer({ port: 3001 }, () => {
  console.log("wss is running on port :3001");
});

wss.on("connection", function connection(ws) {
  console.log("user connected");
  let user = new User(ws);
  ws.on("error", console.error);

  ws.on("close", () => {
    user?.destroy();
  });
});
