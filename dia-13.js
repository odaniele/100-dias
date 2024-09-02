const entrada = require ('prompt-sync')({sigint: true});

function calcularMulta(pesoPeixes) {
    const limitePeso = 50; 
    const valorMultaPorQuilo = 4.00; 

    let excesso = 0;
    let multa = 0;

    if (pesoPeixes > limitePeso) {
        excesso = pesoPeixes - limitePeso;
        multa = excesso * valorMultaPorQuilo;
    }

    return { excesso, multa };
}

function main() {
    const pesoPeixes = parseFloat(entrada('Digite o peso de peixes (em quilos): '));

    if (isNaN(pesoPeixes)) {
        console.log('Por favor, insira um número válido para o peso de peixes.');
        return;
    }

    const { excesso, multa } = calcularMulta(pesoPeixes);

    console.log(`Peso de peixes: ${pesoPeixes.toFixed(2)} kg`);
    if (excesso > 0) {
        console.log(`Excesso de peso: ${excesso.toFixed(2)} kg`);
        console.log(`Multa a pagar: R$ ${multa.toFixed(2)}`);
    } else {
        console.log('Não houve excesso de peso. Nenhuma multa a pagar.');
    }
}

main();