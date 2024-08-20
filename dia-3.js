const entrada = require ('prompt-sync')({ sigint: true });

let num1 = parseInt(entrada("Informe um número: "));
let num2 = parseInt(entrada("Informe outro número: "));
soma = (num1 + num2);
console.log("A soma dos número é igual a: ", soma);