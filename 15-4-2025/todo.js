const input = document.getElementById('tareaInput')
const boton = document.getElementById('agregarBtn')
const lista = document.getElementById('listaTareas')

let tareas = JSON.parse(localStorage.getItem('tareas')) || []

function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(tareas))
}

function renderTareas() {
  lista.innerHTML = ''
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <span class="${tarea.completado ? 'completada' : ''}">${tarea.texto}</span>
      <button data-accion="completar" data-index="${i}">✔</button>
      <button data-accion="eliminar" data-index="${i}">🗑️</button>
    `
    lista.appendChild(li)
  })
}

lista.addEventListener('click', e => {
  const i = e.target.dataset.index
  if (e.target.dataset.accion === 'eliminar') {
    tareas.splice(i, 1)
  } else if (e.target.dataset.accion === 'completar') {
    tareas[i].completado = !tareas[i].completado
  }
  guardarTareas()
  renderTareas()
})

boton.addEventListener('click', () => {
  if (input.value.trim() === '') return
  tareas.push({ texto: input.value, completado: false })
  input.value = ''
  guardarTareas()
  renderTareas()
})

renderTareas()
