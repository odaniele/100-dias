class Produto {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        if (this.produtos.some(p => p.codigo === produto.codigo)) {
            console.log('Produto com código já existente');
        } else {
            this.produtos.push(produto);
            console.log('Produto adicionado com sucesso.');
        }
    }

    removerProduto(codigo) {
        const index = this.produtos.findIndex(p => p.codigo === codigo);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log('Produto removido com sucesso.');
        } else {
            console.log('Produto não encontrado.');
        }
    }

    pesquisarProdutoPorCodigo(codigo) {
        const produto = this.produtos.find(p => p.codigo === codigo);
        if (produto) {
            console.log('Produto encontrado:', produto);
        } else {
            console.log('Produto não encontrado.');
        }
    }

    listarProdutos() {
        if (this.produtos.length === 0) {
            console.log('Nenhum produto no estoque.');
        } else {
            console.log('Produtos no estoque:');
            this.produtos.forEach(p => console.log(p));
        }
    }
}

const estoque = new Estoque();

const produto1 = new Produto(1, 'Notebook', 2500.00);
const produto2 = new Produto(2, 'Mouse', 50.00);
const produto3 = new Produto(3, 'Teclado', 100.00);

estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);
estoque.adicionarProduto(produto3);

estoque.listarProdutos();

estoque.removerProduto(2);

estoque.listarProdutos();