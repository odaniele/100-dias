const entrada = require ('prompt-sync')({ sigint: true });

let quadrado = parseFloat(entrada("Informe L do quadrado:" ));
let calculo = quadrado * quadrado;
let dobro = calculo * 2;
console.log("O dobro da área do quadrado é igual a: ", dobro);