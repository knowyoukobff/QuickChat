const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 5556;
const NEW_CHAT_EVENT = "newChatEvent";

io.on("connection", (socket) => {
  
  const { roomName } = socket.handshake.query;
  socket.join(roomName);

  socket.on(NEW_CHAT_EVENT, (data) => {
    io.in(roomName).emit(NEW_CHAT_EVENT, data);
    console.log(roomName+" : " + data);
  });

  socket.on("disconnect", () => {
    socket.leave(roomName);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});