// let nombre = document.getElementById("nombre").value
// console.log(nombre)

// document.getElementById("miFormulario").addEventListener("submit", function(event)  {
//     event.preventDefault(); // Evita el envío por defecto
//     console.log("Formulario validado y listo para enviar!")
// })

// if (nombre.trim() === "") {
//     alert("El campo nombre no puede estar vacio")
// }

// document.getElementById("miFormulario").addEventListener("submit", async function(event) {
//     event.preventDefault()

//     let formData = new FormData(this)

//     let respuesta = await fetch("https://ejemplo.com/api", {
//         method: "POST",
//         body: formData
//     })

//     let resultado = await respuesta.json();
//     console.log("Datos enviado:", resultado)
// })

// document.getElementById("formulario").addEventListener("submit", function(event){
//     event.preventDefault();

//     let nombre = document.getElementById("nombre").value.trim();
//     if(nombre === "") {
//         alert("El campo no puede estar vacio")
//     } else {
//         console.log("Nombre ingresado:", nombre)
//     }

//     let email = document.getElementById("email").value.trim();
//     let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!regexEmail.test(email)) {
//         alert("Por favor, ingresa un email valido")
//     } else {
//         console.log("Email valido: ", email)
//     }
// })

// document.getElementById("mensaje").addEventListener("input", function() {
//     let cantidad = this.value.length;
//     document.getElementById("contador").textContent = cantidad;
// })

 document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    let formData = new FormData(this);

    for(let [key, value] of formData.entries()){
        console.log(`${key}: ${value}`)
    }
 })

 document.addEventListener("DOMContentLoaded", function() {
    // Cargar datos almacenados
    document.getElementById("nombre").value = localStorage.getItem("nombre") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("mensaje").value = localStorage.getItem("mensaje") || "";

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    // guardar en localStorage
    localStorage.setItem("nombre", document.getElementById("nombre").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("mensaje", document.getElementById("mensaje").value);

    // alert("Datos guardados correctamente")

    document.getElementById("mensajeExito").textContent = "Formuario enviado con exito";
    document.getElementById("mensajeExito").style.color = "green"

    // Limpiar el formulario
    this.reset();
})
 })

// document.getElementById("texto").addEventListener("input", function(){
//     let palabras = this.value.trim().split(/\s+/).filter(palabra => palabra !== "").length;
//     document.getElementById("contador").textContent = palabras;
// })

const inputs = document.querySelectorAll("#formulario input, #formulario textarea")
const btnEnviar = document.getElementById("btnEnviar");

inputs.forEach(input => {
    input.addEventListener("input", verificarCampos);
});

function verificarCampos() {
    let todosLlenos = [...inputs].every(input => input.value.trim() !== "");
    btnEnviar.disable = !todosLlenos;
}