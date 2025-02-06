/*
Recorrer un objeto
Crea un objeto llamado producto con propiedades como nombre, precio, stock y categoria. 
Usa un bucle for...in para recorrer las propiedades del objeto y mostrar
 en la consola los nombres y valores de cada una.
*/

let producto = {
    nombre: "Laptop",
    precio: 1200,
    stock: 15,
    categoria: "Tecnología"
};

// Usar un bucle for...in para recorrer las propiedades del objeto
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`)
}

let usuario = {
    nombre: "Juan",
    edad: 25,
    correo: "juan@ejemplo.com",

    // Método para saludar
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    },
    // Método para virificar si es mayor de edad
    esMayorDeEdad: function() {
        return this.edad >= 18;
    }
}

//Llamar a los métodos e imprimir sus resultados
usuario.saludar(); 
console.log(`¿Es mayor de edad? ${usuario.esMayorDeEdad()}`)