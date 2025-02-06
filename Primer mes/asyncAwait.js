function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 3000)
    })
}

async function ejecutar() {
    console.log("Inicio");
    let resultado = await obtenerDatos(); // Espera a que la promesa se resuelva
    console.log(resultado);
    console.log("Fin");
}

ejecutar();
