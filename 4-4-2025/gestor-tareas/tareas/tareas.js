let tareas = [];

export function agregarTarea(titulo, tareas) {
    // tareas.push({titulo, completo: false})
    const nuevaTarea = {
        titulo: titulo,
        completado: false
    }
    tareas.push(nuevaTarea)
}

export function listarTareas(tareas) {
    return tareas;
}

export function completarTarea(index) {
    if(tareas[index]) {
        tareas[index].completado = true;
        return tareas[index];
    }else {
        return null; // o lanzar un error
    }
}

export function eliminarTarea(index, tareas) {
    if(tareas[index]) {
        tareas.splice(index, 1)
    } else {
        console.log("Indice invalido")
    }
}