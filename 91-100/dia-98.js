class Tarefa {
    constructor(titulo, descricao, prazo, concluida) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.prazo = prazo;
        this.concluida = false;
    }

    marcarConcluida() {
        this.concluida = true;
    }

    marcarNaoConcluida() {
        this.concluida = false;
    }
}

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    removerTarefa(titulo) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.titulo !== titulo);
    }

    marcarTarefaComoConcluida(titulo) {
        const tarefa = this.tarefas.find(tarefa => tarefa.titulo === titulo);
        if (tarefa) {
            tarefa.marcarConcluida();
        } else {
            console.log('Tarefa não encontrada.');
        }
    }

    listarTarefa() {
    this.tarefas.forEach(tarefa => {
        console.log(`Titulo: ${tarefa.titulo}, Descrição: ${tarefa.descricao}, Prazo: ${tarefa.prazo}, Concluída: ${tarefa.concluida}`);
    });
    }   
}

const listaDeTarefas = new ListaDeTarefas();

listaDeTarefas.adicionarTarefa(new Tarefa('Estudar PhP', 'Estudar classes e objetos', '15/02/2025'));
listaDeTarefas.adicionarTarefa(new Tarefa('Fazer exercício', 'Fazer 30 minutos de exercício', '16/02/2025'));

listaDeTarefas.listarTarefa();

listaDeTarefas.marcarTarefaComoConcluida('Estudar PhP');

listaDeTarefas.listarTarefa();

listaDeTarefas.removerTarefa('Fazer exercícios');

listaDeTarefas.listarTarefa();

