const entrada = require ('prompt-sync')({ sigint: true });

let grauCelcius = parseFloat(entrada('Qaul a temperatura em grau Celcius? '));
let conversor = (grauCelcius * 1.8) + 32;

console.log('A temperatura convertida para grau Fahrenheit é: ' + conversor + '°F');