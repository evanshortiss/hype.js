'use strict';

var http = require('./http');

/**
 * Get the tracks for a given URL
 * @param {String}
 * @param {Function}
 */
exports.getTracksAtPath = function (path, callback) {
  http.get(path, function (err, res, body) {
    if (err) {
      return callback(err, res, []);
    }

    // Load standard hype pages via XHR then regex response for the tracks. Yuck
    var tracks = body.match(/<script type="application\/json" id="displayList-data">([^<]+)<\/script>/);

    if (tracks && tracks[1]) {
      try {
        return callback(null, res, JSON.parse(tracks[1]));
      } catch(e) {
        return callback('Received data in unexpected format.', res, null);
      }
    } else {
      return callback(null, null, []);
    }
  });
};
