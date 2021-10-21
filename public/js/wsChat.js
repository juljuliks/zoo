const ws = new WebSocket('ws://localhost:3000/chat/');
const { chatForm } = document;
const messagesContainer = document.querySelector('.msger-chat');
const messageTemplate = document
  .getElementById('message-template')
  .content.querySelector('.msg');

function dispatchEvent(message) {
  const parsed = JSON.parse(message.data);

  function createMessage(author, text, date) {
    const messageElement = messageTemplate.cloneNode(true);

    const authorElement = messageElement.querySelector('.message__author');
    const textElement = messageElement.querySelector('.message__text');
    const dateElement = messageElement.querySelector('.message__date');

    authorElement.textContent = author;
    textElement.textContent = text;
    dateElement.textContent = date.slice(12);

    chatForm.text.value = '';
    messagesContainer.prepend(messageElement);
  }

  switch (parsed.type) {
    case 'ADDED_MESSAGE':
      createMessage(
        parsed.payload.author,
        parsed.payload.text,
        parsed.payload.date,
      );
      break;

    default:
      console.error('Something error');
      break;
  }
}

ws.onmessage = dispatchEvent;

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const {
    author: { value: author },
    text: { value: text },
  } = e.target;

  ws.send(
    JSON.stringify({
      type: 'NEW_MESSAGE',
      payload: { author, text, date: new Date().toLocaleString('ru-RU') },
    }),
  );
});
