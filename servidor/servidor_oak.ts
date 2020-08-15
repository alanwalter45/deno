import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
  .get('/contacts', (ctx) => {
    ctx.response.body = "Hi Deno from oak.";
  })
  .post('/contacts', async (ctx) => {
    const body = await ctx.request.body()
    ctx.response.body = body
  });

app.use(router.routes());

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });