'use strict';

var indexBy = require('index-by');
var currencies = require('./currencies');

module.exports = currencies;

currencies.byCode = indexBy(currencies, 'code');
