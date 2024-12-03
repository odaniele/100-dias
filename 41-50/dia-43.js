const entrada = require('prompt-sync')({sigint:true});

let kgMorango = parseFloat(entrada('Quantos kg de morango deseja comprar? '));
let kgMaca = parseFloat(entrada('Quantos kg de maçã deseja comprar? '));

let precoMorango;
let precoMaca

if (kgMorango <= 5) {
    precoMorango = 2.5
} else {
    precoMorango = 2.2
} 

if (kgMaca <= 5) {
    precoMaca = 1.8
} else {
    precoMaca = 1.5
}

let kgFinal = kgMaca + kgMorango;
let valorMorango = precoMorango * kgMorango;
let valorMaca = precoMaca * kgMaca;
let valorTotal = valorMorango + valorMaca;

if (valorTotal >= 25 || kgFinal > 8) {
    valorTotal *= 0.9;
} else {
    valorTotal;
}

console.log(`O total da compra é: R$${valorTotal.toFixed(2)}`);




