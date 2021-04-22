import { player1, player2 } from './players.js';
import { $arenas } from './globalConstants.js';
import createPlayer from './createPlayer.js';
import generateLogs from './generateLogs.js';

const init = () => {
  generateLogs('start', player1, player2);
  $arenas.appendChild(createPlayer(player1));
  $arenas.appendChild(createPlayer(player2));
  };

  export default init;