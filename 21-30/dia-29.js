const entrada = require ('prompt-sync')({sigint:true});

let horasTrabalhadas = parseFloat(entrada('Quantas horas você trabalhou neste mês? '));
let valorHora = parseFloat(entrada('Qual o valor da sua hora de trabalho? '));

let salarioBruto = valorHora * horasTrabalhadas;
let descontoIR = 0;
let descontoSindicato = salarioBruto * 0.03;
let fgts = salarioBruto * 0.11;

if (salarioBruto <= 900) {
    descontoIR = 0;
} else if (salarioBruto <= 1500) {
    descontoIR = salarioBruto * 0.05;
} else if (salarioBruto <= 2500) {
    descontoIR = salarioBruto * 0.10;
} else {
    descontoIR = salarioBruto * 0.20;
}

let totalDescontos = descontoIR + descontoSindicato;
let salarioLiquido = salarioBruto - totalDescontos;

console.log(`Salário Bruto: R$${salarioBruto.toFixed(2)}`);
console.log(`(-) IR: R$${descontoIR.toFixed(2)}`);
console.log(`(-) Sindicato (3%): R$${descontoSindicato.toFixed(2)}`);
console.log(`FGTS (11%): R$${fgts.toFixed(2)}`);
console.log(`Total de descontos: R$${totalDescontos.toFixed(2)}`);
console.log(`Salário Líquido: R$${salarioLiquido.toFixed(2)}`);