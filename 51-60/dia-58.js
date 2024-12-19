const entrada = require ('prompt-sync')({sigint:true});

let numero = parseInt(entrada('Informe um número: ')); 

if (numero <= 0) {
    console.log('O número deve ser maior que 0.');
} else {
    let fibonacci = [1, 1];

    for (let i = 2; i < numero; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    console.log(`A série de Fibonacci até o ${numero}º termo é:`, fibonacci.slice(0, numero));

}    