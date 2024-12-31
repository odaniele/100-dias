const entrada = require ('prompt-sync')({ sigint: true });

const menu = {
    100: { item: 'Cachorro Quente', preco: 1.20 },
    101: { item: 'Bauru Simples', preco: 1.30 },
    102: { item: 'Bauru com ovo', preco: 1.50 },
    103: { item: 'Hambúrguer', preco: 1.20 },
    104: { item: 'Cheeseburguer', preco: 1.30 },
    105: { item: 'Refrigerante', preco: 1.00 }
};

let totalGeral = 0;
let continuar = true;

console.log('Bem-vindo à lanchonete! Digite o código e a quantidade do item desejado: ');

while (continuar) {
    const codigo = parseInt(entrada('Informe o código do item ou 0 para encerrar: '));

        if (codigo === 0) {
            continuar = false;
            break;
        }

        if (menu[codigo]) {
            const quantidade = parseInt(entrada(`Quantos ${menu[codigo].item} você deseja?`), 10);
            if (isNaN(quantidade) || quantidade <= 0) {
                console.log('Quantidade inválida. Tente novamente. ');
                continuar = true;
            }

            const valorItem = menu[codigo].preco * quantidade;
            totalGeral += valorItem;

            console.log(`${menu[codigo].item}: ${quantidade} X R$ ${menu[codigo].preco.toFixed(2)} = R$ ${valorItem.toFixed(2)}`);

        } else {
            console.log('Código inválido. Tente novamente.');
        }
}

console.log(`Total geral do pedido: R$ ${totalGeral.toFixed(2)}`);
console.log('Obrigado pelo seu pedido!');
