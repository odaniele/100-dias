const entrada = require ('prompt-sync')({sigint:true});

let numero1 = parseInt(entrada('Informe o primeiro número inteiro: '));
let numero2 = parseInt(entrada('Informe o segundo número inteiro: '));
let numero3 = parseInt(entrada('Informe o terceiro número inteiro: '));

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`O número com maior valor é: ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O número com maior valor é: ${numero2}`);
} else {
    console.log(`O número com maior valor é ${numero3}`);
}    