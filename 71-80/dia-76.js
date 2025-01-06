const entrada = require ('prompt-sync')({ sigint:true });

let numero = parseInt(entrada('Informe um número inteiro: '));

numero = numero.toString();

let numeroInvertido = numero.split('').reverse().join('')

console.log(numeroInvertido);