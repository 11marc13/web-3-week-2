!function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(n,t,function(r){return e[r]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=0)}([function(e,r){var o=!1;gsap.set("#record-circle-small, #record-dot, #record-line, #record-circle",{alpha:0}),$(document).ready((function(){console.log("ready!")}));var n=gsap.timeline({paused:!0}),t=gsap.timeline({paused:!0});n.to("#left-line",{duration:.05,morphSVG:"#record-circle"},"morph").to("#right-line",{duration:.25,morphSVG:"#record-line"},"morph").to("#middle-line",{duration:.25,morphSVG:"#record-circle-small"},"morph").to("#record-dot",{alpha:1},"morph"),t.to("#spin-record",{transformOrigin:"14 4",rotate:360,repeat:-1,ease:Power0.easeNone}),$("#burger-container").on("mouseenter",(function(){console.log("mouse enter"),!1===o&&(n.play(),t.play())})),$("#burger-container").on("mouseleave",(function(){console.log("mouse leave"),!1===o&&(n.reverse(),t.pause())})),(t=gsap.timeline({paused:!0})).to("#spin-record",{transformOrigin:"14 4",rotate:360,repeat:-1,ease:Power0.easeNone}),$("#burger-container").on("click",(function(){console.log("mouse click"),!1===o?t.play():o=!1})),$(document).ready((function(){console.log("ready!"),gsap.registerPlugin(MorphSVGPlugin)}))}]);