let tE: TextEncoder;
let texto: Uint8Array = new Uint8Array();
tE = new TextEncoder();
texto = tE.encode("hola");
Deno.stdout.write(texto).then((response) => {
    console.log("se escribio...");
}).catch((reason) => {
    throw reason;
});
