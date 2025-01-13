class Carro {
    
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    acelerar() {
        console.log('Acelerando!');
    }

    frear() {
        console.log('Freando!');
    }
}

const meuCarro = new Carro('Hyundai', 'Elantra', 2025, 'preto');

console.log(meuCarro);
meuCarro.acelerar();
meuCarro.frear();