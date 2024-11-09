const entrada = require ('prompt-sync')({sigint:true});

let area = parseFloat(entrada('Quantos metros quadrados da área a ser pintada possui? '));
let litrosArea = area / 3;
let quantidadeLatas = Math.ceil(litrosArea/18)
let valorTotal = quantidadeLatas * 80;

console.log(`Você precisará de ${quantidadeLatas} latas de tinta \nO total da sua compra é: R$ ${valorTotal}`);