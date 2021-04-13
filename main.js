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

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= getRandom(20);

  if (player.hp <= 0) {
    player.hp = 0;
  }

  $playerLife.style.width = player.hp + "%";
}

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

$randomButton.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(showResultText(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(showResultText(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(showResultText());
  }
});

function showResultText(name) {
  const $resultText = createElement("div", "resultText");
  if (name) {
    $resultText.innerText = name + "wins";
  } else {
    $resultText.innerText = "draw";
  }
  return $resultText;
}
