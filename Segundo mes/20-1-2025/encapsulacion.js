class CuentaBancaria {
    #saldo; // Campo privado
    #historial; 
    #retirosRestantes;
    #activa

    constructor(nombre, saldoInicial, limiteRetiros, saldoMinimo = 100) {
        this.nombre = nombre;

        this.#historial = [];
        this.#retirosRestantes = limiteRetiros;
        this.saldoMinimo = saldoMinimo;

         // Validación del saldo inicial
    if (saldoInicial < 0) {
        throw new Error ("El saldo inicial no puse ser negativo.")
    }
        this.#saldo = saldoInicial;
        this.#activa = true; // La cuenta está activa por defecto
    }

   

    // Método para desactivar la cuenta
    desactivarCuenta() {
        this.#activa = false;
        console.log("La cuenta ha sido desactivada.")
    }

    // **Método para reactivar la cuenta**
    reactivarCuenta() {
        if(this.#activa) {
            console.log("La cuenta ya está activa.")
        } else {
            this.#activa = true;
            console.log("La cuenta ha sido reactivada.")
        }
    }

     // Método para verificar si la cuenta está activa
     verificarCuentaActiva() {
        if(!this.#activa) {
            throw new Error("La cuenta está desactivada. No se pueden realizar transacciones.")
        }
    }

    aplicarInteres(porcentaje) {
        const interes = this.#saldo * (porcentaje / 100);
        this.#saldo += interes;
        console.log(`Interés aplicado: $${interes.toFixed(2)}. Saldo actual: $${this.#saldo.toFixed(2)}`)
    }

    // Método para depositar dinero
    depositar(cantidad) {
        this.verificarCuentaActiva();
        if (cantidad <= 0) {
            throw new Error("La cantidad a depositar debe ser positiva.")
        }
        this.#saldo += cantidad;
        console.log(`Depósito de $${cantidad}. Saldo actual: $${this.#saldo}.`)
        this.#historial.push(`Depósito: $${cantidad}`)
    }

    // Método para retirar dinero
    retirar(cantidad) {
        this.verificarCuentaActiva();
        if (cantidad <= 0) {
            throw new Error("La cantidad a retirar debe ser positiva.")
        }
        if (this.#retirosRestantes === 0) {
            console.log("Has alcanzado el límite de retiros diarios.")
        } else if ( cantidad > this.#saldo ){
            throw new Error("fondos insuficientes.")
        }else {
            // this.#saldo -= cantidad;
            this.#historial.push(`Retiro: $${cantidad}`)
            this.#retirosRestantes--;
            console.log(`Retiro de $${cantidad}. Saldo actual: $${this.#saldo}. Retiros restantes: ${this.#retirosRestantes}`)
        }

        this.#saldo -= cantidad;

        if (this.#saldo < this.saldoMinimo) {
            console.warn(`Alerta: El saldo es inferior al mínimo de $${this.saldoMinimo}`)
        }
        console.log(`Retiro de $${cantidad}. Saldo actual: $${this.#saldo}`)
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

    // Método para mostrar el saldo
    mostrarSaldo() {
        console.log(`Saldo disponible: $${this.#saldo}`);
    }

    mostrarHistorial() {
        console.log("Historial de transacciones:");
        this.#historial.forEach(transaccion => console.log(transaccion))
    }
}

// Ejemplo de uso

try{
    const cuenta = new CuentaBancaria("Carlos", 500, 200)

    cuenta.depositar(100); // Depósito de $100. Saldo de $600
    cuenta.retirar(450); // Retiro de 450. saldo actual 150
    cuenta.desactivarCuenta(); // La cuenta ha sido desactivada
    console.log("Intentando realizar transacción con cuenta desactivada")
    
    try{
        cuenta.retirar(50); // Error: La cuenta está desactivada.
        } catch (error) {
            console.error(error.message)
        }    
    // Reactivar la cuenta
    console.log("Reactivando la cuenta...")
    cuenta.reactivarCuenta(); // La cuenta ha sido reactivada.
    cuenta.depositar(50); // Deposito de 50. saldo actual 200
    cuenta.mostrarSaldo();
}
 catch(error) {
    console.error(error.message)
 }

 /* ========== Reactivacion con condiciones ===========
Solo permita reactivar la cuenta si hay un saldo minimo disponible

registro de actividad
Almacenar un historial de cuando se desactiva o reactiva la cuenta

Llevar todo a html
 */ 