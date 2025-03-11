// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type' : "application/json"
//     },
//     body: JSON.stringify({
//         title: 'Nuevo Post',
//         body: 'Este es el contenido del Post',
//         userId: 1
//     })
// })
// .then(response => response.json())
// .then(data => console.log("Post creado:", data))
// .catch(error => console.error('Error:', error))

const miPromesa = new Promise((resolve, reject) => {
    let exito = true; // Simulamos si la operación tiene exito o no
    setTimeout(()=> {
        if(exito) {
            resolve("Operación exitosa");
        }else{
            reject("Hubo un error")
        }
    }, 2000);
});

// Consumimos la promesa con .then() y .catch()
miPromesa
    .then(resultado => console.log(resultado)) // Si se resuelve
    .catch(error => console.error(error)) // si hay error
    .finally(() => console.log("Proceso terminado.")) // Siempre se ejecuta

async function obtenerDatos() {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        let datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.error("Error al obtener dato:", error)
    }
}

obtenerDatos()