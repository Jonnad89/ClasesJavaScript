class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad
        this.edad = edad; // Propiedad
    }

    // Método
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} añños.`)
    }

}

// Crear una instancia (objeto)
const persona1 = new Persona("José",30);
persona1.saludar();