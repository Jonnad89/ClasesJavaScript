function realizarOperacion(numero, callback) {
    console.log("Operación iniciada...");
    setTimeout(() =>{
        let resultado = numero * 2;
        callback(resultado); // Llamada al callback
    }, 2000)
}

realizarOperacion(5, (resultado) => {
    console.log("Resultado: ", resultado); // Se ejecuta después de dos segundos
})

const miPromesa = new Promise((resolve, reject) => {
    let exito = true; // Cambia a false para simular un error
    if(exito) {
        resolve("Operación exitosa");
    }else {
        reject("Ocurrió un error");
    }
});

miPromesa
    .then((mensaje)=> {
        console.log("Éxto:", mensaje)
    })
    .catch((error)=>{
        console.log("Error", error)
    })