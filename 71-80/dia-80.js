const entrada = require ('prompt-sync')({ sigint: true });

function caixaRegistradora() {
    while (true) {
        let totalCompra = 0;
        let produtoCount = 1;

        console.log('Loja Tabajara');

        while (true) {
            let precoProduto = parseFloat(entrada(`Produto ${produtoCount}: R$`));

            if (precoProduto === 0) {
                break;
            }

            totalCompra += precoProduto;
            produtoCount++;
        }

        console.log(`Total: R$ ${totalCompra.toFixed(2)}`);

        let dinheiroCliente = parseFloat(entrada('Dinheiro: R$'));

        let troco = dinheiroCliente - totalCompra;
        console.log(`Troco: R$ ${troco.toFixed(2)}`);

        let continuar = entrada('Deseja registrar outra compra? (sim/não) ').toLowerCase();

            if (continuar !== 'sim') {
                break;
            }

    }
}

caixaRegistradora();