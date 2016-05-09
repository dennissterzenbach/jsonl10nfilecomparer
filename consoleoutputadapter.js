(function() {
    /**
     * Adapter to output some given information to the console.
     *
     * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
     */

    function ConsoleOutputAdapter() {
    }

    ConsoleOutputAdapter.prototype.output = function outputToConsole() {
        console.log.apply(null, arguments);
    };

    module.exports = ConsoleOutputAdapter;
}).call(this);
