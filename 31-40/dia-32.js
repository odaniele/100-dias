const entrada = require ('prompt-sync')({sigint:true});

let ladoA = parseFloat(entrada('Informe o lado A do triangulo: '));
let ladoB = parseFloat(entrada('Informe o lado B do triangulo: '));
let ladoC = parseFloat(entrada('Informe o lado C do triangulo: '));

let triangulo;

if ((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA)) {
if (ladoA === ladoB && ladoA === ladoC) {
    triangulo = 'Equilatero';
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    triangulo = 'Isosceles';
} else {
    triangulo = 'Escaleno';
}

    console.log(`Triângulo ${triangulo}`);
} else {
    console.log('Os valores fornecidos não formam um triângulo.');

}