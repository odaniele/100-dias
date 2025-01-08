const entrada = require ('prompt-sync')({ sigint: true });

const numero = parseInt(entrada('Digite um número de termos (N): '));

if (isNaN(numero) || numero <= 0) {
    console.log('Por favor, digite um número inteiro positivo.');
} else {
    let H = 0;

for (let i = 1; i <= numero; i++) {
    H += 1 / i;
}

    console.log(`O valor de H com ${numero} termos é: ${H.toFixed(4)}.`);
}