# Currencies

List of currencies supported by Paylike for transactions and accounts.

Read more:

- https://paylike.io/account/currency
- https://paylike.io/transactions/currencies

## Account currencies

These are the currencies you can use as a base for your account, the so called
funding currency.

### Global

- EUR (Euro)
- USD (United States dollar)
- GBP (British pound sterling)

### Nordic

- DKK (Danish krone)
- NOK (Norwegian krone)
- SEK (Swedish krona)

## Usage

Within the Paylike ecosystem you should use the `code` to refer to a currency.

Pin to the current version branch to ensure future installs of your
application will work. Like so:

```json
"dependencies": {
	"@paylike/currencies": "^3.0.0"
}
```

```js
var currencies = require('@paylike/currencies');

currencies;
	/*
	[
		{
			code: 'AED',
			currency: 'United Arab Emirates dirham',
			numeric: '784',
			exponent: 2,
		},
		...
		{
			code: 'DKK',
			currency: 'Danish krone',
			numeric: '208',
			exponent: 2,
			funding: true,
		},
		...
	]
	*/

// lookup by code
currencies.byCode('AED');
	// { code: 'AED', currency: 'United Arab Emirates dirham', numeric: '784' }

currencies.byCode();
	// Map()

// list supported funding currencies
currencies
	.filter(x => x.funding)
	.map(x => x.currency);
	/*
	[
		'Danish krone',
		'Euro',
		'Pound sterling',
		'Norwegian krone',
		'Swedish krona',
		'United States dollar',
	]
	*/

// Convert between minor and major respecting the exponent
currencies.toMinor('DKK', 100.00);
	// 10000

currencies.toMajor('DKK', 10000);
	// 100.00
```
