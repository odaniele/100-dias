const entrada = require ('prompt-sync')({ sigint: true });

let numInteiro1 = parseInt(entrada('Informe o primeiro número para a operação, sendo um inteiro: '));
let numInteiro2 = parseInt(entrada('Informe o segundo número para a operação, também sendo um inteiro: '));
let numReal = parseFloat(entrada('Agora informe um número real: '));

let calculo1 = (numInteiro1*2) * (numInteiro2/2) ;
let calculo2 = (numInteiro1 * 3) + numReal;
let calculo3 = numReal ** 3;

console.log('O produto do dobro do primeiro com metade do segundo é: ' + calculo1);
console.log('A soma do triplo do primeiro com o terceiro é: ' + calculo2);
console.log('O terceiro elevado ao cubo é: ' + calculo3.toFixed(2));