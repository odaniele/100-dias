const entrada = require ('prompt-sync') ({sigint:true});

let numeros = [4, 2, 8, 9, 6];
const maiorNumero = Math.max(...numeros);

console.log(`O maior número é: ${maiorNumero}`);