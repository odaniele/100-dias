const entrada = require ('prompt-sync') ({sigint:true});

let numeros = [];
let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(entrada('Informe um número inteiro: '));
    numeros.push(num);

    if (num % 2 === 0) {
    quantidadePares++;
    } else {
    quantidadeImpares++;
    }
}

console.log(`Quantidade de números pares: ${quantidadePares}`);
console.log(`Quantidade de número ímpares: ${quantidadeImpares}`);