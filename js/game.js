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
      
      canvas.setAttribute('width', canvasSize);
      canvas.setAttribute('height', canvasSize);
      
      elementsSize = canvasSize / 10;
  
    startGame();
  }
// inicializar juego

function startGame(){
   
    game.font = elementsSize + 'px Verdana';
    game.textAlign = "";

    for (let i = 0; i <= 10; i++) {
        for (let j = 1; j < 11; j++) {
            game.fillText(emojis['X'], elementsSize*i, elementsSize*j);
        }
       
      }
}
