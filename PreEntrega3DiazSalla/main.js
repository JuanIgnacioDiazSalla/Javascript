///////////////////////////////////////////////////////////////////////
///////////////////////   Simulador de Venta    ///////////////////////
///////////////////////           de            ///////////////////////
///////////////////////   Tienda de videojuegos ///////////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/////////////////////// Variables ///////////////////////
/////////////////////////////////////////////////////////

//////////     Clase     //////////

function ObjetoAVenta(tipo_objeto, nombre, precio, cantidad, id_reconocimiento) {
    this.tipo_objeto = tipo_objeto
    this.nombre = nombre
    this.precio = parseInt(precio)
    this.cantidad = parseInt(cantidad)
    this.id_reconocimiento = id_reconocimiento
}

//////////     Objetos     //////////

const ps5SinLDC = new ObjetoAVenta("consola", "PS5 Sin Lector De Discos", 399, 0, "ps5SinLDC");
const ps5ConLDC = new ObjetoAVenta("consola", "PS5 Con Lector De Discos", 499, 0, "ps5ConLDC");
const xboxSeriesX = new ObjetoAVenta("consola", "Xbox Series X", 499, 0, "xboxSeriesX");
const xboxSeriesS = new ObjetoAVenta("consola", "Xbox Series S", 299, 0, "xboxSeriesS");
const nintendoSwitch = new ObjetoAVenta("consola", "Nintendo Switch", 299, 0, "nintendoSwitch");
const nintendoSwitchOLED = new ObjetoAVenta("consola", "Nintendo Switch OLED", 349, 0, "nintendoSwitchOLED");
const nintendoSwitchLite = new ObjetoAVenta("consola", "Nintendo Switch Lite", 199, 0, "nintendoSwitchLite");

const compuGamer1 = new ObjetoAVenta("computadora", "Computadora Gamer 1", 500, 0, "compuGamer1");
const compuGamer2 = new ObjetoAVenta("computadora", "Computadora Gamer 2", 1000, 0, "compuGamer2");
const compuGamer3 = new ObjetoAVenta("computadora", "Computadora Gamer 3", 1500, 0, "compuGamer3");
const notebookGamer1 = new ObjetoAVenta("computadora", "Notebook Gamer 1", 750, 0, "notebookGamer1");
const notebookGamer2 = new ObjetoAVenta("computadora", "Notebook Gamer 2", 1250, 0, "notebookGamer2");
const notebookGamer3 = new ObjetoAVenta("computadora", "Notebook Gamer 3", 1750, 0, "notebookGamer3");

const controlPS5 = new ObjetoAVenta("periferico", "Control PS5", 69, 0, "controlPS5");
const controlXboxBase = new ObjetoAVenta("periferico", "Control Xbox Base", 59, 0, "controlXboxBase");
const controlXboxPro = new ObjetoAVenta("periferico", "Control Xbox Pro", 179, 0, "controlXboxPro");
const controlNintendoSwitch = new ObjetoAVenta("periferico", "Control Nintendo Switch", 79, 0, "controlNintendoSwitch");
const teclado1 = new ObjetoAVenta("periferico", "Teclado 1", 99, 0, "teclado1");
const teclado2 = new ObjetoAVenta("periferico", "Teclado 2", 149, 0, "teclado2");
const teclado3 = new ObjetoAVenta("periferico", "Teclado 3", 199, 0, "teclado3");
const mouse1 = new ObjetoAVenta("periferico", "Mouse 1", 49, 0, "mouse1");
const mouse2 = new ObjetoAVenta("periferico", "Mouse 2", 99, 0, "mouse2");
const mouse3 = new ObjetoAVenta("periferico", "Mouse 3", 189, 0, "mouse3");

/////////////////////////////////////////////////////////
/////////////////////// Funciones ///////////////////////
/////////////////////////////////////////////////////////

//////////     Productos     //////////   

function crearProductoVenta(objeto) {

    // contenido

    let elemento = document.createElement("li");

    elemento.setAttribute("class", "columna")

    let interior = document.createElement("div");

    interior.setAttribute("id", `${objeto.id_reconocimiento}-id`)

    interior.innerHTML = `<h1>${objeto.nombre}</h1><h2>Cantidad actual: ${objeto.cantidad}</h2><h2>Precio: $${objeto.precio}</h2>`;

    elemento.appendChild(interior);

    // botones

    let interior2 = document.createElement("div");

    interior2.setAttribute("id", `${objeto.id_reconocimiento}-botones`);

    let boton = document.createElement("button");
    boton.setAttribute("type", "agregar");
    boton.innerHTML = "AGREGAR";
    boton.addEventListener("click", () => { agregar(objeto) });
    interior2.appendChild(boton);

    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "quitar");
    boton2.innerHTML = "QUITAR";
    boton2.addEventListener("click", () => { quitar(objeto) });
    interior2.appendChild(boton2);

    elemento.appendChild(interior2);

    // appendChild

    element.appendChild(elemento);

};

//////////     Funciones extra     //////////

//////////     Productos     //////////

function agregar(objeto) {
    objeto.cantidad = objeto.cantidad + 1;
    let actualizando = document.getElementById(`${objeto.id_reconocimiento}-id`);
    actualizando.innerHTML = `<h1>${objeto.nombre}</h1><h2>Cantidad actual: ${objeto.cantidad}</h2><h2>Precio: $${objeto.precio}</h2>`;
    actualizarCarrito();
    return objeto.cantidad;
};

function quitar(objeto) {
    if (objeto.cantidad > 0) {
        objeto.cantidad = objeto.cantidad - 1;
        let actualizando = document.getElementById(`${objeto.id_reconocimiento}-id`);
        actualizando.innerHTML = `<h1>${objeto.nombre}</h1><h2>Cantidad actual: ${objeto.cantidad}</h2><h2>Precio: $${objeto.precio}</h2>`;
        actualizarCarrito();
        return objeto.cantidad;
    };
};

//////////     Carrito     //////////

function actualizarCarrito() {
    valorTotal = 0;
    consolas.forEach((i) => {
        let calculo = i.cantidad * i.precio;
        valorTotal = valorTotal + calculo;
        return valorTotal;
    });

    computadoras.forEach((i) => {
        let calculo = i.cantidad * i.precio;
        valorTotal = valorTotal + calculo;
        return valorTotal;
    });

    perifericos.forEach((i) => {
        let calculo = i.cantidad * i.precio;
        valorTotal = valorTotal + calculo;
        return valorTotal;
    });
    texto.innerHTML = `<h1>Carrito</h1><h2>Valor Total: $${valorTotal}</h2>`;
}

function vaciarCarrito() {
    valorTotal = 0;
    consolas.forEach((i) => {
        i.cantidad = 0;
        let actualizando = document.getElementById(`${i.id_reconocimiento}-id`);
        actualizando.innerHTML = `<h1>${i.nombre}</h1><h2>Cantidad actual: ${i.cantidad}</h2><h2>Precio: $${i.precio}</h2>`;
        return i.cantidad;
    });

    computadoras.forEach((i) => {
        i.cantidad = 0;
        let actualizando = document.getElementById(`${i.id_reconocimiento}-id`);
        actualizando.innerHTML = `<h1>${i.nombre}</h1><h2>Cantidad actual: ${i.cantidad}</h2><h2>Precio: $${i.precio}</h2>`;
        return i.cantidad;
    });

    perifericos.forEach((i) => {
        i.cantidad = 0;
        let actualizando = document.getElementById(`${i.id_reconocimiento}-id`);
        actualizando.innerHTML = `<h1>${i.nombre}</h1><h2>Cantidad actual: ${i.cantidad}</h2><h2>Precio: $${i.precio}</h2>`;
        return i.cantidad;
    });
    texto.innerHTML = `<h1>Carrito</h1><h2>Valor Total: $${valorTotal}</h2>`;
}

//////////     Storage     //////////

function guardarStorage() {
    borrarStorage();
    consolas.forEach((i) => {
        localStorage.setItem(`${i.id_reconocimiento}-cantidad`, JSON.stringify(i.cantidad));
        localStorage.setItem(`${i.id_reconocimiento}-precio`, JSON.stringify(i.precio));
    });

    computadoras.forEach((i) => {
        localStorage.setItem(`${i.id_reconocimiento}-cantidad`, JSON.stringify(i.cantidad));
        localStorage.setItem(`${i.id_reconocimiento}-precio`, JSON.stringify(i.precio));
    });

    perifericos.forEach((i) => {
        localStorage.setItem(`${i.id_reconocimiento}-cantidad`, JSON.stringify(i.cantidad));
        localStorage.setItem(`${i.id_reconocimiento}-precio`, JSON.stringify(i.precio));
    });
}

function borrarStorage() {
    localStorage.clear()
}

function recuperarStorage() {
    consolas.forEach((i) => {
        cantidad = JSON.parse(localStorage.getItem(`${i.id_reconocimiento}-cantidad`));
        precio = JSON.parse(localStorage.getItem(`${i.id_reconocimiento}-precio`));
        i.cantidad = cantidad
        i.precio = precio
    });

    computadoras.forEach((i) => {
        cantidad = JSON.parse(localStorage.getItem(`${i.id_reconocimiento}-cantidad`));
        precio = JSON.parse(localStorage.getItem(`${i.id_reconocimiento}-precio`));
        i.cantidad = cantidad
        i.precio = precio
    });

    perifericos.forEach((i) => {
        cantidad = JSON.parse(localStorage.getItem(`${i.id_reconocimiento}-cantidad`));
        precio = JSON.parse(localStorage.getItem(`${i.id_reconocimiento}-precio`));
        i.cantidad = cantidad
        i.precio = precio
    });

}

//////////////////////////////////////////////////////
/////////////////////// Arrays ///////////////////////
//////////////////////////////////////////////////////

const consolas = [ps5SinLDC, ps5ConLDC, xboxSeriesX, xboxSeriesS, nintendoSwitch, nintendoSwitchOLED, nintendoSwitchLite];

const computadoras = [compuGamer1, compuGamer2, compuGamer3, notebookGamer1, notebookGamer2, notebookGamer3];

const perifericos = [controlPS5, controlXboxBase, controlXboxPro, controlNintendoSwitch, teclado1, teclado2, teclado3, mouse1, mouse2, mouse3];

let valorTotal = 0;

/////////////////////////////////////////////////////////
///////////////////////   Venta   ///////////////////////
/////////////////////////////////////////////////////////

//////////     Recuperar datos storage     //////////

if (localStorage.getItem("ps5SinLDC-cantidad") != null) {
    recuperarStorage()
};

//////////     Modificar Pagina     //////////

///// Menu de productos /////

let producto = document.getElementById("menu");
let element = document.createElement("ol");

consolas.forEach((i) => {
    crearProductoVenta(i);
});

computadoras.forEach((i) => {
    crearProductoVenta(i);
});

perifericos.forEach((i) => {
    crearProductoVenta(i);
});

producto.appendChild(element);

///// Carrito /////

//texto

let carrito = document.getElementById("carrito");

let texto = document.createElement("div");

texto.innerHTML = `<h1>Carrito</h1><h2>Valor Total: $${valorTotal}</h2>`;

carrito.appendChild(texto);

//botones

let botones = document.createElement("div");

let botonVaciar = document.createElement("button");

botonVaciar.innerHTML = "VACIAR CARRITO";
botonVaciar.addEventListener("click", () => { vaciarCarrito() });
botones.appendChild(botonVaciar);
carrito.appendChild(botones);

//////////     Storage     //////////

let botonStorage = document.getElementById("storage")

//guardar-storage

let guardar = document.createElement("button")
guardar.innerHTML = "GUARDAR STORAGE";
guardar.addEventListener("click", () => { guardarStorage() });
botonStorage.appendChild(guardar)

//borrar-storage

let borrar = document.createElement("button")
borrar.innerHTML = "BORRAR STORAGE";
borrar.addEventListener("click", () => { borrarStorage() });
botonStorage.appendChild(borrar)

//////////     Funciones de inicio     //////////
actualizarCarrito()