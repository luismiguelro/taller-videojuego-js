/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '🧡'
  };

  //Info para el layout
  const initialInfo ={
    message: "¡BIENVENIDO!",
    description: "Espero que te diviertas con este juego.",
    btn: "INICIAAA!"
}

  const winGame = {
    message: "🏆FELICIDADES🏆",
    description: "",
    btnYes: "Si",
    btnNo: "No"
  };

  const gameOver = {
    message: "HAS PERDIDO...🥴",
    description: "Te has quedado sin vidas, ¿Jugamos otra vez?",
    btnYes: "Si",
    btnNo: "No"
  }
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
