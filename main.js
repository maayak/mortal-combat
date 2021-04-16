const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');

const player1 = {
  player: 1,
  name: 'SUBZERO',
  hp: 100,
  changeHP,
  elHP,
  renderHP,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['kunai'],
  attackPlayer,
};

const player2 = {
  player: 2,
  name: 'SCORPION',
  hp: 100,
  changeHP,
  elHP,
  renderHP,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['katana'],
  attackPlayer,
};

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

function attackPlayer() {
  console.log(`${this.name} Fight...`);
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement('div', `player${playerObj.player}`);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = `${playerObj.hp}%`;
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function changeHP(damage) {
  this.hp -= damage;
  if (this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
}

function elHP() {
  return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
  this.elHP().style.width = `${this.hp}%`;
  return this.hp;
}

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $reloadButton = createElement('button', 'button');

  $reloadButton.innerText = 'restart';

  $arenas.appendChild($reloadWrap);
  $reloadWrap.appendChild($reloadButton);

  $reloadButton.addEventListener('click', () => {
    window.location.reload();
  });
}

function showResultText(name) {
  const $resultText = createElement('div', 'resultText');
  if (name) {
    $resultText.innerText = `${name} ` + 'wins';
  } else {
    $resultText.innerText = 'draw';
  }
  return $resultText;
}

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  const enemy = {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };

  return enemy;
}

function attack() {
  const attack = {};
  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }
    item.checked = false;
  }
  return attack;
}

function getResultHP(side, playerObj, playerNumber) {
  if (side.hit !== playerObj.defence) {
    playerNumber.changeHP(side.value);
    playerNumber.renderHP();
  }
}

function getResultTitle(playerCompare, playerResult) {
  if (playerCompare.hp === 0 && playerCompare.hp < playerResult.hp) {
    $arenas.appendChild(showResultText(playerResult.name));
    $formFight.disabled = true;
    createReloadButton();
  }
  if (playerCompare.hp === 0 && playerResult.hp === 0) {
    $arenas.appendChild(showResultText());
    $formFight.disabled = true;
    createReloadButton();
  }
}

$formFight.addEventListener('submit', (e) => {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = attack();

  getResultHP(enemy, player, player1);
  getResultHP(player, enemy, player2);

  getResultTitle(player1, player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
