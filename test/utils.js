'use strict';

var assert = require('assert');

/**
 * Callback for a JSON API test we expect to pass.
 * @param {Function} done
 */
exports.jsonPassing = function (done) {
  return function (err, res, tracks) {
    assert.equal(err, null, 'No error should be returned.');
    assert.equal(typeof res, 'object', 'Results should be an object');
    assert.equal(typeof res, 'object', 'Tracks should be an object');
    done();
  };
};
