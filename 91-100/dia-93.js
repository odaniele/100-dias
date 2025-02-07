class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        const produtoExistente = this.produtos.find(p => p.nome === produto.nome);
        if (produtoExistente) {
            produtoExistente.quantidade += produto.quantidade;
        } else {
            this.produtos.push(produto);
        }
    }

    removerProduto(nome) {
        this.produtos = this.produtos.filter(p => p.nome !== nome);
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    }

    listarProdutos() {
        return this.produtos.map(p => `${p.nome} - R$ ${p.preco.toFixed(2)} x ${p.quantidade}`).join('\n');
    }
}

const carrinho = new Carrinho();

const produto1 = new Produto('Camiseta', 29.99, 2);
const produto2 = new Produto('Calça Jeans', 89.99, 1);
const produto3 = new Produto('Tênis', 129.87, 1);

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);

console.log('Produtos no carrinho:');
console.log(carrinho.listarProdutos());

console.log('Total da compra: R$', carrinho.calcularTotal().toFixed(2));

carrinho.removerProduto('Calça Jeans');

console.log('Produtos no carrinho após remoção:');
console.log(carrinho.listarProdutos());

console.log('Total da compra após remoção: R$', carrinho.calcularTotal().toFixed(2));