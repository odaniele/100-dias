const entrada = require ('prompt-sync')({sigint: true});

let sexo = entrada('Qual o seu sexo? ');
let altura = entrada('Informe sua altura: ')

if(sexo == 'feminino'){
    resultado = 62.1 * altura - 44.7
}else{
    resultado = 72.7 * altura - 58
}

console.log('Seu peso ideal é: ' + resultado +'Kg.')