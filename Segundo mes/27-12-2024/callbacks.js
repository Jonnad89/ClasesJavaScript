// Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una tarea

function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario ${nombre}`);
    callback();
}

procesarUsuario("Juan", () => {
    console.log("Callback ejecutado")
})

function cargarDatos(callback) {
    setTimeout(()=>{
        console.log("Datos cargados");
        callback();
    },2000);
}

cargarDatos(() => {
    console.log("Continuamos con la ejecución")
})