const entrada = require ('prompt-sync')({sigint:true});

let num1 = parseInt(entrada('Informe o primeiro número inteiro: '));
let num2 = parseInt(entrada('Informe o segundo número inteiro: '));
let num3 = parseInt(entrada('Informe o terceiro número inteiro: '));

let maior = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);   