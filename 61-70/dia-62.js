const entrada = require ('prompt-sync') ({ sigint:true });

let numPrimo = parseInt(entrada('Informe um número inteiro: '));

if (numPrimo <= 1) {
    console.log(`${numPrimo} não é um número primo.`);
} else {
    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
        if (numPrimo % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(`${numPrimo} é um número primo.`);
    } else {
        console.log(`${numPrimo} não é um número primo.`);
    }
}