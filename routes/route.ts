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

router.get("/web", async (ctx) => {
  try {
    await ctx.send(
      {
        root: `./static`,
        path: "index.html",
      },
    );
  } catch (error) {
    console.log(error);
  }
});

// Store pastes in a generated id
router.post("/", async (ctx) => {
  if (!ctx.request.hasBody) {
    ctx.throw(Status.BadRequest, "Bad Request");
  }
  const body = ctx.request.body();
  let paste: Paste | undefined;
  if (body.type === "json") {
    const data = await body.value;
    console.log(data);
    paste = data as Paste;
  } else if (body.type === "text") {
    const data = await body.value;
    paste = {
      content: data,
    };
  } else if (body.type === "form") {
    for (const [key, value] of await body.value) {
      if (key === "Content") {
        paste = {
          content: value,
        };
      }
    }
  }
  if (paste) {
    const id = getId();
    pastes.set(String(id), paste);
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
