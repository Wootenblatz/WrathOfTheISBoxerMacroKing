const Classes = require('../Data/Classes');

class SpellFilter {
    allSpells;
    spells;

    constructor(classIndex) {
        let classes = new Classes();
        let wowClass = classes.getValues()[classIndex].obj;
        this.allSpells = wowClass.getSpells();
        this.spells = this.UniqueSpells();
    }

    UniqueSpells() {
        let tempSpells = [];
        this.allSpells.forEach(function (spell) {
            let spellName = spell.name.replace("@", "");
            if (tempSpells.indexOf(spellName) < 0) {
                tempSpells.push(spellName);
            }
        });
        return tempSpells;
    }
}

module.exports = SpellFilter;