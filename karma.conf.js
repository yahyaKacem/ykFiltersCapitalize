// Karma configuration
// Generated on Fri Mar 28 2014 15:42:21 GMT+0100 (W. Europe Standard Time)
(function (module) {
  "use strict";
  module.exports = function KarmaConfig(config) {
    config.set({
      basePath:   '',
      port:       9876,
      colors:     true,
      autoWatch:  true,
      singleRun:  true,
      frameworks: ['jasmine'],
      reporters:  ['progress'],
      browsers:   ['PhantomJS'],
      logLevel:   config.LOG_INFO,
      files:      [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'lib/*.js',
        'test/*.js'
      ]
    });
  };
}(module));
