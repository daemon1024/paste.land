import { Router, Status } from "https://deno.land/x/oak/mod.ts";
import { randomId } from "../helpers/random.ts";

const router = new Router();

interface Paste {
  content: string;
}

const pastes = new Map<string, Paste>();

function getId() {
  const id = randomId();
  if (pastes.has(id)) getId();
  else return id;
}

// Hello World!
router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

// Store pastes in a generated id
router.post("/", async (ctx) => {
  if (!ctx.request.hasBody) {
    ctx.throw(Status.BadRequest, "Bad Request");
  }
  const body = ctx.request.body();
  const paste = await body.value;
  console.log(paste);
  if (paste) {
    const id = getId();
    pastes.set(String(id), {
      content: paste as string,
    });
    ctx.response.status = Status.OK;
    ctx.response.body = `Stored succesfully at http://localhost:8000/${id} `;
    return;
  }
  ctx.throw(Status.BadRequest, "Bad Request");
});

// Display stored pastes for a particular id
router.get<{ id: string }>("/:id", (ctx) => {
  ctx.response.body = ctx.params && pastes.has(ctx.params.id)
    ? pastes.get(ctx.params.id)?.content
    : "No paste for this id";
});

// Added the delete method
router.delete<{ id: string }>("/:id", (ctx) => {
  const key = ctx.params.id;
  pastes.delete(key);
  ctx.response.body = "Deleted the paste succesfully";
});

export { router };
