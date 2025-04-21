import { sendPromptText } from "../service/geminiService.ts";

const chatSessions = new Map<WebSocket, string[]>();

export function handleSocket(socket: WebSocket) {
    chatSessions.set(socket, []);

    socket.onopen = () => {
        const history = chatSessions.get(socket) ?? [];
        history.forEach((msg) => {
            socket.send(`[Historico] ${msg}`);
        })
    }

    socket.onmessage = async (event) => {
        const clientMessage = event.data;

        chatSessions.get(socket)?.push(`Usuário: ${clientMessage}`);

        if(typeof clientMessage !== "string" || !clientMessage.trim()) {
            socket.send("Mensagem inválida");
            return;
        }

        try {
            const response = await sendPromptText(clientMessage);

            chatSessions.get(socket)?.push(`IA: ${response}`)

            socket.send(response);
        } catch (err) {
            console.error(err);
            chatSessions.get(socket)?.push(`IA: Erro ao gerar resposta de IA`)
            socket.send("Erro ao gerar resposta de IA");
        }
    }

    socket.onclose = () => {
        console.log("Websocket closed");
        chatSessions.delete(socket);
    }

    socket.onerror = (err) => {
        console.error("WebSocket error:", err);
    }
}