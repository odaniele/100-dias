const entrada = require ('prompt-sync')({ sigint: true });

let soma = 0;
let serie = 'S =';
const n = 5;

for (let i = 1; i <= n; i++) {
    let numerador = i;
    let denominador = 2 * i - 1;

    soma += numerador / denominador;

    serie += `${numerador} / ${denominador}`;
    if (i < n) {
        serie += '+';
    }
}

console.log(serie);
console.log(`Soma da série: ${soma.toFixed(2)}`);
