// Conversión de Promesas a Async/Await

const obtenerDatos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos.");
        }, 2000)
    });
};


// Usando async / await

const manejarDatos = async () => {
    try {
        const datos = await obtenerDatos();
        console.log(datos)
    } catch (error) {
        console.error("Error: ", error)
    }
};

manejarDatos();