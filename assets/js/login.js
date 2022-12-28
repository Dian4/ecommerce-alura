// Capturamos el evento de "onsubmit" del formulario y guardamos una variable
// de Login en Local Storage.

// Si el usuario ingresa las credenciales correctas, guardamos la variable de Login.

// Cuando la variable esté presente, se tomará al usuario como loggeado.
// Cuando no esté presente, se tomará como no loggeado.

const formulario = document.querySelector("#formLogin");

formulario.onsubmit = evento => {
    const email = evento.target.elements.email.value;
    const password = evento.target.elements.password.value;

    if (email === "admin@alurageek.com" && password === "admin") {
        localStorage.setItem("ESTA_LOGGEADO", "true");

        window.location.replace("productos.html");
    } else {
        alert("El email o el password son incorrectos. Intente de nuevo.");
    }

    evento.preventDefault();
};
