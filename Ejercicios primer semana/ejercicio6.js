/* 
Array de Números Aleatorios
Escribe una función que:

Genere un array con 10 números aleatorios entre 1 y 100.
Devuelva un nuevo array con los números que son múltiplos de 5.
Imprima ambos arrays.
*/

// Función para generar un array de 10 números aleatorios

function generarNumerosAleatorios() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1) // Números entre 1 y 100
    }
    return numeros;
}

// Función para filtrar múltiplos de 5 de un array

function filtrarMultiplosDe5(arr) {
    return arr.filter(numero => numero % 5 === 0);
}

// Generar el array de números aleatorios

let numerosAletorios = generarNumerosAleatorios();

// Filtrar los múltiplos de 5

let multiplosDe5 = filtrarMultiplosDe5(numerosAletorios);

// Imprimir ambos arrays

console.log("Array de números aleatorios: ", numerosAletorios)
console.log("Números múltiplos de 5: ", multiplosDe5)

// para copiar y pegar rápido: shift + alt + flecha para abajo