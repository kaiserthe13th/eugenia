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

then you can use the setTheme method to set themes

```js
themer.setTheme({
	".some-class": {
		"css-property": "value"
		// More
	},
	".some-class-before": {
		"content": "value"
		"css-property": "value"
		// More
	},
	"#some-id": {
		"css-property": "value"
		// More
	},
	"#some-id:hover": {
		"new-css-property": "value"
		// More
	},
	"$some > css-selector": {
		"css-property": "value"
		// More
	},
	"some-css-variable": "value",
	// More
});
```

### Overview

```js
function rgb(r: number, g: number, b: number) -> string {...}

function rgba(r: number, g: number, b: number, a?: number) -> string {...}

function hsl(h: number, s: number, l: number) -> string {...}

function hsla(h: number, s: number, l: number, a?: number) -> string {...}

class Eugenia {
	// Methods
	constructor(styleIdentifier = 'eugenia-stylesheet') -> Eugenia {...}
	// Sets Theme:
	setTheme(theme: object) -> object(theme) {...}
	// Getter for any style you have set:
	getStyle(k?: string) -> object | string {...}
	// Erasing method for any style you have set:
	eraseStyles(k?: string) {...}
	// Refresh styles
	refreshStyles(k?: string) {...}
	
	// Variables
	private _styleSheet;
	private _styleSheetObject;
}
```

### Usage

* #### Eugenia.setTheme(theme) -> object(theme)

setTheme returns the theme you have set<br>
setTheme is a method that sets themes in the following syntax

```js
Eugenia.setTheme({
	".some-class": {
		"css-property": "value"
		// More
	},
	".some-class::before": {
		"content": "value"
		"css-property": "value"
		// More
	},
	"#some-id": {
		"css-property": "value"
		// More
	},
	"#some-id:hover": {
		"new-css-property": "value"
		// More
	},
	"$some > css-selector": {
		"css-property": "value"
		// More
	},
	"some-css-variable": "value",
	// More
});
```

* #### Eugenia.getStyle(k) -> object | string

getStyle returns the requested style<br>
getStyle is a method that return styles based on the following syntax

```js
Eugenia.getStyle(); // Returns All Styles
Eugenia.getStyle('.some-class'); // Returns The Styles of a Class Named some-class
Eugenia.getStyle('.some-class::before'); // Returns The Styles of the hover state of a Class Named some-class
Eugenia.getStyle('#some-id'); // Returns The Styles of the node with Id some-id
Eugenia.getStyle('#some-id:hover'); // Returns The Styles of the hover state of the node with Id some-id
Eugenia.getStyle('$some > css-selector'); // Returns The Styles of the CSS Selector "some > css-selector"
Eugenia.getStyle('some-css-variable'); // Returns The Value of some-css-variable
```

* #### Eugenia.refreshStyles()

refreshStyles doesn't return<br>
refreshStyles is a method that refreshes styles

* #### Eugenia.eraseStyle(k)

eraseStyle doesn't return<br>
eraseStyle is a method that erases styles in the following syntax

```js
Eugenia.getStyle(); // Erases All Styles
Eugenia.getStyle('.some-class'); // Erases The Styles of a Class Named some-class
Eugenia.getStyle('.some-class::before'); // Erases The Styles of the hover state of a Class Named some-class
Eugenia.getStyle('#some-id'); // Erases The Styles of the node with Id some-id
Eugenia.getStyle('#some-id:hover'); // Erases The Styles of the hover state of the node with Id some-id
Eugenia.getStyle('$some > css-selector'); // Erases The Styles of the CSS Selector "some > css-selector"
Eugenia.getStyle('some-css-variable'); // Erases The Value of some-css-variable
```

## See Eugenia in Action

[Example](https://kaiserthe13th.w3spaces.com/eugenia.index.html)

## Todo

```? in front of a todo means uncertainty```

- ### ? Add Support for regional styles and variable changes
