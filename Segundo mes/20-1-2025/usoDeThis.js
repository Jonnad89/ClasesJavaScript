class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}.`)
    }

    static info() {
        console.log("Soy un método estático y no accedo a this");
    }
}

const user = new Usuario("Ana");
user.saludar();
Usuario.info();