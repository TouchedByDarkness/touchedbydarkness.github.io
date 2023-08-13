// ==UserScript==
// @name         PPF Void Bot
// @version      1.0
// @description  Make us great again!
// @author       Darkness
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @require		 https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Void-Bot/master/base64.js
// @connect		 githubusercontent.com
// @connect		 github.com
// @connect		 glitch.me
// @connect		 pixelplanet.fun
// @connect		 fuckyouarkeros.fun
// @connect		 www.canvaspixel.net
// @downloadURL  https://touchedbydarkness.github.io/stuff/ppf_bot/initer.user.js
// @updateURL  	 https://touchedbydarkness.github.io/stuff/ppf_bot/initer.user.js
// @match      *://fuckyouarkeros.fun/*
// @match      *://pixelplanet.fun/*
// @match      *://www.canvaspixel.net/*
// ==/UserScript==

fetch('https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Void-Bot/master/bytecode')
.then(res => {
	if (res.readyState !== res.DONE) {
		return;
	}

	if (res.status !== 200) {
		alert(`cant load Void bot\ncode: ${res.status}\nreason: ${res.statusText}`);
		return;
	}

	return res.text()
})
.then(bytecode => {
	if (bytecode !== undefined) {
		new Function("const [self, GM, unsafeWindow] = arguments; " + atob(bytecode))(self, GM, unsafeWindow);
	}
});
