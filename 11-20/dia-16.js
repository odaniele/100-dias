const entrada = require('prompt-sync')({sigint: true});

const coberturaLitro = 6;
const litrosLata = 18;
const litrosGalao = 3.6;
const precoLata = 80.00;
const precoGalao = 25.00;
const folga = 1.1;

function calcularTinta(area) {
    const areaComFolga = area * folga;

    const litrosNecessarios = Math.ceil(areaComFolga / coberturaLitro);

    const latasNecessarias = Math.ceil(litrosNecessarios / litrosLata);
    const precoTotalLatas = latasNecessarias * precoLata;

    const galoesNecessarios = Math.ceil(litrosNecessarios / litrosGalao);
    const precoTotalGaloes = galoesNecessarios * precoGalao;

    let melhorPreco = Infinity;
    let melhorLatas = 0;
    let melhorGaloes = 0;

    for (let i = 0; i <= latasNecessarias; i++) {
        const litrosLataUsados = i * litrosLata; // Renomeado para evitar conflito
        const litrosRestantes = litrosNecessarios - litrosLataUsados;

        const galoesUsados = litrosRestantes > 0 ? Math.ceil(litrosRestantes / litrosGalao) : 0;
        const precoMistura = (i * precoLata) + (galoesUsados * precoGalao);

        if (precoMistura < melhorPreco) {
            melhorPreco = precoMistura;
            melhorLatas = i;
            melhorGaloes = galoesUsados;
        }  
    }

    return {
        latas: {quantidade: latasNecessarias, preco: precoTotalLatas},
        galoes: {quantidade: galoesNecessarios, preco: precoTotalGaloes},
        melhorOpcao: {latas: melhorLatas, galoes: melhorGaloes, preco: melhorPreco}
    };
}

function exibirResultados(area) {
    const resultados = calcularTinta(area);

    console.log(`Para uma área de ${area}m², você irá precisar de:\n
    - Apenas latas (18L): ${resultados.latas.quantidade} latas, total R$ ${resultados.latas.preco.toFixed(2)}\n
    - Apenas galões (3,6L): ${resultados.galoes.quantidade} galões, total R$ ${resultados.galoes.preco.toFixed(2)}\n
    - Melhor opção: ${resultados.melhorOpcao.latas} latas e ${resultados.melhorOpcao.galoes} galões, total R$ ${resultados.melhorOpcao.preco.toFixed(2)}`);
}

const area = parseFloat(entrada('Informe a área que deseja pintar em m²: '));

exibirResultados(area);
