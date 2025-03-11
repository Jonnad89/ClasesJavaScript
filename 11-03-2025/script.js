// function obtenerUsuarios() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let exito = true; // Cambia a false para probar el error

//             if (exito) {
//                 resolve(["Juan", "María", "Carlos"])
//             } else {
//                 reject("Error al obtener usuarios")
//             }
//         }, 2000);
//     });
// }

// Uso de la promesa
// obtenerUsuarios()
//     .then(usuarios => console.log("Usuarios obtenidos:", usuarios))
//     .catch(error => console.error(error))
//     .finally(() => console.log("Proceso finalizado"))


async function obtenerDatos() {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
        let usuarios = await respuesta.json()
        console.log("Datos obtenidos:", usuarios)
    } catch (error){
        console.error("Error al obtener datos:", usuarios)
    }
}

obtenerDatos()

document.addEventListener("DOMContentLoaded", function() {
    async function cargarUsuarios() {
        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
            let usuarios = await respuesta.json()
    
            let lista = document.getElementById('listaUsuarios')
            lista.innerHTML = ""; // Limpiamos la lista
    
            usuarios.forEach(usuario => {
                let li = document.createElement('li')
                lista.textContent = usuario.name;
                lista.appendChild(li)
            });
        } catch (error) {
            console.error("error al cargar usuarios:", error)
        }
    }
    cargarUsuarios();
})