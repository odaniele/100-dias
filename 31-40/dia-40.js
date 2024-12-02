const entrada = require ('prompt-sync')({sigint: true});

let num1 = parseFloat(entrada('Informe o primeiro número da operação: '));
let num2 = parseFloat(entrada('Informe o segundo número da operação: '));
let operacao = String(entrada('Qual operação deseja realizar (+, -, *, /)? '));

let resultado;
let erro = false;

if (operacao === '+') {
    resultado = num1 + num2;
} else if (operacao === '-') {
    resultado = num1 - num2;
} else if (operacao === '*') {
    resultado = num1 * num2;
} else if (operacao === '/') {
    if (num2 !== 0) {
    resultado = num1 / num2;
    } else {
    console.log('Erro: Divisão por zero');
    erro = true;
    }    
}

if(!erro) {
let sinal = (resultado > 0) ? 'positivo' : 'negativo';
let paridade = (resultado % 2 === 0) ? 'par' : 'ímpar';
let natureza = (resultado % 1 === 0) ? 'inteiro' : 'decimal';

console.log(`O resultado da operação é: ${resultado}\nEste número é ${paridade}, ${sinal} e ${natureza}.`);
}