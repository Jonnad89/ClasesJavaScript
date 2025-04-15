Crear una mini aplicación que permita a los usuarios agregar tareas a una rutina diaria, validar los datos ingresados y almacenarlos en localStorage. Marcar las tareas como completadas y ver cuentas tareas quedan pendientes

requisitos: 
formulario de ingreso de tareas
*campos: 
    nombre de la tarea (input de texto) 
    hora de la tarea (input de tipo time)

*Validar que el campo nombre no esté vacío
*Mostrar errores si los datos no son válidos

*mostrar cada tarea en formato: 
    09:00 - Hacer ejercicio [✔]

*Botones para:
    *completar tarea(cambia estilo y estado)
    *elimminar tarea

* Contador de tareas:
    *mostrar:
       * total de tareas
       * completadas
       * pendientes
    
* Almacenamiento
    * Todas las tareas se guardan en localStorage y persisten al recargar la página

    .completada { text-decoration: line-through; }
    Array.prototype.filter()