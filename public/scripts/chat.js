let messages = [];
const chatContainer = document.querySelector('chat-container');

function insertGeminiMessage(geminiMessageContent) {
  messages.push(geminiMessageContent);
}

function chatContentRendering() {
  let chatContent = "";

  for (const m of messages) {
      chatContent += `
        <div class="${m.isUser ? 'chat-bubble-user' : 'chat-bubble'}">
          <p>${m.message}</p>
        </div>
      `
  }

  chatContainer.innerHTML = chatContent;
}

inptPromptValue = (element) => {
  if (event.key === "Enter") {
    const prompt = JSON.stringify(element.value);

    const headers = new Headers();
    headers.set("Content-Type", "text/html");

    fetch("/api/gemini/send", {
      headers: headers,
      method: "POST",
      body: prompt,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};