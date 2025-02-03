class Funcionario {

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

class Empresa {

    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        if (funcionario instanceof Funcionario) {
            this.funcionarios.push(funcionario)
        } else {
            console.log('O objeto fornecido não é um funcionário válido.');
        }
    }

    listarFuncionarios() {
        if (this.funcionarios.length > 0) {
            console.log(`Funcionários da empresa ${this.nome}:`);
            this.funcionarios.forEach(funcionario => {
                console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)
            });
        } else {
            console.log('Não há funcionários registrados.');
        }
    }
}

const empresa = new Empresa('Tech Solutions');

const funcionario1 = new Funcionario('João', 'Desenvolvedor', 5000);
const funcionario2 = new Funcionario('Tobias', 'Designer', 3000);

empresa.adicionarFuncionario(funcionario1);
empresa.adicionarFuncionario(funcionario2);
