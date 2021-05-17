class Dispel {
    isMatch(spellName) {
        let result = false;
        this.getSpells().forEach(function (spell) {
            if (result == false && spell.name.includes(spellName)) {
                result = true;
            }
        });
        return result;
    }

    getSpells() {
        return [
            {
                "id": 51886,
                "name": "@Cleanse Spirit",
                "icon": "ability_shaman_cleansespirit",
                "level": 40,
                "school": 8,
                "cat": -2,
                "trainingcost": 0,
                "skill": [374],
                "reagents": [],
                "source": [9],
                "reqclass": 64
            }, {
                "id": 475,
                "name": "@Remove Curse",
                "icon": "spell_nature_removecurse",
                "level": 18,
                "school": 64,
                "cat": 7,
                "trainingcost": 1800,
                "skill": [237],
                "reagents": [],
                "source": [6],
                "reqclass": 128
            }, {
                "id": 526,
                "name": "@Cure Toxins",
                "icon": "spell_nature_nullifypoison",
                "level": 16,
                "school": 8,
                "cat": 7,
                "trainingcost": 1800,
                "skill": [374],
                "reagents": [],
                "source": [6],
                "reqclass": 64
            }, {
                "id": 527,
                "name": "@Dispel Magic",
                "icon": "spell_holy_dispelmagic",
                "level": 18,
                "school": 2,
                "cat": 7,
                "trainingcost": 2000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 1",
                "reqclass": 16
            }, {
                "id": 528,
                "name": "@Cure Disease",
                "icon": "spell_holy_nullifydisease",
                "level": 14,
                "school": 2,
                "cat": 7,
                "trainingcost": 1200,
                "skill": [56],
                "reagents": [],
                "source": [6],
                "reqclass": 16
            }, {
                "id": 552,
                "name": "@Abolish Disease",
                "icon": "spell_nature_nullifydisease",
                "level": 32,
                "school": 2,
                "cat": 7,
                "trainingcost": 11000,
                "skill": [56],
                "reagents": [],
                "source": [6],
                "reqclass": 16
            }, {
                "id": 988,
                "name": "@Dispel Magic",
                "icon": "spell_holy_dispelmagic",
                "level": 36,
                "school": 2,
                "cat": 7,
                "trainingcost": 14000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "rank": "Rank 2",
                "reqclass": 16
            }, {
                "id": 1152,
                "name": "@Purify",
                "icon": "spell_holy_purify",
                "level": 8,
                "school": 2,
                "cat": 7,
                "trainingcost": 100,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 2782,
                "name": "@Remove Curse",
                "icon": "spell_holy_removecurse",
                "level": 24,
                "school": 64,
                "cat": 7,
                "trainingcost": 4000,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "reqclass": 1024
            }, {
                "id": 2893,
                "name": "@Abolish Poison",
                "icon": "spell_nature_nullifypoison_02",
                "level": 26,
                "school": 8,
                "cat": 7,
                "trainingcost": 4500,
                "skill": [573],
                "reagents": [],
                "source": [6],
                "reqclass": 1024
            }, {
                "id": 4987,
                "name": "@Cleanse",
                "icon": "spell_holy_renew",
                "level": 42,
                "school": 2,
                "cat": 7,
                "trainingcost": 21000,
                "skill": [594],
                "reagents": [],
                "source": [6],
                "reqclass": 2
            }, {
                "id": 8946,
                "name": "@Cure Poison",
                "icon": "spell_nature_nullifypoison",
                "level": 14,
                "school": 8,
                "cat": 7,
                "trainingcost": 0,
                "skill": [573],
                "reagents": [],
                "source": [4],
                "reqclass": 1024
            }, {
                "id": 32375,
                "name": "@Mass Dispel",
                "icon": "spell_arcane_massdispel",
                "level": 70,
                "school": 2,
                "cat": 7,
                "trainingcost": 110000,
                "skill": [613],
                "reagents": [],
                "source": [6],
                "reqclass": 16
            }
        ];
    }
}

module.exports = Dispel;
