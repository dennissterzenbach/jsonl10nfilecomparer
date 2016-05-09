(function() {
    /**
     * Simple reader to read the content of a given JSON file.
     *
     * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
     */

    var fs = require('fs');

    function JSONFileReader() {
    }

    JSONFileReader.prototype.readFile = readFile;

    function readFile(fileName) {
        return JSON.parse(fs.readFileSync(fileName, 'utf8'));
    }

    module.exports = JSONFileReader;
}).call(this);
