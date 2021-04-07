const firstPlayer = {
  name: "Subzero",
  hp: 70,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["kunai"],
  attack: function () {
    console.log(firstPlayer.name + " Fight...");
  },
};

firstPlayer.attack();

const secondPlayer = {
  name: "Scorpion",
  hp: 40,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["katana"],
  attack: function () {
    console.log(secondPlayer.name + " Fight...");
  },
};
secondPlayer.attack();

function createPlayer(className, player) {
  const arenas = document.querySelector(".arenas");
  const hero = document.createElement("div");
  const progressBar = document.createElement("div");
  const character = document.createElement("div");
  const life = document.createElement("div");
  const name = document.createElement("div");
  const img = document.createElement("img");

  arenas.appendChild(hero);
  hero.classList.add(className);

  hero.appendChild(progressBar);
  progressBar.classList.add("progressbar");

  hero.appendChild(character);
  character.classList.add("character");

  progressBar.appendChild(life);
  life.classList.add("life");
  life.style.width = player.hp + "%";

  progressBar.appendChild(name);
  name.classList.add("name");
  name.innerText = player.name;

  character.appendChild(img);
  img.src = player.img;
}

createPlayer("player1", firstPlayer);
createPlayer("player2", secondPlayer);
