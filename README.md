# Wrath of the ISBoxer Macro King

Change to the generator folder (`cd generator/`) and run generate.js with node.  Pass in the class you want to generate macros for and supply NOFUNC if you want to omit using the function keys.  Redirect the output to a filename ending in .xml.  See usage examples below.

`node generate.js (class) [key-options] > your-file-name.xml`

**usage examples:**

`node generate.js Warlock > warlock.xml`

`node generate.js Priest NOFUNC > priest.xml`

## CLASSES (Required, only one at a time)  
Warrior, Paladin, Hunter, Rogue, Priest, DeathKnight, Shaman, Mage, Warlock, Druid, Evoker

### Key Options (Optional)
Leave blank to use modifiers (ctrl,alt,shift) with the following keys:
NUM keys, F1-F9, HOME, END, PGUP, PGDN

Pass NOFUNC to exclude the F1-F9 keys.

## How can I use the XML files this program generates?

Open the XML file in any text editor, such as Notepad or Visual Studio Code.  Select all of the text in the file and copy it to the clipboard.  Open your ISBoxer config, right click on the Macro Sets entry in the tree and select `Paste WoW Macro Sets from Clipboard`

## What do I do if an ability is missing, classified incorrectly or is trying to target the wrong type of unit (friendly/enemy)

I get the data for abilities from a popular addon's data files.  Unfortunately not every ability you can bind to a key in WoW is listed as a Cooldown, so some can be missing.  For instance, I had to manually add the Druid ability Regrowth.  That is listed as a buff but not an ability.  So, how do we fix that?

If you're not comfortable using Git to fork this project and issue a pull request, posting an issue on [this project's Github issues page](https://github.com/WootenblatzCodes/WrathOfTheISBoxerMacroKing/issues) is the best way to send me feedback.

When you post your message, please explain what the problem is in as much detail as you can.  Be sure to indicate if the ability you're posting about is a heal, buff or a dispell.  This generator tracks all of the abilities of those types in distinct files, so it knows when to use the appropriate macro modifiers.  An example post might look like this:

*Druids are missing the Regrowth healing ability*

This tells me the class name, the spell name and lets me know it is a healing spell.  

If I coded the data files wrong and the Regrowth macro had the wrong modifier, you might post this:

*Druid Regrowth healing ability is always cast on self unless I target a party member* 

Healing and buff abilities should always try to cast on the mouseover target first, active target second, focus target third and finally the player.  

**If you are comfortable using Git**

Fork the project and correct the problem by modifying the .js files in the `generator/Data` directory.  

There is a file for each class as well as files for Dispels, Buffs and Healing.  If you add an ability to a class and it matches one of the dedicated files, please add it there as well.  Try to keep all of your additions in alphabetical order, so they're easier to find when people import macros into ISBoxer.

Once you've made your changes, generate a new macro xml file and import it into ISBoxer and test it out.  After you're 100% confident it is working correctly, commit your changes to your project and issue a pull request for me to review.


