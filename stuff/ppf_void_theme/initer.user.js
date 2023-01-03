// ==UserScript==
// @name         PPF Void theme
// @version      1.1
// @description  hope you'll like this
// @author       Darkness
// @grant 		 GM_xmlhttpRequest
// @grant 		 unsafeWindow
// @require		 https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.min.js
// @require		 https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Void-Bot/master/base64.js
// @connect		 githubusercontent.com
// @connect		 github.com
// @connect		 pixelplanet.fun
// @connect		 fuckyouarkeros.fun
// @downloadURL  https://touchedbydarkness.github.io/stuff/ppf_bot/initer.user.js
// @updateURL  	 https://touchedbydarkness.github.io/stuff/ppf_bot/initer.user.js
// @match      *://fuckyouarkeros.fun/*
// @match      *://pixelplanet.fun/*
// ==/UserScript==

fetch('https://raw.githubusercontent.com/TouchedByDarkness/pixelplanet-void-style/main/style.css')
.then(res => res.text())
.then(css => {
	const ssv = unsafeWindow.ssv;
	const link = Array.from(document.querySelectorAll('link')).find(link => {
		const href = link.getAttribute('href');
		return (
			link.getAttribute('rel') === 'stylesheet' &&
			link.getAttribute('type') === 'text/css' &&
			href &&
			Object.values(ssv.availableStyles).some(path => href.includes(path)) &&
			!href.includes(ssv.availableStyles.default));
	});

	if(link) {
		link.parentNode.removeChild(link);
	}

	const style = document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
});

