// Variable global
let globalVar = "Soy Global";

function mostrarGlobal() {
    console.log(globalVar);
}

mostrarGlobal();

// Variable Local

function localScope() {
    let localVar = "Soy local";
    console.log(localVar);
}

localScope();

// Bloque Scope
{
    let bloqueVar = "Soy block scoped";
    console.log(bloqueVar)
}

