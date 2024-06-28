const assert = require('assert');
const Player = require('./player');
const Dice = require('./dice');
const Arena = require('./arena');

describe('Player', function() {
    it('should create a player with correct attributes', function() {
        const player = new Player('Player', 100, 10, 20);
        assert.strictEqual(player.name, 'Player');
        assert.strictEqual(player.health, 100);
        assert.strictEqual(player.strength, 10);
        assert.strictEqual(player.attack, 20);
    });

    it('should check if the player is alive', function() {
        const player = new Player('Player', 0, 10, 20);
        assert.strictEqual(player.isAlive(), false);
        player.health = 10;
        assert.strictEqual(player.isAlive(), true);
    });
});

describe('Dice', function() {
    it('should roll a number between 1 and 6', function() {
        for (let i = 0; i < 100; i++) {
            const roll = Dice.roll();
            assert(roll >= 1 && roll <= 6);
        }
    });
});

describe('Arena', function() {
    it('should simulate a fight between two players', function() {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);
        Arena.fight(playerA, playerB);
        assert(playerA.isAlive() || playerB.isAlive());
    });
});
