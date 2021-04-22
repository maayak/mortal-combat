import Player from './player.js';
import Create from './create.js';
import Fight from './fight.js';
import Logger from './logger.js';
import Utils from './utils.js';
import { $arenas, $formFight } from './globalConstants.js';

class Game {
    constructor() {
        this.logger = new Logger();
        this.fight = new Fight();
        this.create = new Create();
    }
    player1 = new Player({
        player: 1,
        name: 'SUBZERO',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    });

    player2 = new Player({
        player: 2,
        name: 'SCORPION',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    });

    create = new Create();
    fight = new Fight();
    logger = new Logger();
    utils = new Utils();

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

            this.fight.getResultTitle(this.player1, this.player2);
        });
        this.logger.generateLogs('start', this.player1, this.player2);
        $arenas.appendChild(this.create.createPlayer(this.player1));
        $arenas.appendChild(this.create.createPlayer(this.player2));
    }
};;

export default Game;