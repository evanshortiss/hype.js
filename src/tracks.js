'use strict';

var http = require('./http');

var newImageRegex = /http:\/\/static-ak.hypem.net\/thumbs_new\/([^<]+).jpg/g
  , trackRegex = /<script type="application\/json" id="displayList-data">([^<]+)<\/script>/;


/**
 * Find the thumbnial associated with the given track.
 * @param {Object}
 * @param {Array}
 */
function mapTrackThumb (track, thumbs) {
  for (var i in thumbs) {
    var postId = String(track.postid);
    if (thumbs[i].indexOf(postId) !== -1) {
      return thumbs[i];
    }
  }
}


/**
 * Extract all thumbs and map them to the associated track
 * @param {Object}
 * @param {String}
 */
function mapThumbnails (tracks, body) {
  var urls = body.match(newImageRegex)
    , track = null;

  for(var i in tracks.tracks) {
    track = tracks.tracks[i];
    track.thumb = mapTrackThumb(track, urls);
  }

  return tracks;
}


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
    var tracks = body.match(trackRegex)[1];

    if (tracks) {
      try {
        return callback(null, null, mapThumbnails(JSON.parse(tracks), body));
      } catch(e) {
        return callback('Received data in unexpected format.', res, null);
      }
    } else {
      return callback(null, null, []);
    }
  });
};


// need to regex out the background images too as they can't be resolved
// from the JSON (I think) as they contain hex counter
