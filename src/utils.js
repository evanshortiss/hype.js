'use strict';

var path = require('path')
  , tracks = require('./tracks');

exports.genApiFunction = function (base, resource) {
  return function (number, callback) {
    if (typeof number === 'function') {
      callback = number;
      number = 1;
    }

    number = number || 1;

    var p = path.join(base, resource, number.toString());

    tracks.getTracksAtPath(p, function (err, res, json) {
      return callback(null, json);
    });
  };
};
