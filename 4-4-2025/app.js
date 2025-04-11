// import {sumar, PI} from './math.mjs'

// console.log(sumar(3,5))
// console.log(PI)
import readline from 'readline';
import {agregarTarea,listarTareas,completarTarea, eliminarTarea} from './gestor-tareas/tareas/tareas.js'
// import {mostrarTareas, } from './gestor-tareas/utils/helper.js'
import {guardarTareas, cargarTareas} from './gestor-tareas/gestorArchivos.js'
// import { mostrarTareas } from './gestor-tareas/utils/helper.js';



// cargar tareas existentes

let tareas = cargarTareas()
console.log(tareas)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.sstdout
})

function mostrarMenu() {
    console.log("tareas cargadas:", tareas)
    console.log(`\n ===GESTOR DE TAREAS ===`)
    console.log(`1. Ver tareas`)
    console.log(`2. Agregar tarea`)
    console.log(`3. Completar tarea`)
    console.log(`4. Eliminar tarea`)
    console.log(`Salir`)


rl.question('Elige una opción:', opcion => {
    switch (opcion) {
        case '1':
            mostrarTareas()
            break
        case '2':
            rl.question('Ingrese el título de la tarea:', titulo =>{
                agregarTarea(titulo, tareas)
                guardarTareas(tareas)
                console.log('✅ Tarea agregada')
                mostrarMenu()
            })    
            return
        case '3':
            rl.question('Número de tarea a completar:', num => {
                const indice = parseInt(num) -1;
                completarTarea(indice, tareas)
                guardarTareas(tareas)
                console.log('✅ Tarea completada')
                mostrarMenu()
            })
            return
        case '4':
            rl.question('Número de tarea a eliminar:', num => {
                eliminarTarea(parseInt(num) - 1, tareas)
                guardarTareas(tareas)
                console.log('🗑️ Tarea eliminada')
                mostrarMenu()
            })    
            return 
        case '5':
            console.log('👋 Hasta luego!')
            rl.close()
            return
        default:
            console.log('❌ opción inválida')
            mostrarMenu()    
        }
    })
}

function mostrarTareas() {
 if(tareas.length === 0){
    console.log("No hay tareas.")
 } else {
    tareas.forEach((tarea, i) =>{
        const estado = tarea.completado ? '✔' : '✘';
        console.log(`${i + 1}. [${estado}] ${tarea.titulo}`)
    })
 }
 mostrarMenu()
}

mostrarMenu()
// Usar lógica de tareas
// agregarTarea("Estudiar módulos", tareas)
// agregarTarea("Hacer ejercicios", tareas)
// completarTarea(1, tareas);

// Mostrar tareas
// console.log("Tareas:")
// tareas.forEach((tarea, i) => {
//     console.log(`${i + 1}. ${tarea.titulo} - ${tarea.completado ? '✔' : '✘'}`)
// })

// Guardar en archivo
// guardarTareas(tareas)




















// const tareas = listarTareas();
// console.log(mostrarTareas(tareas))

// const tareaCompletada = completarTarea(1)
// console.log("Tarea completada:", tareaCompletada)