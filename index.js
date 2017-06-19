'use strict';

var currencies = require('./currencies.json');

module.exports = currencies;

currencies.byCode = byCode;
currencies.byNumeric = byNumeric;
currencies.toMinor = toMinor;
currencies.toMajor = toMajor;

var codeMap;
var numericMap;

function byCode( code ){
	if (codeMap === undefined)
		codeMap = createMap(currencies.map(function( currency ){
			return [ currency.code, currency ];
		}));

	if (code !== undefined)
		return codeMap.get(code);

	return codeMap;
}

function byNumeric( numeric ){
	if (numericMap === undefined)
		numericMap = createMap(currencies.map(function( currency ){
			return [ currency.numeric, currency ];
		}));

	if (numeric !== undefined)
		return numericMap.get(numeric);

	return numericMap;
}

function toMinor( currency, major ){
	return Math.round(major * Math.pow(10, byCode(currency).exponent));
}

function toMajor( currency, minor ){
	return minor / Math.pow(10, byCode(currency).exponent);
}

// IE 11 does not support new Map(iterable)
function createMap( entries ){
	var map = new Map();

	for (var i = 0;i < entries.length;i++)
		map.set(entries[i][0], entries[i][1]);

	return map;
}
