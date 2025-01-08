// Contar la cantidad de habilidades de cada usuario

const usuarios = {
    Juan: ["JavaScript", "React", "Node.js"],
    Ana: ["Html", "CSS"],
    Pedro: ["Python", "Django", "Flask", "Pandas"]
};

for (let usuario in usuarios) {
    const cantidadHabilidades = usuarios[usuario].length;
    console.log(`${usuario} tiene ${cantidadHabilidades} habilidades.`)
}