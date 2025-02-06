const usuarioComplejo = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        ciudad:"Buenos Aires",
        pais: "Argentina"
    },
    habilidades: ["JavaScript", "ReactJs"]
};

// Función para iterar un objeto anidado

function iterarObjeto(obj) {
    for (let clave in obj) {
        if(typeof obj[clave] === 'object' && !Array.isArray(obj[clave])){
            console.log(`${clave}: `);
            iterarObjeto(obj[clave]); // Llamada recursiva para recorrer el objeto anidado
        } else {
            console.log(`${clave}: ${obj[clave]}`);
        }
    }
}

iterarObjeto(usuarioComplejo)

console.log(typeof(usuarioComplejo)) // ejemplo de typeof sobre usuarioComplejo

console.log(typeof(iterarObjeto))

console.log((Array.isArray([1,2,3])))
console.log(Array.isArray({nombre: "Juan"})) //false


const numero = 151;
console.log(typeof(numero))

const ejemplo = [1, 2,3]

console.log(typeof(ejemplo))

console.log(typeof {})
console.log(typeof [])
console.log(typeof new Date())
console.log(typeof null)
