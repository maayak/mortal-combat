class Player {
  constructor({ player, name, hp, img }) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.img = img;
  };

  changeHP = (damage) => this.hp <= 0 ? this.hp = 0 : this.hp -= damage;

  changeImg = (url) => document.querySelector(`.player${this.player} .img`).src = url;
  
  renderHP = () => document.querySelector(`.player${this.player} .life`).style.width = `${this.hp}%`;
};

export default Player;




