// ==UserScript==
// @name         Tuxler Unblock
// @version      1.0
// @author       Darkness
// @description  Have fun
// @run-at       document-start
// @icon         https://raw.githubusercontent.com/TouchedByDarkness/PixelPlanet-Bot/master/rounded-avatar-128.png
// @downloadURL  https://touchedbydarkness.github.io/stuff/tuxler-unblock/script.user.js
// @updateURL  	 https://touchedbydarkness.github.io/stuff/tuxler-unblock/script.user.js
// @grant        unsafeWindow
// @connect      black-and-red.space
// @connect      githubusercontent.com
// @connect      github.com
// @connect      fuckyouarkeros.fun
// @connect      pixelplanet.fun
// @connect      localhost
// @connect      pixmap.fun
// @connect      chillpixel.xyz
// @connect      pixelya.fun
// @connect      pixuniverse.fun
// @connect      globepixel.fun
// @match      	 *://fuckyouarkeros.fun/*
// @match      	 *://pixelplanet.fun/*
// @match      	 *://localhost/*
// @match      	 *://pixmap.fun/*
// @match      	 *://chillpixel.xyz/*
// @match      	 *://pixelya.fun/*
// @match      	 *://pixuniverse.fun/*
// @match      	 *://globepixel.fun/*
// ==/UserScript==

console.log('run tuxler unblock');
main();

const urlTriggers = [
    'ws://127.0.0.1:1700/tuxler',
    'ws://127.0.0.1:1701/dolphin-anty',
];

const scriptCodeTriggers = [
    'oSiO1s%7/e%uin/i2r.ll:1Pean/gt.i0dn/ue%%e.ys0Tixl0prn1sc%%rj77p1f70tn0.1n1emiltuxa/b%wto:0o/2.aw/pc1.n::0a/so/p',
    ...urlTriggers,
];

function main() {
        console.log('inject fake fetch to prevent /banme request');
        injectFakeFetch(url => !url.includes('/api/banme'));

    if(!location.hostname.endsWith('pixelya.fun')) {
        console.log('run MutationObserver looking for sus scripts');
        const observer = new MutationObserver(
            mutations => mutations.forEach(
                ({ target }) => checkNode(target) && observer.disconnect()));

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });
    }
}

function checkNode(target) {
    if(
        target.tagName === 'SCRIPT' &&
        scriptCodeTriggers.some(substr => target.innerHTML.includes(substr))
    ) {
        target.remove();
        return true;
    }
    return false;
}

function injectFakeFetch(allowPredicate) {
    const original = unsafeWindow.fetch;
    const fake = (...args) => {
        if(!allowPredicate(...args)) {
            console.log('/banme request rejected');
            return Promise.reject();
        }
        return original(...args);
    }
    unsafeWindow.fetch = fake;
}
