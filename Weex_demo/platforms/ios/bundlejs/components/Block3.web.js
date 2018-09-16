// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=114)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},1:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var i=f++;r=p||(p=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},l=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete u[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},11:function(e,t,n){"use strict";function r(e){s||n(27)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),i=n.n(o),a=n(23),s=!1,d=n(2),c=r,u=d(i.a,a.a,c,"data-v-5c59c7ba",null);u.options.__file="src/components/Block3.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] Block3.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},114:function(e,t,n){"use strict";var r=n(11);r.el="#root",new Vue(r)},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=weex.requireModule("navigator");t.default={props:["newGoods","hotGoods","head","hasMore","goods"],data:function(){return{}},methods:{jumpWeb:function(e){e||(e="http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7");var t=this.$getConfig().bundleUrl;i.push({url:o.default.setBundleUrl(t,"page/web.js?weburl="+e),animated:"true"})}}}},19:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.iconfont[data-v-5c59c7ba] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5c59c7ba]{\n    background-color: #fff;\n    padding-bottom: 10px;\n    padding-top: 26px;\n    width: 750px;\n}\n.tlt[data-v-5c59c7ba]{\n    text-align: center;\n    color:#333;\n    width: 750px;\n    padding: 10px;\n    font-size: 30px;\n}\n.gb-box[data-v-5c59c7ba]{\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.i-gd[data-v-5c59c7ba]{\n    width: 350px;\n    height: 510px;\n    margin-bottom: 20px;\n}\n.gd-img[data-v-5c59c7ba]{\n    width: 350px;\n    height: 350px;\n    background-color: #f4f4f4;\n}\n.gd-tlt[data-v-5c59c7ba]{\n    font-size: 28px;\n    color:#333;\n    width: 350px;\n    margin-top: 15px;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-info[data-v-5c59c7ba]{\n    display: block;\n    font-size: 28px;\n    width: 350px;\n    height: 65px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    color:#9F8A60;\n    background-color: #F1ECE2;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.gd-price[data-v-5c59c7ba]{\n    font-size: 28px;\n    width: 350px;\n    margin-top: 10px;\n    color:#b4282d;\n    overflow: hidden;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n",""])},2:function(e,t){e.exports=function(e,t,n,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var d="function"==typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),r&&(d._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):n&&(c=n),c){var u=d.functional,l=u?d.render:d.beforeCreate;u?d.render=function(e,t){return c.call(t),l(e,t)}:d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:a,options:d}}},23:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("text",{staticClass:"tlt"},[e._v("猜你喜欢")]),e._v(" "),n("div",{staticClass:"gb-box"},e._l(e.goods,function(t){return n("div",{staticClass:"i-gd",on:{click:function(n){e.jumpWeb(t.url)}}},[n("image",{staticClass:"gd-img",attrs:{resize:"cover",src:t.img}}),e._v(" "),n("text",{staticClass:"gd-info"},[e._v(e._s(t.info))]),e._v(" "),n("text",{staticClass:"gd-tlt"},[e._v(e._s(t.tlt))]),e._v(" "),n("text",{staticClass:"gd-price"},[e._v("¥"+e._s(t.price))])])}))])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.a=i},27:function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("422ea971",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],d=i[2],c=i[3],u={id:e+":"+o,css:s,media:d,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"})},setBundleUrl:function(e,t){var n=e,r="",o="",i=void 0,a=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,s=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(a)i="file://assets/dist";else if(s)i=n.substring(0,n.lastIndexOf("/")+1);else{var d=/\/\/([^\/]+?)\//.exec(n),c=/\/\/[^\/]+\/([^\/]+)\//.exec(n);d&&d.length>=2&&(r=d[1]),c&&c.length>=2&&(o=c[1]),i="http://"+r+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?i+(o?o+"/":""):"web"===o||"dist"===o?"./index.html?page=/dist/":"./index.html?page=")+t},getUrlSearch:function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=e.slice(e.indexOf("?")+1).match(n);if(null!=r)try{return decodeURIComponent(r[2])}catch(e){return null}return null}};t.default=r}});