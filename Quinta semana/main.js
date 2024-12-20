const button = document.getElementById("fetchData");
const dataList = document.getElementById("dataList")

// Función para consumir API
button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener datos");
            }
            return response.json(); // Convertir a JSON
        })
        .then((data) => {
            dataList.innerHTML= ""; // Limpiar la lista
            data.slice(0,5).forEach((post => {
                const li = document.createElement("li");
                li.textContent = `${post.id}: ${post.title}`;
                dataList.appendChild(li)
            }));
           
        })
        .catch((error) => console.error("Error: ", error))
})