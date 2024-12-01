const entrada = require ('prompt-sync')({sigint: true});

let num1 = parseFloat(entrada('Informe o primeiro número da operação: '));
let num2 = parseFloat(entrada('Informe o segundo número da operação: '));
let operacao = String(entrada('Qual operação deseja realizar? '));

let resultado = 0;
let sinal = '';
let paridade = '';
let natureza = '';


console.log(`O resultado da operação é: ${resultado}\n
    Este número é ${paridade}\n${sinal}\ne ${natureza}`);