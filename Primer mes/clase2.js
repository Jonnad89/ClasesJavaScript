// Array de números
let numeros = [1, 2, 3, 4, 5];

//  Array de strnig
let frutas = ["manzana", "banana", "naranja"];

//  Array de diferentes tipos de datos
let mixto = [1, "Hola", true, null]

console.log(frutas[0])

// Modificar un elemento del array
frutas[1] = "Frutilla";
console.log(frutas)

// Métodos de arrays

// push: agregaruno o más elementos al final del array
frutas.push("uva");
console.log(frutas)

// pop: Elimina el último elemento del array y lo devuelve

let ultimaFruta = frutas.pop();
console.log(ultimaFruta)
console.log(frutas)

// shift: Elimina el primer elemento del array y lo devuelve

let primerFruta = frutas.shift();
console.log(primerFruta);
console.log(frutas)

// unshift: Agrega uno o más elementos al inicio del array 
frutas.unshift("limón");
console.log(frutas)

// slice: Crea un nuevo array con una porción del array original, sin modificarlo
let algunasFrutas = frutas.slice(0, 2);
console.log(algunasFrutas)

// splice: Cambia el contendo de un array eliminando o reemplazando y/o agregando nuevos elementos en una posición espec´fica

frutas.splice(1,1, "sandía");
console.log(frutas)

// concat: Combina dos o más arrays y devuelve uno nuevo
let otrasFrutas = ["pera", "mango"];
let todasLasFrutas = frutas.concat(otrasFrutas)
console.log(todasLasFrutas)

// join: Combina todos los elementos del array en una cadena de texto, con un separador opcional

let cadenaFrutas = frutas.join(" - ");
console.log(cadenaFrutas)

// forEach: Ejecuta una funcón para cada elemento del array, útil para realizar operaciones con cada elemento
frutas.forEach(function(fruta) {
    console.log("Mi fruta favorita es la " + fruta)
});

// masp: Crea un nuevo array con los resultados de ejecutar una función en cada elemento del array original

let frutasEnMayusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
console.log(frutasEnMayusculas)

// bucles
// for: Permite iterar sobre los elementos utilizando el índice

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// for...of: Una forma más directa de recorrer los elementos de un array

for (let fruta of frutas) {
    console.log(fruta)
}

// forEach: Recorre el array y aplica una función a cada elemento

frutas.forEach((fruta) => console.log(fruta))

// map: Permite transformar cada elemento del array y crear un nuevo array con esos resultados

let frutasPlural = frutas.map((fruta) => fruta + "s");
console.log(frutasPlural)

// Ejemplo usando arrays y sus métodos

let numbers = [1, 2, 3, 4, 5];

// agregar un número al final
numbers.push(6)
console.log(numbers)

// Eliminar el primer número
numbers.shift();
console.log(numbers)

//  Multiplicar cadanúmero por 2 usando map

let numerosDoblados = numbers.map((num) => num * 2);
console.log(numerosDoblados)

//  Sumamos todos los números usando forEach
let suma = 0;
numbers.forEach((num) => (suma += num));
console.log("Suma total: ", suma)
