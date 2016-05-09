/**
 * given a list of filenames to JSON-files it will take the first one and compare
 * every other file listing additional and missing keys.
 *
 * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
 */
var JsonFileReader = require('./jsonfilereader');
var JsonComparer = require('./jsoncomparer');
var ResultPrinter = require('./resultprinter');
var ConsoleOutputAdapter = require('./consoleoutputadapter');
var verbose = (process.argv.length > 1 && process.argv.indexOf('--verbose') > 1);

var masterFilename = process.argv[2];
var otherFilenames = process.argv.slice(3);
var consoleOutput = new ConsoleOutputAdapter();

var printer = new ResultPrinter(consoleOutput);

////////////////////////////////////////////////////////////////////////////////////////////////////
// SOME INFORMATION FIRST
consoleOutput.output('master:', masterFilename);
if (verbose) {
    consoleOutput.output('others:', otherFilenames);
}

consoleOutput.output('');

////////////////////////////////////////////////////////////////////////////////////////////////////
// GO GO GO!
var result;
var jsoncomparer = new JsonComparer(new JsonFileReader());

for (var i in otherFilenames) {
    if (verbose) {
        consoleOutput.output('=====[ COMPARING ', masterFilename, ' AND ', otherFilenames[i], ' ]=====');
    }

    result = jsoncomparer.compareKeyStructureOfJSONFiles(masterFilename, otherFilenames[i]);

    printer.print(result.missingKeys, 'MISSING IN ' + otherFilenames[i]);

    printer.print(result.additionalKeys, 'ADDITIONAL IN ' + otherFilenames[i]);
}

result = null;
printer = null;
