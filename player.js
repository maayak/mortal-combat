class Player {
  constructor({ player, name, hp, img }) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.img = img;
  }

  changeHP = (damage) => {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
    }
    return this.hp;
  }
  
  elHP = () => {
    return document.querySelector(`.player${this.player} .life`);
  }
  
  renderHP = () => {
    this.elHP().style.width = `${this.hp}%`;
    return this.hp;
  }
  
  }
  
export const player1 = new Player ({
  player: 1,
  name: 'SUBZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
});

export const player2 = new Player ({
  player: 2,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
});



