const usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires",
    ocupacion: "Desarrollador",
};

// Seleccionamos el elemento <pre> para mostrar la salida
const output = document.getElementById("output");

// Usamos for...in para iterar sobre las propiedades del objeto
for(let clave in usuario) {
    // Mostrar clave y valor en la consola

if(typeof usuario[clave] === "string"){
    console.log(`${clave}: {usuario[clave]}`);
}
    // Aadr clave y valor al elemento <pre>
    output.textContent += `${clave}: ${usuario[clave]}\n`
}

// ===============================================

