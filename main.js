const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "SUBZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["kunai"],
  attack: function () {
    console.log(player1.name + " Fight...");
  },
};
const player2 = {
  player: 2,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["katana"],
  attack: function () {
    console.log(player2.name + " Fight...");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement("div", "player" + playerObj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function changeHP(count, player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= count;
  $playerLife.style.width = player.hp + "%";

  if (player.hp <= 0) {
    $playerLife.style.width = "0%";
    player.hp = 0;
  }
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

$randomButton.addEventListener("click", function () {
  changeHP(random(20), player1);
  changeHP(random(20), player2);

  if (player1.hp > 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins(player1.name));
  }
  if (player2.hp > 0 && player1.hp === 0) {
    $arenas.appendChild(playerWins(player2.name));
  }
});

function playerWins(name) {
  const $winsTitle = createElement("div", "winsTitle");
  $winsTitle.innerText = name + " wins";
  $randomButton.disabled = true;
  return $winsTitle;
}
