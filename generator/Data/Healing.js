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
            "Swiftmend",
            "Desperate Prayer",
            "Circle of Healing",
            "Riptide",
            "Healing Wave",
            "Prayer of Healing",
            "Holy Light",
            "Chain Heal",
            "Lesser Heal",
            "Heal",
            "Greater Heal",
            "Flash Heal",
            "Healing Touch",
            "Lesser Healing Wave",
            "Regrowth",
            "Flash of Light",
            "Holy Shock",
            "Binding Heal",
            "Nourish",
            "Rejuvenation",
            "Wild Growth",
            "Renew",
            "Lifebloom",
            "Holy Mending",
            "Blessed Healing",
            "Chained Heal",
            "Power Word: Shield",
            "Emerald Blossom",
       ];
    }
}

module.exports = Healing;
