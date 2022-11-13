// ==UserScript==
// @name         PP Checkpoints
// @version      2.0
// @description  save named points
// @author       Darkness
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @run-at 		 document-start
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @connect		 githubusercontent.com
// @connect		 github.com
// @connect		 glitch.me
// @connect		 pixelplanet.fun
// @connect		 fuckyouarkeros.fun
// @downloadURL  https://touchedbydarkness.github.io/stuff/ppf_checkpoints/initer.user.js
// @updateURL  	 https://touchedbydarkness.github.io/stuff/ppf_checkpoints/initer.user.js
// @match      *://fuckyouarkeros.fun/*
// @match      *://pixelplanet.fun/*
// ==/UserScript==

fetch('https://raw.githubusercontent.com/TouchedByDarkness/pixelplanet-checkpoints/main/script.js')
.then(res => {
	if (res.readyState !== res.DONE) {
		return;
	}

	if (res.status !== 200) {
		alert(`cant load checkpoints code\ncode: ${res.status}\nreason: ${res.statusText}`);
		return;
	}

	return res.text()
})
.then(code => {
	if (code !== undefined) {
		new Function('const [self, GM, unsafeWindow] = arguments;' + code + ';')(self, GM, unsafeWindow);
	}
});
