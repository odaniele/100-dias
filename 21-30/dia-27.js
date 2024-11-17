const entrada = require ('prompt-sync')({sigint:true});

let turno = String(entrada('Em qual turno você estuda?\nDigite:\nM - Matutino\nV - Vespertino\nN - Noturno ').toUpperCase());

if (turno === 'M'){
    console.log('Bom dia!');
} else if (turno === 'V'){
    console.log('Boa tarde!');
} else if (turno === 'N') {
    console.log('Boa noite!');
} else {
    console.log('Valor inválido!')
}