const entrada = require ('prompt-sync')({sigint: true});

let numSim = 0;
let pergunta1 = String(entrada('Telefonou para a vítima?'));
let pergunta2 = String(entrada('Esteve no local do crime?'));
let pergunta3 = String(entrada('Mora perto da vítima?'));
let pergunta4 = String(entrada('Devia para a vítima?'));
let pergunta5 = String(entrada('Já trabalhou com a vítima?'));

if (pergunta1 === 'sim') {
    numSim += 1;
}
if (pergunta2 === 'sim') {
    numSim += 1;
}
if (pergunta3 === 'sim') {
    numSim += 1;
}
if (pergunta4 === 'sim') {
    numSim += 1;
}
if (pergunta5 === 'sim') {
    numSim += 1;
}

if (numSim === 5) {
    console.log('Assassino');
} else if (numSim === 3 || numSim === 4) {
    console.log('Cúmplice');
} else if (numSim === 2) {
    console.log('Suspeito');
} else {
    console.log('Inocente')
}