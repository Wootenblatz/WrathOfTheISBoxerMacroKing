const Carousel = require('./Carousel');
const SpellFilter = require("./SpellFilter");
const Buffs = require('../Data/Buffs');
const Dispel = require('../Data/Dispel');
const Healing = require('../Data/Healing');
class MakeXML {
    classIndex;
    keyOption;
    spellFilter;
    options;
    buffs;
    heals;
    dispels;
    constructor(classIndex, keyOption) {
        this.classIndex = classIndex;
        this.keyOption = keyOption;
        this.spellFilter = new SpellFilter(this.classIndex);
        this.options = { noFKeys: keyOption === "nofunc" };
    }

    DoTheWork() {
        let classname = this.spellFilter.ClassName();
        let output = this.XmlHeader("WotISBMacroKing-" + classname);
        let spells = this.spellFilter.UniqueSpells();
        let keyMaker = new Carousel(this.options);
        let buffs = new Buffs();
        let heals = new Healing();
        let dispels = new Dispel();
        spells.forEach(function(spell) {
            let key = keyMaker.getKey();
            let extraMods = "[nochanneling] !";
            if (buffs.isMatch(spell) || dispels.isMatch(spell) || heals.isMatch(spell)) {
                extraMods = "[target=mouseover,noharm,exists][target=target,noharm,exists][target=focus,noharm,exists][target=player] ";
            }
            output += '&lt;WoWMacro&gt;&lt;MacroCommands&gt;/cast ' + extraMods + spell + '&lt;/MacroCommands&gt;&lt;ColloquialName&gt;' + spell + '&lt;/ColloquialName&gt;&lt;Combo&gt;&lt;Combo&gt;&lt;/Combo&gt;';
            output += '&lt;Modifiers&gt;' + key.modifiers + '&lt;/Modifiers&gt;';
            output += '&lt;Key&gt;&lt;Key&gt;&lt;/Key&gt;&lt;Code&gt;' + key.code + '&lt;/Code&gt;&lt;/Key&gt;&lt;/Combo&gt;&lt;AllowCustomModifiers /&gt;&lt;/WoWMacro&gt;';

        });
        output += this.XmlFooter();

        return output;
    }

    XmlHeader(macroName) {
       return '<?xml version="1.0" encoding="utf-8"?><Box xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><ObjectType>ISBoxer_Toolkit.Configs.WoWMacroSet</ObjectType><SerializedObject>&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;WoWMacroSet xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"&gt;&lt;Name&gt;' + macroName + '&lt;/Name&gt;&lt;Description&gt;Created with Wrath of the ISBoxer Macro King&lt;/Description&gt;&lt;WoWMacros&gt;';;
    }

    XmlFooter() {
       return '&lt;/WoWMacros&gt;&lt;/WoWMacroSet&gt;</SerializedObject></Box>';
    }
}

module.exports = MakeXML;
