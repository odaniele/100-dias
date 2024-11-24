const entrada = require ('prompt-sync')({sigint: true});

let ano = parseInt(entrada('Informe o ano: '));

if(ano % 4 === 0) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é um ano bissexto.`);
}