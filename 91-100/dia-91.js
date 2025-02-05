class Livro {

    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    obterInformacoes() {
        return `${this.titulo} - ${this.autor}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    removerLivro(titulo) {
        this.livros = this.livros.filter(livro => livro.titulo !== titulo);
    }

    listarLivros() {
        if (this.livros.length === 0) {
            console.log('Não há livros na biblioteca.');
        } else {
            this.livros.forEach(livro => {
                console.log(livro.obterInformacoes());
            });
        }
    }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R Tolkien', 1954);
const livro2 = new Livro('1984', 'George Orwell', 1949);

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

biblioteca.listarLivros();

biblioteca.removerLivro('1984');

console.log('Livros na biblioteca após remoção:');
biblioteca.listarLivros();
