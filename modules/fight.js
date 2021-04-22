import Create from './create.js';
import Logger from './logger.js';
import Utils from './utils.js';
import { HIT, ATTACK, $arenas, $formFight } from './globalConstants.js';

class Fight {
  constructor() {
    this.utils = new Utils();
    this.create = new Create();
    this.logger = new Logger();
  }
  enemyAttack = () => {
    const hit = ATTACK[this.utils.random(3) - 1];
    const defence = ATTACK[this.utils.random(3) - 1];
    const enemy = {
      value: this.utils.random(HIT[hit]),
      hit,
      defence,
    };

    return enemy;
  };

  playerAttack = () => {
    const attack = {};

    [].forEach.call($formFight, (item) => {
      if (item.checked && item.name === 'hit') {
        attack.value = this.utils.random(HIT[item.value]);
        attack.hit = item.value;
      };
      if (item.checked && item.name === 'defence') {
        attack.defence = item.value;
      };
      item.checked = false;
    });
    return attack;
  };

  showResultText = (name) => {
    const $resultText = this.create.createElement('div', 'resultText');
    if (name) {
      $resultText.innerText = `${name} wins`;
    } else {
      $resultText.innerText = 'draw';
    };
    return $resultText;
  };

  getResultTitle = (playerObj1, playerObj2) => {
    const { hp: player1Hp } = playerObj1;
    const { hp: player2Hp, name: player2Name } = playerObj2;
    if (player1Hp === 0 && player1Hp < player2Hp) {
      $arenas.appendChild(showResultText(player2Name));
      this.create.createReloadButton();
      this.logger.generateLogs('end', player2, player1);
    };
    if (player1Hp === 0 && player2Hp === 0) {
      $arenas.appendChild(showResultText());
      this.create.createReloadButton();
      this.logger.generateLogs('draw');
    };
  };
};

export default Fight;