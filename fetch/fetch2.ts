const url = "http://localhost:3000";
const res = await fetch(url);
const body = new TextDecoder().decode(await res.arrayBuffer());
console.log(body);
