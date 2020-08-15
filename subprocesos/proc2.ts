let comando = Deno.run({ cmd: ['tree', '.'], stdout: 'piped' });
await Deno.stdout.write(await comando.output())