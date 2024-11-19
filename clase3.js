// Objetos

let persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Desarrollador"
}

console.log(persona.nombre)
console.log(persona["edad"])
console.log(persona["nombre"])

persona.nacionalidad = "Argentino"
console.log(persona.nacionalidad)

// Los métodos son funciones asociadas a un objeto

let calculadora = {
    sumar: function(a,b) {
        return a + b
    },
    restar: function(a,b) {
        return a - b
    }
};


// Usando los métodos
console.log(calculadora.sumar(5,3))
console.log(calculadora.restar(10,7))

// Para eliminar una propiedad de un objeto, usa el operador delete
delete persona.edad;
console.log(persona.edad)

// [[Prototype]] __proto__

let animal = {
    especie: "mamífero",
    comer: function() {
        console.log("Este animal está comiendo.")
    }
}

let perro = {
    nombre: "Fido",
    ladrar: function() {
        console.log("guau guau")
    }
}

// Configurar "animal" como prototipo de "perro"
Object.setPrototypeOf(perro, animal)
console.log(perro.especie)
perro.comer()
perro.ladrar()
