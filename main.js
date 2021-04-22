import { player1, player2 } from './players.js';
import { $formFight} from './globalConstants.js';
import enemyAttack from './enemyAttack.js';
import playerAttack from './playerAttack.js';
import getResultTitle from './getResultTitle.js'
import generateLogs from './generateLogs.js';
import init from './init.js';

$formFight.addEventListener('submit', (e) => {
  e.preventDefault();
  const { hit: enemyHit, value: enemyValue, defence: enemyDefence } = enemyAttack();
  const { hit: playerHit, value: playerValue, defence: playerDefence } = playerAttack();

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

init();

