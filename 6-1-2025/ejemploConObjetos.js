const producto = {
    nombre: "Pc Gamer",
    especificaciones: ["16GB RAM", "512Gb SSD", "Intel i7"]
};

// mostrar todas las especificaciones
console.log("Especificaciones: ");
producto.especificaciones.forEach(especificacion => console.log("- " + especificacion));

// Agregar una nueva especificación

producto.especificaciones.push("Pantalla 4k");
console.log("Especificaciones actualizadas: ", producto.especificaciones)

// Eliminar una especificación
producto.especificaciones.splice(1,1); // Elimina la especificación en el indice 1 
console.log("Después de eliminar una especificación:" , producto.especificaciones)


// Acceso específico
console.log("Primera especificación: ", producto.especificaciones[0])
