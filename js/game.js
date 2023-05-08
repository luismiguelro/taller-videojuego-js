const canvas = document.querySelector('#game');

// contexto: 2 dimensiones (x,y)
const game = canvas.getContext('2d');

// una vez cargue el HTMl
window.addEventListener('load',starGame);
// inicializar juego
function starGame(){
    // asignar el size de la pantalla
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.7;
    } else {
        canvasSize = window.innerHeight * 0.7;
    }
    
   
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    // calcular tamaño elemento 
    const elementsSize = (canvasSize / 10)-1;
    console.log({ canvasSize, elementsSize });

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize, elementsSize * i);
      }
}

