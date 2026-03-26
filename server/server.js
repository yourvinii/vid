import express from "express";
const app = express();

import http from "http";

const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "",
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("offer", (data) => {
    socket.broadcast.emit("answer", data);
  });

  socket.on("answer", (data) => {
    socket.broadcast.emit("answer", data);
  });

  socket.on("ice-candidate", (data) => {
    socket.broadcast.emit("ice-candidate", data);
  });
});

server.listen(5000, () => {
  console.log("Server running");
});
