document.getElementById("lista").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Elemento clickeado: ", event.target.textcontent)
    }
});

// Crear un evento personalizado
const eventoPersonalizado = new Event("miEvento")
// Asignar un listener
document.addEventListener("miEvento", () => {
    console.log("Evento personalizado activado")
})

// Disparar el evento manualmente
document.dispatchEvent(eventoPersonalizado)

// Ejemplo de propagación

document.getElementById("padre").addEventListener("click", () => {
    console.log("Evento en el padre")
})

document.getElementById("hijo").addEventListener("click", (event) => {
    console.log("evento en el hijo")
    event.stopPropagation(); // Detiene la propagación
})

function mensaje() {
    console.log("Evento ejecutado")
}

const boton = document.getElementById("miBoton");
boton.addEventListener("click", mensaje)

// Eliminar el evento después de 5 segundos
setTimeout(() => {
    boton.removeEventListener("click", mensaje);
    console.log("Evento eliminado")
}, 5000) 

// Ejemplo de once
document.getElementById("miBoton").addEventListener("click", () => {
    console.log("Este evento solo ocurreuna vez")
}, { once: true })