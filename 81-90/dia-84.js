class Pessoa {

    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade}anos e meu e-mail é ${this.email}.`)
    }
}

const dados = new Pessoa('Tobias', 8, 'tobito@gmail.com');
dados.apresentar();