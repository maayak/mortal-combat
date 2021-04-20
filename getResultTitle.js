import { player1, player2 } from './players.js';
import { $arenas, $formFight } from './globalConstants.js';
import createReloadButton from './createReloadButton.js';
import generateLogs from './generateLogs.js';
import showResultText from './showResultText.js';

function getResultTitle(playerCompare, playerResult) {
  const { hp: playerCompareHp } = playerCompare;
  const { hp: playerResultHp, name: playerResultName } = playerResult;
  if (playerCompareHp === 0 && playerCompareHp < playerResultHp) {
    $arenas.appendChild(showResultText(playerResultName));
    $formFight.disabled = true;
    createReloadButton();
    generateLogs('end', player1, player2);
  }
  if (playerCompareHp === 0 && playerResultHp === 0) {
    $arenas.appendChild(showResultText());
    $formFight.disabled = true;
    createReloadButton();
    generateLogs('draw', player1, player2);
  }
}

export default getResultTitle;
