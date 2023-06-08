///////////////////////////////////////////////////////////////////////
///////////////////////   Simulador de Venta    ///////////////////////
///////////////////////           de            ///////////////////////
///////////////////////   Tienda de videojuegos ///////////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/////////////////////// Variables ///////////////////////
/////////////////////////////////////////////////////////

let carritoDeCompras = 0;

//////////     contadores     //////////

// consolas

let contadorPS5SinLDC = 0;
let contadorPS5ConLDC = 0;
let contadorXboxSeriesX = 0;
let contadorXboxSeriesS = 0;
let contadorNintendoSwitch = 0;
let contadorNintendoSwitchOLED = 0;
let contadorNintendoSwitchLite = 0;

// computadoras

let contadorCompuGamer1 = 0;
let contadorCompuGamer2 = 0;
let contadorCompuGamer3 = 0;
let contadorNotebookGamer1 = 0;
let contadorNotebookGamer2 = 0;
let contadorNotebookGamer3 = 0;

// perifericos

let contadorControlPS5 = 0;
let contadorControlXboxBase = 0;
let contadorControlXboxPro = 0;
let contadorControlNintendoSwitch = 0;
let contadorTeclado1 = 0;
let contadorTeclado2 = 0;
let contadorTeclado3 = 0;
let contadorMouse1 = 0;
let contadorMouse2 = 0;
let contadorMouse3 = 0;

////////// precios en dolares //////////

// consolas

let ps5SinLDC = 399;
let ps5ConLDC = 499;
let xboxSeriesX = 499;
let xboxSeriesS = 299;
let nintendoSwitch = 299;
let nintendoSwitchOLED = 349;
let nintendoSwitchLite = 199;

let valorTotalConsolas = 0;

// computadoras

let compuGamer1 = 500;
let compuGamer2 = 1000;
let compuGamer3 = 1500;
let notebookGamer1 = 750;
let notebookGamer2 = 1250;
let notebookGamer3 = 1750;

let valorTotalComputadoras = 0;

// perifericos

let controlPS5 = 69;
let controlXboxBase = 59;
let controlXboxPro = 179;
let controlNintendoSwitch = 79;
let teclado1 = 99;
let teclado2 = 149;
let teclado3 = 199;
let mouse1 = 49;
let mouse2 = 99;
let mouse3 = 189;

let valorTotalPerifericos = 0;

/////////////////////////////////////////////////////////
/////////////////////// Funciones ///////////////////////
/////////////////////////////////////////////////////////

function agregarAlCarrito(producto) {
    carritoDeCompras = carritoDeCompras + producto;
    alert("Producto Agregado!")
    return carritoDeCompras;
}

function agregarAlValorTotalConsola(producto) {
    valorTotalConsolas = valorTotalConsolas + producto
    return valorTotalConsolas
}

function agregarAlValorTotalComputadoras(producto) {
    valorTotalComputadoras = valorTotalComputadoras + producto
    return valorTotalPerifericos
}

function agregarAlValorTotalPerifericos(producto) {
    valorTotalPerifericos = valorTotalPerifericos + producto
    return valorTotalPerifericos
}

function quitarDelCarrito(producto) {
    carritoDeCompras = carritoDeCompras - producto;
    alert("Producto Quitado!")
    return carritoDeCompras;
}

function quitarAlValorTotalConsola(producto) {
    valorTotalConsolas = valorTotalConsolas - producto;
    return valorTotalConsolas
}

function quitarAlValorTotalComputadoras(producto) {
    valorTotalComputadoras = valorTotalComputadoras - producto;
    return valorTotalComputadoras
}

function quitarAlValorTotalPerifericos(producto) {
    valorTotalPerifericos = valorTotalPerifericos - producto;
    return valorTotalPerifericos
}

function vaciarCarrito() {
    return carritoDeCompras = 0, contadorPS5SinLDC = 0, contadorPS5ConLDC = 0, contadorXboxSeriesX = 0, contadorXboxSeriesS = 0, contadorNintendoSwitch = 0, contadorNintendoSwitchOLED = 0, contadorNintendoSwitchLite = 0, contadorCompuGamer1 = 0, contadorCompuGamer2 = 0, contadorCompuGamer3 = 0, contadorNotebookGamer1 = 0, contadorNotebookGamer2 = 0, contadorNotebookGamer3 = 0, contadorControlPS5 = 0, contadorControlXboxBase = 0, contadorControlXboxPro = 0, contadorControlNintendoSwitch = 0, contadorTeclado1 = 0, contadorTeclado2 = 0, contadorTeclado3 = 0, contadorMouse1 = 0, contadorMouse2 = 0, contadorMouse3 = 0;
}

function descuento() {
    carritoDeCompras = carritoDeCompras * 0.75;
    return carritoDeCompras;
}

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
                                agregarAlValorTotalConsola(ps5SinLDC);
                                contadorPS5SinLDC = contadorPS5SinLDC + 1;
                                break;
                            case 2:
                                agregarAlCarrito(ps5ConLDC);
                                agregarAlValorTotalConsola(ps5ConLDC);
                                contadorPS5ConLDC = contadorPS5ConLDC + 1;
                                break;
                            case 3:
                                agregarAlCarrito(xboxSeriesS);
                                agregarAlValorTotalConsola(xboxSeriesS);
                                contadorXboxSeriesS = contadorXboxSeriesS + 1;
                                break;
                            case 4:
                                agregarAlCarrito(xboxSeriesX);
                                agregarAlValorTotalConsola(xboxSeriesX);
                                contadorXboxSeriesX = contadorXboxSeriesX + 1;
                                break;
                            case 5:
                                agregarAlCarrito(nintendoSwitch);
                                agregarAlValorTotalConsola(nintendoSwitch);
                                contadorNintendoSwitch = contadorNintendoSwitch + 1;
                                break;
                            case 6:
                                agregarAlCarrito(nintendoSwitchOLED);
                                agregarAlValorTotalConsola(nintendoSwitchOLED);
                                contadorNintendoSwitchOLED = contadorNintendoSwitchOLED + 1;
                                break;
                            case 7:
                                agregarAlCarrito(nintendoSwitchLite);
                                agregarAlValorTotalConsola(nintendoSwitchLite);
                                contadorNintendoSwitchLite = contadorNintendoSwitchLite + 1;
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
                                agregarAlValorTotalComputadoras(compuGamer1);
                                contadorCompuGamer1 = contadorCompuGamer1 + 1;
                                break;
                            case 2:
                                agregarAlCarrito(compuGamer2);
                                agregarAlValorTotalComputadoras(compuGamer2);
                                contadorCompuGamer2 = contadorCompuGamer2 + 1;
                                break;
                            case 3:
                                agregarAlCarrito(compuGamer3);
                                agregarAlValorTotalComputadoras(compuGamer3);
                                contadorCompuGamer3 = contadorCompuGamer3 + 1;
                                break;
                            case 4:
                                agregarAlCarrito(notebookGamer1);
                                agregarAlValorTotalComputadoras(notebookGamer1);
                                contadorNotebookGamer1 = contadorNotebookGamer1 + 1;
                                break;
                            case 5:
                                agregarAlCarrito(notebookGamer2);
                                agregarAlValorTotalComputadoras(notebookGamer2);
                                contadorNotebookGamer2 = contadorNotebookGamer2 + 1;
                                break;
                            case 6:
                                agregarAlCarrito(notebookGamer3);
                                agregarAlValorTotalComputadoras(notebookGamer3);
                                contadorNotebookGamer3 = contadorNotebookGamer3 + 1;
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
                                agregarAlValorTotalPerifericos(controlPS5);
                                contadorControlPS5 = contadorControlPS5 + 1;
                                break;
                            case 2:
                                agregarAlCarrito(controlXboxBase);
                                agregarAlValorTotalPerifericos(controlXboxBase);
                                contadorControlXboxBase = contadorControlXboxBase + 1;
                                break;
                            case 3:
                                agregarAlCarrito(controlXboxPro);
                                agregarAlValorTotalPerifericos(controlXboxPro);
                                contadorControlXboxPro = contadorControlXboxPro + 1;
                                break;
                            case 4:
                                agregarAlCarrito(controlNintendoSwitch);
                                agregarAlValorTotalPerifericos(controlNintendoSwitch);
                                contadorControlNintendoSwitch = contadorControlNintendoSwitch + 1;
                                break;
                            case 5:
                                agregarAlCarrito(teclado1);
                                agregarAlValorTotalPerifericos(teclado1);
                                contadorTeclado1 = contadorTeclado1 + 1;
                                break;
                            case 6:
                                agregarAlCarrito(teclado2);
                                agregarAlValorTotalPerifericos(teclado2);
                                contadorTeclado2 = contadorTeclado2 + 1;
                                break;
                            case 7:
                                agregarAlCarrito(teclado3);
                                agregarAlValorTotalPerifericos(teclado3);
                                contadorTeclado3 = contadorTeclado3 + 1;
                                break;
                            case 8:
                                agregarAlCarrito(mouse1);
                                agregarAlValorTotalPerifericos(mouse1);
                                contadorMouse1 = contadorMouse1 + 1;
                                break;
                            case 9:
                                agregarAlCarrito(mouse2);
                                agregarAlValorTotalPerifericos(mouse2);
                                contadorMouse2 = contadorMouse2 + 1;
                                break;
                            case 10:
                                agregarAlCarrito(mouse3);
                                agregarAlValorTotalPerifericos(mouse3);
                                contadorMouse3 = contadorMouse3 + 1;
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
                                alert("Usted sumó al carrito de compras: \n" + "1) PS5 Sin Lector De Discos (399U$D): " + contadorPS5SinLDC + "\n" + "2) PS5 Con Lector De Discos (499U$D): " + contadorPS5ConLDC + "\n" + "3) Xbox Series S (299U$D): " + contadorXboxSeriesS + "\n" + "4) Xbox Series X (499U$D): " + contadorXboxSeriesX + "\n" + "5) Nintendo Switch (299U$D): " + contadorNintendoSwitch + "\n" + "6) Nintendo Switch OLED (349U$D): " + contadorNintendoSwitchOLED + "\n" + "7) Nintendo Switch Lite (199U$D): " + contadorNintendoSwitchLite + "\n" + "Valor Total Consolas: " + valorTotalConsolas + "U$D\n" + "Carrito Total: " + carritoDeCompras + "U$D\n");
                                break;
                            case 2:
                                alert("Usted sumó al carrito de compras: \n" + "1) Computadora Gamer Basica (500U$D): " + contadorCompuGamer1 + "\n" + "2) Computadora Gamer Intermedia (1000U$D): " + contadorCompuGamer2 + "\n" + "3) Computadora Gamer Avanzada (1500U$D): " + contadorCompuGamer3 + "\n" + "4) Notebook Gamer Basica (750U$D): " + contadorNotebookGamer1 + "\n" + "5) Notebook Gamer Intermedia (1250U$D): " + contadorNotebookGamer2 + "\n" + "6) Notebook Gamer Avanzada (1750U$D): " + contadorNotebookGamer3 + "\n" + "Valor Total Computadoras: " + valorTotalComputadoras + "U$D\n" + "Carrito Total: " + carritoDeCompras + "U$D\n");
                                break;
                            case 3:
                                alert("Usted sumó al carrito de compras: \n" + "1) Control PS5 (69U$D): " + contadorControlPS5 + "\n" + "2) Control Xbox Base (59U$D): " + contadorControlXboxBase + "\n" + "3) Control Xbox Elite (179U$D): " + contadorControlXboxPro + "\n" + "4) Control Nintendo Switch (79U$D): " + contadorNintendoSwitch + "\n" + "5) Teclado Basico (99U$D): " + contadorTeclado1 + "\n" + "6) Teclado Intermedio (149U$D): " + contadorTeclado2 + "\n" + "7) Teclado Avanzado (199U$D): " + contadorTeclado3 + "\n" + "8) Mouse Basico (49U$D): " + contadorMouse1 + "\n" + "9) Mouse Intermedio (99U$D): " + contadorMouse2 + "\n" + "10) Mouse Avanzado (189U$D): " + contadorMouse3 + "\n" + "Valor Total Perifericos: " + valorTotalPerifericos + "U$D\n" + "Carrito Total: " + carritoDeCompras + "U$D\n");
                                break;
                            case 4:
                                alert("Usted sumó al carrito de compras: " + carritoDeCompras + "U$D, tenga en cuenta que si el valor de la compra es mayor a 2000U$D, se le aplicará un descuento del 25% al finalizar la compra.");
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
                                        pregunta5 = parseInt(prompt("¿Que consola desea quitar? Seleccione unicamente el numero\n" + "Cantidad de consolas:\n" + "1) PS5 Sin Lector De Discos: " + contadorPS5SinLDC + "\n" + "2) PS5 Con Lector De Discos: " + contadorPS5ConLDC + "\n" + "3) Xbox Series S: " + contadorXboxSeriesS + "\n" + "4) Xbox Series X: " + contadorXboxSeriesX + "\n" + "5) Nintendo Switch: " + contadorNintendoSwitch + "\n" + "6) Nintendo Switch OLED: " + contadorNintendoSwitchOLED + "\n" + "7) Nintendo Switch Lite: " + contadorNintendoSwitchLite + "\n" + "8) Ninguna"));
                                        if (pregunta5 >= 1 && pregunta5 <= 7) {
                                            switch (pregunta5) {
                                                case 1:
                                                    quitarDelCarrito(ps5SinLDC);
                                                    quitarAlValorTotalConsola(ps5SinLDC);
                                                    contadorPS5SinLDC = contadorPS5SinLDC - 1;
                                                    break;
                                                case 2:
                                                    quitarDelCarrito(ps5ConLDC);
                                                    quitarAlValorTotalConsola(ps5ConLDC);
                                                    contadorPS5ConLDC = contadorPS5ConLDC - 1;
                                                    break;
                                                case 3:
                                                    quitarDelCarrito(xboxSeriesS);
                                                    quitarAlValorTotalConsola(xboxSeriesS);
                                                    contadorXboxSeriesS = contadorXboxSeriesS - 1;
                                                    break;
                                                case 4:
                                                    quitarDelCarrito(xboxSeriesX);
                                                    quitarAlValorTotalConsola(xboxSeriesX);
                                                    contadorXboxSeriesX = contadorXboxSeriesX - 1;
                                                    break;
                                                case 5:
                                                    quitarDelCarrito(nintendoSwitch);
                                                    quitarAlValorTotalConsola(nintendoSwitch);
                                                    contadorNintendoSwitch = contadorNintendoSwitch - 1;
                                                    break;
                                                case 6:
                                                    quitarDelCarrito(nintendoSwitchOLED);
                                                    quitarAlValorTotalConsola(nintendoSwitchOLED);
                                                    contadorNintendoSwitchOLED = contadorNintendoSwitchOLED - 1;
                                                    break;
                                                case 7:
                                                    quitarDelCarrito(nintendoSwitchLite);
                                                    quitarAlValorTotalConsola(nintendoSwitchLite);
                                                    contadorNintendoSwitchLite = contadorNintendoSwitchLite - 1;
                                                    break;
                                            }
                                        }
                                    } while (pregunta5 !== 8);
                                    break;
                                case 2: //quitar computadoras
                                    do {
                                        pregunta5 = parseInt(prompt("¿Que computadora desea quitar? Seleccione unicamente el numero\n" + "Cantidad de computadoras:\n" + "1) Computadora Gamer Basica: " + contadorCompuGamer1 + "\n" + "2) Computadora Gamer Intermedia: " + contadorCompuGamer2 + "\n" + "3) Computadora Gamer Avanzada: " + contadorCompuGamer3 + "\n" + "4) Notebook Gamer Basica: " + contadorNotebookGamer1 + "\n" + "5) notebook Gamer Intermedia: " + contadorNotebookGamer2 + "\n" + "6) Notebook Gamer Avanzada: " + contadorNotebookGamer3 + "\n" + "7) Ninguna"));
                                        if (pregunta5 >= 1 && pregunta5 <= 6) {
                                            switch (pregunta5) {
                                                case 1:
                                                    quitarDelCarrito(compuGamer1);
                                                    quitarAlValorTotalComputadoras(compuGamer1);
                                                    contadorCompuGamer1 = contadorCompuGamer1 - 1;
                                                    break;
                                                case 2:
                                                    quitarDelCarrito(compuGamer2);
                                                    quitarAlValorTotalComputadoras(compuGamer2);
                                                    contadorCompuGamer2 = contadorCompuGamer2 - 1;
                                                    break;
                                                case 3:
                                                    quitarDelCarrito(compuGamer3);
                                                    quitarAlValorTotalComputadoras(compuGamer3);
                                                    contadorCompuGamer3 = contadorCompuGamer3 - 1;
                                                    break;
                                                case 4:
                                                    quitarDelCarrito(notebookGamer1);
                                                    quitarAlValorTotalComputadoras(notebookGamer1);
                                                    contadorNotebookGamer1 = contadorNotebookGamer1 - 1;
                                                    break;
                                                case 5:
                                                    quitarDelCarrito(notebookGamer2);
                                                    quitarAlValorTotalComputadoras(notebookGamer2);
                                                    contadorNotebookGamer2 = contadorNotebookGamer2 - 1;
                                                    break;
                                                case 6:
                                                    quitarDelCarrito(notebookGamer3);
                                                    quitarAlValorTotalComputadoras(notebookGamer3);
                                                    contadorNotebookGamer3 = contadorNotebookGamer3 - 1;
                                                    break;
                                            }
                                        }
                                    } while (pregunta5 !== 7);
                                    break;
                                case 3: //quitar perifericos
                                    do {
                                        pregunta5 = parseInt(prompt("¿Que Perifericos desea quitar? Seleccione unicamente el numero\n" + "Cantidad de perifericos:\n" + "1) Control PS5: " + contadorControlPS5 + "\n" + "2) Control Xbox Base: " + contadorControlXboxBase + "\n" + "3) Control Xbox Elite: " + contadorControlXboxPro + "\n" + "4) Control Nintendo Switch: " + contadorNintendoSwitch + "\n" + "5) Teclado Basico: " + contadorTeclado1 + "\n" + "6) Teclado Intermedio: " + contadorTeclado2 + "\n" + "7) Teclado Avanzado: " + contadorTeclado3 + "\n" + "8) Mouse Basico: " + contadorMouse1 + "\n" + "9) Mouse Intermedio: " + contadorMouse2 + "\n" + "10) Mouse Avanzado: " + contadorMouse3 + "\n" + "11) Ninguno"));
                                        if (pregunta5 >= 1 && pregunta5 <= 10) {
                                            switch (pregunta5) {
                                                case 1:
                                                    quitarDelCarrito(controlPS5);
                                                    quitarAlValorTotalPerifericos(controlPS5);
                                                    contadorControlPS5 = contadorControlPS5 - 1;
                                                    break;
                                                case 2:
                                                    quitarDelCarrito(controlXboxBase);
                                                    quitarAlValorTotalPerifericos(controlXboxBase);
                                                    contadorControlXboxBase = contadorControlXboxBase - 1;
                                                    break;
                                                case 3:
                                                    quitarDelCarrito(controlXboxPro);
                                                    quitarAlValorTotalPerifericos(controlXboxPro);
                                                    contadorControlXboxPro = contadorControlXboxPro - 1;
                                                    break;
                                                case 4:
                                                    quitarDelCarrito(controlNintendoSwitch);
                                                    quitarAlValorTotalPerifericos(controlNintendoSwitch);
                                                    contadorControlNintendoSwitch = contadorControlNintendoSwitch - 1;
                                                    break;
                                                case 5:
                                                    quitarDelCarrito(teclado1);
                                                    quitarAlValorTotalPerifericos(teclado1);
                                                    contadorTeclado1 = contadorTeclado1 - 1;
                                                    break;
                                                case 6:
                                                    quitarDelCarrito(teclado2);
                                                    quitarAlValorTotalPerifericos(teclado2);
                                                    contadorTeclado2 = contadorTeclado2 - 1;
                                                    break;
                                                case 7:
                                                    quitarDelCarrito(teclado3);
                                                    quitarAlValorTotalPerifericos(teclado3);
                                                    contadorTeclado3 = contadorTeclado3 - 1;
                                                    break;
                                                case 8:
                                                    quitarDelCarrito(mouse1);
                                                    quitarAlValorTotalPerifericos(mouse1);
                                                    contadorMouse1 = contadorMouse1 - 1;
                                                    break;
                                                case 9:
                                                    quitarDelCarrito(mouse2);
                                                    quitarAlValorTotalPerifericos(mouse2);
                                                    contadorMouse2 = contadorMouse2 - 1;
                                                    break;
                                                case 10:
                                                    quitarDelCarrito(mouse3);
                                                    quitarAlValorTotalPerifericos(mouse3);
                                                    contadorMouse3 = contadorMouse3 - 1;
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
                        if (carritoDeCompras >= 2000) {
                            descuento();
                            alert("Descuento Aplicado!\n" + "El Total sería de " + carritoDeCompras + "U$D, gracias por su compra!");
                        } else {
                            alert("El Total sería de " + carritoDeCompras + "U$D, gracias por su compra!");
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
    if (carritoDeCompras > 0) {
        pregunta2 = prompt("¿Desea concretar la compra? SI/NO").toUpperCase();
        if (pregunta2 === "SI") {
            if (carritoDeCompras >= 2000) {
                descuento();
                alert("Descuento Aplicado!\n" + "El Total sería de " + carritoDeCompras + "U$D, gracias por su compra!");
            } else {
                alert("El Total sería de " + carritoDeCompras + "U$D, gracias por su compra!");
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


