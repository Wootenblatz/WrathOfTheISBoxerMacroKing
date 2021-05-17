class Key {
    code;
    modifiers;
    constructor(keyCode = 0, modifiers = "none") {
        if (keyCode > 0) {
            this.code = keyCode;
            this.modifiers = modifiers;
        }
    }
}

module.exports = Key;
