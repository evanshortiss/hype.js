'use strict';

var utils = require('../utils');

// Example:
// http://hypem.com/popular/lastweek/{number}
var BASE_PATH = '/popular';

exports.now    		  = utils.genApiFunction(BASE_PATH, '');
exports.lastweek    = utils.genApiFunction(BASE_PATH, 'lastweek');
exports.remixes     = utils.genApiFunction(BASE_PATH, 'remix');
exports.noRemixes   = utils.genApiFunction(BASE_PATH, 'noremix');
exports.artists     = utils.genApiFunction(BASE_PATH, 'artists');
// TODO: Add twitter
