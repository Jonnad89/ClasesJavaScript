const datos = {
    usuario: "Juan",
    edad: 30,
    direccion: {
        ciudad: "Buenos Aires",
        pais: "Argemtina",
    },
    habilidades: ["JavaScript", " ReactJs", " Node.js"],
};

const numeros = [10, 15, 20, 25, 30];

function iterarObjeto(obj) {
    for (let clave in obj){
    if (typeof obj[clave] === "object" && !Array.isArray(obj[clave])) {
        console.log(`${clave}:`);
        iterarObjeto(obj[clave]);
    }else{
        console.log(`${clave}: ${obj[clave]}`);
        }
    }
}

iterarObjeto(datos);

const mayoresDe20 = numeros.filter(num => num > 20);
console.log("Mayores de 20:", mayoresDe20 );

const total = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Suma total:", total)
