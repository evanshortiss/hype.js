'use strict';

var request = require('request')
  , url = require('url')
  , config = require('./config')
  , xtend = require('xtend')
  , safejson = require('safejson');

/**
 * Perform an API request.
 * This function handles errors and automatically parses the JSON response.
 * @param {Object}
 * @param {Function}
 */
function doRequest (opts, callback) {
  request(xtend({
    method: 'GET',
    timeout: config.REQ_TIMEOUT
  }, opts), callback);
}


/**
 * GET a feed at the specified path (p)
 * All json feeds support going back through indexes.
 * @param {String}    p         The path desired
 * @param {Function}  callback  Callback function
 */
exports.get = function (path, callback) {
  doRequest({
    method: 'GET',
    uri: url.resolve(config.HOST, path)
  }, callback);
};


/**
 * Get the specified JSON resource
 * @param {String}    p         The path desired
 * @param {Function}  callback  Callback function
 */
exports.getJson = function (path, callback) {
  doRequest({
    method: 'GET',
    uri: url.resolve(config.HOST, path),
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 ' +
        'Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 ' +
        'Mobile Safari/534.30'
    }
  }, function (err, res, body) {
    if (err) {
      return callback(err, null);
    } else {
      safejson.parse(body, function (err, json) {
        callback(err, res, json);
      });
    }
  });
};
