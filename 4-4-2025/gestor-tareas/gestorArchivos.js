import fs from 'fs'
import path from 'path'
const archivo = path.resolve("./tareas.json")

// guardar las tareas en un archivo JSON

export function guardarTareas(tareas) {
    try {
        fs.writeFileSync(archivo, JSON.stringify(tareas, null, 2), 'utf-8')
    } catch(error){
    console.error("Error al guardar tareas:", error)
}
}

// Lee las tareas desde el archivo JSON

export function cargarTareas() {
    // if (fs.existsSync(rutaArchivo)) {
    //     const data = fs.readFileSync(rutaArchivo, 'utf-8')
    //     return JSON.parse(data)
    // }
    // return []; // si no existe, retornamos un array vacio
   try {
    if(fs.existsSync(archivo)) {
        const data = fs.readFileSync(archivo, 'utf-8')
        return JSON.parse(data)
    } else {
        return []
    }
   } catch (error) {
    console.error("Error al cargar tareas:", error)
    return []
   }
}

