///////////////////////////////////////////////////////////////////////
///////////////////////   Simulador de Venta    ///////////////////////
///////////////////////           de            ///////////////////////
///////////////////////   Tienda de videojuegos ///////////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/////////////////////// Variables ///////////////////////
/////////////////////////////////////////////////////////

//////////     clase     //////////

function ObjetoAVenta(tipo_objeto, objeto, precio, cantidad) {
    this.tipo_objeto = tipo_objeto
    this.objeto = objeto
    this.precio = parseInt(precio)
    this.cantidad = parseInt(cantidad)
}

//////////     objetos     //////////

const ps5SinLDC = new ObjetoAVenta("consola", "ps5SinLDC", 399, 0);
const ps5ConLDC = new ObjetoAVenta("consola", "ps5ConLDC", 499, 0);
const xboxSeriesX = new ObjetoAVenta("consola", "xboxSeriesX", 499, 0);
const xboxSeriesS = new ObjetoAVenta("consola", "xboxSeriesS", 299, 0);
const nintendoSwitch = new ObjetoAVenta("consola", "nintendoSwitch", 299, 0);
const nintendoSwitchOLED = new ObjetoAVenta("consola", "nintendoSwitchOLED", 349, 0);
const nintendoSwitchLite = new ObjetoAVenta("consola", "nintendoSwitchLite", 199, 0);

const compuGamer1 = new ObjetoAVenta("computadora", "compuGamer1", 500, 0);
const compuGamer2 = new ObjetoAVenta("computadora", "compuGamer2", 1000, 0);
const compuGamer3 = new ObjetoAVenta("computadora", "compuGamer3", 1500, 0);
const notebookGamer1 = new ObjetoAVenta("computadora", "notebookGamer1", 750, 0);
const notebookGamer2 = new ObjetoAVenta("computadora", "notebookGamer2", 1250, 0);
const notebookGamer3 = new ObjetoAVenta("computadora", "notebookGamer3", 1750, 0);

const controlPS5 = new ObjetoAVenta("periferico", "controlPS5", 69, 0);
const controlXboxBase = new ObjetoAVenta("periferico", "controlXboxBase", 59, 0);
const controlXboxPro = new ObjetoAVenta("periferico", "controlXboxPro", 179, 0);
const controlNintendoSwitch = new ObjetoAVenta("periferico", "controlNintendoSwitch", 79, 0);
const teclado1 = new ObjetoAVenta("periferico", "teclado1", 99, 0);
const teclado2 = new ObjetoAVenta("periferico", "teclado2", 149, 0);
const teclado3 = new ObjetoAVenta("periferico", "teclado3", 199, 0);
const mouse1 = new ObjetoAVenta("periferico", "mouse1", 49, 0);
const mouse2 = new ObjetoAVenta("periferico", "mouse2", 99, 0);
const mouse3 = new ObjetoAVenta("periferico", "mouse3", 189, 0);

/////////////////////////////////////////////////////////
/////////////////////// Funciones ///////////////////////
/////////////////////////////////////////////////////////

function agregarAlCarrito(producto) {
    producto.cantidad = producto.cantidad + 1
    alert("Producto Agregado!")
    return producto.cantidad
}

function quitarDelCarrito(producto) {
    producto.cantidad = producto.cantidad - 1
    alert("Producto Eliminado!")
    return producto.cantidad
}

function carritoFinal() {
    valorConsolas = 0;
    valorComputadoras = 0;
    valorPerifericos = 0;
    valorTotal = 0;
    consolas.forEach((a) => {
        let precio = a.precio;
        let cantidad = a.cantidad;
        let valor = precio * cantidad;
        valorConsolas = valorConsolas + valor;
    }
    )
    computadoras.forEach((a) => {
        let precio = a.precio;
        let cantidad = a.cantidad;
        let valor = precio * cantidad;
        valorComputadoras = valorComputadoras + valor;
    }
    )
    perifericos.forEach((a) => {
        let precio = a.precio
        let cantidad = a.cantidad
        let valor = precio * cantidad
        valorPerifericos = valorPerifericos + valor
    }
    )
    valorTotal = valorConsolas + valorComputadoras + valorPerifericos;
    return valorConsolas, valorComputadoras, valorPerifericos, valorTotal;
}

function vaciarCarrito() {
    consolas.forEach((a) => {
        a.cantidad = 0;
    }
    )
    computadoras.forEach((a) => {
        a.cantidad = 0;
    }
    )
    perifericos.forEach((a) => {
        a.cantidad = 0;
    }
    )
}

function descuento() {
    valorTotal = valorTotal * 0.75;
    return valorTotal;
}

//////////////////////////////////////////////////////
/////////////////////// Arrays ///////////////////////
//////////////////////////////////////////////////////

const consolas = [ps5SinLDC, ps5ConLDC, xboxSeriesX, xboxSeriesS, nintendoSwitch, nintendoSwitchOLED, nintendoSwitchLite];

let valorConsolas = 0;

const computadoras = [compuGamer1, compuGamer2, compuGamer3, notebookGamer1, notebookGamer2, notebookGamer3];

let valorComputadoras = 0;

const perifericos = [controlPS5, controlXboxBase, controlXboxPro, controlNintendoSwitch, teclado1, teclado2, teclado3, mouse1, mouse2, mouse3];

let valorPerifericos = 0;

const carritoTotal = [consolas, computadoras, perifericos];
let valorTotal = 0;

/////////////////////////////////////////////////////////
///////////////////////   Venta   ///////////////////////
/////////////////////////////////////////////////////////

////////// preguntas //////////

let pregunta1 = prompt("¿Desea modificar algo en el carrito de compras? Recuerde que hay 25% de descuento en compras superiores a 2000U$D. SI/NO").toUpperCase();
let pregunta2 = "";
let pregunta3 = "";
let pregunta4 = "";
let pregunta5 = "";

//////////  sistema  //////////

do {
    pregunta2 = parseInt(prompt("¿Que tipo de producto desea agregar? Seleccione unicamente el numero\n" + "Lista de tipos de productos:\n" + "1) Consolas\n" + "2) Computadoras\n" + "3) Perifericos\n" + "4) Consultar Carrito\n" + "5) Ninguno / Quitar productos"));

    if (pregunta2 >= 1 && pregunta2 <= 5) {
        switch (pregunta2) {
            case 1: //agregar consolas
                do {
                    pregunta3 = parseInt(prompt("¿Que consola desea agregar? Seleccione unicamente el numero\n" + "Lista de consolas:\n" + "1) PS5 Sin Lector De Discos: 399 U$D \n" + "2) PS5 Con Lector De Discos: 499U$D \n" + "3) Xbox Series S: 299U$D\n" + "4) Xbox Series X: 499U$D\n" + "5) Nintendo Switch: 299U$D\n" + "6) Nintendo Switch OLED: 349U$D \n" + "7) Nintendo Switch Lite: 199U$D \n" + "8) Ninguna"));
                    if (pregunta3 >= 1 && pregunta3 <= 7) {
                        switch (pregunta3) {
                            case 1:
                                agregarAlCarrito(ps5SinLDC);
                                carritoFinal();
                                break;
                            case 2:
                                agregarAlCarrito(ps5ConLDC);
                                carritoFinal();
                                break;
                            case 3:
                                agregarAlCarrito(xboxSeriesS);
                                carritoFinal();
                                break;
                            case 4:
                                agregarAlCarrito(xboxSeriesX);
                                carritoFinal();
                                break;
                            case 5:
                                agregarAlCarrito(nintendoSwitch);
                                carritoFinal();
                                break;
                            case 6:
                                agregarAlCarrito(nintendoSwitchOLED);
                                carritoFinal();
                                break;
                            case 7:
                                agregarAlCarrito(nintendoSwitchLite);
                                carritoFinal();
                                break;
                        }
                    }
                } while (pregunta3 !== 8);
                break;
            case 2: //agregar computadoras
                do {
                    pregunta3 = parseInt(prompt("¿Que computadora desea agregar? Seleccione unicamente el numero\n" + "Lista de computadoras:\n" + "1) Computadora Gamer Basica: 500U$D \n" + "2) Computadora Gamer Intermedia: 1000U$D\n" + "3) Computadora Gamer Avanzada: 1500U$D \n" + "4) Notebook Gamer Basica: 750U$D\n" + "5) notebook Gamer Intermedia: 1250U$D \n" + "6) Notebook Gamer Avanzada: 1750U$D \n" + "7) Ninguna"));
                    if (pregunta3 >= 1 && pregunta3 <= 6) {
                        switch (pregunta3) {
                            case 1:
                                agregarAlCarrito(compuGamer1);
                                carritoFinal();
                                break;
                            case 2:
                                carritoFinal();
                                break;
                            case 3:
                                agregarAlCarrito(compuGamer3);
                                carritoFinal();
                                break;
                            case 4:
                                agregarAlCarrito(notebookGamer1);
                                carritoFinal();
                                break;
                            case 5:
                                agregarAlCarrito(notebookGamer2);
                                carritoFinal();
                                break;
                            case 6:
                                agregarAlCarrito(notebookGamer3);
                                carritoFinal();
                                break;
                        }
                    }
                } while (pregunta3 !== 7);
                break;
            case 3: //agregar perifericos
                do {
                    pregunta3 = parseInt(prompt("¿Que Perifericos desea agregar? Seleccione unicamente el numero\n" + "Lista de perifericos:\n" + "1) Control PS5: 69 U$D \n" + "2) Control Xbox Base: 59U$D \n" + "3) Control Xbox Elite: 179U$D\n" + "4) Control Nintendo Switch: 69U$D\n" + "5) Teclado Basico: 99U$D\n" + "6) Teclado Intermedio: 149U$D \n" + "7) Teclado Avanzado: 199U$D \n" + "8) Mouse Basico: 49U$D\n" + "9) Mouse Intermedio: 99U$D\n" + "10) Mouse Avanzado: 189U$D\n" + "11) Ninguno\n"));
                    if (pregunta3 >= 1 && pregunta3 <= 10) {
                        switch (pregunta3) {
                            case 1:
                                agregarAlCarrito(controlPS5);
                                carritoFinal();
                                break;
                            case 2:
                                agregarAlCarrito(controlXboxBase);
                                carritoFinal();
                                break;
                            case 3:
                                agregarAlCarrito(controlXboxPro);
                                carritoFinal();
                                break;
                            case 4:
                                agregarAlCarrito(controlNintendoSwitch);
                                carritoFinal();
                                break;
                            case 5:
                                agregarAlCarrito(teclado1);
                                carritoFinal();
                                break;
                            case 6:
                                agregarAlCarrito(teclado2);
                                carritoFinal();
                                break;
                            case 7:
                                agregarAlCarrito(teclado3);
                                carritoFinal();
                                break;
                            case 8:
                                agregarAlCarrito(mouse1);
                                carritoFinal();
                                break;
                            case 9:
                                agregarAlCarrito(mouse2);
                                carritoFinal();
                                break;
                            case 10:
                                agregarAlCarrito(mouse3);
                                carritoFinal();
                                break;
                        }
                    }
                } while (pregunta3 !== 11);
                break;
            case 4: //consultar carrito
                do {
                    pregunta3 = parseInt(prompt("¿Qué desea consultar? Seleccione unicamente el numero\n" + "1) Consolas\n" + "2) Computadoras\n" + "3) Perifericos\n" + "4) Carrito Total\n" + "5) Ninguno"));
                    if (pregunta3 >= 1 && pregunta3 <= 4) {
                        switch (pregunta3) {
                            case 1:
                                alert("Usted sumó al carrito de compras: \n" + "1) PS5 Sin Lector De Discos (399U$D): " + ps5SinLDC.cantidad + "\n" + "2) PS5 Con Lector De Discos (499U$D): " + ps5ConLDC.cantidad + "\n" + "3) Xbox Series S (299U$D): " + xboxSeriesS.cantidad + "\n" + "4) Xbox Series X (499U$D): " + xboxSeriesX.cantidad + "\n" + "5) Nintendo Switch (299U$D): " + nintendoSwitch.cantidad + "\n" + "6) Nintendo Switch OLED (349U$D): " + nintendoSwitchOLED.cantidad + "\n" + "7) Nintendo Switch Lite (199U$D): " + nintendoSwitchLite.cantidad + "\n" + "Valor Total Consolas: " + valorConsolas + "U$D\n" + "Carrito Total: " + valorTotal + "U$D\n");
                                break;
                            case 2:
                                alert("Usted sumó al carrito de compras: \n" + "1) Computadora Gamer Basica (500U$D): " + compuGamer1.cantidad + "\n" + "2) Computadora Gamer Intermedia (1000U$D): " + compuGamer2.cantidad + "\n" + "3) Computadora Gamer Avanzada (1500U$D): " + compuGamer3.cantidad + "\n" + "4) Notebook Gamer Basica (750U$D): " + notebookGamer1.cantidad + "\n" + "5) Notebook Gamer Intermedia (1250U$D): " + notebookGamer2.cantidad + "\n" + "6) Notebook Gamer Avanzada (1750U$D): " + notebookGamer3.cantidad + "\n" + "Valor Total Computadoras: " + valorComputadoras + "U$D\n" + "Carrito Total: " + valorTotal + "U$D\n");
                                break;
                            case 3:
                                alert("Usted sumó al carrito de compras: \n" + "1) Control PS5 (69U$D): " + controlPS5.cantidad + "\n" + "2) Control Xbox Base (59U$D): " + controlXboxBase.cantidad + "\n" + "3) Control Xbox Elite (179U$D): " + controlXboxPro.cantidad + "\n" + "4) Control Nintendo Switch (79U$D): " + nintendoSwitch.cantidad + "\n" + "5) Teclado Basico (99U$D): " + teclado1.cantidad + "\n" + "6) Teclado Intermedio (149U$D): " + teclado2.cantidad + "\n" + "7) Teclado Avanzado (199U$D): " + teclado3.cantidad + "\n" + "8) Mouse Basico (49U$D): " + mouse1.cantidad + "\n" + "9) Mouse Intermedio (99U$D): " + mouse2.cantidad + "\n" + "10) Mouse Avanzado (189U$D): " + mouse3.cantidad + "\n" + "Valor Total Perifericos: " + valorPerifericos + "U$D\n" + "Carrito Total: " + valorTotal + "U$D\n");
                                break;
                            case 4:
                                alert("Usted sumó al carrito de compras: " + valorTotal + "U$D, tenga en cuenta que si el valor de la compra es mayor a 2000U$D, se le aplicará un descuento del 25% al finalizar la compra.");
                                break;
                        }
                    }
                } while (pregunta3 !== 5)
                if (pregunta3 === 5) {
                    break;
                }
            case 5: //quitar al carrito
                pregunta3 = prompt("¿Desea quitar algo al carrito de compras? SI/NO").toUpperCase();
                if (pregunta3 === "SI") {
                    do {
                        pregunta4 = parseInt(prompt("¿Que tipo de producto desea quitar? Seleccione unicamente el numero\n" + "Lista de tipos de productos:\n" + "1) Consolas\n" + "2) Computadoras\n" + "3) Perifericos\n" + "4) Vaciar Carrito\n" + "5) Ninguno"));

                        if (pregunta4 >= 1 && pregunta4 <= 4) {
                            switch (pregunta4) {
                                case 1: //quitar consolas
                                    do {
                                        pregunta5 = parseInt(prompt("¿Que consola desea quitar? Seleccione unicamente el numero\n" + "Cantidad de consolas:\n" + "1) PS5 Sin Lector De Discos: " + ps5SinLDC.cantidad + "\n" + "2) PS5 Con Lector De Discos: " + ps5ConLDC.cantidad + "\n" + "3) Xbox Series S: " + xboxSeriesS.cantidad + "\n" + "4) Xbox Series X: " + xboxSeriesX.cantidad + "\n" + "5) Nintendo Switch: " + nintendoSwitch.cantidad + "\n" + "6) Nintendo Switch OLED: " + nintendoSwitchOLED.cantidad + "\n" + "7) Nintendo Switch Lite: " + nintendoSwitchLite.cantidad + "\n" + "8) Ninguna"));
                                        if (pregunta5 >= 1 && pregunta5 <= 7) {
                                            switch (pregunta5) {
                                                case 1:
                                                    quitarDelCarrito(ps5SinLDC);
                                                    carritoFinal();
                                                    break;
                                                case 2:
                                                    quitarDelCarrito(ps5ConLDC);
                                                    carritoFinal();
                                                    break;
                                                case 3:
                                                    quitarDelCarrito(xboxSeriesS);
                                                    carritoFinal();
                                                    break;
                                                case 4:
                                                    quitarDelCarrito(xboxSeriesX);
                                                    carritoFinal();
                                                    break;
                                                case 5:
                                                    quitarDelCarrito(nintendoSwitch);
                                                    carritoFinal();
                                                    break;
                                                case 6:
                                                    quitarDelCarrito(nintendoSwitchOLED);
                                                    carritoFinal();
                                                    break;
                                                case 7:
                                                    quitarDelCarrito(nintendoSwitchLite);
                                                    carritoFinal();
                                                    break;
                                            }
                                        }
                                    } while (pregunta5 !== 8);
                                    break;
                                case 2: //quitar computadoras
                                    do {
                                        pregunta5 = parseInt(prompt("¿Que computadora desea quitar? Seleccione unicamente el numero\n" + "Cantidad de computadoras:\n" + "1) Computadora Gamer Basica: " + compuGamer1.cantidad + "\n" + "2) Computadora Gamer Intermedia: " + compuGamer2.cantidad + "\n" + "3) Computadora Gamer Avanzada: " + compuGamer3.cantidad + "\n" + "4) Notebook Gamer Basica: " + notebookGamer1.cantidad + "\n" + "5) notebook Gamer Intermedia: " + notebookGamer2.cantidad + "\n" + "6) Notebook Gamer Avanzada: " + notebookGamer3.cantidad + "\n" + "7) Ninguna"));
                                        if (pregunta5 >= 1 && pregunta5 <= 6) {
                                            switch (pregunta5) {
                                                case 1:
                                                    quitarDelCarrito(compuGamer1);
                                                    carritoFinal();
                                                    break;
                                                case 2:
                                                    quitarDelCarrito(compuGamer2);
                                                    carritoFinal();
                                                    break;
                                                case 3:
                                                    quitarDelCarrito(compuGamer3);
                                                    carritoFinal();
                                                    break;
                                                case 4:
                                                    quitarDelCarrito(notebookGamer1);
                                                    carritoFinal();
                                                    break;
                                                case 5:
                                                    quitarDelCarrito(notebookGamer2);
                                                    carritoFinal();
                                                    break;
                                                case 6:
                                                    quitarDelCarrito(notebookGamer3);
                                                    carritoFinal();
                                                    break;
                                            }
                                        }
                                    } while (pregunta5 !== 7);
                                    break;
                                case 3: //quitar perifericos
                                    do {
                                        pregunta5 = parseInt(prompt("¿Que Perifericos desea quitar? Seleccione unicamente el numero\n" + "Cantidad de perifericos:\n" + "1) Control PS5: " + controlPS5.cantidad + "\n" + "2) Control Xbox Base: " + controlXboxBase.cantidad + "\n" + "3) Control Xbox Elite: " + controlXboxPro.cantidad + "\n" + "4) Control Nintendo Switch: " + controlNintendoSwitch.cantidad + "\n" + "5) Teclado Basico: " + teclado1.cantidad + "\n" + "6) Teclado Intermedio: " + teclado2.cantidad + "\n" + "7) Teclado Avanzado: " + teclado3.cantidad + "\n" + "8) Mouse Basico: " + mouse1.cantidad + "\n" + "9) Mouse Intermedio: " + mouse2.cantidad + "\n" + "10) Mouse Avanzado: " + mouse3.cantidad + "\n" + "11) Ninguno"));
                                        if (pregunta5 >= 1 && pregunta5 <= 10) {
                                            switch (pregunta5) {
                                                case 1:
                                                    quitarDelCarrito(controlPS5);
                                                    carritoFinal();
                                                    break;
                                                case 2:
                                                    quitarDelCarrito(controlXboxBase);
                                                    carritoFinal();
                                                    break;
                                                case 3:
                                                    quitarDelCarrito(controlXboxPro);
                                                    carritoFinal();
                                                    break;
                                                case 4:
                                                    quitarDelCarrito(controlNintendoSwitch);
                                                    carritoFinal();
                                                    break;
                                                case 5:
                                                    quitarDelCarrito(teclado1);
                                                    carritoFinal();
                                                    break;
                                                case 6:
                                                    quitarDelCarrito(teclado2);
                                                    carritoFinal();
                                                    break;
                                                case 7:
                                                    quitarDelCarrito(teclado3);
                                                    carritoFinal();
                                                    break;
                                                case 8:
                                                    quitarDelCarrito(mouse1);
                                                    carritoFinal();
                                                    break;
                                                case 9:
                                                    quitarDelCarrito(mouse2);
                                                    carritoFinal();
                                                    break;
                                                case 10:
                                                    quitarDelCarrito(mouse3);
                                                    carritoFinal();
                                                    break;
                                            }
                                        }
                                    } while (pregunta5 !== 11);
                                    break;
                                case 4: // vaciar carrito
                                    pregunta5 = prompt("¿Está seguro de querer vaciar el carrito? Esta acción es irreversible. SI/NO").toUpperCase();
                                    if (pregunta5 === "SI") {
                                        vaciarCarrito();
                                        alert("Carrito Vacío!");
                                    }
                                    break;
                                case 5: //ninguno
                                    pregunta3 = prompt("¿Desea quitar algo al carrito de compras? SI/NO").toUpperCase();
                                    break;
                            }
                        }

                    } while (pregunta3 !== "NO");
                } else {
                    pregunta4 = prompt("¿Desea concretar la compra? SI/NO").toUpperCase();
                    if (pregunta4 === "SI") {
                        if (valorTotal >= 2000) {
                            descuento();
                            alert("Descuento Aplicado!\n" + "El Total sería de " + valorTotal + "U$D, gracias por su compra!");
                        } else {
                            alert("El Total sería de " + valorTotal + "U$D, gracias por su compra!");
                        }
                    } else {
                        pregunta5 = prompt("¿Desea vaciar el carrito? SI/NO");
                        if (pregunta5 === "SI") {
                            vaciarCarrito();
                            alert("Carrito Vacío!");
                        }
                    }
                }
                break;
        }
    }
    pregunta1 = prompt("¿Desea modificar algo en el carrito de compras? Recuerde que hay 25% de descuento en compras superiores a 2000U$D. SI/NO").toUpperCase();
} while (pregunta1 !== "NO");



if (pregunta1 === "NO") {
    if (valorTotal > 0) {
        pregunta2 = prompt("¿Desea concretar la compra? SI/NO").toUpperCase();
        if (pregunta2 === "SI") {
            if (valorTotal >= 2000) {
                descuento();
                alert("Descuento Aplicado!\n" + "El Total sería de " + valorTotal + "U$D, gracias por su compra!");
            } else {
                alert("El Total sería de " + valorTotal + "U$D, gracias por su compra!");
            }
        } else {
            pregunta3 = prompt("¿Desea vaciar el carrito? SI/NO");
            if (pregunta5 === "SI") {
                vaciarCarrito();
                alert("Carrito Vacío!");
            }
        }
    } else {
        alert("Vuelva Pronto!");
    }
}


