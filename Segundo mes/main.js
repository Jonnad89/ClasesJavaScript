const titulo = document.getElementById("titulo") 
const parrafos = document.getElementsByTagName("p")
const destacados = document.getElementsByClassName("descatado")
const boton = document.querySelector(".boton")
const todosLosBotones =  document.querySelectorAll(".boton")

// Titulo
titulo.textContent = "Nuevo Título";
titulo.innerHTML = "<strong>Texto en Negrita</strong>"

// boton.setAttribute("disabled", true)
titulo.style.color = "red";

titulo.classList.add("resaltado"); // Agrega una clase
titulo.classList.remove("resaltado") // Elimina una clase
titulo.classList.toggle("resaltado"); // Agrega si no está, o la quita si ya está
console.log(titulo.classList.contains("resaltado"))
titulo.textContent = "¡DOM manipulado con JavaScript"

// Nuevo elemento

const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Este es un nuevo párrafo"
document.body.appendChild(nuevoElemento)

// Para eliminarlo después
document.body.removeChild(nuevoElemento)

// Botón
// Manejo de eventos
boton.addEventListener("click", () => {
    titulo.classList.toggle("resaltado"); // Alterna la clase resaltado
    console.log("Clase resaltado activada: ", titulo.classList.contains("resaltado"))
})

if (titulo && boton) { // Verifica que existen antes de usarlos
    titulo.textContent = "¡DOM manipulado con JavaScript";
    boton.addEventListener("click", () => {
        titulo.classList.toggle("resaltado");
        console.log("Clase resaltado activada: ", titulo.classList.contains("resaltado"))
    });
} else {
    console.error("No se encontraron los elementos en el DOM")
}
