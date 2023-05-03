const canvas = document.querySelector('#game');

// contexto: 2 dimensiones (x,y)
const game = canvas.getContext('2d');

// una vez cargue el HTMl
window.addEventListener('load',starGame);
// inicializar juego
function starGame(){
    /* donde comienza/termina el trazo fillRect(x,y,w,h);
    game.fillRect(0,0,100,100);
    game.fillRect(0,50,100,100);*/


    /*Borrar rectangulo
    game.clearRect(50,50,50,50);
    game.clearRect(0,0,50,50);
    */
   /*Estilos canva */
   game.font = '25px Arial'
   game.fillStyle= "green";
   game.textAlign = "left"

   /*Dibujar una linea 
    game.beginPath();
    game.lineWidth = "5";
    game.strokeStyle = "orange"; // Green path
    game.moveTo(0, 75);
    game.lineTo(250, 75);
    game.stroke(); // Draw it */

    /*Dibujar un circulo 
    game.beginPath();
    game.arc(100, 75, 50, 0, 2 * Math.PI);
    game.stroke();
    */

    /*('Text',x,y)*/
   game.fillText('Crack (y)',133,78);
   game.strokeRect(0,0,100,100);

  
    
}