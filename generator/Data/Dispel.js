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
            "Cleanse Spirit",
            "Remove Curse",
            "Cure Toxins",
            "Dispel Magic",
            "Cure Disease",
            "Abolish Disease",
            "Purify",
            "Abolish Poison",
            "Cleanse",
            "Cure Poison",
            "Mass Dispel",
            "Expunge",
        ];
    }
}

module.exports = Dispel;
