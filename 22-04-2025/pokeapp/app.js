const container = document.getElementById("pokemon-container")
const loader = document.getElementById("loader")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

let offset = 0
const limit = 10

async function fetchPokemons(offset = 0, limit = 10) {
    try {
        loader.style.display = "block"
        container.innerHTML = ""

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        if (!res.ok) throw new Error("Error al obtener los pokémon")

            const data = await res.json()

            for(let poke of data.results) {
                const pokeData = await fetch(poke.url).then(r => r.json())
                renderPokemon(pokeData)
            }
    } catch (error) {
        container.innerHTML = `<p>❌ Error: ${error.message}</p>`
    }finally {
        loader.style.display = "none"
    }
}

function renderPokemon(pokemon) {
    const card = document.createElement("div")
    card.className = "pokemon"
    card.innerHTML = `
    <h3>${pokemon.name}</h3>
    <img src = "${pokemon.sprites.front_default}" alt= "${pokemon.name}"
    <br />
    <p>Tipo: ${pokemon.types.map(t => t.type.name).join(", ")}</p>
    `
    container.appendChild(card)
}

prevBtn.addEventListener("click", () =>{
    if (offset > 0) {
        offset -= limit
        fetchPokemons(offset, limit)
    }
})

nextBtn.addEventListener("click",()=> {
    offset += limit
    fetchPokemons(offset, limit)
} )

// Primmira carga 
fetchPokemons()