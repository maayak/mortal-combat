import random from './random.js';
import { HIT, ATTACK } from './hitAttack.js'

function enemyAttack() {
  const hit = ATTACK[random(3) - 1];
  const defence = ATTACK[random(3) - 1];
  const enemy = {
    value: random(HIT[hit]),
    hit,
    defence,
  };

  return enemy;
}

export default enemyAttack;
