let numeroFilas = 0;
let numeroColumnas = 0;
let tablero = [];

const mina = "/Imagenes/mina20px.jpg";
const fondo = "/Imagenes/fons20px.jpg";

// Función principal que inicia el juego.
function iniciarPartida() {
    solicitarDimensiones();  // Solicita al usuario las dimensiones del tablero.
    crearTablero();          // Crea la representación visual del tablero en HTML.
    setMines();              // Coloca las minas en posiciones aleatorias.
    calculaAdjacents();      // Calcula y asigna los valores de minas adyacentes.
}

// Función para obtener las dimensiones del tablero del usuario.
function solicitarDimensiones() {
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
}

// Función para crear el tablero en HTML.
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

// Función para colocar minas en el tablero.
function setMines() {
    tablero = []; // Limpiamos el tablero 

    const totalCasillas = numeroFilas * numeroColumnas;
    const totalMinas = Math.ceil(0.17 * totalCasillas); // 17% de las casillas serán minas

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
    console.log(tablero);
}

// Función para calcular y asignar valores de minas adyacentes.
function calculaAdjacents() {
    for (let i = 0; i < numeroFilas; i++) {
        for (let j = 0; j < numeroColumnas; j++) {
            if (!esMina(i, j)) {
                let numMinesAdjacents = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const filaActual = i + x;
                        const columnaActual = j + y;
                        if (filaActual >= 0 && filaActual < numeroFilas && columnaActual >= 0 && columnaActual < numeroColumnas) {
                            if (esMina(filaActual, columnaActual)) {
                                numMinesAdjacents++;
                            }
                        }
                    }
                }
                setMinesAdjacents(i, j, numMinesAdjacents);
            }
        }
    }
}

// Función para verificar si una celda contiene una mina.
function esMina(x, y) {
    return tablero[x][y].mina;
}

function setMinesAdjacents() {
}

iniciarPartida();
