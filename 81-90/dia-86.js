class Funcionario {

    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        this.salario += (this.salario * percentual) / 100;
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salário Atual: R$ ${this.salario.toFixed(2)}`);
    }
}

const funcionario1 = new Funcionario('Meg Vaqueira', 5700, 'Desenvolvedora');
funcionario1.exibirDados();

funcionario1.aumentarSalario(30);
funcionario1.exibirDados();