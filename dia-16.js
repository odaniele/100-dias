const entrada = require('prompt-sync')({sigint:true});

let rendimentoLitro = 6;
let volumeLata = 18;
let volumeGalao = 3.6;
let precoLata = 80;
let precoGalao = 25;

let metrosQuadrados = parseFloat(entrada('Quantos m² a área a ser pintada possui? '));

