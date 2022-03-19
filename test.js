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

	t.equal(currencies.find(e => e.code === 'VES').deprecated, true);

	t.equal(typeof currencies.byCode, 'function');
	t.equal(typeof currencies.byNumeric, 'function');

	t.ok(currencies.byCode() === currencies.byCode());
	t.ok(currencies.byNumeric() === currencies.byNumeric());

	t.deepEqual(currencies.byCode().get('EUR'), EUR);
	t.deepEqual(currencies.byNumeric().get('978'), EUR);

	t.deepEqual(currencies.byCode('EUR'), EUR);
	t.deepEqual(currencies.byNumeric('978'), EUR);

	t.equal(currencies.toMajor('EUR', 100), 1.00);
	t.equal(currencies.toMinor('EUR', 1), 100);
	t.equal(currencies.toMajor('JPY', 1), 1);
	t.equal(currencies.toMinor('JPY', 1), 1);
	t.equal(currencies.toMajor('JPY', 0), 0);
	t.equal(currencies.toMinor('JPY', 0), 0);

	t.equal(currencies.toMinor('EUR', 19.9), 1990);
	t.equal(currencies.toMinor('EUR', 19.99), 1999);
	t.equal(currencies.toMinor('EUR', 19.01), 1901);

	t.equal(currencies.byCode(''), undefined);
	t.equal(currencies.byNumeric(''), undefined);

	t.end();
});
