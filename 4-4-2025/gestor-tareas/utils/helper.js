export function mostrarTareas(tareas) {
  return tareas.map((tarea, i) => {
    return `${i + 1}. ${tarea.titulo} [${tarea.completado ?"✔" : "✘" }]`
  }).join('\n')
}