import { player1, player2 } from './player.js';
import { createPlayer } from './create.js';
import { $arenas} from './globalConstants.js';
import { createReloadButton } from './create.js';
import { random } from './utils.js';
import { HIT, ATTACK, $formFight } from './globalConstants.js';
import generateLogs from './logger.js';

export const init = () => {
  generateLogs('start', player1, player2);
  $arenas.appendChild(createPlayer(player1));
  $arenas.appendChild(createPlayer(player2));
  };

export const enemyAttack = () => {
    const hit = ATTACK[random(3) - 1];
    const defence = ATTACK[random(3) - 1];
    const enemy = {
      value: random(HIT[hit]),
      hit,
      defence,
    };
  
    return enemy;
  }
  
export const playerAttack = () => {
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

export const showResultText = (name) => {
  const $resultText = createElement('div', 'resultText');
  if (name) {
    $resultText.innerText = `${name} wins`;
  } else {
    $resultText.innerText = 'draw';
  }
  return $resultText;
}

 export let getResultTitle = (playerObj1, playerObj2) => {
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


