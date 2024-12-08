const entrada = require ('prompt-sync')({sigint:true})

let populacaoA = 80000;
let populacaoB = 200000;
const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015;

let anos = 0;

while ( populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
} 

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a população do país B.` );