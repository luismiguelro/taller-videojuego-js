const canvas = document.querySelector('#game');
const game = canvas.getContext('2d'); // contexto: 2 dimensiones (x,y)

let canvasSize;
let elementsSize;

// Obtener referencia a los botones
const upButton = document.getElementById('up');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const downButton = document.getElementById('down');


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

// Agregar eventos de clic a los botones
upButton.addEventListener('click', function() {
  mover('arriba');
});

leftButton.addEventListener('click', function() {
  mover('izquierda');
});

rightButton.addEventListener('click', function() {
  mover('derecha');
});

downButton.addEventListener('click', function() {
  mover('abajo');
});

// Agregar evento de escucha para las teclas
window.addEventListener('keydown', function(event) {
  console.log(event);
  switch(event.key) {
      case 'ArrowUp': // Arriba
          mover('arriba');
          break;
      case 'ArrowLeft': // Izquierda
          mover('izquierda');
          break;
      case 'ArrowRight': // Derecha
          mover('derecha');
          break;
      case 'ArrowDown': // Abajo
          mover('abajo');
          break;
  }
});

// Función de movimiento
function mover(direccion) {
  // Realizar acción de movimiento en la dirección especificada
  console.log('Movimiento hacia ' + direccion);
}