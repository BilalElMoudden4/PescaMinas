let numeroFilas = 0;
let numeroColumnas = 0;

function iniciarPartida(q) {

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
        alert("El número mínimo para columnas es 10");
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
    
}
