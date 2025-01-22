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
