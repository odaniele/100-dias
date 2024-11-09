const entrada = require ('prompt-sync')({sigint:true});

let letra = String(entrada('Informe um letra do alfabeto: ')).toUpperCase();

switch(letra) {
    case 'A': 
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        return console.log(`A letra ${letra} é uma vogal.`);
    default:
        return console.log(`A letra ${letra} é uma consoante.`);
}
