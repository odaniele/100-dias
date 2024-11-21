const entrada = require ('prompt-sync')({sigint:true});

let notaParcial1 = parseFloat(entrada('Informe sua 1ª nota: '));
let notaParcial2 = parseFloat(entrada('Informe sua 2ª nota: '));
let media = (notaParcial1 + notaParcial2) / 2

let conceito; 
let resultado;

if (media >= 9 && media <= 10) {
    conceito = 'A';
} else if (media >= 7.5 && media < 9) {
    conceito = 'B';
} else if (media >= 6 && media < 7.5) {
    conceito = 'C';
} else if (media >= 4 && media < 6) {
    conceito = 'D';
} else if (media < 4) {
    conceito = 'E';
}

if(conceito === 'A' || conceito === 'B' || conceito === 'C') {
    resultado = 'Aprovado';
} else {
    resultado = 'Reprovado';
}

console.log(`1ª nota: ${notaParcial1.toFixed(2)}`);
console.log(`2ª nota: ${notaParcial2.toFixed(2)}`);
console.log(`Média do semestre: ${media}`);
console.log(`Conceito: ${conceito}`);
console.log(`Resultado: ${resultado}`);