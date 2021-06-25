module.exports = {
	globDirectory: 'app/',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};