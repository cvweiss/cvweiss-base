'use strict';

module.exports = function (jobType) {
	switch(jobType) {
		case 'www':
			return require('./bin/www.js');
		case 'cron':
			return require('./bin/cron.js');

		case 'init':
			console.error('Not yet implemented! TODO copy and setup the env file, look for any ddls and implement them');
			break;
		default:
			console.error('Unknown job type', jobType);
			console.error('Valid job types are www, cron, init'); 
	}
}