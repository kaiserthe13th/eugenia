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

sonra set_theme metodu ile temanızı ayarlayabilirsiniz.

```js
themer.set_theme({
	".herhangi-bir-css-sınıfı": {
		"css-özelliği": "değer"
	},
	"#herhangi-bir-id": {
		"css-özelliği": "değer"
	},
	"herhangi-css-değişkeni": "değer",
});
```

```js
class Eugenia
	// Metodlar
	constructor(styleIdentifier = 'eugenia-js-stylesheet')
	set_theme(theme)
	
	// Değişkenler
	private _styleSheet
	private _styleSheetObject
```

## Eugenia'yı Eylemde Görün

[Örnek](https://kaiserthe13th.w3spaces.com/eugenia.index.html)


## Yapılacaklar

- Bölgesel Stil ve CSS değişkeni ayarlama
- Global stilleri tek bir fonksiyonla silme
- CSS seçici desteği
- Pseudoelement ve durum desteği
