class Produto {

    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.precoOriginal = preco;
        this.categoria = categoria;
    }

    aplicarDesconto(porcentagem) {
        const desconto = this.preco * porcentagem / 100;
        this.preco -= desconto;
    }

    exibirProduto() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Categoria: ${this.categoria}`);
        console.log(`Preço original: R$ ${this.precoOriginal.toFixed(2)}`);
        console.log(`Preço com desconto: R$ ${this.preco.toFixed(2)}`);
    }
}

const produto = new Produto('Teclado', 130, 'Tecnologia');
produto.aplicarDesconto(40);
produto.exibirProduto();
