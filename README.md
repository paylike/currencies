# Paylike Currencies

This module contains a list of the currencies supported by Paylike

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

## Usage

Make sure to tag any dependency on this library with the current version to
ensure future installs of your application will work. Like so:

```json
"dependencies": {
	"paylike-currencies": "paylike/currencies#v1.0.x"
}
```

The above entry will keep you on the `1.0.x` branch which will not have
breaking changes merged.

```js
var currencies = require('paylike-currencies');

currencies // returns an array with supported currencies
	//	[{
	//		code: 'AED',
	//		currency: 'United Arab Emirates dirham',
	//	}, {
	//		code: 'ARS',
	//		currency: 'Argentine peso',
	//	}, {
	//		code: 'AUD',
	//		currency: 'Australian dollar',
	//	}, ...]

currencies.byCode['AED'] // { code: 'AED', currency: 'United Arab Emirates dirham' }

```
