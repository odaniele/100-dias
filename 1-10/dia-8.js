const entrada = require ('prompt-sync')({ sigint: true });

let valorHora = parseFloat(entrada('Quanto você ganhar por hora? '));
let horasMes = parseInt(entrada('Quantas horas você trabalha em um mês? '));
let calculo = valorHora * horasMes;

console.log('O total do seu salário neste mês foi: R$' + calculo);