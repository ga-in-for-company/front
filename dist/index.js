(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 18px;\n  }\n  .container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .extension {\n    display: inline-block;\n    border: 1px solid black;\n    padding: 5px;\n    margin-right: 5px;\n    position: relative;\n  }\n  .extension-text {\n    display: inline-block;\n    margin-right: 5px;\n  }\n  .extension-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n  }",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),u=n.n(d),p=n(589),l=n.n(p),f=n(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,window.addEventListener("DOMContentLoaded",(async function(){["bat","cmd","com","cpl","exe","scr","js"].forEach((e=>{const t=document.getElementById(e);t&&t.addEventListener("click",(async function(){await async function(e){const t=e.name;if(!0===e.checked){const e={name:t,custom_or_fixed:"fixed",is_checked:1};await g(e)}else{const e={name:t,custom_or_fixed:"fixed",is_checked:0};await g(e)}}(this)}))}));const e=await fetch("http://ec2-52-79-135-128.ap-northeast-2.compute.amazonaws.com:3000/extension",{method:"GET"});200==e.status&&function(e){e.forEach((function(e){if("fixed"===e.custom_or_fixed){const t=document.getElementById(e.name);t&&1===e.is_checked?t.checked=!0:t&&0===e.is_checked&&(t.checked=!1)}}));const t=e.filter((e=>"custom"===e.custom_or_fixed)).map((e=>e.name));h.length=0,Array.prototype.push.apply(h,t),v(),x()}(await e.json())})),document.getElementById("addExtensionButton").addEventListener("click",(function(){const e=document.getElementById("extensionInput"),t=e.value.trim();""!==t&&g({name:t,custom_or_fixed:"custom",is_checked:0}).then((()=>{h.push(t),v(),e.value=""})).catch((e=>{console.error("API 호출 오류:",e)}))}));const h=[];function v(){const e=document.getElementById("extensionOutput");e.innerHTML="";for(let t=0;t<h.length;t++){const n=h[t],o=document.createElement("span");o.classList.add("extension");const r=document.createElement("span");r.classList.add("extension-text"),r.textContent=n;const a=document.createElement("span");a.classList.add("extension-close"),a.textContent="X",a.addEventListener("click",(function(){y(t)})),o.appendChild(r),o.appendChild(a),e.appendChild(o)}}async function y(e){const t=h[e];await async function(e){try{await fetch(`http://ec2-52-79-135-128.ap-northeast-2.compute.amazonaws.com:3000/extension/${e}`,{method:"DELETE"}),x()}catch(e){console.error(e)}}(t).then((()=>{h.splice(e,1),v()})).catch((e=>{console.error("API 호출 오류:",e)}))}function x(){const e=document.getElementById("countCustomExtension"),t=document.createElement("span");t.textContent=`${h.length}/20`,e.appendChild(t)}async function g(e){try{const t=await fetch("http://ec2-52-79-135-128.ap-northeast-2.compute.amazonaws.com:3000/extension",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});201===t.status&&(await t.json(),alert("데이터 저장 완료"))}catch(e){console.error(e)}}})()})();