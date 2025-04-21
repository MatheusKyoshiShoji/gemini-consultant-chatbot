const chatContainer = document.querySelector('#chat-container');

function renderMessage(message, isUser = false) {
  const formattedMessage = marked.parse(message);;

  chatContainer.innerHTML += `
      <div class="${isUser ? 'chat-bubble-user' : 'chat-bubble'}">
          <p>${formattedMessage}</p>
      </div>
  `;
}

function sendMessage() {
  const input = document.getElementById('chatPrompt');
  const message = input.value;
  socket.send(message);
  renderMessage(`${message}`, true);
  input.value = '';
}

document.getElementById('chatPrompt').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
});