const entrada = require ('prompt-sync')({ sigint: true });

const candidatos = {
    1: 'Jose',
    2: 'Ana',
    3: 'Pedro',
    4: 'Maria',
    5: 'Nulo',
    6: 'Branco'
};

let votos = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

function registratVoto(codigo) {
    if (codigo >= 1 && codigo <= 6) {
        votos[codigo] += 1;
    } else if (codigo !== 0) {
        console.log('Código inválido, voto ignorado.');
    }
}

function calcularResultados() {
    const totalVotos = Object.values(votos).reduce((acc, curr) => acc + curr, 0);
    const votosNulos = votos[5];
    const votosBrancos = votos[6];

    console.log('Resultados da eleição:');
    for (let [codigo, nome] of Object.entries(candidatos)) {
        if (codigo <= 4) {
            console.log(`${nome}: ${votos[codigo]} votos`);
        }
    }

    console.log(`Nulos: ${votosNulos} votos`);
    console.log(`Brancos: ${votosBrancos} votos`);

    const percentualNulos = ((votosNulos / totalVotos) * 100).toFixed(2);
    const percentualBrancos = ((votosBrancos / totalVotos) * 100).toFixed(2);

    console.log(`Percentual de votos nulos: ${percentualNulos}%`);
    console.log(`Percentual de votos Brancos: ${percentualBrancos}%`);
}

const votosInseridos = [ 1, 2, 2, 5, 3, 6, 4, 2, 3, 5, 4, 6, 5, 3, 1, 2 ];
for (let voto of votosInseridos) {
    registratVoto(voto);
}

calcularResultados();