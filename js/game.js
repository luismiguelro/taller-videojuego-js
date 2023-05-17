const canvas = document.querySelector('#game');
const game = canvas.getContext('2d'); // contexto: 2 dimensiones (x,y)


let canvasSize;
let elementsSize;

window.addEventListener('load',setCanvasSize);// una vez cargue el HTMl

window.addEventListener('resize',setCanvasSize);// resize del canvas

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

   elementsSize = canvasSize / 10;

  startGame();
}

// inicializar juego
function startGame(){
   
    game.font = (elementsSize-6) + 'px Verdana';
    game.textAlign = "end";

    // Recorrer arreglo
  const map = maps[2];

  /*
  Crear un arreglo cada vez que se tenga un salto de linea
    - .split: genera un arreglo por cada elemento)
    - .trim (metodo de los strigns): ayuda a limpiar los espacios en blanco */

    // obtener filas del mapa
  const mapRows = map.trim().split('\n');

  /*obtener columnas : se obtiene un array de array
      - row: representa cada elemento de la fila, y a cada string (row)
      se ejecuta el .trim
  */

  // crear nuevo arreglo
  const mapRowCols = mapRows.map(row=>row.trim().split(''));
    
    for (let row = 1; row <= 10;row++) {
        for (let col= 1;col <= 10; col++) {
          game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
      }   
    }
}
