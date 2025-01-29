class Aluno {

    constructor(nome) {
        this.nome = nome;
        this.notas = [];
        this.media = 0.0;
    }

    adicionarNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length > 0) {
            const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
            this.media = somaNotas / this.notas.length;
        } else {
            this.media = 0.0;
        }
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Notas do bimestre: ${this.notas}`);
        console.log(`Média do aluno: ${this.media.toFixed(2)}`);
    }
}

const aluno1 = new Aluno('Tobias');
aluno1.adicionarNota(9.5);
aluno1.adicionarNota(9.8);
aluno1.adicionarNota(9.9);
aluno1.adicionarNota(10);
aluno1.calcularMedia();
aluno1.exibirDados();