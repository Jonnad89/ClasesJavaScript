// Con try..catch, podemos capturar errores en código asíncrono y manejarlos adecuadamente

const fallar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Algo salió mal")
        }, 2000);
    });
};

const manejarError = async () => {
    try {
        const resultado = await fallar();
        console.log(resultado)
    } catch (error) {
        console.error("Error capturado: ", error)
    }
}; 

manejarError();