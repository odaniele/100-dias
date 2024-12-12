const entrada = require ('prompt-sync')({sigint:true});

let numeros = [];

for (let i = 1; i <= 5; i++ ) {
    const numero = parseInt(entrada('Digite um número inteiro: '));
    numeros.push(numero);
} 

let soma = numeros.reduce((total, numero) => total + numero, 0);
let media = soma / numeros.length;

console.log(`Números digitados: ${numeros}`);
console.log(`Soma dos números é: ${soma}`);
console.log(`Média dos números é: ${media}`);