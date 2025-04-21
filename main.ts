import { rota } from "./src/routes/routes.ts";
import { handleSocket } from "./src/ws/webSocketServer.ts";

const PORT = 8080

Deno.serve({ hostname: "localhost", port: PORT }, async (req: Request) => {
    const { pathname } =  new URL(req.url);

    if(pathname === "/ws") {
        const { response, socket } = Deno.upgradeWebSocket(req);
        handleSocket(socket);
        return response;
    }

    return rota(req);
});

console.log(`Servidor rodando em http://localhost:${PORT}`);