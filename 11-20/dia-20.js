const entrada = require ('prompt-sync')({sigint:true});

let sexo = String(entrada('Informe o sexo digitando F ou M: ')).toUpperCase();

if(sexo === 'F') {
    console.log('F - feminino');
} else if (sexo === 'M'){
    console.log('M - Masculino');
} else {
    console.log('Sexo inválido')
}