// Año actual en Footer
const footer = document.querySelector("footer");
const parrafo = footer.lastElementChild.firstElementChild;
const anioActual = new Date().getFullYear();

parrafo.textContent = `@ ${anioActual} ${parrafo.textContent}`;

// Carga de artículos en Local Storage (nuestra base de datos de prueba)
// Carga los productos si y solo si aún no existen en Local Storage

if (localStorage.getItem("PRODUCTOS") === null) {
    const json = JSON.stringify(productos); // Se convierte la lista de productos en una cadena JSON

    localStorage.setItem("PRODUCTOS", json); // Se guarda este JSON en Local Storage
} else {
    const json = localStorage.getItem("PRODUCTOS"); // Se obtienen los productos en forma de cadena JSON
    productos = JSON.parse(json);                   // Se convierte el JSON a una lista de objetos
}

// Se mostrarán 6 productos en página principal por cada categoría
const rowStarwars = document.querySelector("#row-starwars");
const rowConsolas = document.querySelector("#row-consolas");
const rowDiversos = document.querySelector("#row-diversos");

if (rowStarwars != null) {
    const productosSw = productos.filter(el => el.categoria === "STAR_WARS");

    for (let i = 0; i < 6; i++) {
        const htmlString = generarTarjetaHtml(productosSw[i]);
        const html = document.createRange().createContextualFragment(htmlString);
        
        rowStarwars.appendChild(html);
    }
}

if (rowConsolas != null) {
    const productosConsolas = productos.filter(el => el.categoria === "CONSOLAS");

    for (let i = 0; i < 6; i++) {
        const htmlString = generarTarjetaHtml(productosConsolas[i]);
        const html = document.createRange().createContextualFragment(htmlString);

        rowConsolas.appendChild(html);
    }
}

if (rowDiversos != null) {
    const productosDiversos = productos.filter(el => el.categoria === "DIVERSOS");

    for (let i = 0; i < 6; i++) {
        const htmlString = generarTarjetaHtml(productosDiversos[i]);
        const html = document.createRange().createContextualFragment(htmlString);

        rowDiversos.appendChild(html);
    }
}