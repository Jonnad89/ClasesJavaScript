
// Selección de elementos
const title = document.getElementById("main-title");
// const box = document.querySelector(".box");
const box = document.getElementById("myBox")
const ul = document.querySelector(".list");
// Botones
const addButton = document.getElementById("addClass");
const removeButton = document.getElementById("removeClass");
const toggleButton = document.getElementById("toggleClass");
const checkButton = document.getElementById("checkClass");

addButton.addEventListener("click", () =>{
    box.classList.add("active");
    console.log("Clase 'active' agregada.")
})

// ** Eliminar una clase **

removeButton.addEventListener("click", () =>{
    box.classList.remove("active");
    console.log("Clase 'active' eliminada")
})

// ** Alternar una clase **

toggleButton.addEventListener("click", () =>{
    box.classList.toggle("highlight");
    console.log("Clase 'hightlight' alternada ");
})

//  ** Verificar s un elemento tiene una clase **
checkButton.addEventListener("click", () =>{
    if (box.classList.contains("active")) {
        console.log("La caja tiene la clase 'active'.")
        alert("La caja tene la clase 'active")
    } else {
        console.log("La caja no tiene la clase 'active'")
        alert("La caja no tiene la clase 'active'")
    }
})
// ** Manipulación de clases y estilos **
// Cambiar estilos de la caja
box.style.backgroundColor = "lightblue";
box.style.border = "2px solid black";

// Alternar clase "highlight" al hacer click en la caja
box.addEventListener("click", () =>{
    box.classList.toggle("highlight")
    console.log(box)
});

//** Creación de elementos dinámicos **
// Crear elementos iniciales en la lista

for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    ul.appendChild(li)
}

// ** Delegación de eventos **
// Detectar clicks en elementos de la lista
ul.addEventListener("click", (event) =>{
    alert(`Ha clickeado en: ${event.target.textContent}`)
    event.target.remove() // Eliminar elemento clickeado
})

// ** Agregar nuevos elementos **

// button.addEventListener("click", () =>{
//     const newLi = document.createElement("li");
//     newLi.textContent = `Elemento ${ul.children.length + 1}`;
//     ul.appendChild(newLi)
// })

// Agregar una clase
