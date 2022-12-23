// Se obtiene el ID de producto de los Query Params y lo usamos para buscarlo en la lista de productos

const queryParams = new URLSearchParams(window.location.search);
const productId = queryParams.get("id");
const producto = productos.find(el => el.id === productId);

// Se agrega el HTML necesario a la fila de descripción del producto.
const rowDescripcion = document.querySelector("#row-descripcion");
const htmlDescripcion = generarHtmlParaDescripcionDeProducto(producto);

rowDescripcion.appendChild(htmlDescripcion);

// Se agregan los productos de la categoría relacionada en forma de tarjetas
const rowSimilares = document.querySelector("#row-similares");
const productosRelacionados = productos.filter(el => el.categoria === producto.categoria);

for (let i = 0; i < 6; i++) {
    const html = generarTarjetaHtml(productosRelacionados[i]);
    
    rowSimilares.appendChild(html);
}
