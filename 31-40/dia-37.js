const entrada = require ('prompt-sync')({sigint:true});

let valorSaque = parseFloat(entrada('Informe o valor que deseja sacar(entre R$10 e R$600): '));

if (saque < 10) {
    console.log('Valor inválido. O valor mínimo para saque é 10 reais.');
} else if (saque > 600) {
    console.log('Valor inválido. O valor máximo para saque é 600 reais.');
};

let notas100 = 0;
let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

