function rgb(r, g, b) {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
;
function rgba(r, g, b, a) {
    if (a >= 1) {
        var _a = a + '%';
    }
    else if (a == undefined) {
        var _a = 1;
    }
    else {
        var _a = a;
    }
    ;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + _a + ')';
}
;
function hsl(h, s, l) {
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}
;
function hsla(h, s, l, a) {
    if (a >= 1) {
        var _a = a + '%';
    }
    else if (a == undefined) {
        var _a = 1;
    }
    else {
        var _a = a;
    }
    ;
    return 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + _a + ')';
}
;
var Eugenia = /** @class */ (function () {
    function Eugenia(styleIdentifier) {
        if (styleIdentifier === void 0) { styleIdentifier = 'eugenia-stylesheet'; }
        var style_sheet = document.createElement('style');
        style_sheet.id = styleIdentifier;
        document.documentElement.appendChild(style_sheet);
        this._styleSheet = style_sheet;
        this._styleSheetObject = {};
        this._styleSheetObject[':root'] = {};
    }
    ;
    Eugenia.prototype.setTheme = function (t /* {[x: string] : string | {[x: string]: string}} */) {
        for (var k in t) {
            if (k[0] == '.' || k[0] == '#') {
                if (this._styleSheetObject[k] == undefined) {
                    this._styleSheetObject[k] = {};
                }
                for (var l in t[k]) {
                    this._styleSheetObject[k][l] = t[k][l];
                }
            }
            else if (k[0] == '$') {
                var selector = k.substring(1);
                if (this._styleSheetObject[selector] == undefined) {
                    this._styleSheetObject[selector] = {};
                }
                for (var l in t[k]) {
                    this._styleSheetObject[selector][l] = t[k][l];
                }
            }
            else {
                this._styleSheetObject[':root']['--' + k] = t[k];
            }
            ;
        }
        ;
        this.refreshStyles();
        return t;
    };
    ;
    Eugenia.prototype.refreshStyles = function () {
        this._styleSheet.innerHTML = "";
        for (var l in this._styleSheetObject) {
            this._styleSheet.innerHTML += l + "{";
            for (var p in this._styleSheetObject[l]) {
                this._styleSheet.innerHTML += p + ':' + this._styleSheetObject[l][p] + ';';
            }
            this._styleSheet.innerHTML += "}";
        }
    };
    Eugenia.prototype.eraseStyle = function (k) {
        if (k == undefined) {
            this._styleSheetObject = {};
        }
        else if (k[0] == '$') {
            var selector = k.substring(1);
            delete this._styleSheetObject[selector];
        }
        else if (k[0] == '.' || k[0] == '#') {
            delete this._styleSheetObject[k];
        }
        else {
            delete this._styleSheetObject[':root']['--' + k];
        }
        this.refreshStyles();
    };
    Eugenia.prototype.getStyle = function (k) {
        if (k == undefined) {
            return this._styleSheetObject;
        }
        else if (k[0] == '$') {
            var selector = k.substring(1);
            return this._styleSheetObject[selector];
        }
        else if (k[0] == '.' || k[0] == '#') {
            return this._styleSheetObject[k];
        }
        else {
            return this._styleSheetObject[':root']['--' + k];
        }
    };
    return Eugenia;
}());
