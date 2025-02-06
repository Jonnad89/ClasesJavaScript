/*
Filtrar y transformar datos de una API
Usa la API https://jsonplaceholder.typicode.com/users para obtener una lista de usuarios.
Filtra los usuarios cuya dirección (address.city) contiene la letra "e".
Crea un nuevo array que contenga solo los nombres y correos electrónicos de estos usuarios.
Imprime el array transformado.
*/

//Función para filtrar y transformar datos de la Api

async function filtrarYTransformarUsuarios() {
    
    try{
        // Hacer la petición a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();

        // Filtrar usuarios cuya ciudad contene la letra "e"
        const usuariosFiltrados = usuarios.filter(usuario => 
            usuario.address.city.toLowerCase().includes("e")
        );

        // Crear un nuevo array con nombres y correos electrónicos
        const usuariosTransformados = usuariosFiltrados.map(usuario =>({
            nombre: usuario.name,
            email: usuario.email
        }));

        // Imprimir el array transformado
        console.log(usuariosTransformados);
    } catch (error) {
        console.error('Error al obtener los datos: ', error);
    }
}

// Llamar a la función
filtrarYTransformarUsuarios()