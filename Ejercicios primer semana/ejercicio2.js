/*
2: Contar Elementos Mayores a un Valor
Crea un array llamado numeros que contenga al menos 10 números diferentes. Luego:

Escribe una función que recorra el array y cuente cuántos números son mayores a 50.
Imprime el resultado en la consola.

ejemplo de entrada:
[23, 56, 78, 12, 45, 89, 33, 67, 90, 10]

ejemplo de salida
5
*/

let numeros = [23, 56, 78, 12, 45, 89, 33, 67, 90, 10];

function contarMayoresA50(arr) {
    let contador = 0;
    for (let num of arr) {
        if (num > 50){
            contador ++;
        }
    }
    return contador;
}

// llamar a la función y almacenar el resultado:
let resultado = contarMayoresA50(numeros)
// Imprimir en consola el resultado
console.log(`Cantidad de números mayores a 50: ${resultado}` )