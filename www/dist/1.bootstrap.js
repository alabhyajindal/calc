(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,t,n){"use strict";n.r(t);var r=n(2);const u=document.querySelector("button"),c=document.querySelector("#a"),o=document.querySelector("#b"),i=document.querySelector("p"),d=document.querySelector("form");let f="multiply";function l(){let e=Number(c.value),t=Number(o.value);if(""!=e&&""!=t){const n=function(e,t){if("add"==f)return r.b(e,t);if("subtract"==f)return r.e(e,t);if("multiply"==f)return r.d(e,t);if("divide"==f)return r.c(e,t)}(e,t);i.textContent=n}else i.textContent="Please enter the values you want to add"}u.addEventListener("click",()=>{l()}),d.addEventListener("click",e=>{""!=e.target.id&&(f=e.target.id)})},function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return b}));var r=n(4);let u=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();let c=null;function o(){return null!==c&&c.buffer===r.f.buffer||(c=new Uint8Array(r.f.buffer)),c}let i=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");i.encodeInto;function d(e,t){return r.c(e,t)}function f(e,t){return r.h(e,t)}function l(e,t){return r.g(e,t)}function a(e,t){return r.d(e,t)}function b(e,t){var n,r;alert((n=e,r=t,u.decode(o().subarray(n,n+r))))}}).call(this,n(3)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";var r=n.w[e.i];e.exports=r;n(2);r.i()}]]);