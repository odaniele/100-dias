const entrada = require ('prompt-sync') ({ sigint:true });

let limite = parseInt(entrada('Informe um número inteiro: '));

if (limite <= 1) {
    console.log(`Não há números primos.`);
} else {
    let primos = [];

for (let num = 2; num <= limite; num++) {
        let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        primos.push(num);
    }
}

console.log(`Número primos entre 1 e ${limite}:`, primos);

}