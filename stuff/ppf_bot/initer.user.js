// ==UserScript==
// @name         PP Bot
// @version      1.4
// @description  Have fun
// @author       Darkness
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @require		 https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/bots/base64.js
// @connect		 githubusercontent.com
// @connect		 github.com
// @connect		 glitch.me
// @connect		 pixelplanet.fun
// @connect		 fuckyouarkeros.fun
// @connect		 canvaspixel.net
// @downloadURL  https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/stuff/ppf_bot/initer.user.js
// @updateURL  	 https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/stuff/ppf_bot/initer.user.js
// @match      *://fuckyouarkeros.fun/*
// @match      *://pixelplanet.fun/*
// @match      *://www.canvaspixel.net/*
// ==/UserScript==

fetch('https://raw.githubusercontent.com/Sallbet/touchedbydarkness.github.io/main/bots/bytecode2')
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
