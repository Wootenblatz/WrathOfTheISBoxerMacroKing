const Carousel = require('./Carousel');
const SpellFilter = require("./SpellFilter");
class MakeXML {
    classIndex;
    keyOption;
    spellFilter;
    options;
    constructor(classIndex, keyOption) {
        this.classIndex = classIndex;
        this.keyOption = keyOption;
        this.spellFilter = new SpellFilter(this.classIndex);
        this.options = { noFKeys: keyOption === "nofunc" };
    }

    DoTheWork() {
        let output = this.XmlHeader("WotISBMacroKing-" + this.spellFilter.ClassName());
        let spells = this.spellFilter.UniqueSpells();
        let keyMaker = new Carousel(this.options);
        spells.forEach(function(spell) {
            let key = keyMaker.getKey();
            output += '&lt;WoWMacro&gt;&lt;MacroCommands&gt;/cast [nochanneling] !' + spell + '&lt;/MacroCommands&gt;&lt;ColloquialName&gt;' + spell + '&lt;/ColloquialName&gt;&lt;Combo&gt;&lt;Combo&gt;&lt;/Combo&gt;';
            output += '&lt;Modifiers&gt;' + key.modifier + '&lt;/Modifiers&gt;';
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