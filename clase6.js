// [
//     {
//         "nombre" :"Juan Perez",
//         "edad" : 30,
//         "hobbies" : ["leer", "programar", "jugar futbol"],
//         "esEstudiante" : false
//     }
// ]

//https://jsonplaceholder.typicode.com/users

// const usuario = {
//     nombre : "Ana López",
//     edad: 25,
//     pais: "Argentna"
// }

// const jsonString = JSON.stringify(usuario);
// console.log(jsonString)

// const jsonString = '{"nombre": "Ana López", "edad": 25, "pais": "Argentina"}';
// const objeto = JSON.parse(jsonString);

// console.log(objeto)

// fetch -> El método fetch permite realizar solicitudes HTTP para interactuar con APIs

// fetch(url, options)
//     .then(response => {
//     })
//     .catch(error =>{
//     });

/*
let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then(res => res.json()) //Convertimos la respuesta en JSON
    .then(data => console.log(data)) // Mostramos los datos
    .catch(error => console.error("Error al obtener datos:", error))
*/

async function obtenerUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error( `Error HTTP: ${response.status}` )
        }

        const data = await response.json();
        console.log("Usuarios obtenidos:", data)
    } catch (error) {
        console.log("Error al hacer la petición", error)
    }
    
}

obtenerUsuarios();