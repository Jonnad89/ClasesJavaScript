class Animal {
    constructor(nombre, especie){
        this.nombre = nombre; 
        this.especie = especie;
    }

    describir() {
        console.log(`${this.nombre} es un ${this.especie}.`)
    }

    hacerSonido(sonido) {
        console.log(`${this.nombre} dice ${sonido}.`);
    }
}

const perro = new Animal("Max", "perro");
perro.describir(); // Max es un perro.
perro.hacerSonido("guau guau"); // Max dice guau guau