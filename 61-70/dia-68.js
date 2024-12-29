const entrada = require ('prompt-sync')({ sigint: true });

const cidades = [
    { codigo: 1, veiculos: 1500, acidentes: 35 },
    { codigo: 2, veiculos: 3000, acidentes: 70 },
    { codigo: 3, veiculos: 800, acidentes: 20 },
    { codigo: 4, veiculos: 1200, acidentes: 50 },
    { codigo: 5, veiculos: 4000, acidentes: 100 },
];


let maiorIndice = { cidade: null, acidentes: 0 };
let menorIndice = { cidade: null, acidentes: Infinity };
let somaVeiculos = 0;
let somaAcidentesMenos2000 = 0;
let cidadesMenos2000 = 0;


for (const cidade of cidades) {
    if (cidade.acidentes > maiorIndice.acidentes) {
        maiorIndice = { cidade: cidade.codigo, acidentes: cidade.acidentes };
    }

    if (cidade.acidentes < menorIndice.acidentes) {
        menorIndice = { cidade: cidade.codigo, acidentes: cidade.acidentes };
    }

    somaVeiculos += cidade.veiculos;

    if (cidade.veiculos < 2000) {
        somaAcidentesMenos2000 += cidade.acidentes;
        cidadesMenos2000++;
    }
}

const mediaVeiculos = somaVeiculos / cidades.length;
const mediaAcidentesMenos2000 = cidadesMenos2000 > 0
    ? somaAcidentesMenos2000 / cidadesMenos2000
    : 0;

console.log(`Maior índice de acidentes: Cidade ${maiorIndice.cidade} com ${maiorIndice.acidentes} acidentes.`);
console.log(`Menor índice de acidentes: Cidade ${menorIndice.cidade} com ${menorIndice.acidentes} acidentes.`);
console.log(`Média de veículos nas cinco cidades: ${mediaVeiculos.toFixed(2)}`);
console.log(`Média de acidentes nas cidades com menos de 2000 veículos: ${mediaAcidentesMenos2000.toFixed(2)}`);