const Classes = require('../Data/Classes');

class SpellFilter {
    spells;
    className;
    wowClass;

    constructor(classIndex) {
        let classes = new Classes();
        this.wowClass = classes.getValues()[classIndex]
        this.classObj = this.wowClass.obj;
        this.className = this.wowClass.name;
        this.spells = this.UniqueSpells();
    }

    ClassName() {
        return this.className;
    }

    UniqueSpells() {
        let tempSpells = [];
        this.classObj.getSpells().forEach(function (spell) {
            if (tempSpells.indexOf(spell) < 0) {
                tempSpells.push(spell);
            }
        });
        return tempSpells;
    }
}

module.exports = SpellFilter;
