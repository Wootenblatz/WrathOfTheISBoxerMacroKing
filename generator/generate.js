try {
    let colorsTest = require('colors');
    let classes = require('./Data/Classes');
    let carousel = require('./Helpers/carousel');
} catch (e) {
    console.log(e);
    console.log("");
    console.log("This script requires the colors library.");
    console.log("Run: npm.cmd install");
    process.exit(1);
}
const Colors = require('colors');
const Classes = require('./Data/Classes');
const Carousel = require('./Helpers/carousel');
const SpellFilter = require("./Helpers/SpellFilter");

let sf = new SpellFilter(1);

console.log(sf.UniqueSpells());
