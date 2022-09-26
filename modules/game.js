import Player from './player.js';
import Create from './create.js';
import Fight from './fight.js';
import Logger from './logger.js';
import { $arenas, $formFight } from './globalConstants.js';

class Game {
    constructor() {
        this.logger = new Logger();
        this.fight = new Fight();
        this.create = new Create();
    
        this.player1 = new Player({
            player: 1,
            name: 'SUBZERO',
            hp: 100,
            img: 'https://www.fightersgeneration.com/nz2/char/subzero-mk-hd-stance-cancelled-project.GIF',
        });

        this.player2 = new Player({
            player: 2,
            name: 'SCORPION',
            hp: 100,
            img: 'https://www.fightersgeneration.com/nz2/char/scorpion-mk-hd-sprite-cancelled-project.gif',
        });
     }

    getResultTitle = (playerObj1, playerObj2) => {
        const { hp: player1Hp, name: player1Name } = playerObj1;
        const { hp: player2Hp, name: player2Name } = playerObj2;
      if (player1Hp === 0 && player1Hp < player2Hp) {
        //this.player1.changeImg('https://www.fightersgeneration.com/np2/char1/gifs/sub-mk1-diz.gif') // сабзиро проиграл
        this.player2.changeImg('https://www.fightersgeneration.com/news2021/char2/mk1-scorpion-fatality-hd.GIF') // скорпион выиграл
        $arenas.appendChild(this.fight.showResultText(player2Name));
        this.create.createReloadButton();
        this.logger.generateLogs('end', this.player2, this.player1);
        $formFight.style.display = 'none'
      }
    
      if (player2Hp === 0 && player2Hp < player1Hp) {
        //this.player1.changeImg('./subzero-mk-hd-fatality-cancelled-project.gif')  //сабзиро выиграл
        this.player2.changeImg('https://www.fightersgeneration.com/news2021/char2/mk1-scorpion-dizzy-hd.GIF')// скорп проиграл
        $arenas.appendChild(this.fight.showResultText(player1Name));
        this.create.createReloadButton();
        this.logger.generateLogs('end', this.player1, this.player2);
        $formFight.style.display = 'none'
      }
    
      if (player1Hp === 0 && player2Hp === 0) {
        $arenas.appendChild(this.fight.showResultText());
        this.create.createReloadButton();
        this.logger.generateLogs('draw');
      }
    }

    start = () => {
        $formFight.addEventListener('submit', (e) => {
            e.preventDefault();
            const { hit: enemyHit, value: enemyValue, defence: enemyDefence } = this.fight.enemyAttack();
            const { hit: hit, value: value, defence: defence } = this.fight.playerAttack();
            if (hit !== enemyDefence) {
                this.player2.changeHP(value);
                this.player2.renderHP();
                this.logger.generateLogs('hit', this.player1, this.player2, value);
            } else {
                this.logger.generateLogs('defence', this.player1, this.player2);
            };

            if (enemyHit !== defence) {
                this.player1.changeHP(enemyValue);
                this.player1.renderHP();
                this.logger.generateLogs('hit', this.player2, this.player1, enemyValue);
            } else {
                this.logger.generateLogs('defence', this.player2, this.player1);
            };

            this.getResultTitle(this.player1, this.player2);
        });
        this.logger.generateLogs('start', this.player1, this.player2);
        $arenas.appendChild(this.create.createPlayer(this.player1));
        $arenas.appendChild(this.create.createPlayer(this.player2));
    }
};;

export default Game;