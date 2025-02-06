/* 
Validar propiedades de un objeto
Crea una función llamada validarProducto que reciba un objeto con las propiedades nombre, precio y stock. La función debe:

Verificar que el nombre no esté vacío.
Asegurarse de que precio sea un número positivo.
Confirmar que stock sea un número entero mayor o igual a 0.
Devuelve un objeto con las propiedades valido (boolean) y errores (un array con los errores encontrados).

Ejemplo de entrada:

const producto = { nombre: "Laptop", precio: -500, stock: 3 };

Ejemplo de salida esperada:

{
    valido: false,
    errores: ["El precio debe ser un número positivo"]
}
*/