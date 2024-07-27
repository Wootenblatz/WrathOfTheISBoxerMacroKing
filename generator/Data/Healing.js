class Healing {
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
            "Binding Heal",
            "Blessed Healing",
            "Chain Heal",
            "Chained Heal",
            "Circle of Healing",
            "Desperate Prayer",
            "Emerald Blossom",
            "Flash Heal",
            "Flash of Light",
            "Greater Heal",
            "Heal",
            "Healing Touch",
            "Healing Wave",
            "Holy Light",
            "Holy Mending",
            "Holy Shock",
            "Lesser Heal",
            "Lesser Healing Wave",
            "Lifebloom",
            "Nourish",
            "Power Word: Shield",
            "Prayer of Healing",
            "Regrowth",
            "Rejuvenation",
            "Renew",
            "Riptide",
            "Swiftmend",
            "Wild Growth",
       ];
    }
}

module.exports = Healing;
