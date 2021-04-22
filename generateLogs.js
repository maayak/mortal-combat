import LOGS from './logs.js';
import { $chat } from './globalConstants.js';
import random from './random.js';
import currentDate from './time.js';

const generateLogs = (type, { name: attackerName }, { name: defenderName, hp }, damage) => {
  let text = '';
  
  switch (type) {
    case 'start':
      text = LOGS[type]
        .replace('[time]', currentDate())
        .replace('[player1]', attackerName)
        .replace('[player2]', defenderName);
      break;
    case 'hit':
      text = LOGS[type][random(LOGS[type].length - 1) - 1]
        .replace('[playerKick]', attackerName)
        .replace('[playerDefence]', defenderName);
      text = `${currentDate()} - ${text} -${damage} [${hp}/100]`;
      break;
    case 'defence':
      text = LOGS[type][random(LOGS[type].length - 1) - 1]
        .replace('[playerKick]', attackerName)
        .replace('[playerDefence]', defenderName);
      break;
    case 'end':
      text = LOGS[type][random(LOGS[type].length - 1) - 1]
        .replace('[playerWins]', attackerName)
        .replace('[playerLose]', defenderName);
      break;
    case 'draw':
      text = LOGS[type];
      break;
    default:
      text = 'Что-то пошло не так...';
      break;
  }
  const el = `<p>${text}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

export default generateLogs;
