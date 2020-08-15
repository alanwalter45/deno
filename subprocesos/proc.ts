let comando = Deno.run({ cmd: ['ls', '-al']});
await comando.status();