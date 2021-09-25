function rgb(r: number, g: number, b: number) {
	return 'rgb('+r+', '+g+', '+b+')';
};

function rgba(r: number, g: number, b: number, a?: number) {
	if (a >= 1) {
		var _a: any = a + '%';
	} else if (a == undefined) {
		var _a: any = 1;
	} else {
		var _a: any = a;
	};
	return 'rgba('+r+', '+g+', '+b+', '+_a+')';
};

function hsl(h: number, s: number, l: number) {
	return 'hsl('+h+', '+s+'%, '+l+'%)';
};

function hsla(h: number, s: number, l: number, a?: number) {
	if (a >= 1) {
		var _a: any = a + '%';
	} else if (a == undefined) {
		var _a: any = 1;
	} else {
		var _a: any = a;
	};
	return 'hsla('+h+', '+s+'%, '+l+'%, '+_a+')';
};

class Eugenia {
	private _styleSheet: Element;
	private _styleSheetObject: { [x: string]: {[x: string]: string}};

	constructor(styleIdentifier = 'eugenia-stylesheet') {
		let style_sheet = document.createElement('style');
		style_sheet.id = styleIdentifier;
		document.documentElement.appendChild(style_sheet);
		this._styleSheet = style_sheet;
		this._styleSheetObject = {};
		this._styleSheetObject[':root'] = {};
	};

	set_theme(t: any/* {[x: string] : string | {[x: string]: string}} */) {
		for (let k in t) {
			if (k[0] == '.' || k[0] == '#') {
				if (this._styleSheetObject[k] == undefined) {
					this._styleSheetObject[k] = {};
				}
				for (let l in t[k]) {
					this._styleSheetObject[k][l] = t[k][l];
				}
			} else if (k[0] == '$') {
				let selector = k.substring(1);
				if (this._styleSheetObject[selector] == undefined) {
					this._styleSheetObject[selector] = {};
				}
				for (let l in t[k]) {
					this._styleSheetObject[selector][l] = t[k][l];
				}
			} else {
				this._styleSheetObject[':root']['--'+k] = t[k];
			};
		};
		this.refreshStyleSheet();
		return t;
	};
	refreshStyleSheet() {
		this._styleSheet.innerHTML = "";
		for (let l in this._styleSheetObject) {
			this._styleSheet.innerHTML += l + "{";
			for (let p in this._styleSheetObject[l]) {
				this._styleSheet.innerHTML += p + ':' + this._styleSheetObject[l][p] + ';';
			}
			this._styleSheet.innerHTML += "}";
		}
	}
	eraseStyleSheet(k?: string) {
		if (k == undefined) {
			this._styleSheetObject = {};
		} else if (k[0] == '$') {
			let selector = k.substring(1);
			delete this._styleSheetObject[selector];
		} else if (k[0] == '.' || k[0] == '#') {
			delete this._styleSheetObject[k];
		} else {
			delete this._styleSheetObject[':root']['--'+k];
		}
		this.refreshStyleSheet();
	}
	getStyle(k?: string) {
		if (k == undefined) {
			return this._styleSheetObject;
		} else if (k[0] == '$') {
			let selector = k.substring(1);
			return this._styleSheetObject[selector];
		} else if (k[0] == '.' || k[0] == '#') {
			return this._styleSheetObject[k];
		} else {
			return this._styleSheetObject[':root']['--'+k];
		}
	}
}