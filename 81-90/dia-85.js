class Livro {

    constructor(titulo, autor, anoPublicacao) {
        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(valor) {
        this._titulo = valor;
    }

    get autor() {
        return this._autor;
    }

    set autor(valor) {
        this._autor;
    }

    get anoPublicacao() {
        return this._anoPublicacao;
    }

    set anoPublicacao(valor) {
        if (Number.isInteger(valor) && valor > 0) {
            this._anoPublicacao = valor;
        } else {
            console.log('Ano de publicação inválido.');
        }
    }

    informacoes() {
        return `Título: ${this._titulo}. Autor: ${this._autor}. Ano de Publicação: ${this._anoPublicacao}.`
    }
}

const livro = new Livro('Senhor dos Anéis', 'J.R.R Tolkien', 1954);
console.log(livro.informacoes());

livro.titulo = 'O Hobbit';
livro.anoPublicacao = 1937;
console.log(livro.informacoes());