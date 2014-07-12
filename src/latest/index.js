'use strict';

var utils = require('../utils');

// Example
// http://hypem.com/latest/{number}

var BASE_PATH = '/latest';

exports.all       = utils.genApiFunction(BASE_PATH, '');
exports.fresh     = utils.genApiFunction(BASE_PATH, '/fresh');
exports.remixes   = utils.genApiFunction(BASE_PATH, '/remix');
exports.noRemixes = utils.genApiFunction(BASE_PATH, '/noremix');
