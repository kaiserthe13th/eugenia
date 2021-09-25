# Eugenia Tema Makinesi

Kolaylık için yapılmış minimal bir tema makinesi

## Nasıl İndirilir?

Bunu HTML dosyanıza koyun

Self-Hosted CDN
```html
<script src="https://kaiserthe13th.w3spaces.com/eugenia.min.js"></script>
```

veya

```eugenia.min.js``` ya da ```eugenia.js```'i indirin ve kendiniz kullanın.

## Nasıl Kullanılır? / Belgeleme

İlk önce bir Eugenia nesnesine sahip olmalısınız.

```js
const themer = new Eugenia();
```

sonra setTheme metodu ile temanızı ayarlayabilirsiniz.

```js
Eugenia.setTheme({
	".herhangi-sınıf": {
		"css-özelliği": "değer"
		// More
	},
	".herhangi-sınıf::before": {
		"content": "value"
		"css-özelliği": "değer"
		// More
	},
	"#herhangi-id": {
		"css-özelliği": "değer"
		// More
	},
	"#herhangi-id:hover": {
		"yeni-css-özelliği": "değer"
		// More
	},
	"$herhangi > css-seçicisi": {
		"css-özelliği": "değer"
		// More
	},
	"herhangi-css-değişkeni": "değer"
	// More
});
```

### Genel Bakış

```js
function rgb(r: number, g: number, b: number) -> string {...}

function rgba(r: number, g: number, b: number, a?: number) -> string {...}

function hsl(h: number, s: number, l: number) -> string {...}

function hsla(h: number, s: number, l: number, a?: number) -> string {...}

class Eugenia {
	// Metodlar
	constructor(styleIdentifier = 'eugenia-stylesheet') -> Eugenia {...}
	// Temayı ayarlar:
	setTheme(theme: object) -> object(theme) {...}
	// Ayarladığınız stiller için bir getter:
	getStyle(k?: string) -> object | string {...}
	// Ayarladığınız stiller için silme metodu:
	eraseStyles(k?: string) {...}
	// Stilleri yenile
	refreshStyles(k?: string) {...}
	
	// Değişkenler
	private _styleSheet;
	private _styleSheetObject;
}
```

### Kullanım

* #### Eugenia.setTheme(tema) -> object(tema)

setTheme ayarladığınız değeri geri yollar<br>
setTheme temaları aşağıdaki sözdiziminde ayarlayan bir metoddur

```js
Eugenia.setTheme({
	".herhangi-sınıf": {
		"css-özelliği": "değer"
		// More
	},
	".herhangi-sınıf::before": {
		"content": "value"
		"css-özelliği": "değer"
		// More
	},
	"#herhangi-id": {
		"css-özelliği": "değer"
		// More
	},
	"#herhangi-id:hover": {
		"yeni-css-özelliği": "değer"
		// More
	},
	"$herhangi > css-seçicisi": {
		"css-özelliği": "değer"
		// More
	},
	"herhangi-css-değişkeni": "değer"
	// More
});
```

* #### Eugenia.getStyle(k) -> object | string

getStyle istenen stili geri yollar<br>
getStyle aşağıdaki sözdizimine göre stiller geri döndüren bir metoddur

```js
Eugenia.getStyle(); // Tüm stilleri geri yollar
Eugenia.getStyle('.herhangi-sınıf'); // herhangi-sınıf için yazılmış stilleri geri yollar
Eugenia.getStyle('.herhangi-sınıf::before'); // herhangi-sınıf'ın ::before pseudoelement'i için yazılmış stilleri geri yollar
Eugenia.getStyle('#herhangi-id'); // herhangi-id için yazılmış stilleri geri yollar
Eugenia.getStyle('#herhangi-id:hover'); // herhangi-id'nin hover durumu için yazılmış stilleri geri yollar
Eugenia.getStyle('$herhangi > css-seçicisi'); // "herhangi > css-seçicisi" için yazılmış stilleri geri yollar
Eugenia.getStyle('herhangi-css-değişkeni'); // herhangi-css-değişkeni'nin değerini geri yollar
```

* #### Eugenia.refreshStyles()

refreshStyles birşey geri yollamaz<br>
refreshStyles stilleri yenileyen bir metoddur

* #### Eugenia.eraseStyle(k)

eraseStyle birşey geri yollamaz<br>
eraseStyle aşağıdaki sözdizimine göre stilleri silen bir metoddur

```js
Eugenia.getStyle(); // Tüm stilleri siler
Eugenia.getStyle('.herhangi-sınıf'); // herhangi-sınıf için yazılmış stilleri siler
Eugenia.getStyle('.herhangi-sınıf::before'); // herhangi-sınıf'ın ::before pseudoelement'i için yazılmış stilleri siler
Eugenia.getStyle('#herhangi-id'); // herhangi-id için yazılmış stilleri siler
Eugenia.getStyle('#herhangi-id:hover'); // herhangi-id'nin hover durumu için yazılmış stilleri siler
Eugenia.getStyle('$herhangi > css-seçicisi'); // "herhangi > css-seçicisi" için yazılmış stilleri siler
Eugenia.getStyle('herhangi-css-değişkeni'); // herhangi-css-değişkeni'nin değerini siler
```

## Eugenia'yı Eylemde Görün

[Örnek](https://kaiserthe13th.w3spaces.com/eugenia.index.html)


## Yapılacaklar

- Bölgesel Stil ve CSS değişkeni ayarlama
