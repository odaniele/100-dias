const entrada = require ('prompt-sync')({sigint: true});

let numero = parseFloat(entrada('Informe um número: '));

if (Number.isNaN(numero)) {
    console.log('O valor digitado não é um número válido.');
} else if (numero === Math.floor(numero)) {
    console.log(`${numero} é um número inteiro.`);
} else {
    console.log(`${numero} é um número decimal.`);
};