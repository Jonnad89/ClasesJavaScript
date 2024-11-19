/*
3: Combinar y Ordenar Arrays
Crea dos arrays:

nombres1 = ["Ana", "Luis", "Pedro"]
nombres2 = ["Maria", "Jose", "Carla"]
Luego:

Combina ambos arrays en uno solo llamado todos.
Ordena los nombres alfabéticamente.
Imprime el array combinado y ordenado.
*/

let nombres1 = ["Ana", "Luis", "Pedro"]
let nombres2 = ["Maria", "Jose", "Carla"]

// Combinar ambos arrays en uno solo llamado todos

let todos = nombres1.concat(nombres2);

// Ordenar los nombres alfabéticamente

todos.sort();

// Imprimir el array combinado y ordenado
console.log(todos)


// Lo mismo pero con numeros
let numeros = [1, 5, 7, 3, 9]
let numeros2 = [2, 4, 6, 8]

let numCompleto = numeros.concat(numeros2) 

numCompleto.sort()

console.log(numCompleto)