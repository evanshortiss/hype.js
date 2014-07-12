'use strict';

var profile = require('../src/profile')
  , utils = require('./utils');

var USER = 'evanshortiss';

describe('Hype profile wrapper', function () {
  this.timeout(10000);

  it('#feed Should get the listening feed of a user', function (done) {
    profile.feed(USER, utils.jsonPassing(done));
  });

  it('#history Should get the listening history of a user', function (done) {
    profile.history(USER, utils.jsonPassing(done));
  });

  it('#loved Should get the favourites (loved) of a user', function (done) {
    profile.loved(USER, utils.jsonPassing(done));
  });

  it('#obsessed Should get the obsessions (obsessed) of a user', function (done) {
    profile.obsessed(USER, utils.jsonPassing(done));
  });

});
