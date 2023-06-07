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

// Asignar medidas del canvas
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

  // mapa
  const map = maps[2];

// obtener arreglo de caracteres individuales
  const mapRowCols = map.trim().split('\n').map(row => row.trim().split(''));

  // index: obtener posiciones
  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
     
      // renderizar punto de partida: puerta  y validar posiciones (x,y)
      if (col == 'O' && playerPosition.x == undefined && playerPosition.y == undefined) {
       playerPosition.x = elementsSize * (colIndex + 1);
       playerPosition.y = elementsSize * (rowIndex + 1);
       console.log(playerPosition);
      }
      // renderizar emojis (bombitas y regalo)
      game.fillText(emojis[col], elementsSize * (colIndex + 1), elementsSize * (rowIndex + 1));
    });
  });

  // mover jugador
  movePlayer();
}

// Agregar eventos de click a los botones
upButton.addEventListener('click', function() {


  //Evitar que salga del mapa 
  positionUp();
});

leftButton.addEventListener('click', function() {

  //Evitar que salga del mapa 
  positioLeft();
});

rightButton.addEventListener('click', function() {

  //Evitar que salga del mapa 
  positionRight();
});

downButton.addEventListener('click', function() {
  //Evitar que salga del mapa 
  positionDown();
});

// Agregar evento de escucha para las teclas
window.addEventListener('keydown', function(event) {
  console.log(event);
  switch(event.key) {
      case 'ArrowUp': // Arriba
          
          // Evitar que se salga del mapa
          positionUp();
          break;  
      case 'ArrowLeft': // Izquierda
          positioLeft();
          break;
      case 'ArrowRight': // Derecha
      
        positionRight();
          break;
      case 'ArrowDown': // Abajo
        positionDown();
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


/*Posiciones y evitar que salga del mapa*/

function positionUp(){
  // elementsSize = pto de partida de los elementos
  if((playerPosition.y - elementsSize)<(elementsSize-2)){
    console.log('OUT');
    return; 
  }
  playerPosition.y-=elementsSize;
  startGame()
}

function positioLeft(){
  // Evitar que se salga del mapa; elementsSize = pto de partida de los elementos
  if ((playerPosition.x - elementsSize)<(elementsSize-2)){
    console.log('OUT');
    return;
  }
  playerPosition.x-=elementsSize;
  startGame()
}

function positionRight(){

  // Evitar que se salga del mapa; canvasSize = Limite
  if ((playerPosition.x + elementsSize)>canvasSize){
    console.log('OUT');
    return;
  }
  playerPosition.x+=elementsSize;
  startGame()
}

function positionDown(){
  // Evitar que se salga del mapa; canvasSize = Limite
  if((playerPosition.y+elementsSize)>canvasSize) {
    console.log('out');
    return;
  }
  playerPosition.y+=elementsSize;
  startGame()
}
