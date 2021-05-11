const Warrior = require('./Warrior');
const Paladin = require('./Paladin');
const Hunter = require('./Hunter');
const Rogue = require('./Rogue');
const Priest = require('./Priest');
const DeathKnight = require('./DeathKnight');
const Shaman = require('./Shaman');
const Mage = require('./Mage');
const Warlock = require('./Warlock');
const Druid = require('./Druid');

class ClassList {

    getValues() {
        return [this.warrior(), this.paladin(), this.hunter(), this.rogue(), this.priest(), this.deathKnight(), this.shaman(), this.mage(), this.warlock(), this.druid()];
    }

    warrior() {
        return {id: 1, name: "Warrior", obj: new Warrior()};
    }

    paladin() {
        return {id: 2, name: "Paladin", obj: new Paladin()};
    }

    hunter() {
        return {id: 3, name: "Hunter", obj: new Hunter()};
    }

    rogue() {
        return {id: 4, name: "Rogue", obj: new Rogue()};
    }

    priest() {
        return {id: 5, name: "Priest", obj: new Priest()};
    }

    deathKnight() {
        return {id: 6, name: "DeathKnight", obj: new DeathKnight()};
    }

    shaman() {
        return {id: 7, name: "Shaman", obj: new Shaman()};
    }

    mage() {
        return {id: 8, name: "Mage", obj: new Mage()};
    }

    warlock() {
        return {id: 9, name: "Warlock", obj: new Warlock()};
    }

    druid() {
        return {id: 10, name: "Druid", obj: new Druid()};
    }
}

module.exports = ClassList;

