const entrada = require('prompt-sync')({ sigint:true });

function calcularMediaAtleta(nome, notas) {
    console.log(`Atleta: ${nome}`);

    notas.forEach((nota, index) => {
        console.log(`Jurado ${index + 1}: Nota: ${nota}`);
});
        
    const melhorNota = Math.max(...notas);
    const piorNota = Math.min(...notas);

    const notasFiltradas = notas.filter(nota => nota !== melhorNota && nota !== piorNota);

    while (notasFiltradas.length < 5) {
        const restoNotas = notas.filter(nota => nota === melhorNota || nota === piorNota);
        notasFiltradas.push(restoNotas.pop());
    } 

    const soma = notasFiltradas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
    const media = soma / notasFiltradas.length;

    console.log(`Resultado final:`);
    console.log(`Atleta: ${nome}`);
    console.log(`Melhor nota: ${melhorNota}`);
    console.log(`Pior nota: ${piorNota}`);
    console.log(`Média: ${media.toFixed(2)}`);
};

    const nomeAtleta = 'Meg Pierce';
    const notasAtleta = [9.9, 7.8, 8.9, 9.8, 10, 9.8, 10];

    calcularMediaAtleta(nomeAtleta, notasAtleta);
