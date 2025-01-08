// Creación y manejo de promesa

const promesa = new Promise((resolve, reject) => {
    const exito = true; // Cambiar false para probar el rechazo

    if (exito) {
        resolve("Operación exitosa.");
    } else {
        reject("Ocurrió un error");
    }
});


// Manejo de la promesa

promesa
    .then(respuesta => {
        console.log(respuesta)
    })
    .catch(error => {
        console.error(error);
    })
    .finally(()=> {
        console.log("Operación completada")
    });