class Animal {

    fazerSom() {
        console.log('O animal faz um som');
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log('Latindo');
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log('Miando');
    }
}

const animal = new Animal();
animal.fazerSom();

const cachorro = new Cachorro();
cachorro.fazerSom();

const gato = new Gato();
gato.fazerSom();