class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log('O valor do depósito deve ser positivo.');
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente ou valor de saque inválido.');
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo = 0, limiteDeCredito = 0) {
        super(titular, saldo);
        this.limiteDeCredito = limiteDeCredito;
    }

    sacar(valor) {
        const saltoTotal = this.saldo + this.limiteDeCredito;
        if (valor > 0 && valor <= saltoTotal) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente (incluindo limite de crédito) ou valor de saque inválido.');
        }
    }

    consultarSaldo() {
        const saldoTotal = this.saldo + this.limiteDeCredito;
        console.log(`Saldo atual R$${this.saldo} | Limite de crédito: R$${this.limiteDeCredito} | Saldo total disponível: R$${saldoTotal}`);
    }
}

const contaCorrente = new ContaCorrente('Tobias Oliveira', 1000, 500);

contaCorrente.consultarSaldo();
contaCorrente.depositar(300);
contaCorrente.sacar(100);
contaCorrente.sacar(20);
contaCorrente.consultarSaldo();