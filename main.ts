import { serveDir } from "jsr:@std/http/file-server";

function app(req: Request) {
  const pathname = new URL(req.url).pathname;

  if(pathname.startsWith("/public")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "public"
    });
  }

  return new Response("404: Not Found", {
    status: 404
  })
}

Deno.serve({ hostname: "localhost", port: 8080 }, app);