import Create from './create.js';
import Logger from './logger.js';
import Utils from './utils.js';
import { HIT, ATTACK, $formFight, CLASSLIST } from './globalConstants.js';

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
    const $resultText = this.create.createElement('div', CLASSLIST.RESULT);
    if (name) {
      $resultText.innerText = `${name} wins`;
    } else {
      $resultText.innerText = 'draw';
    };
    return $resultText;
  };
};

export default Fight;