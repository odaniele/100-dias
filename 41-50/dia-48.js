const entrada = require ('prompt-sync')({sigint:true});

do {
let populacaoA;
let taxaCrescimentoA;
let populacaoB;
let taxaCrescimentoB;
let anos = 0;

do {
    populacaoA = parseInt(entrada('Informe o tamanho da população A: '));
    if (isNaN(populacaoA) || populacaoA <= 0) {
        console.log('Por favor, insira um número válido e positivo.');
    }
} while (isNaN(populacaoA) || populacaoA <= 0);

do {
    taxaCrescimentoA = parseFloat(entrada('Informe a taxa de crescimento da população A: '));
    if (isNaN(taxaCrescimentoA) || taxaCrescimentoA <= 0) {
        console.log('Insira uma taxa de crescimento válida.');
    }
} while (isNaN(taxaCrescimentoA) || taxaCrescimentoA <= 0);

do {
    populacaoB = parseInt(entrada('Informe o tamanho da população B: '));
    if (isNaN(populacaoB) || populacaoB <= 0) {
        console.log('Por favor, insira um número válido e positivo.');
    }
} while (isNaN(populacaoB) || populacaoB <= 0);

do {
    taxaCrescimentoB = parseFloat(entrada('Informe a taxa de crescimento da população B: '));
    if (isNaN(taxaCrescimentoB) || taxaCrescimentoB <= 0) {
        console.log('Insira uma taxa de crescimento válida.');
    }
} while (isNaN(taxaCrescimentoB) || taxaCrescimentoB <= 0);

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a população do país B.`);

const repetir = entrada('Deseja repetir a operação? (n/s): ').toLowerCase();
    if (repetir !== 's') {
        break;
    }
} while (true);