// Simulamos una función que "consulta a una API"

function obtenerUsuario(id) {
    return new Promise((resolve, reject) =>{
        console.log(`Buscando usuario con ID: ${id}...`);
        setTimeout(() => {
            // Simulamos éxito o error
            if(id > 0) {
                resolve({id, nombre: "Juan Pérez", edad: 30});
            }else {
                reject("El ID no es válido.");
            }
        }, 2000); // Retraso simulado de 2 segundos
    });
}

//Función asíncrona para manejar la consulta
async function mostrarUsuario(id) {
    try{
        // Espera a que se resuelva la promesa
        const usuario = await obtenerUsuario(id);
        console.log("Usuario encontrado:", usuario);
    } catch (error) {
        // Captura y maneja cualquier error
        console.error("Error", error)
    } finally {
        console.log("Proceso terminado.")
    }
}

// Llamamos a la función con un ID válido
mostrarUsuario(1);

// Llamamos a la función con un ID nválido
mostrarUsuario(-1)

