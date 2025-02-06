// Define un objeto en JavaScript, conviértelo a formato JSON y luego vuelve a convertirlo a un objeto.

// solución

// Definir un objeto en JavaScript
let persona = {
    nombre: "Carlos",
    edad: 28,
    correo: "carlos@example.com"
};

// Convertir el objeto a formato JSON (Serialización)
let personaJSON = JSON.stringify(persona);
console.log("Formato JSON:", personaJSON);

// Convertir de JSON a un objeto (Deserialización)
let personaObjeto = JSON.parse(personaJSON);
console.log("De vuelta a objeto:", personaObjeto);
