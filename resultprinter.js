(function() {
    /**
     * A printer implementation that makes use of a given output handler.
     * The output handler will simply be responsible to output something, this
     * printer will preformat and handle what and if something should be output.
     *
     * @author  Dennis Sterzenbach <dennis.sterzenbach@gmail.com>
     */

    function ResultPrinter(outputHandler) {
        this.outputHandler = outputHandler;
    }

    ResultPrinter.prototype.print = function print(list, prefix) {
        if (list.length > 0) {
            if (prefix !== '') {
                prefix = '' + prefix + ':';
            }

            this.outputHandler.output(prefix);
            this.outputHandler.output(list);
        }
    };

    module.exports = ResultPrinter;
}).call(this);
