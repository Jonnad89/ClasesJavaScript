// Métodos útiles de objetos
// Obtener las claves de un objeto

const producto = {id:1, nombre: "Latop", precio: 1500, id:2, nombre: "Pc Gamer", precio: 3000};

const claves = Object.keys(producto);
console.log("Claves", claves)

//Obtener los valores de un objeto
const valores = Object.values(producto)
console.log("Valores:", valores)

//Convertir un objeto en pares clave-valor

const pares = Object.entries(producto);
console.log("Pares clave-valor:", pares)

const usuario = {
    nombre : "Juan",
    habilidades: ["JavaScript", "React", "Python"],
}

// Acceso a arreglos dentro de objetos

console.log("Habilidades: ", usuario.habilidades)
// Acceso a un elemento específico
console.log("Primera habilidad: ", usuario.habilidades[0])

// Agregar una nueva habilidad
usuario.habilidades.push("TypeScript");
console.log("Habilidades actualizadas: ", usuario.habilidades)

// Eliminar la última habilidad
usuario.habilidades.pop();
console.log("Habilidades después de eliminar: ", usuario.habilidades)

// Actualizar una habilidad
usuario.habilidades[1] = "Angular";
console.log("Habilidades actualizadas: ", usuario.habilidades)

// Iterar sobre arreglos dentro de objetos

// Mostrar todas las habilidades

usuario.habilidades.forEach((habilidad, index)=> {
    console.log(`Habilidad ${index + 1}: ${habilidad}`)
})