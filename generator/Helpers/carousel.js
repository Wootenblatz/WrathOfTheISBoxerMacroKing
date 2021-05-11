const Key = require('./key');

class Carousel {
    keyIndex;
    modIndex;
    modifiers;
    keyCodes;

    constructor(options = {noFKeys: false}) {
        this.keyCodes = [82, 79, 80, 81, 75, 76, 77, 71, 72, 73, 55, 74, 78, 83, 309, 329, 337, 327, 335];
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
            this.keyCodes += [59, 60, 61, 62, 63, 64, 65, 66, 67];
        }
    }

    getKey() {
        let key = new Key(this.keyCodes[this.keyIndex], this.modifiers[this.modIndex]);
        this.keyIndex += 1;
        if (this.keyIndex >= this.keyCodes.length) {
            this.keyIndex = 0;
            this.modIndex += 1;
        }
        return key;
    }
}

module.exports = Carousel;