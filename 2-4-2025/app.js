// // https://pokeapi.co/api/v2/pokemon/${pokemon}

// document.getElementById("buscarPokemon").addEventListener("click", async () => {
//     let pokemon = document.getElementById("pokemonInput").value.toLowerCase().trim();
//     let mensaje = document.getElementById("nombrePokemon");
//     let imagen = document.getElementById("imagenPokemon")
//     let tipo = document.getElementById("tipoPokemon")
    

//     if(!pokemon) {
//         mensaje.textContent = "Por favor, introduce un nombre o número"
//         imagen.src = "";
//         tipo.textContent = "";
//         return;
//     }

//     try {
//         let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

//         if (!respuesta.ok) {
//             throw new Error("Pokémon no encontrado")
//         }

//         let datos = await respuesta.json()
//         console.log("Datos del pokémon:", datos)

//         //mostrar nombre
//         mensaje.textContent = `Nombre: ${datos.name.toUpperCase()}`

//         //mostrar imagen
//         imagen.src = datos.sprites.front_default;
//         imagen.alt = `Imagen de ${datos.name}`;

//         // mostrar tipos 
//         let tipos = datos.types.map(t => t.type.name).join(", ");
//         tipo.textContent = `Tipo(s): ${tipos}`

//     } catch (error) {
//         mensaje.textContent = "Error: Pokémon no encontrado";
//         imagen.src = "";
//         tipo.textContent ="";
//         console.error("Error al obtener el Pokémon:", error);
//     }
// })

// async function obtenerDatosPokeAPI() {
//     try {
//         let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
//         let datos = await respuesta.json();

//         console.log("Datos de la PokeAPI:", datos) // ver toda la respuesta
//         console.log("Lista de Pokemon:", datos.moves); // ver solo los nombres y urls

//         // mostrar detalles de cada pokemon

//         for (let pokemon of datos.results) {
//             let res = await fetch(pokemon.url)
//             let info = await res.json()
//             console.log(`Datos de ${info.name}:`, info)
//         }
//     } catch (error) {
//         console.error("Error al obtener datos de la pokeAPI", error)
//     }
// }

// obtenerDatosPokeAPI()

const contenedor = document.getElementById("pokemonContainer");

// función para obtener la lsta de pokemon

async function obtenerListaPokemon(limit = 10, offset = 0){
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        let datos = await respuesta.json();

        // llamar a otra función para obtener detalles de cada pokemon
        mostrarPokemon(datos.results)
    } catch (error) {
        console.error("Error al obtener la lsta de Pokemon:", error)
    }

}

// fuuncion para obtener detalles de cada pokemon
async function mostrarPokemon(lista) {
    contenedor.innerHTML = ""; 

    for (let pokemon of lista) {
        try {
            let res = await fetch(pokemon.url);
            let info = await res.json();

            // crear una tarjeta con la información
            let tarjeta = document.createElement("div");
            tarjeta.classList.add("pokemon-card");
            tarjeta.innerHTML = `
            <h2>${info.name.toUpperCase()}</h2>
            <img src="${info.sprites.front_default}" alt="${info.name}">
            <p><strong>Altura:</strong>${info.height}</p>
            <p><strong>Peso:</strong>${info.weight}</p>
            <p><strong>Tipo:</strong>${info.types.map(t => t.type.name).join(", ")}</p>
            `
            contenedor.appendChild(tarjeta)
        } catch (error) {
            console.error(`Error al obtener datos de ${pokemon.name}:`, error)
        }
    }
}

// Llamar a la función para obtener pokemon
obtenerListaPokemon(10, 0)