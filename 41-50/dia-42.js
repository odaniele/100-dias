const entrada = require ('prompt-sync')({sigint:true});

let quantidadeLitros = parseFloat(entrada('Quantos litros deseja abastecer? '));
let tipoCombustivel = String(entrada('Qual combustível? A-álcool, G-gasolina: ').toUpperCase());

let preco; 
let descontoPercentual = 0;

if (tipoCombustivel === 'A') {
    preco = 1.9;
        if (quantidadeLitros <= 20) {
            descontoPercentual = 0.03;
        } else {
            descontoPercentual = 0.05;
        }
} else if (tipoCombustivel === 'G') {
    preco = 2.5;
        if (quantidadeLitros <= 20) {
            descontoPercentual = 0.04;
        } else {
            descontoPercentual = 0.06;
        }
} else {
    console.log('Tipo de combustível inválido! Use "A" para álcool ou "G" para gasolina.');
    process.exit(1); 
}

let valor = quantidadeLitros * preco;
let desconto = valor * descontoPercentual;
let valorFinal = valor - desconto;

console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)}`);