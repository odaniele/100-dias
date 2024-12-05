const entrada = require('prompt-sync')({sigint: true});

let nome;
let senha; 

do {
    nome = entrada('Nome de usuário: ');
    senha = entrada('Senha: ');

    if (nome === senha) {
        console.log('Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.');
    }
} while (nome === senha);

console.log('Informações cadastradas com sucesso!');