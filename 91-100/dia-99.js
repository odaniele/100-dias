class FormaGeometrica{
    constructor() {
        if (new.target === FormaGeometrica) {
            throw new TypeError('Não é possível instanciar uma classe abstrata diretamente.');
        }
    }

    area() {
        throw new Error ('Método área deve ser implementado.');
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    area() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

class Retangulo extends FormaGeometrica {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }
} 

const circulo = new Circulo(9);
console.log(`Área do círculo: ${circulo.area().toFixed(2)}`);

const retangulo = new Retangulo(8, 12);
console.log(`Área do retângulo: ${retangulo.area()}`);