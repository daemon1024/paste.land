import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const route = new Router();

// Hello World!
route.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
}).get("/:id", (ctx) => {
  ctx.response.body = "Content for " + ctx.params.id;
});

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(route.routes());
app.use(route.allowedMethods());

console.log("Listening on http://localhost:8000/");

await app.listen({ port: 8000 });
