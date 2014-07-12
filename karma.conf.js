'use strict';

module.exports = function(config) {
  config.set({

    frameworks: ['mocha'],

    files: [
      './test/test-bundle.js'
    ],

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: 'INFO',
    captureTimeout: 60000,

    autoWatch: false,

    browsers: ['chrome_without_security'],
    customLaunchers: {
      chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },

    singleRun: true
  });
};
