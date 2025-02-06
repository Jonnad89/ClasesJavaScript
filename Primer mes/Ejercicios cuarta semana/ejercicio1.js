/*
Crear una clase Vehiculo con propriedades marca y modelo y un método detalles().

Extender Vehiculo a una clase Moto que incluya una propiedad adicional cilindraje

Crear un objeto de Moto y llamar a sus métodos

*/

// definición de la clase vehiculo

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
// metodo para mostrar los detalles del vehiculo
    detalles() {
        return `Marca ${this.marca}, Modelo ${this.modelo}`
    }
}

// Extensión de la clase vehiculo a una clase moto

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindraje){
        super(marca, modelo) // Llama l constructor de la clase padre
        this.cilindraje = cilindraje;
    }

    // Método para mostrar los detalles específicos de la moto
    detalles(){
        return `${super.detalles()}, Cilindraje: ${this.cilindraje}cc`;
    }
}

// Creación de un objto de la clase Moto
const miMoto = new Moto('Yamaha', 'MT-07', 689);

// LLalamar al método detalles 
console.log(miMoto.detalles()) 


