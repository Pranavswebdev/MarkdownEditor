const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const marked = require("marked");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Server is running");
});

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("markdownData", (data) => {
    const html = marked.parse(data);

    socket.emit("html", html);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
