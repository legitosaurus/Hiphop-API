'use strict';

module.exports = function(args) {
    var haha = {};
    haha.args = args;
    haha.gcm = require('./lib/gcm');
    console.dir(haha.gcm);
	haha.test = function () {
        console.log('testing! ');
        return true;
    }
    return haha;
};