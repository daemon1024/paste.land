import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./routes/route.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Listening on http://localhost:8000/");

await app.listen({ port: 8000 });
