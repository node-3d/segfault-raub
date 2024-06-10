'use strict';


if (global['segfault-raub']) {
	module.exports = global['segfault-raub'];
} else {
	const { getBin } = require('addon-tools-raub');
	
	const core = require(`./${getBin()}/segfault.node`);
	
	global['segfault-raub'] = core;
	module.exports = core;
}
