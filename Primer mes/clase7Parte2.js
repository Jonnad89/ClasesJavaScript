
const numeros = [1,2,3];

const [primero, segundo, tercero] = numeros;

console.log(primero)
console.log(segundo)
console.log(tercero)

// Desestructuración de objetos

const persona = {
    nombre : "Maria",
    edad: 25,
    pais: "Uruguay"
};

const {nombre, edad, pais} = persona;

console.log(nombre)
console.log(edad)
console.log(pais)

// Alias y valores predeterminados

const usuario = { nombre: "Carlos", edad: 30};

// Alias para propiedades
const {nombre: usuarioNombre, edad: usuarioEdad} = usuario;

// Valor predeterminado

const { ciudad = "desconocida"} = usuario;

console.log(usuarioNombre)
console.log(usuarioEdad)
console.log(ciudad)
// Spread Operator(...)
const [primer, ...resto] = [1,2,3,4];
console.log(primer);
console.log(resto);

// expandir elementos de la constante numeros de la linea 2

const nuevosNumeros = [...numeros, 4, 5];

console.log(nuevosNumeros)

// Ejemplo con objetos

const objeto1 = {a: 1, b: 2};
const objeto2 =  {...objeto1, c:3};

console.log(objeto2)