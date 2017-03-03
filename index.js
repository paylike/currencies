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
		codeMap = new Map(currencies.map(function( currency ){
			return [ currency.code, currency ];
		}));

	if (code !== undefined)
		return codeMap.get(code);

	return codeMap;
}

function byNumeric( numeric ){
	if (numericMap === undefined)
		numericMap = new Map(currencies.map(function( currency ){
			return [ currency.numeric, currency ];
		}));

	if (numeric !== undefined)
		return numericMap.get(numeric);

	return numericMap;
}

function toMinor( currency, major ){
	return major * Math.pow(10, currencies.byCode(currency).exponent);
}

function toMajor( currency, minor ){
	return minor / Math.pow(10, currencies.byCode(currency).exponent);
}
