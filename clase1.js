// Esto es un comentario de una sola línea 

/* 
Esto es 
un comentario
de varias
líneas
// */ 
// let x = 10;
// x += 5;
// console.log(x)

let num1 = 10;
let num2 = 20;
console.log(num1 == num2);
// && || !

// if, else if, else

let edad = 18;

if (edad < 18) {
    console.log("Eres menor de edad.")
} else if (edad === 20) {
    console.log("Tenes exactamente 18 años")
} else {
    console.log("Sos mayor de edad")
}

let esMAyor = edad >= 18 ? "Sos mayor de edad" : "Sos menor de edad";
console.log(esMAyor)

for (let i = 1; i <= 5; i++) {
    if (i === 3){
        break; // Termina el bucle cuando i es igual a 3
    }
    console.log("Número: ", i)
}

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => {
    console.log("Número: ", numero)
})

let contador = 0;
while (contador < 5) {
    console.log("Contador: ", contador);
    contador++;
}

let numero = 0;
do {
    console.log("Número: ", numero)
    numero++;
} while (numero < 3);

let dia = 3;
let nombreDelDia;

switch (dia) {
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miércoles";
        break;
    case 4:
            nombreDelDia = "Jueves";
            break;
    case 5:
            nombreDelDia = "Viernes";
            break;
    case 6:
            nombreDelDia = "Sábado";
            break;   
    case 7:
        nombreDelDia = "Domingo"; 
        break;
        default:
            nombreDelDia = "Día no válido";
            break;    
}

console.log("Día de la semana: ", nombreDelDia)

function saludar() {
    let nombre = "Gustavo"
    console.log("Hola! " + nombre);
}

saludar()

const saludar = () => {
    console.log("Hola")
}

saludar()

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(3, 5);
console.log("Resultado: ", resultado)

const multiplicar = function (a , b) {
    return a * b
}
console.log("Multiplicación: ", multiplicar(4, 5))

const dividir = (a, b) => a / b;
console.log("División: ", dividir(10, 2))

// scope con funcion flechja:

const contexto = {
    nombre: "Ana",
    decirNombre: function() {
        console.log("Nombre (funcion):", this.nombre);
    },
    decirNombreFlecha: () => {
        console.log("Nombre (flecha):", this.nombre);
    }
};

contexto.decirNombre();
contexto.decirNombreFlecha();