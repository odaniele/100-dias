const entrada = require ('prompt-sync')({sigint:true});

let nota1 = parseFloat(entrada('Informe a primeira nota do aluno: '));
let nota2 = parseFloat(entrada('Informe a segunda nota do aluno: '));
let media = (nota1 + nota2) / 2;

if (media === 10) {
    console.log('Aprovado com Distinção');
}else if (media >= 7) {
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}