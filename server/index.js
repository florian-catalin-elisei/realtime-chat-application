const express = require("express");
const cors = require("cors");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const { getUser, createUser, deleteUser } = require("./users");

const PORT = process.env.PORT || 5000;
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = createUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.emit("message", {
      user: "Admin",
      text: `${user.name}, welcome to the room ${user.room} `,
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "Admin",
      text: `${user.name} has joined`,
    });

    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    socket.to(user.room).emit("message", {
      user: user.name,
      text: message.text,
    });

    callback();
  });

  socket.on("disconnect", () => {
    const user = deleteUser(socket.id);

    if (user) {
      socket.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left the room`,
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
