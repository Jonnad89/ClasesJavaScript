// Obtener elementos clave del DOM
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const form = document.getElementById("form-tarea");
const listaTareas = document.getElementById("lista-tareas");
const listaCompletadas = document.getElementById("lista-completadas");

// Función para cambiar entre tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Función de tareas
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function renderTareas() {
  listaTareas.innerHTML = "";
  listaCompletadas.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div>
            <stron>${tarea.titulo}</stron><br>
            <small>${tarea.descripcion || ""}</small>
        </div>
        <div>
            ${
              !tarea.completado
                ? `<button onclick="completarTarea(${index})">✅</button>`
                : ""
            }
            <button onclick="eliminarTarea(${index})">🗑️</button>
        </div>
        `;
    li.className = tarea.completado ? "completada" : "";
    (tarea.completado ? listaCompletadas : listaTareas).appendChild(li);
  });
}

function agregarTarea(titulo, descripcion) {
  tareas.push({ titulo, descripcion, completado: false });
  guardarTareas();
  renderTareas();
}

function completarTarea(index) {
  tareas[index].completado = true;
  guardarTareas();
  renderTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  guardarTareas();
  renderTareas();
}

// Evento ll enviar el formulario

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  if (titulo) {
    agregarTarea(titulo, descripcion)
    form.reset()
    // Volver a pestaa de tareas
    document.querySelector('.tab[data-tab="tareas"]').click()
  }
});

// Render inicial
renderTareas()
