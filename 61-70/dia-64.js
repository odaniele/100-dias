const entrada = require ('prompt-sync') ({ sigint: true });

let numeroTabuada = parseInt(entrada('Montar tabuada de: '));
let comecar = parseInt(entrada('Começar por: '));
let terminar = parseInt(entrada('Terminar por: '));

console.log(`Montar a tabuada de ${numeroTabuada}\nComeçar por: ${comecar}\nTerminar por: ${terminar}`);


for (multiplicador = comecar; multiplicador <= terminar; multiplicador++) {
    let produto = numeroTabuada * multiplicador;
    console.log(`${numeroTabuada} X ${multiplicador} = ${produto}`);
}
