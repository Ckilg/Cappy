module.exports = {
	globDirectory: 'app/',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'app/sw.js'
};