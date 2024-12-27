const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map(num => num * num);
console.log(cuadrados)


const numeros2 = [1, 2, 3, 4];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares)

const numeros3 = [1, 2, 3, 4];
const suma = numeros3.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma)