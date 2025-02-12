/*
appendChild(nuevoElemento) -> Agrega un elemento al final de otro elemento

insertBefore(nuevoElemento, referencia) ->Inserta un elemento antes de otro dentro de un padre

replaceChild(nuevoElemento, viejoElemento)-> Reemplaza un hijo eistente con otro nuevo

removeChild(elemento) -> Elimina un hijo de un elemento padre


========= Métodos modernos (simplifican las tareas anterior) ========= 

1- apped(nuevoElemento) -> similar a appendChild, pero más flexible

2- prepend(nuevoElemento) -> Inserta un nuevo elemento al inicio de un padre

3- replaceWith(nuevoElemento) -> Reemplaza unnodo sin necesidad de acceder al padre

4- remove() -> Elimina un nodo directamente


* Si necesitas agregar un solo nodo, usa appendChild o append()

* Si necesitas modificar todo el contenido, usa innerHTML

* Si queres insertar HTML sin borrar el contenido,usa insertAdjacentHTML()
*/
const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("agregar");

boton.addEventListener("click", () =>{
    const nuevoParrafo = document.createElement("p");
    // nuevoParrafo.textContent = "Nuevo párrafo agregado";
    // contenedor.appendChild(nuevoParrafo)
    nuevoParrafo.textContent = "Nuevo párrafo agregado con append()"

    // append() permite agregar múltiples nodos o incluso cadenas de texto directamente
    contenedor.append(nuevoParrafo, "- Texto adicional sin crear un nodo.") 
})

// insertar un nuevo párrafo antes del rimero dentro del div utilizando insertBefore

const botonInsertar = document.getElementById("insertar")

botonInsertar.addEventListener("click", () =>{
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este párrafo se insertó antes del primero."

    const primerParrafo = contenedor.firstElementChild;
    contenedor.insertBefore(nuevoParrafo, primerParrafo)
})

const botonReemplazar = document.getElementById("reemplazar");

// botonReemplazar.addEventListener("click", () => {
//     const nuevoParrafo = document.createElement("p");
//     nuevoParrafo.textContent = "Este párrado reemplazó al anterior."

//     const primerParrafo = contenedor.firstElementChild;
//     contenedor.replaceChild(nuevoParrafo, primerParrafo)
// })

const botonHTML = document.getElementById("insertarHTML")

botonHTML.addEventListener("click", () => {
    contenedor.insertAdjacentHTML("beforeend", "<p>Párrafo insertado con insertAdjacentHTML</p>")
})

// Eliminar un elemento con removeCHild()

const botonEliminar = document.getElementById("eliminar");

botonEliminar.addEventListener("click", () => {
    const ultimoParrafo = contenedor.lastElementChild;
    // if (ultimoParrafo){
    //     contenedor.removeChild(ultimoParrafo)
    // }
    if(ultimoParrafo){
        ultimoParrafo.remove()
    }
})

// Eliminar todos los párrafos al hacer click en un botón

const botonEliminarTodos = document.getElementById("eliminarTodos");

botonEliminarTodos.addEventListener("click", () =>{
    document.querySelectorAll("#contenedor p").forEach(parrafo => parrafo.remove())
})

const botonPrepend = document.getElementById("insertarInicio");
botonPrepend.addEventListener("click", () =>{
    const nuevoParrafo = document.createElement("p")
    nuevoParrafo.textContent = "Este párrafo fue agregado con prepend() al inicio"
    contenedor.prepend(nuevoParrafo)
})

botonReemplazar.addEventListener("click", () => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este párrado reemplazó al anterior usando replaceWith()."

    const primerParrafo = contenedor.firstElementChild;
    primerParrafo.replaceWith(nuevoParrafo)
})