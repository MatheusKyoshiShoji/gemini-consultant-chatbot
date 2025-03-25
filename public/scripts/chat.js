const messages = [];
const chatContainer = document.querySelector('#chat-container');

function insertUserMessage(geminiMessageContent) {
  messages.push({message: geminiMessageContent, isUser: true});
}

function chatContentRendering() {
  let chatContent = '';

  for (const m of messages) {
      chatContent += `
        <div class="${m.isUser ? 'chat-bubble-user' : 'chat-bubble'}">
          <p>${m.message}</p>
        </div>
      `
  }
  chatContainer.innerHTML = chatContent;
}

function sendPrompt(element) {
  if (event.key === 'Enter') {
    insertUserMessage(element.value);
  }
}

constinptPromptValue = (element) => {
  if (event.key === "Enter") {
    const prompt = element.value;

    const headers = new Headers();
    headers.set("Content-Type", "text/html");

    fetch("/api/gemini/send", {
      headers: headers,
      method: "POST",
      body: JSON.stringify(prompt),
    })
      .then((response) => {
        insertUserMessage(prompt);
        chatContentRendering();
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        document.getElmentById('chatPrompt').value = '';
      });
  }
};

window.onload = (event) => {
  chatContentRendering();
}