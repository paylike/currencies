'use strict';

var test = require('tape');
var currencies = require('./');

test(function( t ){
	t.ok(Array.isArray(currencies));

	t.deepEqual(currencies.find(e => e.code === 'EUR'), {
		code: 'EUR',
		currency: 'Euro',
		numeric: '978',
		funding: true,
		exponent: 2,
	});

	t.end();
});
