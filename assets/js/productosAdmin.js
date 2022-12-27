// Verificamos si el usuario está loggeado en el sistema
// Si no lo está, lo regresamos a la página principal
const queryParams = new URLSearchParams(window.location.search);
const estaLoggeado = localStorage.getItem("ESTA_LOGGEADO");
const estaLoggeadoParam = queryParams.get("estaLoggeado");

if (estaLoggeadoParam === null) {
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

    urlImagen.value = producto.imagen;
    categoria.value = producto.categoria;
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
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
        <b class="text-danger">${producto.nombre}</b>`;

    col.replaceChildren(...template.content.childNodes);
});
