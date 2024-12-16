const entrada = require ('prompt-sync') ({sigint:true});

let base = parseInt(entrada('Digite um número que será a base: '));
let expoente = parseInt(entrada('Digite um número que será o expoente: '));

let resultado = 1; 

for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

console.log(`O resultado da potenciação de ${base} elevado a ${expoente} é: ${resultado}`);