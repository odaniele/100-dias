class Veiculo {

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    deslocar() {
        console.log('Deslocando...');
    }

    parar() {
        console.log('Parando...')
    }
}

class Moto extends Veiculo {

    constructor (marca, modelo, ano) {
        super(marca, modelo, ano);
    }

    fazerManobra() {
        console.log('Realizando manobra.');
    }
}

const moto = new Moto ('Honda', 'CB 500', 2024);
moto.deslocar();
moto.fazerManobra();
moto.parar();