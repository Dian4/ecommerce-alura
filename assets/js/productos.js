// Lista de productos inicial (se cargará en Local Storage al cargar la página.)
var productos = [
    {
        "id": "sw-taza",
        "nombre": "Taza Stormtrooper",
        "precio": 60.0,
        "descripción": "Bonita taza en forma de casco de Stormtrooper.",
        "imagen": "assets/img/sw-taza.png",
        "categoria": "STAR_WARS"
    },
    {
        "id": "sw-casco-lego",
        "nombre": "Cascos Lego",
        "precio": 200.0,
        "descripción": "Cascos de Darth Vader y Stormtrooper de Lego.",
        "imagen": "assets/img/sw-lego.png",
        "categoria": "STAR_WARS"
    },
    {
        "id": "sw-yoda",
        "nombre": "Figura Yoda",
        "precio": 150.0,
        "descripción": "Figura de Yoda.",
        "imagen": "assets/img/sw-yoda.png",
        "categoria": "STAR_WARS"
    },
    {
        "id": "sw-stormtrooper",
        "nombre": "Figura Stormtrooper",
        "precio": 130.0,
        "descripción": "Figura de Stormtrooper articulada.",
        "imagen": "assets/img/sw-trooper.png",
        "categoria": "STAR_WARS"
    },
    {
        "id": "sw-grogu",
        "nombre": "Figura Grogu",
        "precio": 160.0,
        "descripción": "Figura de Grogu.",
        "imagen": "assets/img/sw-grogu.png",
        "categoria": "STAR_WARS"
    },
    {
        "id": "sw-kylo",
        "nombre": "Figura Kylo Ren",
        "precio": 200.0,
        "descripción": "Figura de Kylo Ren.",
        "imagen": "assets/img/sw-kylo.png",
        "categoria": "STAR_WARS"
    },
    {
        "id": "c-control-xbox",
        "nombre": "Control Xbox",
        "precio": 1000.0,
        "descripción": "Control de Xbox One",
        "imagen": "assets/img/c-xbox-control.png",
        "categoria": "CONSOLAS"
    },
    {
        "id": "c-ps5",
        "nombre": "Consola PS5 y control",
        "precio": 10000.0,
        "descripción": "Consola PlayStation 5 y control",
        "imagen": "assets/img/c-ps5.png",
        "categoria": "CONSOLAS"
    },
    {
        "id": "c-nes",
        "nombre": "Nintendo Entertainment System",
        "precio": 2000.0,
        "descripción": "Consola NES y control.",
        "imagen": "assets/img/c-nes.png",
        "categoria": "CONSOLAS"
    },
    {
        "id": "c-control-switch",
        "nombre": "Control Switch",
        "precio": 4000.0,
        "descripción": "Control de Nintendo Switch azul y rojo.",
        "imagen": "assets/img/c-switch-control.png",
        "categoria": "CONSOLAS"
    },
    {
        "id": "c-xbox-seriesx",
        "nombre": "Consola Xbox Serie X",
        "precio": 10000.0,
        "descripción": "Consola Xbox Serie X.",
        "imagen": "assets/img/c-xbox-seriex.png",
        "categoria": "CONSOLAS"
    },
    {
        "id": "c-gameboy-color",
        "nombre": "Consola Game Boy Color",
        "precio": 2000.0,
        "descripción": "Consola Game Boy Color.",
        "imagen": "assets/img/c-gameboy.png",
        "categoria": "CONSOLAS"
    },
    {
        "id": "d-camisa-atari",
        "nombre": "Camisa Atari",
        "precio": 300.0,
        "descripción": "Camisa con logo de Atari en japonés.",
        "imagen": "assets/img/d-atari.png",
        "categoria": "DIVERSOS"
    },
    {
        "id": "d-camisa-nes",
        "nombre": "Camisa SNES",
        "precio": 300.0,
        "descripción": "Camisa con control de Super Nintendo.",
        "imagen": "assets/img/d-snes.png",
        "categoria": "DIVERSOS"
    },
    {
        "id": "d-sonic",
        "nombre": "Figura de Sonic",
        "precio": 500.0,
        "descripción": "Figura de Sonic The Hedgehog.",
        "imagen": "assets/img/d-sonic.png",
        "categoria": "DIVERSOS"
    },
    {
        "id": "d-despertador",
        "nombre": "Despertador",
        "precio": 400.0,
        "descripción": "Reloj y despertador en forma de radio.",
        "imagen": "assets/img/d-reloj.png",
        "categoria": "DIVERSOS"
    },
    {
        "id": "d-visorvr",
        "nombre": "Visor VR",
        "precio": 3000.0,
        "descripción": "Visor de Realidad Virtual.",
        "imagen": "assets/img/d-vr.png",
        "categoria": "DIVERSOS"
    },
    {
        "id": "d-peluche-pikachu",
        "nombre": "Peluche Pikachu",
        "precio": 600.0,
        "descripción": "Peluche de Pikachu.",
        "imagen": "assets/img/d-pikachu.png",
        "categoria": "DIVERSOS"
    }
];

function generarTarjetaHtml(producto) {
    if (producto != null) {
        return `
            <div class="col">
                <div class="card" style="width: 11rem;">
                    <img src="${producto.imagen}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
                        <a href="detalle.html?id=${producto.id}" class="btn btn-outline-primary">Ver producto</a>
                    </div>
                </div>
            </div>
        `;
    }
}
