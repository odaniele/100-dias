const entrada = require('prompt-sync')({ sigint: true });

let numero = entrada("Informe um número: ");
console.log("O número informado foi: " + numero);