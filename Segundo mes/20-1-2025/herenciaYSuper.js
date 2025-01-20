class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;    
    }
    

    mostrarInfo() {
        console.log(`Vehicuo: ${this.marca} ${this.modelo}`)
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo); // Llama al constructor de la clase padre
        this.puertas = puertas;
    }


    mostrarInfo() {
        super.mostrarInfo(); // Llamar al método de la clase padre
        console.log(`Tiene ${this.puertas} puertas.`)
    }
}

const coche1 = new Coche("Toyora", "Corolla", 4);
coche1.mostrarInfo();
