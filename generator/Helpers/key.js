class Key {
    code;

    constructor(keyCode = 0) {
        if (keyCode > 0) {
            this.code = keyCode;
        }
    }
}

module.exports = Key;