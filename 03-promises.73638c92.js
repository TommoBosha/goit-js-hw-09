!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}function a(e){var n=e.position,o=e.delay;i.Notify.success(" Fulfilled promise ".concat(n," in ").concat(o,"ms"),{duration:2e3})}function u(e){var n=e.position,o=e.delay;i.Notify.failure(" Rejected promise ".concat(n," in ").concat(o,"ms"),{duration:2e3})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget,o=n.delay,t=n.step,i=n.amount,c=Number(o.value),l=Number(t.value),d=Number(i.value),f=1;f<=d;f+=1)r(f,c).then(a).catch(u),c+=l}))}();
//# sourceMappingURL=03-promises.73638c92.js.map
