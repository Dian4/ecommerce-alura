// Verificamos si el usuario está loggeado en el sistema
// Si no lo está, lo regresamos a la página principal
const queryParams = new URLSearchParams(window.location.search);
const estaLoggeado = localStorage.getItem("ESTA_LOGGEADO");
const estaLoggeadoParam = queryParams.get("estaLoggeado");

if (estaLoggeado === null || estaLoggeadoParam === null) {
    window.location.replace("index.html");
}

