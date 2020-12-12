import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./routes/route.ts";

const PORT: number = Number(Deno.env.get("PORT")) || 8000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on http://localhost:${PORT}/`);

await app.listen({ port: PORT });
