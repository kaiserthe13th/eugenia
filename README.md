# Eugenia Theme Engine

A minimal theme engine made to be easy

## How To Install

Insert this into your html file

Self-Hosted CDN
```html
<script src="https://kaiserthe13th.w3spaces.com/eugenia.min.js"></script>
```

or

install ```eugenia.min.js``` or ```eugenia.js``` and use them directly

## How to use / Documentation

First of you must have a Eugenia instance

```js
const themer = new Eugenia();
```

then you can use the set_theme method to set themes

```js
themer.set_theme({
	".some-class": {
		"css-property": "value"
	},
	"#some-id": {
		"css-property": "value"
	},
	"some-css-variable": "value",
});
```

```js
class Eugenia
```
### Methods
- ```constructor(styleIdentifier = 'eugenia-js-stylesheet')```
- ```set_theme(theme)```
### Variables
- ```private _styleSheet```
- ```private _styleSheetObject```
