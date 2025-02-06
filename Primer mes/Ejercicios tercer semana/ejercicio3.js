/* 
1-Usa fetch para hacer una petición a la API de prueba 
JSONPlaceholder y obtener una lista de usuarios. Imprime sus nombres en la consola.

URL "https://jsonplaceholder.typicode.com/users"

2-Modifica el ejemplo anterior para incluir un manejo de 
errores más robusto y muestra un mensaje claro si ocurre un error.

3-Usa fetch para enviar un nuevo recurso a la API de prueba JSONPlaceholder.
Envía un objeto con título y cuerpo, e imprime la respuesta del servidor.
*/

// solución

// URLS de la API
const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";

// Función para obtener lista de usuarios
async function obtenerUsuarios() {
    try {
        const response = await fetch(urlUsers);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const usuarios = await response.json();
        console.log("Lista de usuarios:");
        usuarios.forEach(usuario => {
            console.log(`Usuario: ${usuario.name}`);
        });
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
    }
}

// Función para enviar un nuevo recurso a la API
async function enviarRecurso() {
    try {
        const nuevoPost = {
            title: "Mi título",
            body: "Este es el contenido del post",
            userId: 1
        };

        const response = await fetch(urlPosts, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoPost)
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Recurso enviado correctamente:");
        console.log(data);
    } catch (error) {
        console.error("Error al enviar el recurso:", error.message);
    }
}

// Ejecutar ambas funciones
(async function ejecutarFunciones() {
    console.log("=== Obtener Usuarios ===");
    await obtenerUsuarios();

    console.log("\n=== Enviar Recurso ===");
    await enviarRecurso();
})();
