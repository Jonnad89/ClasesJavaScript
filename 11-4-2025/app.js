/*
map()
Crea un nuevo array aplicando una función a cada elemento del original
*/

const numeros = [1, 2, 3];
const dobles = numeros.map((n) => n * 2);
console.log(dobles);

// filter() filtra elementos según una condición
const num2 = [1, 2, 3, 4];
const pares = num2.filter((n) => n % 2 === 0);
console.log(pares);

// reduce() Reduce un array a un solo valor

const numReduce = [1, 2, 3, 4];
const suma = numReduce.reduce((total, n) => total + n, 0);
console.log(suma);

// includes: Verifica si un valor está presente en un array o string
const frutas = ["manzana", "banana"];
console.log(frutas.includes("banana"));

// find(): Devuelve el primer elemento que cumple una condición
const users = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 },
];

const mayor = users.find((u) => u.edad > 26);
console.log(mayor);

//some() Verifica si al menos un elemento cumple la condición

const edades = [15, 18, 21];
console.log(edades.some((e) => e >= 18));

// every(): Verifica si todos los elementos cumplen una condición
const edadEvery = [18, 19, 20];
console.log(edadEvery.every((e) => e >= 18));

// sort(): ordena un array
const numSort = [3, 2, 1];
console.log(numSort.sort());

// trim(): Elimina espacios al inicio y al final de un string
const texto = "    hola munda    ";
console.log(texto.trim());

// split(): Convierte un string en array, separándolo por un caracter
const frase = "Hola mundo JS";
const palabras = frase.split(" ");
console.log(palabras);

// ejemplo includes()
// caso de uso, para verificar si un producto ya está en el carrito antes de agregarlo
const productos = ["notebook", "teclado", "mouse"];

if (productos.includes("mouse")) {
  console.log("El mouse está disponible");
}

//ejemplo some()
//caso de uso, en un panel de control verifica si hay al menos un usuario administrador registrado
const usuariosSome = [
  { nombre: "Ana", admin: false },
  { nombre: "Luis", admin: true },
];

const hayAdmin = usuariosSome.some((u) => u.admin);
console.log("¿HAy un administrador?", hayAdmin);

//ejemplo every()
// caso de uso: En un formulario de inscripcion, podrias validar si todos los participantes son mayores de edad
const edadesEvery = [22, 35, 18, 27];

const todosMayoresDeEdad = edadesEvery.every((edad) => edad >= 18);
console.log("¿Todos son mayores de edad?", todosMayoresDeEdad);

// ejemplo find()

const productosFind = [
  { id: 1, nombre: "Monitor" },
  { id: 2, nombre: "Teclado" },
];

const teclado = productosFind.find((p) => p.nombre === "Teclado");
console.log(teclado);

// ejemplo con findIndex(): Devuelve el índice del primer elemento que cumple con la condición
//caso de uso: para actualizar o eliminar un elemento en un array basado en su valor
const numFindex = [3.6, 9, 12];
const indice = numFindex.findIndex((n) => n > 8);
console.log("Primer número mayor a 8 está en el índice:", indice);

// Gestor de productos
let productosGestor = [
    { nombre: "Teclado", precio: 45 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Parlantes", precio: 35 }
];

function mostrarProductos() {
    const lista = document.getElementById("listaProductos")
    lista.innerHTML = ""
    productosGestor.map(p => {
        const li = document.createElement("li")
        li.textContent = `${p.nombre} - ${p.precio}`
        lista.appendChild(li)
    })
}

function filtrarBaratos() {
    const baratos = productosGestor.filter(p => p.precio < 50)
    const lista = document.getElementById("listaProductos")
    lista.innerHTML = ""
    baratos.map(p => {
        const li = document.createElement("li")
        li.textContent = `${p.nombre} - ${p.precio}`
        lista.appendChild(li)
    })
}

function ordenarPorNombre() {
    productosGestor.sort((a,b) => a.nombre.localeCompare(b.nombre))
    mostrarProductos()
}

function ordenarPorPrecio() {
    productosGestor.sort((a,b) => a.precio - b.precio)
    mostrarProductos()
}

function calcularTotal() {
    const total =productosGestor.reduce((acc, p) => acc + p.precio, 0)
    alert(`Total del stock: $${total}`)
}

function eliminarProducto() {
    const nombre = prompt("Ingrese el nombre del producto a eliminar:")
    const indice = productosGestor.findIndex(p => p.nombre.toLowerCase() === nombre.toLocaleLowerCase())
    if (indice !== -1){
        productosGestor.splice(indice, 1)
        alert(`Producto "${nombre}" eliminado.`)
        mostrarProductos()
    } else {
        alert("Producto no encontrado.")
    }
}