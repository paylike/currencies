# Currencies

Currencies supported by Paylike

- AED (United Arab Emirates dirham)
- ARS (Argentine peso)
- AUD (Australian dollar)
- AZN (Azerbaijani manat)
- BAM (Bosnia and Herzegovina convertible mark)
- BGN (Bulgarian lev)
- BRL (Brazilian real)
- BYR (Belarusian ruble)
- CAD (Canadian dollar)
- CHF (Swiss franc)
- CLP (Chilean peso)
- CNY (Chinese yuan)
- CZK (Czech Republic koruna)
- DKK (Danish krone)
- DOP (Dominican peso)
- EGP (Egyptian pound)
- EUR (Euro)
- GBP (British pound sterling)
- HKD (Hong Kong dollar)
- HRK (Croatian kuna)
- HUF (Hungarian forint)
- ILS (Israeli new sheqel)
- INR (Indian rupee)
- ISK (Icelandic króna)
- JPY (Japanese yen)
- LTL (Lithuanian litas)
- MAD (Moroccan dirham)
- MXN (Mexican peso)
- MYR (Malaysian ringgit)
- NOK (Norwegian krone)
- NZD (New Zealand dollar)
- PHP (Philippine peso)
- PLN (Polish zloty)
- RON (Romanian leu)
- RSD (Serbian dinar)
- RUB (Russian ruble)
- SAR (Saudi riyal)
- SEK (Swedish krona)
- SGD (Singapore dollar)
- THB (Thai baht)
- TND (Tunisian dinar)
- TRY (Turkish lira)
- TWD (New Taiwan dollar)
- UAH (Ukrainian hryvnia)
- USD (United States dollar)
- VND (Vietnamese dong)
- ZAR (South African rand)

## Funding currencies

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

Pin the dependency to the current version branch to ensure future installs of
your application will work. Like so:

```json
"dependencies": {
	"paylike-currencies": "paylike/currencies#v2.x"
}
```

This will keep you on the `2.x` branch which will not have breaking changes
merged.

```js
var currencies = require('paylike-currencies');

currencies;
/*
[
	{
		code: 'AED',
		currency: 'United Arab Emirates dirham',
		numeric: '784',
	},
	...
	{
		code: 'DKK',
		currency: 'Danish krone',
		numeric: '208',
		funding: true,
	},
	...
]
*/

// lookup by code
var currencies = require('paylike-currencies');
var indexBy = require('index-by');

byCode = indexBy(currencies, 'code');

byCode['AED']
// { code: 'AED', currency: 'United Arab Emirates dirham', numeric: '784' }

// list supported funding currencies
currencies
	.filter(x => x.funding)
	.map(x => x.currency);
/*
[
	'Danish krone',
	'Euro',
	'British pound sterling',
	'Norwegian krone',
	'Swedish krona',
	'United States dollar',
]
*/
```
