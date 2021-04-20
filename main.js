import { $arenas, $formFight} from './globalConstants.js';
import { player1, player2 } from './players.js';
import createPlayer from './createPlayer.js';
import enemyAttack from './enemyAttack.js';
import playerAttack from './playerAttack.js';
import getResultTitle from './getResultTitle.js'
import generateLogs from './generateLogs.js';

generateLogs('start', player1, player2);

$formFight.addEventListener('submit', (e) => {
  e.preventDefault();

  const enemy = enemyAttack();
  const player = playerAttack();
  const { hit: playerHit, value: playerValue, defence: playerDefence } = player;
  const { hit: enemyHit, value: enemyValue, defence: enemyDefence } = enemy;

  if (playerHit !== enemyDefence) {
    player2.changeHP(playerValue);
    player2.renderHP();
    generateLogs('hit', player1, player2, playerValue);
  } else {
    generateLogs('defence', player1, player2);
  }

  if (enemyHit !== playerDefence) {
    player1.changeHP(enemyValue);
    player1.renderHP();
    generateLogs('hit', player2, player1, enemyValue);
  } else {
    generateLogs('defence', player2, player1);
  }

  getResultTitle(player1, player2);
});
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));