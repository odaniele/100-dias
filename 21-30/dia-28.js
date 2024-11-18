const entrada = require ('prompt-sync')({sigint:true});

let salario = parseFloat(entrada('Informe seu atual salário :'));
let percentual = 0;

if (salario <= 280) {
    percentual = 0.20;
} else if (salario > 280 && salario <= 700) {
    percentual = 0.15;
} else if (salario > 700 && salario <= 1500) {
    percentual = 0.10;
} else {
    percentual = 0.05;
}

let aumento = salario * percentual;
let salarioAtual = salario + aumento;

console.log(`Salário antes do reajuste: R$${salario.toFixed(2)}`);
console.log(`Percentual de aumento aplicado: ${percentual * 100}%`);
console.log(`Valor do aumento aplicado: R$${aumento.toFixed(2)}`);
console.log(`Salário atual: R$${salarioAtual.toFixed(2)}`);