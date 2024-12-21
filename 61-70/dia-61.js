const entrada = require ('prompt-sync')({sigint:true});

let temperaturas = [32, 28.7, 34, 22, 19, 35.6];

let menorTemperatura = Math.min(...temperaturas);
let maiorTemperatura = Math.max(...temperaturas);
let media = temperaturas.reduce((soma, temp) => soma + temp, 0) / temperaturas.length;

console.log(`A menor temperatura é: ${menorTemperatura}°C`);
console.log(`A maior temperatura é: ${maiorTemperatura}°C`);
console.log(`A média das temperaturas é: ${media.toFixed(2)}°C`);