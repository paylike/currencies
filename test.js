'use strict';

var assert = require('assert');
var currencies = require('./');

assert.ok(Array.isArray(currencies));

assert.deepStrictEqual(currencies.find(e => e.code === 'EUR'), {
	code: 'EUR',
	currency: 'Euro',
	numeric: '978',
	funding: true,
});
