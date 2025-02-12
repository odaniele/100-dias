class Notificacao {
    constructor(titulo, mensagem, dataDeEnvio) {
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.dataDeEnvio = dataDeEnvio;
    }   
}

class EmailNotificacao extends Notificacao {
    constructor(titulo, mensagem, dataDeEnvio, emailDestinatario) {
        super(titulo, mensagem, dataDeEnvio);
        this.emailDestinatario = emailDestinatario;
    }
}

class SMSNotificacao extends Notificacao {
    constructor(titulo, mensagem, dataDeEnvio, numeroDestinatario) {
        super(titulo, mensagem, dataDeEnvio);
        this.numeroDestinatario = numeroDestinatario;
    }
}

const emailNotificacao = new EmailNotificacao (
    'Reunião Importante',
    'Lembre-se da reunião às 10h.',
    '12-02-2025',
    'tobias@gmail.com'
);

const smsNotificacao = new SMSNotificacao(
    'Lembrete de Pagamento',
    'Seu pagamento vence amanhã',
    '15-02-2025',
    '+5581369852147'
);

console.log(emailNotificacao);
console.log(smsNotificacao);