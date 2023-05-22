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
function startGame() {
  // tamaño elementos
  game.font = (elementsSize - 6) + 'px Verdana';
  game.textAlign = "end";

  // mapa del juego
  const map = maps[1];

// obtener arreglo de caracteres individuales
  const mapRowCols = map.trim().split('\n').map(row => row.trim().split(''));

  // index: obtener posiciones
  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      game.fillText(emojis[col], elementsSize * (colIndex + 1), elementsSize * (rowIndex + 1));
    });
  });
}
