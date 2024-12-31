const entrada = require ('prompt-sync')( {sigint: true });

let count0_25 = 0;
let count26_50 = 0;
let count51_75 = 0;
let count76_100 = 0;

while (true) {
    let input = parseInt(entrada('Digite um número positivo (ou um número negativo para encerrar): '), 10);

    if (input < 0) {
        break;
    }

    if (input >=0 && input <= 25) {
        count0_25++;
    } else if (input >= 26 && input <= 50) {
        count26_50++;
    } else if (input >= 51 && input <= 75) {
        count51_75++;
    } else if (input >= 70 && input <= 100) {
        count76_100++;
    }
}

console.log('Contagem de números nos intervalos:');
console.log(`[0-25]: ${count0_25}`);
console.log(`[26-50]: ${count26_50}`);
console.log(`[51-75]: ${count51_75}`);
console.log(`[76-100]: ${count76_100}`);
