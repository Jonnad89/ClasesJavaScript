function crearContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1())
console.log(contador1())
console.log(contador1())

// Uso práctico

function saludar(nombre) {
    return function(){
        console.log(`Hola, ${nombre}`);
    };
}

const saludoJuan = saludar("Juan");
saludoJuan();