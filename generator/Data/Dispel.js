class Dispel {
    isMatch(spellName) {
        let result = false;
        this.getSpells().forEach(function (spell) {
            if (result == false && spell.includes(spellName)) {
                result = true;
            }
        });
        return result;
    }

    getSpells() {
        return [
            "Abolish Disease",
            "Abolish Poison",
            "Cleanse Spirit",
            "Cleanse",
            "Cure Disease",
            "Cure Poison",
            "Cure Toxins",
            "Dispel Magic",
            "Mass Dispel",
            "Purify",
            "Remove Curse",
        ];
    }
}

module.exports = Dispel;
