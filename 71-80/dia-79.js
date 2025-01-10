const entrada = require ('prompt-sync')({ sigint: true });

let precoPao = parseFloat(entrada('Informe o preço do pão: R$ '));

if(isNaN(precoPao) || precoPao <= 0) {
    console.log('Por favor, insira um preço válido,');
    return;
}

console.log('Panificadora Pão de Ontem - Tabela de preços');

for (let i = 1; i <= 50; i++) {
    let preco = (precoPao * i).toFixed(2);
    console.log(`${i} - R$ ${preco}`);
}
