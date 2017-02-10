'use strict';

var test = require('tape');
var currencies = require('./');

var EUR = {
	code: 'EUR',
	currency: 'Euro',
	numeric: '978',
	funding: true,
	exponent: 2,
};

test(function( t ){
	t.ok(Array.isArray(currencies));

	t.deepEqual(currencies.find(e => e.code === 'EUR'), EUR);

	t.equal(typeof currencies.byCode, 'function');
	t.equal(typeof currencies.byNumeric, 'function');

	t.ok(currencies.byCode() === currencies.byCode());
	t.ok(currencies.byNumeric() === currencies.byNumeric());

	t.deepEqual(currencies.byCode().get('EUR'), EUR);
	t.deepEqual(currencies.byNumeric().get('978'), EUR);

	t.end();
});
