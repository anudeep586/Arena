const Dice = require('./dice');

class Arena {
    static fight(player1, player2) {
        let attacker, defender;
        if (player1.health < player2.health) {
            attacker = player1;
            defender = player2;
        } else {
            attacker = player2;
            defender = player1;
        }

        while (player1.isAlive() && player2.isAlive()) {
            this.attack(attacker, defender);

            if (!defender.isAlive()) {
                console.log(`${defender.name} has been defeated. ${attacker.name} wins!`);
                break;
            }

            // Swap attacker and defender
            [attacker, defender] = [defender, attacker];
        }
    }

    static attack(attacker, defender) {
        const attackRoll = Dice.roll();
        const defendRoll = Dice.roll();

        const attackDamage = attacker.attack * attackRoll;
        const defendStrength = defender.strength * defendRoll;
        const damageDealt = Math.max(0, attackDamage - defendStrength);

        defender.health -= damageDealt;

        console.log(`${attacker.name} attacks ${defender.name} with attack roll ${attackRoll} (Damage: ${attackDamage}).`);
        console.log(`${defender.name} defends with defend roll ${defendRoll} (Defense: ${defendStrength}).`);
        console.log(`${defender.name} takes ${damageDealt} damage. Health left: ${defender.health}.`);
    }
}

module.exports = Arena;
