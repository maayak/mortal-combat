import { $formFight } from './globalConstants.js';
import random from './random.js';
import { HIT } from './hitAttack.js';

const playerAttack = () => {
  const attack = {};

  [].forEach.call($formFight, (item) => {
    if (item.checked && item.name === 'hit') {
      attack.value = random(HIT[item.value]);
      attack.hit = item.value;
    }
    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }
    item.checked = false;
  });
  return attack;
}

export default playerAttack;
