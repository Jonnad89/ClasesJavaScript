// Acceder a los hijos : children y childNodes

let div = document.getElementById("contenedor")
console.log(div.children)
console.log(div.childNodes)

// Primer y último hijo

// firstElementChild
// lastElementChild

console.log(div.firstElementChild) // primer <p>
console.log(div.lastElementChild) // segundo <p>

/*
Accede a elementos hermanos
nextElementSibling -> obtiene el siguiente hermano que sea  un elemento html
previousElementSibling -> obtiene el hermano anterior que sea un elemento html
*/

let p1 = document.getElementById("parrafo1")

// console.log(p1.nextElementSibling) // devuelve el <p> "Párrafo 2"
// console.log(p1.previousElementSibling) // Devuelve null (no tiene hermano anterior)

const contenedor = document.getElementById("contenedor");
const hijos = contenedor.children; // devuelve solo los elementos hijos

console.log("Lista de hijos: ");
for (let hijo of hijos) {
    console.log(hijo.textContent)
}

// previousElementSibling -> Obtiene el hermano anterior
// nextElementSibling -> obtiene el hermano siguiente

// const actual = document.getElementById("actual")
// const anterior = actual.previousElementSibling;
// const siguiente = actual.nextElementSibling;

//console.log("Elemento actual: ", actual.textContent)
//console.log("Elemento anterior: ", anterior ? anterior.textContent : "No hay anterior")
//console.log("Elemento siguiente; ", siguiente ? siguiente.textContent : "No hay siguiente")

// Modificar elementos padre

// Agregar un nuevo párrafo dentro de un div accediendo a su parentNode.

const boton = document.getElementById("agregar")

boton.addEventListener("click", () => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrado añadido"
    contenedor.appendChild(nuevoParrafo)
})

// mouseover mouseout 
// lista.addEventListener("mouseover", (event) => {
//     if (event.target.tagName === "LI") {
//         event.target.style.backgrounColor = "lightblue"
//     }
// })