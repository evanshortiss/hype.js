'use strict';

var popular = require('../src/popular')
  , utils = require('./utils');

var USER = 'evanshortiss';

describe('Hype popular wrapper', function () {
  this.timeout(10000);

  it('#all Should get all from latest.', function (done) {
    popular.now(utils.jsonPassing(done));
  });

  it('#lastweek Should get lastweek from popular.', function (done) {
    popular.lastweek(utils.jsonPassing(done));
  });

  it('#remixes Should get remixes from popular.', function (done) {
    popular.remixes(utils.jsonPassing(done));
  });

  it('#noRemixes Should get no remixes from popular.', function (done) {
    popular.noRemixes(utils.jsonPassing(done));
  });

  it('#artists Should get artists from popular.', function (done) {
    popular.artists(utils.jsonPassing(done));
  });

});
