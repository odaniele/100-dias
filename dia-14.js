const entrada = require ('prompt-sync')({sigint:true});

let valorHora = parseFloat(entrada('Quanto você ganhar por hora? '));
let horasMes = parseInt(entrada('Quantas horas você trabalha em um mês? '));
let salarioBruto = valorHora * horasMes;

const taxaIr = salarioBruto * 0.11;
const taxaInss = salarioBruto * 0.08;
const taxaSindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - (taxaIr + taxaInss + taxaSindicato);


console.log(`+ Salário Bruto : R$ ${salarioBruto.toFixed(2)}`);
console.log(`- IR (11%) : R$ ${taxaIr.toFixed(2)}`);
console.log(`- INSS (8%) : R$ ${taxaInss.toFixed(2)}`);
console.log(`- Sindicato ( 5%) : R$ ${taxaSindicato.toFixed(2)}`);
console.log(`= Salário Liquido : R$ ${salarioLiquido.toFixed(2)}`);
