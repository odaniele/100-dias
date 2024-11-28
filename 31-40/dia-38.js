const entrada = require ('prompt-sync')({sigint: true});

let numero = parseInt(entrada('Informe um número inteiro: '));

if (numero % 2 === 0) {
    console.log(`${numero} é um número par.`);
} else {
    console.log(`${numero} é um número ímpar.`);
}