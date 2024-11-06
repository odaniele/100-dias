const entrada = require ('prompt-sync')({sigint:true});

let valor1 = parseInt(entrada('Informe um número inteiro: '));
let valor2 = parseInt(entrada('Informe outro número inteiro: '));

if(valor1 > valor2) {
    console.log(`O número com maior valor é: ${valor1}`);
} 
else {
    console.log(`O número com maior valor é: ${valor2}`);
}
