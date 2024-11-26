const entrada = require ('prompt-sync')({sigint:true});

let numero = parseInt(entrada('Informe um número inteiro menor que 1000: '));

if (numero >= 1000 || numero < 0) {
    console.log('Número inválido. O número deve ser um inteiro menor que 1000.');
}

let centenas = Math.floor(numero / 100);
let dezenas = Math.floor((numero % 100) / 10);
let unidades = numero % 10;

let resultado = '';

if (centenas > 0) {
    resultado += centenas + (centenas === 1 ? " centena" : " centenas");
}

if (dezenas > 0) {
    if (resultado !== "") {
        resultado += (unidades > 0) ? ", " : " e ";
    }
    resultado += dezenas + (dezenas === 1 ? " dezena" : " dezenas");
}

if (unidades > 0) {
    if (resultado !== "") {
        resultado += " e ";
    }
    resultado += unidades + (unidades === 1 ? " unidade" : " unidades");
}

console.log(`${numero} = ${resultado}`);
