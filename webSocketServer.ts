import { sendPromptText } from "./src/service/geminiService.ts";

export function handleSocket(socket: WebSocket) {
    socket.onopen = () => {
        console.log("Open conection!");
    }

    socket.onmessage = async (event) => {
        console.log("Mensagem vinda do cliente:", event.data);

        try {
            const response = await sendPromptText(event.data);
            socket.send(response);
        } catch (err) {
            console.error(err);
            socket.send("Erro ao gerar resposta de IA");
        }
    }

    socket.onerror = (err) => {
        console.error("WebSocket error:", err);
    }

    socket.onclose = () => {
        console.log("Websocket closed");
    }
}