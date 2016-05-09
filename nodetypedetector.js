(function() {
    /**
     * Simple helper to detect the type of a given "node".
     *
     * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
     */

    function NodeTypeDetector() {
    }

    NodeTypeDetector.getNodeType = getNodeType;
    NodeTypeDetector.isString = isString;
    NodeTypeDetector.isObject = isObject;

    function getNodeType(node) {
        if (NodeTypeDetector.isObject(node)) {
            return 'object';
        } else if (NodeTypeDetector.isString(node)) {
            return 'string';
        }
    }

    function isString(given) {
        return typeof given === 'string';
    }

    function isObject(given) {
        return typeof given === 'object';
    }

    module.exports = NodeTypeDetector;
}).call(this);
