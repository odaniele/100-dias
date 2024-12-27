const entrada = require ('prompt-sync')({ sigint: true });

let alunoMaisAlto = { numero: null, altura: 0 };
let alunoMaisBaixo = { numero: null, altura: Infinity };

for (let i = 1; i <= 10; i++) {
    const numero = parseInt(entrada(`Digite o número do aluno ${i}: `), 10);
    const altura = parseFloat(entrada(`Digite a altura do aluno ${i} em cm: `));

    if (altura > alunoMaisAlto.altura) {
        alunoMaisAlto = { numero, altura };
    }

    if (altura < alunoMaisBaixo.altura) {
        alunoMaisBaixo = { numero, altura };
    }
}

console.log(`Aluno mais alto: Número ${alunoMaisAlto.numero}, Altura ${alunoMaisAlto.altura}cm.`);
console.log(`Aluno mais baixo: Número ${alunoMaisBaixo.numero}, Altura ${alunoMaisBaixo.altura}cm.`)