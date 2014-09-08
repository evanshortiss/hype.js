'use strict';

var http = require('./http');

var newImageRegex = /http:\/\/static-ak.hypem.net\/thumbs_new\/([^<]+).jpg/g
  , trackRegex = /id="displayList-data">([^<]+)<\/script>/
  , faveCountRegex = /favcount_([^<]+)/g;

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
function mapThumbnails (tracks, html) {
  var urls = html.match(newImageRegex)
    , track = null;

  for(var i in tracks.tracks) {
    track = tracks.tracks[i];
    track.thumb = mapTrackThumb(track, urls);
  }

  return tracks;
}


function mapLoves (tracks, html) {
  // Get 'loves' for tracks
  var loves = html.match(faveCountRegex);

  if (!loves) {
    // Not all pages have love counts
    return;
  }

  // Trim whitespace
  loves.map(function (s) {
    return s.trim();
  });

  for (var j = 0; j < tracks.tracks.length; j++) {
    var track = tracks.tracks[j];
    for (var i = 0; i < loves.length; i++) {
      var love = loves[i];
      if (love.indexOf(track.id) !== -1) {
        // love looks like 'favcount_{ID}" href="">{FAVCOUNT}'
        track.favcount = love.substring(love.length, love.indexOf('>') + 1);
        break;
      }
    }
  }
}

function getMeta (tracks, html) {
  // Get thumbnails for tracks
  mapThumbnails(tracks, html);
  mapLoves(tracks, html);

  return tracks;
}


/**
 * Get the tracks for a given URL
 * @param {String} path The path to get tracks for.
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
        return callback(null, null, getMeta(JSON.parse(tracks), body));
      } catch(e) {
        return callback('Received data in unexpected format.', res, null);
      }
    } else {
      return callback(null, null, []);
    }
  });
};
