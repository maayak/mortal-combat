import { player1, player2 } from './players.js';
import logs from './logs.js';
import { $chat } from './globalConstants.js';
import random from './random.js';

function generateLogs(type, attacker, defender, damage) {
  let text = '';
  const { name: attackerName } = attacker;
  const { name: defenderName, hp } = defender;
  const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  switch (type) {
    case 'start':
      text = logs[type]
        .replace('[time]', currentDate)
        .replace('[player1]', attackerName)
        .replace('[player2]', defenderName);
      break;
    case 'hit':
      text = logs[type][random(logs[type].length - 1)]
        .replace('[playerKick]', attackerName)
        .replace('[playerDefence]', defenderName);
      text = `${currentDate} - ${text} -${damage} [${hp} / 100]`;
      break;
    case 'defence':
      text = logs[type][random(logs[type].length - 1)]
        .replace('[playerKick]', attackerName)
        .replace('[playerDefence]', defenderName);
      break;
    case 'end':
      text = logs[type][random(logs[type].length)]
        .replace('[playerWins]', attackerName)
        .replace('[playerLose]', defenderName);
      break;
    case 'draw':
      text = logs[type];
      break;
    default:
      text = 'Что-то пошло не так...';
      break;
  }
  const el = `<p>${text}</p>`;
  $chat.insertAdjacentHTML('afterbegin', el);
}

export default generateLogs;
