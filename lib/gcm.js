'use strict';

var gcm = require('node-gcm');

module.exports = function(args) {
    var $gcm = {};
    $gcm.args = args;
    $gcm.sender = new gcm.Sender(args.serverKey);
    $gcm.test = function () {
      console.log('testing gcm! ');
      return true;
    }
    return $gcm;
};