const entrada = require ('prompt-sync')({ sigint: true });

let raio = parseFloat(entrada("Informe o raio do circulo:"));
const pi = 3.1415;
let area = pi * (raio * raio);
console.log("A área do circulo é igual a: ", area);