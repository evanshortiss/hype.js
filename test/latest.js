'use strict';

var latest = require('../src/latest')
  , assert = require('assert')
  , utils = require('./utils');

var USER = 'evanshortiss';

describe('Hype latest wrapper', function () {
  this.timeout(10000);

  it('#all Should get all from latest.', function (done) {
    latest.all(utils.jsonPassing(done));
  });

  it('#fresh Should get fresh from latest.', function (done) {
    latest.fresh(utils.jsonPassing(done));
  });

  it('#remixes Should get remixes from latest.', function (done) {
    latest.remixes(utils.jsonPassing(done));
  });

  it('#noRemixes Should get no remixes from latest.', function (done) {
    latest.noRemixes(utils.jsonPassing(done));
  });

  it('Should get all from latest, second page.', function (done) {
    latest.all(2, utils.jsonPassing(done));
  });

  it('Should return null for err and res, index is too high.', function (done) {
    latest.remixes(20000000, function (err, tracks) {
      assert.notEqual(err, null);
      assert.equal(tracks.length, 0);
      done();
    });
  });

});

