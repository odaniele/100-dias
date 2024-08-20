const entrada = require ('prompt-sync')({ sigint: true });

let nota1 = parseFloat(entrada("Informe a nota do bimestre I: "));
let nota2 = parseFloat(entrada("Informe a nota do bimestre II: ")); 
let nota3 = parseFloat(entrada("Informe a nota do bimestre III: "));
let nota4 = parseFloat(entrada("Informe a nota do bimestre IV: "));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Sua média é: ", media.toFixed(2));