const entrada = require ('prompt-sync')({sigint:true});

let salario = parseFloat(entrada('Informe seu atual salário :'));
let aumento = 0;
let percentual = 0;
let salarioAtual = 0; 

if (salario <= 280) {
    percentual = 0.20;
    salarioAtual = salario + (salario * percentual);
    aumento = salarioAtual - salario;
} else if (salario > 280 && salario <= 700) {
    percentual = 0.15;
    salarioAtual = salario + (salario * percentual);
    aumento = salarioAtual - salario;
} else if (salario > 700 && salario <= 1500) {
    percentual = 0.10;
    salarioAtual = salario + (salario * percentual);
    aumento = salarioAtual - salario;
} else {
    percentual = 0.05;
    salarioAtual = salario + (salario * percentual);
    aumento = salarioAtual - salario;
}

console.log(`Salário antes do reajuste: R$${salario.toFixed(2)}`);
console.log(`Percentual de aumento aplicado: ${percentual}%`);
console.log(`Valor do aumento aplicado: R$${aumento.toFixed(2)}`);
console.log(`Salário atual: R$${salarioAtual.toFixed(2)}`);