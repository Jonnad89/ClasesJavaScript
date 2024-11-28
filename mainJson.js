const boton = document.getElementById("cargar");
        const lista = document.getElementById("lista");

        boton.addEventListener("click", async () => {
            // Consumimos la API jsonplaceholder
            const url = "https://jsonplaceholder.typicode.com/users"

            try {
                // Hacer la petición
                const response = await fetch(url);

                // Verificar si la respuesta exitosa
                if (!response.ok){
                    throw new Error(`Error HTTP: ${response.status}`)
                }
                // Convertir la respuesta a JSON
                const usuarios = await response.json()

                // Mostrar los usuarios en la lista
                lista.innerHTML =""; // Limpiar la lista
                usuarios.forEach(usuario => {
                    const li = document.createElement("li");
                    li.textContent = `${usuario.name} (${usuario.email})`;
                    lista.appendChild(li)
                });
            } catch (error) {
                console.error("Error al cargar usuario: ", error)
            }
        }) 