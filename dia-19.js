const entrada = require ('prompt-sync')({sigint:true});

let valor = parseInt(entrada('Informe um número: '));

if(valor < 0 ) {
    console.log('Este número é negativo.')
} else {
    console.log('Este número é positivo.')
}