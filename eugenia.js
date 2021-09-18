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
        if (styleIdentifier === void 0) { styleIdentifier = 'eugenia-js-stylesheet'; }
        var style_sheet = document.createElement('style');
        style_sheet.id = styleIdentifier;
        document.documentElement.appendChild(style_sheet);
        this._styleSheet = style_sheet;
        this._styleSheetObject = {};
    }
    ;
    Eugenia.prototype.set_theme = function (t) {
        for (var k in t) {
            if (k[0] == '.') {
                for (var l in t[k]) {
                    if (this._styleSheetObject[k] == undefined) {
                        this._styleSheetObject[k] = {};
                    }
                    this._styleSheetObject[k][l] = t[k][l];
                }
                this._styleSheet.innerHTML = "";
                for (var l in this._styleSheetObject) {
                    this._styleSheet.innerHTML += l + "{";
                    for (var p in this._styleSheetObject[l]) {
                        this._styleSheet.innerHTML += p + ':' + this._styleSheetObject[l][p] + ';';
                    }
                    this._styleSheet.innerHTML += "}";
                }
            }
            else if (k[0] == '#') {
                var c = k.substring(1);
                var item = document.getElementById(c);
                for (var l in t[k]) {
                    item.style.setProperty(l, t[k][l]);
                }
                ;
            }
            else
                document.documentElement.style.setProperty('--' + k, t[k]);
        }
        ;
        return t;
    };
    ;
    return Eugenia;
}());
