const entrada = require('prompt-sync')({sigint:true});

let produto1 = parseFloat(entrada('Informe o preço do 1º produto: '));
let produto2 = parseFloat(entrada('Informe o preço do 2º produto: '));
let produto3 = parseFloat(entrada('Informe o preço do 3º produto: '));

let menorValor; 
let produtoMaisBarato;

if (produto1 < produto2 && produto1 < produto3) {
    produtoMaisBarato = '1º produto';
    menorValor = produto1; 
} else if (produto2 < produto1 && produto2 < produto3) {
    produtoMaisBarato = '2º produto';
    menorValor = produto2;
} else {
    produtoMaisBarato = '3º produto';
    menorValor = produto3;
}

console.log(`Você deveria comprar o ${produtoMaisBarato} que custa R$${menorValor}.`)