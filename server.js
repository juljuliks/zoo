const { createServer } = require('http');
const WebSocket = require('ws');
const app = require('./src/app');

const PORT = process.env.PORT ?? 3000;

const server = createServer(app);

const wsServer = new WebSocket.Server({ server });

const dispatchEvent = (message, socket) => {
  const parsed = JSON.parse(message);

  const { author, text } = parsed.payload;
  if (author && text) {
    switch (parsed.type) {
      case 'NEW_MESSAGE':
        wsServer.clients.forEach((client) => {
          client.send(
            JSON.stringify({
              type: 'ADDED_MESSAGE',
              payload: parsed.payload,
            }),
          );
        });
        break;

      default:
        socket.send(new Error('Что-то пошло не так...').message);
        break;
    }
  } else {
    socket.send(new Error('Введите имя и текст сообщения').message);
  }
};

wsServer.on('connection', (socket) => {
  socket.on('message', (message) => {
    dispatchEvent(message, socket);
  });
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
