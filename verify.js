// https://github.com/substack/adventure-verify/blob/master/index.js
var tape = require('tape');
var parser = require('tap-parser');
var colorize = require('tap-colorize');

module.exports = function (opts, fn) {
    if (typeof opts === 'function') {
        fn = opts;
        opts = {};
    }
    
    if (typeof opts === 'string') {
        opts = {name: opts};
    }
    
    if (!opts) opts = {};
    
    var colors = null, reset = null;
    
    if (opts.modeReset === true) {
        // wow hacky
        var prevLog = console.log;
        var prevError = console.error;
        reset = function () {
            console.log = prevLog;
            console.error = prevError;
        };
        
        console.log = function () {
            process.stdout.write('\x1b[0m');
            var res = prevLog.apply(this, arguments);
            if (colors && colors.mode) {
                process.stdout.write(colors.mode);
            }
            return res;
        };
        console.error = function () {
            process.stderr.write('\x1b[0m');
            var res = prevError.apply(this, arguments);
            if (colors && colors.mode) {
                process.stderr.write(colors.mode);
            }
            return res;
        };
    }
     
    return function (args, cb) {
        var test = tape.createHarness();
        test(opts.name, function (t) { fn(args, t) });
        var stream = test.createStream();
        colors = colorize(opts);
        var ended = false;
        stream.once('end', function () {
            if (reset) reset();
            ended = true;
        });

        stream.pipe(colors).pipe(process.stdout)

        stream.pipe(parser(function (results) { cb(results.ok) }));
        process.on('exit', function () {
            if (!ended) stream.end();
        });
    };
};