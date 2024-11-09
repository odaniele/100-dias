const entrada = require ('prompt-sync')({ sigint: true });

let grauFahrenheit = parseFloat(entrada('Qual a temperatura em grau Fahrenheit? '));
let conversor = (grauFahrenheit - 32) / 1.8;

console.log('A temperatura convertida para grau Celcius é: ' + conversor.toFixed(2) + '° C');