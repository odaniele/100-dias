const entrada = require ('prompt-sync')({ sigint: true });

function iniciarSistema() {
    function coletarGabarito() {
        const gabarito = [];
        console.log('Digite o gabarito da prova (respostas de A a E)');
        for (let i = 1; i <= 10; i++) {
            let resposta;
            do {
                resposta = entrada(`Questão ${i}:`).toUpperCase();
            } while (!['A', 'B', 'C', 'D', 'E'].includes(resposta));
            gabarito.push(resposta);
        }
        return gabarito;
    }

    const gabarito = coletarGabarito();
    const resultados = [];
    let continuar = true;

    while (continuar) {
        console.log('Aluno, responda as questões da prova: ');
        const respostasAluno = [];
        for (let i = 1; i <= 10; i++) {
            let resposta;
            do {
                resposta = entrada(`Questão ${i}:`).toUpperCase();
            } while (!['A', 'B', 'C', 'D', 'E'].includes(resposta));
            respostasAluno.push(resposta);
        }

        let acertos = 0;
        for (i = 0; i < gabarito.length; i++) {
        if (respostasAluno[i] === gabarito[i]) {
            acertos++;
        }
    }

    console.log(`Você acertou ${acertos} questões.`);
    resultados.push(acertos);

    let respostaContinuar;
    do {
        respostaContinuar = entrada('Outro aluno vai utilizar o sistema?').toUpperCase();
    } while (!['S', 'N'].includes(respostaContinuar));
    continuar = respostaContinuar === 'S';
}

    if (resultados.length > 0) {
        const maiorAcerto = Math.max(...resultados);
        const menorAcerto = Math.min(...resultados);
        const totalAlunos = resultados.length;
        const mediaNotas = resultados.reduce((soma, nota) => soma + nota, 0) / totalAlunos;

        console.log('Resultados finais:');
        console.log(`Maior acerto: ${maiorAcerto}`);
        console.log(`Menor acerto: ${menorAcerto}`);
        console.log(`Total de alunos: ${totalAlunos}`);
        console.log(`Média das notas da turma: ${mediaNotas.toFixed(2)}`);
    } else {
        console.log('Nenhum aluno utilizou o sistema.');
    }

}

iniciarSistema();