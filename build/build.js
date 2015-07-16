'use strict';

/* global require, exports */
var utils = require('utils');
var sh = new utils.Commander('sh');

var CallscreenAppBuilder = function() {
};

CallscreenAppBuilder.prototype.execute = function(options) {
  sh.initPath(utils.getEnvPath());
  sh.run(['-c', 'cd ' + options.APP_DIR + ' && bower install']);
  utils.copyToStage(options);
};

exports.execute = function(options) {
  (new CallscreenAppBuilder()).execute(options);
};
