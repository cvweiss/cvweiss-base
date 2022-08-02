'use strict';

module.exports = function(load) { 
	switch(load) {
		case 'www':
			return require('./bin/www.js');
		case 'cron':
			return require('./bin/cron.js');
		default:
			console.error('Unknown load type', load);
	}
}