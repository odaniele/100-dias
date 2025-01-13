class ContaBancaria {
    
    #titular;
    #numeroConta;
    #saldo;

    constructor(titular, saldoInicial = 0, numeroConta) {
        this.#titular = titular;  
        this.#saldo = saldoInicial;
        this.#numeroConta = numeroConta;  
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log(`Valor de depósito deve ser positivo.`);
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else if (valor > this.#saldo) {
            console.log('Saldo insuficiente.');
        } else {
            console.log('Valor de saque deve ser positivo.');
        }
    }

    consultarSaldo(){
        return `O saldo atual é R$${this.#saldo}.`;
    }

    getTitular () {
        return this.#titular;
    }

    getNumeroConta () {
        return this.#numeroConta;
    }

}

const conta = new ContaBancaria('Tobias', 800, 35041,);


console.log(conta.consultarSaldo());

conta.depositar(1580);
console.log(conta.consultarSaldo());

conta.sacar(36);
console.log(conta.consultarSaldo());

conta.depositar(1500);
console.log(conta.consultarSaldo());