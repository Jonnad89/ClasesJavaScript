class CuentaBancaria {
    #saldo; // Campo privado
    #historial; 
    #retirosRestantes;

    constructor(nombre, saldoInicial, limiteRetiros) {
        this.nombre = nombre;
        this.#saldo = saldoInicial;
        this.#historial = [];
        this.#retirosRestantes = limiteRetiros;
    }

    aplicarInteres(porcentaje) {
        const interes = this.#saldo * (porcentaje / 100);
        this.#saldo += interes;
        console.log(`Interés aplicado: $${interes.toFixed(2)}. Saldo actual: $${this.#saldo.toFixed(2)}`)
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
        this.#historial.push(`Depósito: $${cantidad}`)
        console.log(`Depósito de $${cantidad}. Saldo actual: $${this.#saldo}.`)
    }

    retirar(cantidad) {
        if (this.#retirosRestantes === 0) {
            console.log("Has alcanzado el límite de retiros diarios.")
        } else if ( cantidad > this.#saldo ){
            console.log("fondos insuficientes.")
        }else {
            this.#saldo -= cantidad;
            this.#historial.push(`Retiro: $${cantidad}`)
            this.#retirosRestantes--;
            console.log(`Retiro de $${cantidad}. Saldo actual: $${this.#saldo}. Retiros restantes: ${this.#retirosRestantes}`)
        }
    }
    resetearRetiros(limiteRetiros) {
        this.#retirosRestantes = limiteRetiros;
        console.log("El límite de retiros diarios ha sido restablecido.");
    }

    transferir(cantidad, cuentaDestino) {
        if (cantidad > this.#saldo) {
            console.log("Fondos insuficientes para transferir.")
        } else {
            this.#saldo -= cantidad;
            cuentaDestino.depositar(cantidad)
            console.log(`Transferencia de $${cantidad} a ${cuentaDestino.nombre}`)
        }
    }

    mostrarSaldo() {
        console.log(`Saldo disponible: $${this.#saldo.toFixed(2)}`);
    }

    mostrarHistorial() {
        console.log("Historial de transacciones:");
        this.#historial.forEach(transaccion => console.log(transaccion))
    }
}


const cuenta = new CuentaBancaria("Luis", 1000, 3);
cuenta.retirar(200);
cuenta.retirar(300);
cuenta.retirar(100);
cuenta.retirar(50); // Has alcanzado el límite
cuenta.resetearRetiros(3)
cuenta.retirar(50); // Retiro de 50. Saldo actual: $350

// const cuenta = new CuentaBancaria("Carla", 1000);
// cuenta.aplicarInteres(5); 
// cuenta.mostrarSaldo();

// const cuenta1 = new CuentaBancaria("Pedro", 500);
// cuenta1.depositar(200);
// cuenta1.retirar(100);
// cuenta1.mostrarHistorial();
// const cuenta2 = new CuentaBancaria("Maria", 500);
//console.log(cuenta1.depositar(200)) // Deposito 200. saldo actual 700
//console.log(cuenta1.retirar(100) )// retiro 100. saldo actual 600
//console.log(cuenta1.mostrarSaldo()) // saldo disponible: $600

// Transferir dinero
// cuenta1.transferir(300, cuenta2);
// cuenta1.mostrarSaldo();
// cuenta2.mostrarSaldo()

// console.log(cuenta.#saldo) // Error: priedad privada