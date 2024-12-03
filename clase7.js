// POO (programación orientada a objetos)

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad
        this.edad = edad; // Propiedad
    }

    saludar() { // Método
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

// Crear un objeto
const persona1 = new Persona("Marcos", 35);
persona1.saludar();

// Clase estudiante que hereda de Persona

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad) // Llamar al constructor de la clase padre
        this.grado = grado;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando en el grado ${this.grado}`)
    }
}

// Crear un objeto de la clase Estudiante

const estudiante = new Estudiante("Miguel", 22, "Ingenieria");
estudiante.saludar();
estudiante.estudiar();





// ======================================================== //

class Coche {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Método para mostrar información
    mostrarDetalles() {
        return `${this.marca} ${this.modelo}, Año: ${this.año}`
    }
}

const miCoche = new Coche("Toyota", "Etios", 2024);
console.log(miCoche.mostrarDetalles())

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} está haciendo un sonido.`)
    }
}

const perro = new Animal("Firulais");
perro.hacerSonido() 

// clase hija que extiende de Animal

class Perro extends Animal {
    ladrar() {
        console.log(`${this.nombre} está ladrando: Guau!`)
    }
}

const miPerro = new Perro("Nerón");
miPerro.ladrar();