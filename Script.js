let numeroFilas = 0;
let numeroColumnas = 0;

const mina = "/Imagenes/mina20px.jpg";
const fondo = "/Imagenes/fons20px.jpg";

function iniciarPartida() {
    let preguntaFilas = parseInt(prompt("Introduce el número de filas"));
    let preguntaColumnas = parseInt(prompt("Ahora introduce el número de columnas"));

    if (preguntaFilas < 10) {
        alert("El número mínimo para filas es 10");
        numeroFilas = 10;
    } else if (preguntaFilas > 30) {
        alert("El número máximo para filas es 30");
        numeroFilas = 30;
    } else {
        numeroFilas = preguntaFilas;
    }

    if (preguntaColumnas < 10) {
        alert("El número mínimo para columnas es 10");
        numeroColumnas = 10;
    } else if (preguntaColumnas > 30) {
        alert("El número máximo para columnas es 30");
        numeroColumnas = 30;
    } else {
        numeroColumnas = preguntaColumnas;
    }

    crearTablero();
}

function crearTablero() {
    let tablaHTML = "<table class='table' style='border:1px solid black'>";

    for (let i = 0; i < numeroFilas; i++) {
        tablaHTML += "<tr>";
        tablaHTML += "<th><img src=" + fondo + "></th>";

        for (let x = 0; x < numeroColumnas; x++) {
            tablaHTML += "<td><img src=" + fondo + "></td>";
        }

        tablaHTML += "</tr>";
    }

    tablaHTML += "</table>";
    document.getElementById("taulell").innerHTML = tablaHTML;
}

function setMines() {
    const totalCasillas = numeroFilas * numeroColumnas;
    const totalMinas = Math.ceil(0.17 * totalCasillas); // 17% de las casillas serán minas

    // Crear una matriz que represente el tablero
    const tablero = [];
    for (let i = 0; i < numeroFilas; i++) {
        tablero[i] = [];
        for (let j = 0; j < numeroColumnas; j++) {
            tablero[i][j] = { mina: false };
        }
    }

    for (let i = 0; i < totalMinas; i++) {
        const fila = Math.floor(Math.random() * numeroFilas);
        const columna = Math.floor(Math.random() * numeroColumnas);

        // Establecer la propiedad mina a true para la posición (fila, columna)
        tablero[fila][columna].mina = true;
    }

    // Aquí puedes trabajar con la matriz 'tablero' que ahora contiene la información de las minas
    console.log(tablero);
}

// Llamada a la función setMines
setMines();



function calculaAdjacents() {
    // Apuntará el número de minas adyacentes de cada casilla en una propiedad personalizada data-num-mines inicialmente a cero.
}

// Llamada inicial para iniciar la partida.
iniciarPartida();
