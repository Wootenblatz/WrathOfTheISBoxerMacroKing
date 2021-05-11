try {
    let colorsTest = require('colors');
    let classes = require('./Data/Classes');
    let carousel = require('./Helpers/Carousel');
} catch (e) {
    console.log(e);
    console.log("");
    console.log("This script requires the colors library.");
    console.log("Run: npm.cmd install");
    process.exit(1);
}
const Usage = require('./Helpers/Usage');
const ClassList = require('./Data/Classes');
const MakeXML = require('./Helpers/MakeXML');
const usage = new Usage();

let args = process.argv.slice(2);

if (args.length < 1) {
    usage.Print();
}
else {
    let classChoice = args[0];
    let classes = new ClassList();
    let keyOptions = args[1] ? args[1].toLowerCase() : "full";
    let classIndex = classes.getNames().indexOf(classChoice);
    if(classIndex >= 0) {
        let xmlPrinter = new MakeXML(classIndex, keyOptions);
        console.log(xmlPrinter.DoTheWork());
    }
    else {
        usage.WrongClass(classChoice);
    }

}
