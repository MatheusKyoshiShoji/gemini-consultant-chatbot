import { route, type Route } from "jsr:@std/http/unstable-route";
import { serveDir } from "jsr:@std/http/file-server";
import { getPromptTest, postPrompt } from "../controller/chatController.ts";

const routes: Route[] = [
    {
        pattern: new URLPattern({ pathname: '/public/*' }),
        handler: (req: Request) => serveDir(req)
    },
    {
        method: ["GET"],
        pattern: new URLPattern({pathname: "/api/gemini"}),
        handler: getPromptTest
    },
    {
        method: ["POST"],
        pattern: new URLPattern({pathname: "/api/gemini/send"}),
        handler: postPrompt
    }
];

function defaultHandler(_req: Request) {
    return new Response("Não achei", { status: 404});
}

const rota = route(routes, defaultHandler);

export {rota};