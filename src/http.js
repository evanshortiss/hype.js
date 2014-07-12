'use strict';

var xhr = require('xhr')
  , url = require('url')
  , xtend = require('xtend')
  , safejson = require('safejson');

var HOST = 'http://hypem.com/';

var DEFAULTS = {
  method: 'GET',
  timeout: 30000
};


/**
 * Perform an API request.
 * This function handles errors and automatically parses the JSON response.
 * @param {Object}
 * @param {Function}
 */
function request (opts, callback) {
  xhr(xtend(DEFAULTS, opts), callback);
}


/**
 * GET a feed at the specified path (p)
 * All json feeds support going back through indexes.
 * @param {String}    p         The path desired
 * @param {Function}  callback  Callback function
 */
exports.get = function (path, callback) {
  request({
    method: 'GET',
    uri: url.resolve(HOST, path)
  }, callback);
};


/**
 * Get the specified JSON resource
 * @param {String}    p         The path desired
 * @param {Function}  callback  Callback function
 */
exports.getJson = function (path, callback) {
  request({
    method: 'GET',
    uri: url.resolve(HOST, path),
    headers: {
      'Content-Type': 'application/json'
    }
  }, function (err, res, body) {
    window.dump(body);
    if (err) {
      return callback(err, null);
    } else {
      safejson.parse(body, function (err, json) {
        callback(err, res, json);
      });
      // try {
      //   return callback(null, res, JSON.parse(body));
      // } catch (e) {
      //   return callback(e, null, null);
      // }
    }
  });
};
