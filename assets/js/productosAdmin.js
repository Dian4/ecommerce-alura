// Verificamos si el usuario está loggeado en el sistema
// Si no lo está, lo regresamos a la página principal
const estaLoggeado = localStorage.getItem("ESTA_LOGGEADO");

if (estaLoggeado === null) {
    window.location.replace("index.html");
}

// Se obtienen todos los productos y se generan sus tarjetas HTML.
// Se insertan estas tarjetas en la fila de productos
const rowProductos = document.querySelector("#row-productos");

productos.forEach(producto => {
    const html = generarTarjetaHtmlAdmin(producto);

    rowProductos.appendChild(html);
});

// Se agrega un evento para rellenar los campos del formulario cuando se quiera modificar la información de algún producto
// Se obtiene el ID de producto del botón que lanza el modal, luego se busca el producto en la lista con su ID
// y se obtiene toda la información para rellenarla en el formulario.
const actualizarProductoModal = document.querySelector("#actualizarProductoModal");

actualizarProductoModal.addEventListener("show.bs.modal", event => {
    const boton = event.relatedTarget;
    const productId = boton.dataset.productId;
    const producto = productos.find(prod => prod.id === productId);

    const modal = event.target;
    const form = modal.getElementsByTagName("form")[0]; 
    
    const urlImagen = form[0];
    const categoria = form[1];
    const nombre = form[2];
    const precio = form[3];
    const descripcion = form[4];
    const id = form[5];

    urlImagen.value = producto.imagen;
    categoria.value = producto.categoria;
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
    id.value = producto.id;
});

// Se agrega un evento para manejar el modal de eliminar producto, obteniendo el ID de producto del botón que lanza el modal
const eliminarProductoModal = document.querySelector("#eliminarProductoModal");

eliminarProductoModal.addEventListener("show.bs.modal", event => {
    const boton = event.relatedTarget;
    const productId = boton.dataset.productId;
    const producto = productos.find(prod => prod.id === productId);

    const modal = event.target;
    const col = modal.querySelector(".col");

    const template = document.createElement("template");
    template.innerHTML = `
        <p>¿Está seguro de que quiere eliminar este artículo?</p>
        <b class="text-danger">${producto.nombre}</b>
        <input type="hidden" value="${producto.id}">`;

    col.replaceChildren(...template.content.childNodes);
});


// Se agrega el evento para crear un nuevo producto y agregarlo a la lista de productos
const btnAgregarProducto = document.querySelector("#btnAgregarProducto");

btnAgregarProducto.onclick = event => {
    const modal = document.querySelector("#agregarProductoModal");
    const form = modal.querySelector("form");
    let esValido = true;

    const urlImagen = form[0];
    const categoria = form[1];
    const nombre = form[2];
    const precio = form[3];
    const descripcion = form[4];

    if (nombre.value == null || nombre.value.trim() === "") {
        nombre.classList.add("is-invalid");
        esValido = false;
    }

    if (precio.value == null || precio.value.trim() === "" || isNaN(precio.value.trim())) {
        precio.classList.add("is-invalid");
        esValido = false;
    }

    if (descripcion.value == null || descripcion.value.trim() === "") {
        descripcion.classList.add("is-invalid");
        esValido = false;
    }

    if (esValido) {
        let imagen;

        if (urlImagen.value == null || urlImagen.value.trim() === "") {
            imagen = "assets/img/img-unknown.png";
        } else {
            imagen = urlImagen.value.trim();
        }

        let nuevoProducto = {
            id: crypto.randomUUID(),
            nombre: nombre.value.trim(),
            precio: precio.value.trim(),
            descripcion: descripcion.value.trim(),
            imagen: imagen,
            categoria: categoria.value
        };

        productos.push(nuevoProducto);
        localStorage.setItem("PRODUCTOS", JSON.stringify(productos));
        location.reload();
    }
};

// Se agrega el evento para actualizar la información de un producto existente.
const btnActualizarProducto = document.querySelector("#btnActualizarProducto");

btnActualizarProducto.onclick = event => {
    const modal = document.querySelector("#actualizarProductoModal");
    const form = modal.querySelector("form");
    let esValido = true;

    const urlImagen = form[0];
    const categoria = form[1];
    const nombre = form[2];
    const precio = form[3];
    const descripcion = form[4];
    const id = form[5];

    if (nombre.value == null || nombre.value.trim() === "") {
        nombre.classList.add("is-invalid");
        esValido = false;
    }

    if (precio.value == null || precio.value.trim() === "" || isNaN(precio.value.trim())) {
        precio.classList.add("is-invalid");
        esValido = false;
    }

    if (descripcion.value == null || descripcion.value.trim() === "") {
        descripcion.classList.add("is-invalid");
        esValido = false;
    }

    if (esValido) {
        let imagen;

        if (urlImagen.value == null || urlImagen.value.trim() === "") {
            imagen = "assets/img/img-unknown.png";
        } else {
            imagen = urlImagen.value.trim();
        }

        const producto = productos.find(prod => prod.id === id.value);

        producto.nombre = nombre.value.trim();
        producto.precio = precio.value.trim();
        producto.descripcion = descripcion.value.trim();
        producto.imagen = imagen;
        producto.categoria = categoria.value;

        localStorage.setItem("PRODUCTOS", JSON.stringify(productos));
        location.reload();
    }
};

// Se agrega el evento para eliminar el producto seleccionado
const btnEliminarProducto = document.querySelector("#btnEliminarProducto");

btnEliminarProducto.onclick = event => {
    const modal = document.querySelector("#eliminarProductoModal");
    const hidden = modal.querySelector("input[type=hidden]");
    const productId = hidden.value;
    
    productos = productos.filter(prod => prod.id !== productId);
    localStorage.setItem("PRODUCTOS", JSON.stringify(productos));
    location.reload();
};


// Se da de alta evento para los inputs de los formularios, para eliminar las clases de validación de Bootstrap
// cuando el usuario comience a teclear en ellas
document.querySelectorAll("input[type=text], textarea").forEach(input => {
    input.onkeydown = event => {
        if (input.classList.contains("is-invalid")) {
            input.classList.remove("is-invalid");
        }
    };
});


// Funcionalidad para cerrar la sesión cuando se haga clic en el botón de la barra de navegación
// Elimina la variable ESTA_LOGGEADO de localStorage
document.querySelector("#btnCerrarSesion").onclick = event => {
    localStorage.removeItem("ESTA_LOGGEADO");

    window.location.replace("index.html");
};
