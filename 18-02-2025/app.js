/* 
Método                      Descripción
setItem("clave", "valor")	Guarda un valor
getItem("clave")	        Recupera un valor
removeItem("clave")	        Elimina un valor
clear()	                    Borra todo el almacenamiento
*/

const inputNombre = document.getElementById("nombre")
const btnGuardar = document.getElementById("guardar")
const btnMostrar = document.getElementById("mostrar")
const resultado = document.getElementById("resultado")

// Recuperar del localStorage
btnGuardar.addEventListener("click", () => {
    localStorage.setItem("nombreUsuario", inputNombre.value)
    alert("Nombre guardado!");
});

// Recuperar del localStorage
btnMostrar.addEventListener("click", () => {
    const nombre = localStorage.getItem("nombreUsuario");
    resultado.textContent = nombre ? `Tu nombre es: ${nombre}` : "No hay nombre guardado" 
})

const usuario = { nombre : "Juan", edad: 30, ciudad: "Madrid" }

// Guardar objeto
localStorage.setItem("usuario", JSON.stringify(usuario))

// Recuperar objeto
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"))

console.log(usuarioGuardado.nombre) // Juan

sessionStorage.setItem("tema","oscuro");
console.log(sessionStorage.getItem("tema"))
sessionStorage.removeItem("tema")
console.log(sessionStorage.getItem("tema"))// 
// Borrar todo -> localStorage.clear()

// Crear una cookie con expiración de 7 días

document.cookie = "usuario=Juan; expires=" + new Date(2025, 0, 1).toUTCString();
console.log(document.cookie)