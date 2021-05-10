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
        return [
            {id: 1, name: "Warrior", obj: new Warrior()},
            {id: 2, name: "Paladin", obj: new Paladin()},
            {id: 3, name: "Hunter", obj: new Hunter()},
            {id: 4, name: "Rogue", obj: new Rogue()},
            {id: 5, name: "Priest", obj: new Priest()},
            {id: 6, name: "DeathKnight", obj: new DeathKnight()},
            {id: 7, name: "Shaman", obj: new Shaman()},
            {id: 8, name: "Mage", obj: new Mage()},
            {id: 9, name: "Warlock", obj: new Warlock()},
            {id: 10, name: "Druid", obj: new Druid()}
        ];
    }
}

module.exports = ClassList;

