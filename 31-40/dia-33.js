const entrada = require ('prompt-sync')({sigint:true});

const a = parseFloat(entrada('Informe o valor de A: '));

if (a === 0) {
    console.log('O valor de A é igual a zero. Não é uma equação do segundo grau.');
} else {
    const b = parseFloat(entrada('Informe o valor de B: '));
    const c = parseFloat(entrada('Informe o valor de C: '));

const delta = (b * b) - (4 * a * c);

if (delta < 0) {
    console.log('O delta é negativo. A equação não possui raízes reais.');
} else if (delta === 0) {
    const raiz = -b / (2 * a);
    console.log(`O delta é zero. A equação possui apenas uma raiz real: ${raiz.toFixed(2)}`);
} else {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`O delta é positivo. A equação possui duas raízes reais: Raiz 1 = ${raiz1.toFixed(2)}, Raiz 2 = ${raiz2.toFixed(2)}`);
}
};