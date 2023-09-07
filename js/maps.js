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
    'HEART': '💚'
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
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);

  maps.push(`
  O-XXXXXXXI
  X-XXX-XXX-
  X---X---X-
  XXX-X-X-X-
  XXX-X-X---
  XXX---XXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
`);
maps.push(`
  XXXXXX---O
  X------XXX
  X-XXXXXXXX
  X-XXX---XX
  X-XXX-X-XX
  X-XXX-X-XX
  X-----X-XX
  XXXXXXX-XX
  XX------XX
  XXIXXXXXXX
`);