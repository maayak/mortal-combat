import { player1, player2 } from './players.js';
import { $arenas} from './globalConstants.js';
import createReloadButton from './createReloadButton.js';
import generateLogs from './generateLogs.js';
import showResultText from './showResultText.js';

let getResultTitle = (playerObj1, playerObj2) => {
  const { hp: player1Hp } = playerObj1;
  const { hp: player2Hp, name: player2Name } = playerObj2;
  if (player1Hp === 0 && player1Hp < player2Hp) {
    $arenas.appendChild(showResultText(player2Name));
    createReloadButton();
    generateLogs('end', player2, player1);
  }
  if (player1Hp === 0 && player2Hp === 0) {
    $arenas.appendChild(showResultText());
    createReloadButton();
    generateLogs('draw');
  }
}

export default getResultTitle;
