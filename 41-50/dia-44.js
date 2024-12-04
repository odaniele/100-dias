const entrada = require ('prompt-sync')({sigint:true});

let nota;

do {
    nota = parseInt(entrada('Digite uma nota entre 0 e 10: '));
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Nota inválida. Tente novamente.');
    }

} while (isNaN(nota) || nota < 0 || nota > 10);

console.log(`Nota recebida: ${nota}`);
