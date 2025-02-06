class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    validarEmail() {
        return this.email.includes('@') && this.email.includes('.com');
    }
}

class Cadastro {
    constructor() {
        this.usuarios = [];
    }

    cadastrarUsuario(usuario) {
        if (usuario.validarEmail()) {
            this.usuarios.push(usuario);
            console.log(`Usuário ${usuario.nome} cadastrado com sucesso!`);
        } else {
            console.log(`Erro: O email ${usuario.email} não é válido.`);
        }
    }
}

const usuario1 = new Usuario('Tobias', 'tobias.tobi@gmail.com', 'senha:1213');
const usuario2 = new Usuario ('Meg', 'meg.maria@hotmail.com', 'senha:1314');
const usuario3 = new Usuario('José Binho', 'josebinho', 'senha432');

const cadastro = new Cadastro();
cadastro.cadastrarUsuario(usuario1);
cadastro.cadastrarUsuario(usuario2);
cadastro.cadastrarUsuario(usuario3);

console.log(cadastro.usuarios);


