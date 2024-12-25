const entrada = require ('prompt-sync')({ sigint: true });

let codigos = [];
let alturas = [];
let pesos = [];

while (true) {
    let codigo = parseInt(entrada('Informe seu código de usuário: '));
    if (codigo === 0) break;

    let altura = parseFloat(entrada('Informe sua altura: '));
    let peso = parseFloat(entrada('Informe seu peso: '));

    codigos.push(codigo);
    alturas.push(altura);
    pesos.push(peso);
}

if (codigos.length > 0) {
    let maisAlto = alturas.indexOf(Math.max(...alturas));
    let maisBaixo = alturas.indexOf(Math.min(...alturas));
    let maisMagro = pesos.indexOf(Math.max(...pesos));
    let maisGordo = pesos.indexOf(Math.min(...pesos));

    let mediaAltura = alturas.reduce((acc, val) => acc + val, 0) / alturas.length;
    let mediaPeso = pesos.reduce((acc, val) => acc + val, 0) / pesos.length;

    console.log('\nResultados:');
    console.log(`Cliente mais alto: Código ${codigos[maisAlto]}, Altura: ${alturas[maisAlto]}m`);
    console.log(`Cliente mais baixo: Código ${codigos[maisBaixo]}, Altura: ${alturas[maisBaixo]}m`);
    console.log(`Cliente mais gordo: Código ${codigos[maisGordo]}, Peso: ${pesos[maisGordo]}kg`);
    console.log(`Cliente mais magro: Código ${codigos[maisMagro]}, Peso: ${pesos[maisMagro]}kg`);
    console.log(`Média de altura: ${mediaAltura.toFixed(2)}m`);
    console.log(`Média de peso: ${mediaPeso.toFixed(2)}kg`);
} else {
    console.log('Nenhum dado foi registrado.');
}