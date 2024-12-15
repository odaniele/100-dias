const entrada = require ('prompt-sync') ({sigint:true});

let multiplicando = parseInt(entrada('Qual número deseja ver a tabuada? (1 a 10) '));
let multiplicador;
let produto;

console.log(`Tabuada de ${multiplicando}:`);

for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
    produto = multiplicador * multiplicando;
    console.log(`${multiplicando} X ${multiplicador} = ${produto}`);
}
