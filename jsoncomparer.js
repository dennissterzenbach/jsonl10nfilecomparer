(function() {
    /**
     * compare JSON files and file structures to find additional and missing keys.
     *
     * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
     */

    var NodeTypeDetector = require('./nodetypedetector');

    var MAX_HIERARCHY_DEPTH = 500;

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // COMPARER
    function JSONComparer(filereader) {
        this.filereader = filereader;
    }

    JSONComparer.prototype.compareKeyStructureOfJSONFiles = compareKeyStructureOfJSONFiles;

    function compareKeyStructureOfJSONFiles(filename, filename2) {
        // Read contents of both files
        var masterData = this.filereader.readFile(filename);
        var comparedData = this.filereader.readFile(filename2);

        var returnValue = {
            missingKeys: [],
            additionalKeys: []
        };

        ////////////////////////////////////////////////////////////////////////////////////////////
        // collect the keys defined in first file, but missing in second file
        iterateNodes(returnValue.missingKeys, masterData, comparedData, '', 0);

        ////////////////////////////////////////////////////////////////////////////////////////////
        // collect the keys defined in second file, but missing in first file
        iterateNodes(returnValue.additionalKeys, comparedData, masterData, '', 0);

        return returnValue;
    }

    function iterateNodes(listOfFindings, masterObject, comparedObject, prefix, depth) {
        var type;

        prefix = prefix || '';
        depth = depth || 1;

        if (depth > MAX_HIERARCHY_DEPTH) {
            return;
        }

        if (prefix.length > 0) {
            prefix += '.';
        }

        for (var key in masterObject) {
            if (masterObject.hasOwnProperty(key)) {
                type = NodeTypeDetector.getNodeType(masterObject[key]);

                if (!comparedObject.hasOwnProperty(key)) {
                    listOfFindings.push(prefix + key);
                }

                if (type === 'object') {
                    // traverse the structure in both objects
                    if (comparedObject.hasOwnProperty(key)) {
                        iterateNodes(listOfFindings, masterObject[key], comparedObject[key], prefix + key, ++depth);
                    }
                }
            }
        }
    }

    module.exports = JSONComparer;
}).call(this);
