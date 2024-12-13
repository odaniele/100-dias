const entrada = require ('prompt-sync') ({sigint:true});

let numeros;

for (numeros = 1; numeros <= 50; numeros++) {
    if (numeros % 2 !== 0) {
    console.log(numeros);
    }
}