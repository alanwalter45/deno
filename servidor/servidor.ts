const listener = Deno.listen({ hostname: '0.0.0.0', port: 3000 })
for await (const req of listener) {
    Deno.copy(req, req);
}