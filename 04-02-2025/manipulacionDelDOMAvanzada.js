const contenedor = document.getElementById("contenedor")

console.log(contenedor.childNodes); // Incluye elementos, textos y comentarios
console.log(contenedor.children); // Solo devuelve los elementos HTML

// Creación y eliminación dinámica de elementos

const nuevoParrafo = document.createElement("p"); // crea un <p>
nuevoParrafo.textContent = "Este es un nuevo párrafo"; // Agrega texto
document.body.appendChild(nuevoParrafo); // Lo añade al final del <body>

// Eliminar elementos

document.body.removeChild(nuevoParrafo); // Elimina el párrafo recién creado.

// Ejemplo con botones

const btnAgregar = document.getElementById("agregar");
const btnEliminar = document.getElementById("eliminar");
let parrafo;

btnAgregar.addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Párrafo agregado dinámicamente";
    document.body.appendChild(parrafo)
})

btnEliminar.addEventListener("click", () =>{
    if (parrafo) document.body.removeChild(parrafo)
})

// Uso de insertAddjacentHTML

// element.inserAdjacentHTML(posicion, htmlString)

/*
beforebegin => Antes del elemento
afterbegin => Despues del elemento, al inicio
beforeend => Dentro del elemento, al final
afterend => después del elemento
*/

contenedor.insertAdjacentHTML("beforeend", "<p>Este es un párrafo insertado</p>")

// Fragmentos del DOM (DocumentFragment)

// Sin fragmento (ineficiente)
const lista = document.getElementById("lista")

for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li")
    item.textContent = `Elemento ${i}`
    lista.appendChild(item)
}

// Con DocumentFragment (eficiente)

const fragmento = document.createDocumentFragment();

for(let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = `Elemento ${i}`;
    fragmento.appendChild(item)
}

document.getElementById("lista").appendChild(fragmento); // inserta todo en una sola operación
