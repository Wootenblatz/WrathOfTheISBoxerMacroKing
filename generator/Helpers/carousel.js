const Key = require('./key');

class Carousel {
    keyIndex;
    modIndex;
    modifiers;
    keyCodes;
    maxCodes;
    maxMods;

    constructor(options = {noFKeys: false}) {
        this.maxCodes = 18;
        this.maxMods = 7;
        this.keyCodes = { 0:82, 1:79, 2:80, 3:81, 4:75, 5:76, 6:77, 7:71, 8:72, 9:73, 10:55, 11:74, 12:78, 13:83, 14:309, 15:329, 16:337, 17:327, 18:335 };
        this.keyIndex = 0;
        this.modIndex = 0;
        this.modifiers = {
            0: "Ctrl",
            1: "Ctrl Shift",
            2: "Ctrl Alt",
            3: "Shift Alt",
            4: "Alt",
            5: "Shift",
            6: "Ctrl Shift Alt"
        }

        if (options.noFKeys !== true) {
            //this.keyCodes += [59, 60, 61, 62, 63, 64, 65, 66, 67];
            this.keyCodes[19] = 59;
            this.keyCodes[20] = 60;
            this.keyCodes[21] = 61;
            this.keyCodes[22] = 62;
            this.keyCodes[23] = 63;
            this.keyCodes[24] = 64;
            this.keyCodes[25] = 65;
            this.keyCodes[26] = 66;
            this.keyCodes[27] = 67;
            this.maxCodes = 27;
        }
    }

    getKey() {
        let key = new Key(this.keyCodes[this.keyIndex], this.modifiers[this.modIndex]);

        this.keyIndex += 1;
        if (this.keyIndex > this.maxCodes) {
            this.keyIndex = 0;
            this.modIndex += 1;
        }
        return key;
    }
}

module.exports = Carousel;
