$nodejs = (Get-Command node).Path

$classSpecs = "Warrior","Paladin","Hunter","Rogue","Priest","DeathKnight","Shaman","Mage","Warlock","Druid"
foreach ($classSpec in $classSpecs) {
    $classDir = ".\Macros\" + $classSpec
    if(!(Test-Path -Path $classDir )){
        New-Item -Force -ItemType directory -Path $classDir
    }
    $fullXmlFilename = $classDir + "\" + $classSpec + '-ALL.xml'
    #$progArgs = @('.\generateMacroSet.js', $minSkills, $parts[0], $parts[1], "NOFUNC" )
    #& $nodejs $progArgs > $minXmlFileName
    $progArgs = @('.\generator\generate.js', $classSpec, "nofunc")
    & $nodejs $progArgs > $fullXmlFilename
    #start-sleep -s 2
    #$progArgs = @('.\generateMacroSet.js', $maxSkills, $parts[0])
    #& $nodejs $progArgs > $fullXmlFilename
}