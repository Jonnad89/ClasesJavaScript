/*
Dado un array de objetos, conviértelo a JSON y 
luego úsalo en un bucle para imprimir los nombres de los objetos.
*/

// solución

// Array de objetos
const personas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 35 }
];

// Convertir el array de objetos a formato JSON (Serialización)
const personasJSON = JSON.stringify(personas);
console.log("Array en formato JSON:", personasJSON);

// Convertir el JSON de vuelta a un array de objetos (Deserialización)
const personasArray = JSON.parse(personasJSON);

// Usar un bucle para imprimir los nombres de los objetos
console.log("Nombres en el array:");
personasArray.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}`);
});
