'use strict';

var path = require('path')
  , tracks = require('../tracks');

// Example:
// http://hypem.com/evanshortiss/{section}

function genProfileFunc (section) {
  return function (username, pageNum, callback) {
    if (typeof callback !== 'function') {
      callback = pageNum;
      pageNum = 1;
    }

    pageNum = pageNum.toString() || '1';

    var p = path.join(username, section, pageNum);

    tracks.getTracksAtPath(p, callback);
  };
}

exports.loved     = genProfileFunc('');
exports.feed      = genProfileFunc('feed');
exports.history   = genProfileFunc('history');
exports.obsessed  = genProfileFunc('obsessed');
