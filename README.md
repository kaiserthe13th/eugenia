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

First of all you must have a Eugenia instance

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
	// Methods
	constructor(styleIdentifier = 'eugenia-js-stylesheet')
	set_theme(theme)
	
	// Variables
	private _styleSheet
	private _styleSheetObject
```

## See Eugenia in Action

[Example](https://kaiserthe13th.w3spaces.com/eugenia.index.html)

## Todo

- Add Support for regional styles and variable changes
- Support for erasing all global styles with one function
- Add CSS Selector Support
- Pseudoelement and state support
