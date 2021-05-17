const ClassList = require('../Data/Classes');

class Usage {
    classChoices;

    constructor() {
        this.classChoices = (new ClassList).getValues();
    }

    Header() {
        console.clear();
        console.error("Wrath of the ISBoxer Macro King".bold.cyan);
        console.error("");
    }

    Print() {
        this.Header();
        console.error("node generate.js ".white + "(class)".yellow + " [key-options]".green + " > your-file-name.xml".white);
        console.error("");
        console.error("usage examples:".cyan);
        console.error("node generage.js Warlock > warlock.xml".gray);
        console.error("node generage.js Priest NOFUNC > priest.xml".gray);
        console.error("--- CLASSES (Required) ---".yellow);
        console.error(this.classChoices.map(x => x.name).join(",").gray);
        console.error("");
        console.error("--- Key Options (Optional) ---".green);
        console.error("Leave blank to use modifiers (ctrl,alt,shift) with the following keys: ".gray);
        console.error("NUM keys, F1-F9, HOME, END, PGUP, PGDN".gray);
        console.error("");
        console.error("Pass NOFUNC to exclude the F1-F9 keys.".gray);
        this.Footer();
    }

    WrongClass(classChoice) {
        this.Header();
        console.error("Frostmourne Hungers!  You have failed me...".cyan.bold);
        console.error("-------------------------------------------".cyan);
        console.error("\t" + classChoice.red.bold + " not found.".red);
        console.error("-------------------------------------------".cyan);
        console.error("Your choices are: ".green + this.classChoices.map(x => x.name).join(", ").gray);
        this.Footer();
    }

    Footer() {
        console.error("");
        console.error("Exiting...");
        process.exitCode = 1;
    }
}

module.exports = Usage;
