let numeroFilas = 0;
let numeroColumnas = 0;

function iniciarPartida() {

    let preguntaFilas = parseInt(prompt("Introduce el número de filas"));
    let preguntaColumnas = parseInt(prompt("Ahora introduce el número de columnas"));

    if (preguntaFilas < 10) {
        alert("El número mínimo para filas es 10");
        numeroFilas = 10;
        console.log(numeroFilas);
    } else if (preguntaFilas > 30) {
        alert("El número máximo para filas es 30");
        numeroFilas = 30;
        console.log(numeroFilas);
    } else {
        console.log(preguntaFilas);
    }

    if (preguntaColumnas < 10) {
        alert("El número mínimo para columnas es 10");z
        numeroColumnas = 10;
        console.log(numeroColumnas);
    } else if (preguntaColumnas > 30) {
        alert("El número máximo para columnas es 30");
        numeroColumnas = 30;
        console.log(numeroColumnas);
    } else {
        console.log(preguntaColumnas);
    }

}

function crearTaulell() {
    //Crear una taula dinamica del numero de files per el numero de columnes.
}

function setMines() {
    //Establir la propietat mina a true un 17% de totes les caselles.
}

function calculaAdjacents() {
    //Apuntarà el número de mines adjacents de cada casella en una custom html property data-num-mines inicialment a zero.
}

