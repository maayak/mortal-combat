export function changeHP(damage) {
  this.hp -= damage;
  if (this.hp <= 0) {
    this.hp = 0;
  }
  return this.hp;
}

export function elHP() {
  return document.querySelector(`.player${this.player} .life`);
}

export function renderHP() {
  this.elHP().style.width = `${this.hp}%`;
  return this.hp;
}

export const player1 = {
  player: 1,
  name: 'SUBZERO',
  hp: 100,
  changeHP,
  elHP,
  renderHP,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['kunai'],
};

export const player2 = {
  player: 2,
  name: 'SCORPION',
  hp: 100,
  changeHP,
  elHP,
  renderHP,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['katana'],
};
