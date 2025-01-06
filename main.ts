import { rota } from "./src/routes/routes.ts";

const PORT = 8080

Deno.serve({ hostname: "localhost", port: PORT }, rota);

console.log(`Servidor rodando em http://localhost:${PORT}`);