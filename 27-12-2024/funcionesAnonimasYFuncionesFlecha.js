// Funciones Anónimas

const saludo = function() {
    console.log("Hola desde una función anónima");
};

saludo();

// Funciones Flecha

const saludoFlecha = () => {
    console.log("Hola desde una función flecha")
}

saludoFlecha();

const obj = {
    nombre: "Objeto",
    mostrar: function() {
        console.log(this.nombre); // Objeto
    },
    mostrarFlecha : () =>{
        console.log(this.nombre); // undefined 
    }
};

obj.mostrar();
obj.mostrarFlecha();
