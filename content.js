// voce pode usar esse arquivo pra injetar algum codigo na pagina, como exemplo a baixo.

var extUrl = chrome.extension.getURL('codigoInjetado.js');
var el = document.createElement("script");
el.src = extUrl;
document.querySelector('head').append(el);
