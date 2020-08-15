const filename = "server.js";
const file = await Deno.open(filename);
await Deno.copy(file,Deno.stdout);
file.close();