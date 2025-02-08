class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, tipoDeCombustivel) {
        super(marca, modelo, ano);
        this.tipoDeCombustivel = tipoDeCombustivel;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo de Combustível: ${this.tipoDeCombustivel}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, capacidadesDeCilindrada) {
        super(marca, modelo, ano);
        this.capacidadesDeCilindrada = capacidadesDeCilindrada;
    }

    mostrarInfo(){
        super.mostrarInfo();
        console.log(`Capacidade de Cilindrada: ${this.capacidadesDeCilindrada}cc`);
    }
}

const carro = new Carro ('Toyota', 'Corolla', 2022, 'Gasolina');
const moto = new Moto ('Honda', 'CBR 600RR', 2021, 600);

carro.mostrarInfo();
moto.mostrarInfo();