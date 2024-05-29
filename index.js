'use strict'
const currencies = require('./currencies.json')

module.exports = currencies

currencies.byCode = byCode
currencies.byNumeric = byNumeric
currencies.toMinor = toMinor
currencies.toMajor = toMajor

let codeMap
let numericMap

function byCode(code) {
	if (codeMap === undefined)
		codeMap = createMap(
			currencies.map((currency) => {
				return [currency.code, currency]
			})
		)

	if (code !== undefined) return codeMap.get(code)

	return codeMap
}

function byNumeric(numeric) {
	if (numericMap === undefined)
		numericMap = createMap(
			currencies.map((currency) => {
				return [currency.numeric, currency]
			})
		)

	if (numeric !== undefined) return numericMap.get(numeric)

	return numericMap
}

function toMinor(currency, major) {
	return Math.round(major * 10 ** byCode(currency).exponent)
}

function toMajor(currency, minor) {
	return minor / 10 ** byCode(currency).exponent
}

// IE 11 does not support new Map(iterable)
function createMap(entries) {
	const map = new Map()

	for (let i = 0; i < entries.length; i++)
		map.set(entries[i][0], entries[i][1])

	return map
}
