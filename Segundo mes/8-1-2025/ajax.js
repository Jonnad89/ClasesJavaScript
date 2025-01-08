const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("Datos recibidos:", JSON.parse(xhr.responseText));
    } else {
        console.error("Error al realizar la solicitud");
    }
};

xhr.onerror = function () {
    console.error("Error de red");
};

xhr.send();