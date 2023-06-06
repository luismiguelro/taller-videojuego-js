const canvas = document.querySelector('#game');
const game = canvas.getContext('2d'); // contexto: 2 dimensiones (x,y)

let canvasSize;
let elementsSize;

// Obtener referencia a los botones
const upButton = document.getElementById('up');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const downButton = document.getElementById('down');

//posicion del jugador
const playerPosition = {
  x: undefined,
  y: undefined,
};

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
  clearMap();
  // tamaño elementos
  game.font = (elementsSize - 6) + 'px Verdana';
  game.textAlign = "end";
  const map = maps[2];
// obtener arreglo de caracteres individuales
  const mapRowCols = map.trim().split('\n').map(row => row.trim().split(''));

  // index: obtener posiciones
  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
     
      // imprimir punto de partida
      if (col == 'O' && playerPosition.x == undefined && playerPosition.y == undefined) {
       playerPosition.x = elementsSize * (colIndex + 1);
       playerPosition.y = elementsSize * (rowIndex + 1);
       console.log(playerPosition);
      }
      game.fillText(emojis[col], elementsSize * (colIndex + 1), elementsSize * (rowIndex + 1));
    });
  });
  movePlayer();
}

// Agregar eventos de clic a los botones
upButton.addEventListener('click', function() {
  mover('arriba');
  playerPosition.y-=elementsSize;
  startGame()
});

leftButton.addEventListener('click', function() {
  mover('izquierda');
  playerPosition.x-=elementsSize;
  startGame()
});

rightButton.addEventListener('click', function() {
  mover('derecha');
  playerPosition.x+=elementsSize;
  startGame()
});

downButton.addEventListener('click', function() {
  mover('abajo');

  playerPosition.y+=elementsSize;
  startGame()
 
});

// Agregar evento de escucha para las teclas
window.addEventListener('keydown', function(event) {
  console.log(event);
  switch(event.key) {
      case 'ArrowUp': // Arriba
          mover('arriba');
          playerPosition.y-=elementsSize;
          startGame()
          break;
      case 'ArrowLeft': // Izquierda
          mover('izquierda');
          playerPosition.x-=elementsSize;
          startGame()
          break;
      case 'ArrowRight': // Derecha
          mover('derecha');
          playerPosition.x+=elementsSize;
          startGame()
          break;
      case 'ArrowDown': // Abajo
          mover('abajo');
          playerPosition.y+=elementsSize;
          startGame()
          break;
  }
});




// Funcion movimiento jugador
function movePlayer(){
  game.fillText(emojis['PLAYER'],playerPosition.x, playerPosition.y)
}

// borrar mapa
function clearMap(){
  game.clearRect(0, 0, canvasSize, canvasSize)
}

// Función de movimiento
function mover(direccion) {
  // Realizar acción de movimiento en la dirección especificada
  console.log('Movimiento hacia ' + direccion);
}

