try {
    let colorsTest = require('colors');
}
catch (e) {
    console.log(e);
    console.log("");
    console.log("This script requires the colors library.");
    console.log("Run: npm.cmd install");
    process.exit(1);
}
const colors = require('colors');
const classes = require('./Data/Classes');
