const entrada = require ('prompt-sync')({sigint:true});

let saque = parseFloat(entrada('Informe o valor que deseja sacar(entre R$10 e R$600): '));

if (saque < 10 || saque > 600) {
    console.log("Valor inválido! O saque deve estar entre 10 e 600 reais.");
} else {
    let valorSaque = saque;

    let notas100 = Math.floor(valorSaque / 100);
    valorSaque %= 100;

    let notas50 = Math.floor(valorSaque / 50);
    valorSaque %= 50;

    let notas10 = Math.floor(valorSaque / 10);
    valorSaque %= 10;

    let notas5 = Math.floor(valorSaque / 5);
    valorSaque %= 5;

    let notas1 = valorSaque;

    console.log(`Para o saque de R$${saque}, você receberá:`);
    if (notas100 > 0) console.log(`${notas100} nota(s) de R$100`);
    if (notas50 > 0) console.log(`${notas50} nota(s) de R$50`);
    if (notas10 > 0) console.log(`${notas10} nota(s) de R$10`);
    if (notas5 > 0) console.log(`${notas5} nota(s) de R$5`);
    if (notas1 > 0) console.log(`${notas1} nota(s) de R$1`);
}