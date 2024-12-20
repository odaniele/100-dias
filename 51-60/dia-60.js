const entrada = require ('prompt-sync') ({sigint:true});

let numero = parseInt(entrada('Informe um número inteiro: '));
let resultado = 1;
let expressao = '';

for (let i = numero; i >= 1; i--) {
    resultado *= i;
    expressao += i;

    if ( i > 1) {
        expressao += '.';
    }
}

console.log(`${numero}! = ${expressao} = ${resultado}`);