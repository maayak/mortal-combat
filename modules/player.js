class Player {
  constructor({ player, name, hp, img }) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.img = img;
  };

  changeHP = (damage) => {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
    }
    return this.hp;
  };

  elHP = () => {
    return document.querySelector(`.player${this.player} .life`);
  };

  renderHP = () => {
    this.elHP().style.width = `${this.hp}%`;
    return this.hp;
  };
};

export default Player;




