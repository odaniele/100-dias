const entrada = require ('prompt-sync')({ sigint: true });

let salarioInicial = parseFloat(entrada('Digite o salário inicial do funcionário: '))

let salarioAtual = salarioInicial;
let aumento = 1.5;
let anoAtual = new Date().getUTCFullYear();
let ano = 1996;

while (ano <= anoAtual) {
    salarioAtual += salarioAtual * aumento;
    aumento *= 2;
    ano++;
}

console.log(`O salário atual do funcionário é: R$ ${salarioAtual.toFixed(2)}`);