// Año actual en Footer
const footer = document.querySelector("footer");
const parrafo = footer.lastElementChild.firstElementChild;
const anioActual = new Date().getFullYear();

parrafo.textContent = `@ ${anioActual} ${parrafo.textContent}`;