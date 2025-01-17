const inptPromptValue = () => {
    const inptValue = document.getElementById("chatPrompt").value;
    const prompt = JSON.stringify(inptValue);

    const headers = new Headers();
    headers.set("Content-Type", "text/html")

    fetch("/api/gemini/send", {
        headers: headers,
        method: "POST",
        body: prompt
    }).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.error(err)
    })
}
