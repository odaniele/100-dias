const entrada = require ('prompt-sync') ({sigint:true});

let numeroA = parseInt(entrada('Informe um número inteiro: '));
let numeroB = parseInt(entrada('Informe outro número inteiro: '));

let inicio = Math.min(numeroA, numeroB);
let fim = Math.max(numeroA, numeroB);

let soma = 0;

console.log(`Os números presentes no intervalo entre ${numeroA} e ${numeroB} são:`);

for ( let i = inicio + 1; i < fim; i++ ) {
    console.log(i);
    soma += i;
}

console.log(`A soma dos números no intervalo entre ${numeroA} e ${numeroB} é: ${soma}`);