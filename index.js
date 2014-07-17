var Promise = require("bluebird");
var request = Promise.promisify(require("request"));
var _ = require('lodash');

var crawl = function(pattern, site) {
	return request(site).then(function(res) {
		res = res[0];
		return res.body.indexOf(pattern) !== -1;
	});
};

var csf = function(sites, pattern) {
	if (!Array.isArray(sites)) {
		sites = [sites];
	}

	return Promise.all(sites.map(crawl.bind(null, pattern))).then(_.zipObject.bind(null, sites));
};

module.exports = csf;
