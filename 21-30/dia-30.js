const entrada = require ('prompt-sync')({sigint:true});

let numero = parseInt(entrada('Informe um número para saber o dia da semana correspondente: '));
let diaDaSemana;

switch (numero) {
    case 1: 
        diaDaSemana = 'Domingo';
        break;
    case 2:
        diaDaSemana = 'Segunda-feira';
        break;
    case 3: 
        diaDaSemana = 'Terça-feira';
        break;
    case 4: 
        diaDaSemana = 'Quarta-feira';
        break;
    case 5: 
        diaDaSemana = 'Quinta-feira';
        break;
    case 6: 
        diaDaSemana = 'Sexta-feira';
        break;
    case 7: 
        diaDaSemana = 'Sábado';
        break;
    default: 
        diaDaSemana ='valor inválido';
        break;
}

console.log(diaDaSemana);
