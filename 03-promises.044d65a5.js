var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,n){return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}))}))}function u({position:e,delay:n}){i.Notify.success(` Fulfilled promise ${e} in ${n}ms`,{duration:2e3})}function l({position:e,delay:n}){i.Notify.failure(` Rejected promise ${e} in ${n}ms`,{duration:2e3})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:o,amount:t}=e.currentTarget,i=Number(n.value),a=Number(o.value),d=Number(t.value);for(let e=0;e<d;e+=1)r(e+1,i+e*a).then(u).catch(l)}));
//# sourceMappingURL=03-promises.044d65a5.js.map