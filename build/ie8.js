/*! (C) WebReflection Mit Style License */
(function(e){function w(e,t,n,r){for(var i,s,o=n.slice(),u=x(t,e),a=0,f=o.length;a<f;a++){i=o[a],typeof i=="object"?typeof i.handleEvent=="function"&&i.handleEvent(u):i.call(e,u);if(u.stoppedImmediatePropagation)break}return s=!u.stoppedPropagation,r&&s&&e.parentNode?e.parentNode.dispatchEvent(u):!u.defaultPrevented}function E(e,t){return{configurable:!0,get:e,set:t}}function S(e,t,n){var r=a(t||e,n);o(e,"textContent",E(function(){return r.get.call(this)},function(e){r.set.call(this,e)}))}function x(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function T(e,t){var n=e.length;while(n--&&e[n]!==t);return n}function N(){if(this.tagName==="BR")return"\n";var e=this.firstChild,t=[];while(e)e.nodeType!==8&&e.nodeType!==7&&t.push(e.textContent),e=e.nextSibling;return t.join("")}function C(e){return e.nodeType!==9&&m.contains(e)}function k(e){var t=document.createEvent("Event");t.initEvent("input",!0,!0),(e.srcElement||e.fromElement||document).dispatchEvent(t)}function L(e){!n&&p.test(document.readyState)&&(n=!n,document.detachEvent(r,L),e=document.createEvent("Event"),e.initEvent(i,!0,!0),document.dispatchEvent(e))}function A(e){return function(){return m[e]||document.body&&document.body[e]||0}}function O(e){var t;while(t=this.lastChild)this.removeChild(t);e!=null&&this.appendChild(document.createTextNode(e))}function M(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(document.createEvent)return;var t=!0,n=!1,r="onreadystatechange",i="DOMContentLoaded",s="__IE8__"+Math.random(),o=Object.defineProperty||function(e,t,n){e[t]=n.value},u=Object.defineProperties||function(t,n){for(var r in n)if(f.call(n,r))try{o(t,r,n[r])}catch(i){e.console&&console.log(r+" failed on object:",t,i.message)}},a=Object.getOwnPropertyDescriptor,f=Object.prototype.hasOwnProperty,l=e.Element.prototype,c=e.Text.prototype,h=/^[a-z]+$/,p=/loaded|complete/,d={},v=document.createElement("div"),m=document.documentElement,g=m.removeAttribute,y=m.setAttribute,b=function(e){return{enumerable:!0,writable:!0,configurable:!0,value:e}};S(e.HTMLCommentElement.prototype,l,"nodeValue"),S(e.HTMLScriptElement.prototype,null,"text"),S(c,null,"nodeValue"),S(e.HTMLTitleElement.prototype,null,"text"),o(e.HTMLStyleElement.prototype,"textContent",function(e){return E(function(){return e.get.call(this.styleSheet)},function(t){e.set.call(this.styleSheet,t)})}(a(e.CSSStyleSheet.prototype,"cssText")));var _=/\b\s*alpha\s*\(\s*opacity\s*=\s*(\d+)\s*\)/;o(e.CSSStyleDeclaration.prototype,"opacity",{get:function(){var e=this.filter.match(_);return e?(e[1]/100).toString():""},set:function(e){this.zoom=1;var t=!1;e<1?e=" alpha(opacity="+Math.round(e*100)+")":e="",this.filter=this.filter.replace(_,function(){return t=!0,e}),!t&&e&&(this.filter+=e)}}),u(l,{textContent:{get:N,set:O},firstElementChild:{get:function(){for(var e=this.childNodes||[],t=0,n=e.length;t<n;t++)if(e[t].nodeType==1)return e[t]}},lastElementChild:{get:function(){for(var e=this.childNodes||[],t=e.length;t--;)if(e[t].nodeType==1)return e[t]}},oninput:{get:function(){return this._oninput||null},set:function(e){this._oninput&&(this.removeEventListener("input",this._oninput),this._oninput=e,e&&this.addEventListener("input",e))}},previousElementSibling:{get:function(){var e=this.previousSibling;while(e&&e.nodeType!=1)e=e.previousSibling;return e}},nextElementSibling:{get:function(){var e=this.nextSibling;while(e&&e.nodeType!=1)e=e.nextSibling;return e}},childElementCount:{get:function(){for(var e=0,t=this.childNodes||[],n=t.length;n--;e+=t[n].nodeType==1);return e}},addEventListener:b(function(e,t,n){if(typeof t!="function"&&typeof t!="object")return;var r=this,i="on"+e,u=r[s]||o(r,s,{value:{}})[s],a=u[i]||(u[i]={}),l=a.h||(a.h=[]),c,p;if(!f.call(a,"w")){a.w=function(e){return e[s]||w(r,M(r,e),l,!1)};if(!f.call(d,i))if(h.test(e)){try{c=document.createEventObject(),c[s]=!0,r.nodeType!=9&&(r.parentNode==null&&v.appendChild(r),(p=r.getAttribute(i))&&g.call(r,i)),r.fireEvent(i,c),d[i]=!0}catch(m){d[i]=!1;while(v.hasChildNodes())v.removeChild(v.firstChild)}p!=null&&y.call(r,i,p)}else d[i]=!1;(a.n=d[i])&&r.attachEvent(i,a.w)}T(l,t)<0&&l[n?"unshift":"push"](t),e==="input"&&r.attachEvent("onkeyup",k)}),dispatchEvent:b(function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i,u;return e.target||(e.target=t),o?i.n?t.fireEvent(n,e):w(t,e,i.h,!0):(u=t.parentNode)?u.dispatchEvent(e):!0,!e.defaultPrevented}),removeEventListener:b(function(e,t,n){if(typeof t!="function"&&typeof t!="object")return;var r=this,i="on"+e,o=r[s],u=o&&o[i],a=u&&u.h,f=a?T(a,t):-1;-1<f&&a.splice(f,1)})}),u(c,{addEventListener:b(l.addEventListener),dispatchEvent:b(l.dispatchEvent),removeEventListener:b(l.removeEventListener)}),u(e.XMLHttpRequest.prototype,{addEventListener:b(function(e,t,n){var r=this,i="on"+e,u=r[s]||o(r,s,{value:{}})[s],a=u[i]||(u[i]={}),f=a.h||(a.h=[]);T(f,t)<0&&(r[i]||(r[i]=function(){var t=document.createEvent("Event");t.initEvent(e,!0,!0),r.dispatchEvent(t)}),f[n?"unshift":"push"](t))}),dispatchEvent:b(function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i;return o&&(i.n?t.fireEvent(n,e):w(t,e,i.h,!0))}),removeEventListener:b(l.removeEventListener)});var D=a(Event.prototype,"button").get;u(e.Event.prototype,{bubbles:b(!0),cancelable:b(!0),preventDefault:b(function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}),stopPropagation:b(function(){this.stoppedPropagation=!0,this.cancelBubble=!0}),stopImmediatePropagation:b(function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}),initEvent:b(function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}),pageX:{get:function(){return this._pageX||(this._pageX=this.clientX+e.scrollX-(m.clientLeft||0))}},pageY:{get:function(){return this._pageY||(this._pageY=this.clientY+e.scrollY-(m.clientTop||0))}},which:{get:function(){return this.keyCode?this.keyCode:isNaN(this.button)?undefined:this.button+1}},charCode:{get:function(){return this.keyCode&&this.type=="keypress"?this.keyCode:0}},buttons:{get:function(){return D.call(this)}},button:{get:function(){var e=this.buttons;return e&1?0:e&2?2:e&4?1:undefined}}}),u(e.HTMLDocument.prototype,{defaultView:{get:function(){return this.parentWindow}},textContent:{get:function(){return this.nodeType===11?N.call(this):null},set:function(e){this.nodeType===11&&O.call(this,e)}},addEventListener:b(function(n,s,o){var u=this;l.addEventListener.call(u,n,s,o),t&&n===i&&!p.test(u.readyState)&&(t=!1,u.attachEvent(r,L),e==top&&function a(e){try{u.documentElement.doScroll("left"),L()}catch(t){setTimeout(a,50)}}())}),dispatchEvent:b(l.dispatchEvent),removeEventListener:b(l.removeEventListener),createEvent:b(function(e){var t;if(e!=="Event")throw new Error("unsupported "+e);return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t})}),u(e.Window.prototype,{getComputedStyle:b(function(){function i(e){this._=e}function s(){}var e=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,t=/^(top|right|bottom|left)$/,n=/\-([a-z])/g,r=function(e,t){return t.toUpperCase()};return i.prototype.getPropertyValue=function(i){var s=this._,o=s.style,u=s.currentStyle,a=s.runtimeStyle,f,l,c;return i=="opacity"?o.opacity||"1":(i=(i==="float"?"style-float":i).replace(n,r),f=u?u[i]:o[i],e.test(f)&&!t.test(i)&&(l=o.left,c=a&&a.left,c&&(a.left=u.left),o.left=i==="fontSize"?"1em":f,f=o.pixelLeft+"px",o.left=l,c&&(a.left=c)),f==null?f:f+""||"auto")},s.prototype.getPropertyValue=function(){return null},function(e,t){return t?new s(e):new i(e)}}()),addEventListener:b(function(t,n,r){var i=e,o="on"+t,u;i[o]||(i[o]=function(e){return w(i,M(i,e),u,!1)&&undefined}),u=i[o][s]||(i[o][s]=[]),T(u,n)<0&&u[r?"unshift":"push"](n)}),dispatchEvent:b(function(t){var n=e["on"+t.type];return n?n.call(e,t)!==!1&&!t.defaultPrevented:!0}),removeEventListener:b(function(t,n,r){var i="on"+t,o=(e[i]||Object)[s],u=o?T(o,n):-1;-1<u&&o.splice(u,1)}),pageXOffset:{get:A("scrollLeft")},pageYOffset:{get:A("scrollTop")},scrollX:{get:A("scrollLeft")},scrollY:{get:A("scrollTop")},innerWidth:{get:A("clientWidth")},innerHeight:{get:A("clientHeight")}}),e.HTMLElement=e.Element,function(e,t,n){for(n=0;n<t.length;n++)document.createElement(t[n]);e.length||document.createStyleSheet(""),e[0].addRule(t.join(","),"display:block;")}(document.styleSheets,["header","nav","section","article","aside","footer"])})(this.window||global);