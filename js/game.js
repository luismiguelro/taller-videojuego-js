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

// posicion del regalo
const giftPosition = {
  x: undefined,
  y: undefined,
}

//posicion bombas
let bombPosition = [];

window.addEventListener('load',setCanvasSize);// una vez cargue el HTMl

window.addEventListener('resize',setCanvasSize);// resize del canvas

// Asignar medidas del canvas
function setCanvasSize() {
  windowHeight = window.innerHeight * 0.8
  windowWidth = window.innerWidth * 0.8
//Dependiendo del tamaño de la pantalla, va a colocar el tamaño cuadrado del canvas
//Al dividir entre 10 y luego aproximar el valor a un entero garantiza que el canvas será un entero múltiplo de 10. Finalmente se multiplica la expresión por 10 para obtener el dato real del canvas
//Con Math.ceil nos ahorramos el problema de los decimales
  if (window.innerHeight > window.innerWidth) {
      if ((windowWidth % 10) !== 0) {
           canvasSize = Math.ceil(windowWidth / 10) * 10;
      } else {
           canvasSize = windowWidth;
      }} 
  else {
      if ((windowHeight % 10) !== 0) {
           canvasSize = Math.ceil(windowHeight / 10) * 10;
      } else {
           canvasSize = windowHeight;
      }
  }

   canvas.setAttribute('width', canvasSize);
   canvas.setAttribute('height', canvasSize);
   elementsSize = (canvasSize / 10);
   startGame()
}

// inicializar juego
function startGame() {
  clearMap();
  // tamaño elementos
  game.font = (elementsSize - 5) + 'px Verdana';
  game.textAlign = "end";


  // mapa
  const map = maps[2];

// obtener arreglo de caracteres individuales
  const mapRowCols = map.trim().split('\n').map(row => row.trim().split(''));

  // index: obtener posiciones
  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      //Constantes
      const posX = Math.round(elementsSize * (colIndex + 1));
      const posY = Math.round(elementsSize * (rowIndex + 1));

      // renderizar punto de partida: puerta  y validar posiciones (x,y)
      if (col == 'O' && playerPosition.x == undefined && playerPosition.y == undefined) {
        playerPosition.x = posX;
        playerPosition.y = posY;
    
      } 

      //-- Regalito
      else if (col==='I'){
        //Posicion del regalito
        giftPosition.x=posX;
        giftPosition.y=posY;
      }

      //-- Bombas
      else if (col==='X'){
        bombPosition.push({
          //posiciones de las bombitas
          x : posX,
          y : posY
        });
      }
      // renderizar emojis (bombitas y regalo)
      game.fillText(emojis[col], posX, posY);
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
  // regalo
  giftDetection();

  // Bombitas
  bombColision();

  // jugador
  game.fillText(emojis['PLAYER'],playerPosition.x, playerPosition.y);
}

// borrar mapa
function clearMap(){
  //limpiar las posiciones
  bombPosition = [];
  
  //limpiar mapa
  game.clearRect(0, 0, canvasSize, canvasSize)
}

// Detectar colision con las bombas
function bombColision(){
  const enemyCollision = bombPosition.find(enemy =>{
    const enemyCollisionX = enemy.x === playerPosition.x;
    const enemyCollisionY = enemy.y === playerPosition.y;
    return enemyCollisionX && enemyCollisionY;
  })
  if(enemyCollision){
    console.log('boom!');
  }
}

// Detectar regalo
function giftDetection(){
   // variables con distintas colisiones
   const giftCollisionX = playerPosition.x === giftPosition.x;
   const giftCollisionY = playerPosition.y === giftPosition.y;
   const giftCollision = giftCollisionX && giftCollisionY;
   //Validar colision con el regalo
   if(giftCollision){
     console.log('Subes');
   }
}

/*Posiciones y evitar que salga del mapa*/
function positionUp(){
  // elementsSize = pto de partida de los elementos
  if((playerPosition.y - elementsSize)<(elementsSize)){
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

