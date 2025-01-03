const entrada = require ('prompt-sync')({ sigint: true });

function calcularMedia(saltos) {
    const melhorSalto = Math.max(...saltos);
    const piorSalto = Math.min(...saltos);

    const saltosFiltrados = saltos.filter(salto => salto !== melhorSalto && salto !== piorSalto);

    if (saltosFiltrados.length < 3) {
        saltosFiltrados.push(...saltos.filter(salto => salto === melhorSalto || salto === piorSalto).slice(0, 3 - saltosFiltrados.length));
    }

    const soma = saltosFiltrados.reduce((total, salto) => total + salto, 0);
    return (soma / 3).toFixed(1);
}

while (true) {
    const nomeAtleta = entrada('Informe o nome do atleta (ou deixe em branco para sair): ');
    if (!nomeAtleta) break;

    const saltos = [];
    for (let i = 1; i <= 5; i++) {
        const salto = parseFloat(entrada(`Informe a distância do ${i}º salto em metros: `));
        if (!isNaN(salto)) {
            saltos.push(salto);
        } else {
            console.log('Entrada inválida. Por favor, insira um número válido.');
            i--;
        }
    }

    const melhorSalto = Math.max(...saltos);
    const piorSalto = Math.min(...saltos);
    const media = calcularMedia(saltos);

    console.log(`Atleta: ${nomeAtleta}`);
    console.log(`Primeiro salto: ${saltos[0]}m`);
    console.log(`Segundo salto: ${saltos[1]}m`);
    console.log(`Terceiro salto: ${saltos[2]}m`);
    console.log(`Quarto salto: ${saltos[3]}m`);
    console.log(`Quintoo salto: ${saltos[4]}m`);

    console.log(`Melhor salto: ${melhorSalto}m`);
    console.log(`Pior salto: ${piorSalto}m`);
    console.log(`Média dos demais saltos ${media}m`);

    console.log(`Resultado final:`);
    console.log(`${nomeAtleta}: ${media} m`);

}
