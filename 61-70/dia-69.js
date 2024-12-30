const entrada = require ('prompt-sync')({ sigint: true });

function calcularTabelaDeDividas(valorDivida) {
const tabelaJuros = [
    { parcelas: 1, juros: 0 },
    { parcelas: 3, juros: 10 },
    { parcelas: 6, juros: 15 },
    { parcelas: 9, juros: 20 },
    { parcelas: 12, juros: 25 }
];

console.log("Valor da Dívida | Qtd de Parcelas | Valor dos Juros | Valor da Parcela");
console.log("-----------------------------------------------------------------------");

tabelaJuros.forEach(item => {
    const juros = (valorDivida * item.juros) / 100; 
    const valorTotal = valorDivida + juros; 
    const valorParcela = valorTotal / item.parcelas; 

    console.log(
        `R$ ${valorTotal.toFixed(2).padStart(12, ' ')} |  ${item.parcelas.toString().padStart(14, ' ')} | R$ ${juros.toFixed(2).padStart(12, ' ')} | R$ ${valorParcela.toFixed(2).padStart(14, ' ')}`
    );
});
}

const valorDivida = parseFloat(entrada("Digite o valor da dívida:"));
if (!isNaN(valorDivida) && valorDivida > 0) {
calcularTabelaDeDividas(valorDivida);
} else {
console.log("Por favor, insira um valor válido para a dívida.");
}
