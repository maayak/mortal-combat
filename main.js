import { player1, player2 } from './player.js';
import { $formFight} from './globalConstants.js';
import { enemyAttack, playerAttack, getResultTitle, init } from './fight.js';
import generateLogs from './logger.js';

$formFight.addEventListener('submit', (e) => {
  e.preventDefault();
  const { hit: enemyHit, value: enemyValue, defence: enemyDefence } = enemyAttack();
  const { hit: hit, value: value, defence: defence } = playerAttack();

  if (hit !== enemyDefence) {
    player2.changeHP(value);
    player2.renderHP();
    generateLogs('hit', player1, player2, value);
  } else {
    generateLogs('defence', player1, player2);
  }

  if (enemyHit !== defence) {
    player1.changeHP(enemyValue);
    player1.renderHP();
    generateLogs('hit', player2, player1, enemyValue);
  } else {
    generateLogs('defence', player2, player1);
  }

  getResultTitle(player1, player2);
});

init();

