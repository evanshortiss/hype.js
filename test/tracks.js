var assert = require('assert')
  , tracks = require('../src/tracks');


var USER = 'evanshortiss'
  , FAKE_USER = '_NOT_A_USER_';

describe('Tracks module', function () {

  this.timeout(5000);

  it('#getTracksAtPath Should get tracks at the given path', function (done) {
    tracks.getTracksAtPath(USER, function (err, res, tracks) {
      assert.equal(err, null);
      assert.equal(typeof res, 'object');
      assert.equal(typeof tracks, 'object');
      done();
    });
  });

  it('#getTracksAtPath Should return 404 in err', function (done) {
    tracks.getTracksAtPath(FAKE_USER, function (err, res, tracks) {
      assert.notEqual(err, null);
      assert.equal(err.statusCode, 404);
      assert.equal(typeof res, 'object');
      done();
    });
  });

});
