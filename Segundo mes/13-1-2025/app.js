// const titulo = document.getElementById('titulo');
// const boton = document.getElementById('agregarClase');

// boton.addEventListener('click', () =>{
//     titulo.classList.add('resaltado')
// })

// boton.addEventListener('click', () =>{
//     titulo.classList.toggle('cambiado')
// })

 const titulo = document.getElementById('titulo');
//  const boton = document.getElementById('cambiarEstilo');

//  boton.addEventListener('click', () =>{
//     titulo.style.color = 'green';
//     titulo.style.fontSize = '24px';
//     titulo.style.textAlign = 'centers'
//  })

// const boton = document.getElementById('quitarClase')

// boton.addEventListener('click', () =>{
//     console.log("Antes de quitar la clase:", titulo.classList.value)
//     titulo.classList.remove('destacado')
//     console.log("Después de quitar la clase:", titulo.classList.value)
// })

// js para div "caja"

const caja = document.getElementById('caja');

const boton = document.getElementById('cambiarColor');

boton.addEventListener('click', () =>{
    console.log('Antes de cambiar el color: ', caja.classList.value)
    caja.classList.remove('rojo');
    caja.classList.add('verde')
    console.log('Después de cambiar el color:', caja.classList.value)
})