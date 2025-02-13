/*
addEventListener(evento, callback) -> Nos permite asociar eventos a elementos del DOM sin sobrescribir otros eventos existentes.

removeEventListener( evento, callback) -> Sirve para eliminar un evento previamente agregado.

event.preventDefaul() -> Evita el comportamiento por defecto de ciertos elementos (ej: evitar que un formulario se envíe).

event.stopPropagation() -> Detiene la propagación de un evento a los elementos padres en el DOM.

*/

const caja = document.getElementById("caja");

caja.addEventListener("mouseenter", ()=> {
    caja.style.backgroundColor = "lightgreen";
    caja.textContent = "Mouse adentro"
});

caja.addEventListener("mouseleave", () =>{
    caja.style.backgroundColor = "lightblue";
    caja.textContent = "Mouse afuera"
});

caja.addEventListener("click", () => {
    alert("¡Hiciste click en la caja!")
});

const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        alert(`Hiciste click en: ${event.target.textContent}`)
    }
});

const input = document.getElementById("campoTexto");

input.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`)
});

const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value;
    if(nombre === "") {
        e.preventDefault();
        alert("Por favor, ingresatu nombre antes de enviar.")
    }
});

// document.getElementById("rojo").addEventListener("click", () =>{
//     document.body.style.backgroundColor = "red"
// });

// document.getElementById("verde").addEventListener("click", () =>{
//     document.body.style.backgroundColor = "green"
// });

// document.getElementById("azul").addEventListener("click", () =>{
//     document.body.style.backgroundColor = "blue"
// });

// let contador = 0;
// const spanContador = document.getElementById("contador")

// document.getElementById("incrementar").addEventListener("click", () =>{
//     contador++;
//     spanContador.textContent = contador;
// });

// document.getElementById("decrementar").addEventListener("click", () =>{
//    if(contador > 0){
//     contador--;
//     spanContador.textContent = contador;
//    }
// })
let contador = 0;
const maximo = 10;
const minimo = 0;

const spanContador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");
const btnIncrementar = document.getElementById("incrementar")
const btnDecrementar = document.getElementById("decrementar")
const btnResetear = document.getElementById("resetear")

function actualizarContador() {
    spanContador.textContent = contador;
    mensaje.textContent = "";

    // Deshabilitar botones si se alcanza el limite

    btnIncrementar.disabled = contador >= maximo;
    btnDecrementar.disabled = contador <= minimo;

    // Mensaje de alerta cuando se alcanzan los límites
    if (contador === maximo) mensaje.textContent = "Has alcanzado el limite maximo"
    if (contador === minimo) mensaje.textContent = "No puedes bajar de 0"
}

btnIncrementar.addEventListener("click", () =>{
    if(contador < maximo) {
        contador++;
        actualizarContador()
    }
})

btnDecrementar.addEventListener("click", () => {
    if(contador > minimo) {
        contador --;
        actualizarContador()
    }
})

btnResetear.addEventListener("click", () =>{
    contador = 0;
    actualizarContador()
})

// Llamamos a la función para inicializar correctamente los botones
actualizarContador()