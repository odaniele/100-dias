class Cliente {
    constructor(nome, email, telefone, status = 'ativo') {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.status = status;
    }

    atualizarStatus() {
        this.status = this.status === 'ativo' ? 'inativo' : 'ativo';
    }
}

class Atendimento {
    constructor(cliente, dataDeAtendimento, problemaReportado) {
        this.cliente = cliente;
        this.dataDeAtendimento = dataDeAtendimento;
        this.problemaReportado = problemaReportado;
        this.resolvido = false;
    }

    registrarAtendimento() {
        console.log(`Atendimento registrado para o cliente ${this.cliente.nome} em ${this.dataDeAtendimento}. Problema: ${this.problemaReportado}`);
    }

    marcarComoResolvido() {
        this.resolvido = true;
        console.log(`Atendimento do cliente ${this.cliente.nome} marcado como resolvido.`);
    }
}

class Suporte {
    constructor() {
        this.atendimentos = [];
    }

    adicionarAtendimento(atendimento) {
        this.atendimentos.push(atendimento);
        atendimento.registrarAtendimento();
    }

    buscarAtendimentoPorCliente(cliente) {
        return this.atendimentos.filter(atendimento => atendimento.cliente === cliente);
    }

    listarAtendimentosResolvidos() {
        return this.atendimentos.filter(atendimento => atendimento.resolvido);
    }
}

const cliente1 = new Cliente('Tobias', 'tobitobi@gmail.com', '3684-5986');
const cliente2 = new Cliente('Meg', 'memeg@gmail.com', '4863-6987');

const atendimento1 = new Atendimento(cliente1, '14-02-2025', 'Problema com login');
const atendimento2 = new Atendimento(cliente2, '15-02-2025', 'Problema com pagamento');

const suporte = new Suporte();

suporte.adicionarAtendimento(atendimento1);
suporte.adicionarAtendimento(atendimento2);

atendimento1.marcarComoResolvido();

console.log('Atendimentos resolvidos:');
suporte.listarAtendimentosResolvidos().forEach(atendimento => {
    console.log(`Cliente: ${atendimento.cliente.nome}, Problema: ${atendimento.problemaReportado}`);
});