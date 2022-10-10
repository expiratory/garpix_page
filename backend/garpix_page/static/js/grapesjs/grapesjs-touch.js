/*! grapesjs-touch - 0.1.1 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["grapesjs-touch"]=t():e["grapesjs-touch"]=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=r(n(2));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){(0,i.default)(),(0,o.default)()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e;!function(e){var t=function(){function e(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(e.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(e){this._dropEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(e){this._effectAllowed=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),e.prototype.clearData=function(e){null!=e?delete this._data[e]:this._data=null},e.prototype.getData=function(e){return this._data[e]||""},e.prototype.setData=function(e,t){this._data[e]=t},e.prototype.setDragImage=function(e,t,o){var i=n._instance;i._imgCustom=e,i._imgOffset={x:t,y:o}},e}();e.DataTransfer=t;var n=function(){function e(){if(this._lastClick=0,e._instance)throw"DragDropTouch instance already created.";var t=!1;if(document.addEventListener("test",function(){},{get passive(){return t=!0,!0}}),"ontouchstart"in document){var n=document,o=this._touchstart.bind(this),i=this._touchmove.bind(this),r=this._touchend.bind(this),s=!!t&&{passive:!1,capture:!1};n.addEventListener("touchstart",o,s),n.addEventListener("touchmove",i,s),n.addEventListener("touchend",r),n.addEventListener("touchcancel",r)}}return e.getInstance=function(){return e._instance},e.prototype._touchstart=function(t){var n=this;if(this._shouldHandle(t)){if(Date.now()-this._lastClick<e._DBLCLICK&&this._dispatchEvent(t,"dblclick",t.target))return t.preventDefault(),void this._reset();this._reset();var o=this._closestDraggable(t.target);o&&(this._dispatchEvent(t,"mousemove",t.target)||this._dispatchEvent(t,"mousedown",t.target)||(this._dragSource=o,this._ptDown=this._getPoint(t),this._lastTouch=t,t.preventDefault(),setTimeout(function(){n._dragSource==o&&null==n._img&&n._dispatchEvent(t,"contextmenu",o)&&n._reset()},e._CTXMENU)))}},e.prototype._touchmove=function(t){if(this._shouldHandle(t)){var n=this._getTarget(t);if(this._dragSource&&!this._img)this._getDelta(t)>e._THRESHOLD&&(this._dispatchEvent(t,"dragstart",this._dragSource),this._createImage(t),this._dispatchEvent(t,"dragenter",n));if(this._img&&(this._lastTouch=t,t.preventDefault(),n!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(t,"dragenter",n),this._lastTarget=n),this._moveImage(t),this._dispatchEvent(t,"dragover",n)),this._dispatchEvent(t,"mousemove",n))return this._lastTouch=t,void t.preventDefault()}},e.prototype._touchend=function(e){if(this._shouldHandle(e)){if(this._destroyImage(),this._dragSource)return e.type.indexOf("cancel")<0&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset(),void e.preventDefault();if(this._dispatchEvent(this._lastTouch,"mouseup",e.target))return void e.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",e.target),this._lastClick=Date.now())}},e.prototype._shouldHandle=function(e){return e&&!e.defaultPrevented&&e.touches&&e.touches.length<2},e.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._dataTransfer=new t},e.prototype._getPoint=function(e,t){return e&&e.touches&&(e=e.touches[0]),{x:t?e.pageX:e.clientX,y:t?e.pageY:e.clientY}},e.prototype._getDelta=function(e){var t=this._getPoint(e);return Math.abs(t.x-this._ptDown.x)+Math.abs(t.y-this._ptDown.y)},e.prototype._getTarget=function(e){var t=this._getPoint(e),n=document.elementFromPoint(t.x,t.y);if(n&&"IFRAME"===n.nodeName)try{var o=n.contentWindow.document,i={x:0,y:0};do{i.x+=n.offsetLeft||0,i.y+=n.offsetTop||0,n=n.offsetParent}while(n);var r=t.x-i.x,s=t.y-i.y;n=o.elementFromPoint(r,s)}catch(e){}for(;n&&"none"==getComputedStyle(n).pointerEvents;)n=n.parentElement;return n},e.prototype._createImage=function(t){this._img&&this._destroyImage();var n=this._imgCustom||this._dragSource;if(this._img=n.cloneNode(!0),this._copyStyle(n,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var o=n.getBoundingClientRect(),i=this._getPoint(t);this._imgOffset={x:i.x-o.left,y:i.y-o.top},this._img.style.opacity=e._OPACITY.toString()}this._moveImage(t),document.body.appendChild(this._img)},e.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},e.prototype._moveImage=function(e){var t=this;requestAnimationFrame(function(){if(t._img){var n=t._getPoint(e,!0),o=t._img.style;o.position="absolute",o.pointerEvents="none",o.zIndex="999999",o.left=Math.round(n.x-t._imgOffset.x)+"px",o.top=Math.round(n.y-t._imgOffset.y)+"px"}})},e.prototype._copyProps=function(e,t,n){for(var o=0;o<n.length;o++){var i=n[o];e[i]=t[i]}},e.prototype._copyStyle=function(t,n){if(e._rmvAtts.forEach(function(e){n.removeAttribute(e)}),t instanceof HTMLCanvasElement){var o=t,i=n;i.width=o.width,i.height=o.height,i.getContext("2d").drawImage(o,0,0)}for(var r=getComputedStyle(t),s=0;s<r.length;s++){var a=r[s];a.indexOf("transition")<0&&(n.style[a]=r[a])}n.style.pointerEvents="none";for(s=0;s<t.children.length;s++)this._copyStyle(t.children[s],n.children[s])},e.prototype._dispatchEvent=function(t,n,o){if(t&&o){var i=document.createEvent("Event"),r=t.touches?t.touches[0]:t;return i.initEvent(n,!0,!0),i.button=0,i.which=i.buttons=1,this._copyProps(i,t,e._kbdProps),this._copyProps(i,r,e._ptProps),i.dataTransfer=this._dataTransfer,o.dispatchEvent(i),i.defaultPrevented}return!1},e.prototype._closestDraggable=function(e){for(;e;e=e.parentElement)if(e.hasAttribute("draggable")&&e.draggable)return e;return null},e}();n._instance=new n,n._THRESHOLD=5,n._OPACITY=.5,n._DBLCLICK=500,n._CTXMENU=900,n._rmvAtts="id,class,style,draggable".split(","),n._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),n._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),e.DragDropTouch=n}(e||(e={}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){!function(){var e,t,n,i=0,r=!1,s=navigator.userAgent,a=["touchstart","touchmove","touchend","touchcancel","touchleave"],c={};function u(){var e=[];this.touchList=e,this.Touch=function(e,t,n,o,i,r,s,a){this.identifier=e,this.target=t,this.screenX=n,this.screenY=o,this.clientX=i,this.clientY=r,this.pageX=s,this.pageY=a},this.getTouch=function(t){var n;for(n=0;n<e.length;n+=1)if(e[n].identifier===t)return e[n]},this.addUpdateTouch=function(t){var n;for(n=0;n<e.length;n+=1)if(e[n].identifier===t.identifier)return void(e[n]=t);e.push(t)},this.removeTouch=function(t){var n;for(n=0;n<e.length;n+=1)e[n].identifier===t&&e.splice(n,1)},this.clearTouches=function(){for(;e.length>0;)e.pop()},this.containsTouchAt=function(t,n){var o;for(o=0;o<e.length;o+=1)if(e[o].screenX===t&&e[o].screenY===n)return!0;return!1}}function d(e,t){return e.screenX===t.screenX&&e.screenY===t.screenY}function h(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}function l(o,r,s,a,c){var u,l,p;function f(e,t){var o,i;for(n.clearTouches(),o=0;o<t.length;o++)(i=t[o]).target.isSameNode(e)&&n.addUpdateTouch(i)}"pointerdown"!==o.type&&(l=e.getTouch(o.pointerId),p=l.target,o.target=p),(u="pointerdown"===o.type||"pointermove"===o.type?function(o){var r,s,a;if(T("touch!"),"pointerdown"===o.type)r="touchstart";else{if("pointermove"!==o.type)throw new Error("touchHandler received invalid event type: "+r+". Valid event types are pointerdown and pointermove");r="touchmove"}return T(r),s=new e.Touch(o.pointerId,"pointerdown"===o.type?o.target:p,o.screenX,o.screenY,o.clientX,o.clientY,o.pageX,o.pageY),o.hwTimestamp>i&&function(){var n,o,i,r,s;for(o=t.touchList,n=0;n<o.length;n+=1)s=(i=o[n]).identifier,(r=e.getTouch(s))&&!d(r,i)||t.removeTouch(s)}(),T("generating touch cloned"),e.addUpdateTouch(s),t.addUpdateTouch(s),f(s.target,e.touchList),o.type=r,(a=new h(r,{bubbles:!0,cancelable:!0})).touches=e.touchList,a.changedTouches=t.touchList,a.targetTouches=n.touchList,a.type=r,a}(o):function(o){var r,s,a;return T("touchchanged!"),o.changedTouches=[],o.changedTouches.length=1,o.changedTouches[0]=o,o.changedTouches[0].identifier=o.pointerId,"pointerup"===o.type?r="touchend":"pointercancel"===o.type?r="touchcancel":"pointerleave"===o.type&&(r="touchleave"),s=new e.Touch(o.pointerId,p,o.screenX,o.screenY,o.clientX,o.clientY,o.pageX,o.pageY),o.hwTimestamp>i&&t.clearTouches(),e.removeTouch(s.identifier),t.addUpdateTouch(s),f(s.target,e.touchList),o.type=r,(a=new h(r,{bubbles:!0,cancelable:!0})).touches=e.touchList,a.changedTouches=t.touchList,a.targetTouches=n.touchList,a.type=r,a}(o)).preventDefault=function(){void 0!==o.preventDefault&&o.preventDefault()},T("dispatching!"),o.target.dispatchEvent(u),i=event.hwTimestamp}function p(e,t,n,o,i,r){l(t)}function f(e,t,n){var o,i;if(T("setTouchAware "+n+" "+t),e.__handJobjsGlobalRegisteredEvents||(e.__handJobjsGlobalRegisteredEvents=[]),n){if(void 0!==e.__handJobjsGlobalRegisteredEvents[t])return void(e.__handJobjsGlobalRegisteredEvents[t]+=1);e.__handJobjsGlobalRegisteredEvents[t]=1,T(e.__handJobjsGlobalRegisteredEvents[t])}else void 0!==e.__handJobjsGlobalRegisteredEvents[t]&&(e.__handJobjsGlobalRegisteredEvents[t]-=1,e.__handJobjsGlobalRegisteredEvents[t]<0&&(e.__handJobjsGlobalRegisteredEvents[t]=0));o=l,void 0!==e["on"+(i=function(e){return e}(t)).toLowerCase()]&&function(e,t,n,o){if(T("registerOrUnregisterEvent"),void 0===e.__handJobjsRegisteredEvents&&(e.__handJobjsRegisteredEvents=[]),o){if(void 0!==e.__handJobjsRegisteredEvents[t])return void(e.__handJobjsRegisteredEvents[t]+=1);e.__handJobjsRegisteredEvents[t]=1,T("adding event "+t),e.addEventListener(t,n,!1)}else{if(-1!==e.__handJobjsRegisteredEvents.indexOf(t)&&(e.__handJobjsRegisteredEvents[t]-=1,0!==e.__handJobjsRegisteredEvents[t]))return;T("removing event"),e.removeEventListener(t,n),e.__handJobjsRegisteredEvents[t]=0}}(e,i,function(e){o(e,t)},n)}function v(e){var t=e.prototype?e.prototype.addEventListener:e.addEventListener;function n(e,n,o){T("customAddEventListener"),T(e),-1!==a.indexOf(e)&&(T("setting touch aware..."),f(this,e,!0)),t.call(this,e,n,o)}T("intercepting add event listener!"),T(e),e.prototype?e.prototype.addEventListener=n:e.addEventListener=n}function g(e,t){T("handle other event"),e.preventManipulation&&e.preventManipulation(),l(touchPoint)}function _(e){var t=e.prototype?e.prototype.removeEventListener:e.removeEventListener;function n(e,n,o){-1!==a.indexOf(e)&&function(e,t){if(void 0===e.ontouchdown&&void 0!==e.ontouchstart)switch(t.toLowerCase()){case"touchstart":e.removeEventListener("pointerdown",function(e){g(e)});break;case"touchmove":e.removeEventListener("pointermove",function(e){g(e)});break;case"touchend":e.removeEventListener("pointerup",function(e){g(e)});break;case"touchcancel":e.removeEventListener("pointercancel",function(e){g(e)})}}(this,e),t.call(this,e,n,o)}e.prototype?e.prototype.removeEventListener=n:e.removeEventListener=n}function m(e,t){return T("checkEventRegistration"),e.__handJobjsGlobalRegisteredEvents&&e.__handJobjsGlobalRegisteredEvents[t]}function y(e,t,n,o,i,r){T("generateTouchEventProxyIfRegistered"),function(e,t){for(T("findEventRegisteredNode");e&&!m(e,t);)e=e.parentNode;return e||(m(window,t)?window:void 0)}(n,e)&&p(0,t)}function E(e){var t=[];if(e)for(t.unshift(e);e.parentNode;)t.unshift(e.parentNode),e=e.parentNode;return t}function b(e,t){for(var n=E(e),o=E(t),i=null;n.length>0&&n[0]===o.shift();)i=n.shift();return i}function T(e){r&&console.log(e.toString())}h.prototype=window.Event.prototype,"object"!==o(window.ontouchstart)&&(s.match(/iPad/i)||s.match(/iPhone/i)||s.match(/iPod/i)||s.match(/Android/i)||s.match(/MSIE/i)&&!s.match(/Touch/i)||(function(){var e="html { -ms-touch-action: none; }",t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)}(),e=new u,t=new u,n=new u,window.CustomEvent=h,v(window),v(window.HTMLElement||window.Element),v(document),v(HTMLBodyElement),v(HTMLDivElement),v(HTMLImageElement),v(HTMLUListElement),v(HTMLAnchorElement),v(HTMLLIElement),v(HTMLTableElement),window.HTMLSpanElement&&v(HTMLSpanElement),window.HTMLCanvasElement&&v(HTMLCanvasElement),window.SVGElement&&v(SVGElement),_(window),_(window.HTMLElement||window.Element),_(document),_(HTMLBodyElement),_(HTMLDivElement),_(HTMLImageElement),_(HTMLUListElement),_(HTMLAnchorElement),_(HTMLLIElement),_(HTMLTableElement),window.HTMLSpanElement&&_(HTMLSpanElement),window.HTMLCanvasElement&&_(HTMLCanvasElement),window.SVGElement&&_(SVGElement),function(){function t(e){return"mouse"===e.pointerType||("pointerdown"===e.type&&0===e.x&&0===e.y||"pen"===e.pointerType&&0===e.pressure&&"pointermove"===e.type)}window.addEventListener("pointerdown",function(e){T("pointerdownfired");var n=e;t(e)||(c[n.identifier]=n.target,y("touchenter",n,n.target),function(e,t,n){T("dispatchPointerEnter");for(var o=b(e,t),i=e,r=[];i&&i!==o;)m(i,"touchenter")&&r.push(i),i=i.parentNode;for(;r.length>0;)n(r.pop())}(n.target,null,function(e){p(0,n)}),y("touchstart",n,n.target))}),window.addEventListener("pointerup",function(e){var n=e,o=c[n.identifier];T("pointer up fired"),t(e)||(y("touchend",n,o),y("touchleave",n,o),function(e,t,n){T("dispatchPointerLeave");for(var o=b(e,t),i=e;i&&i!==o;)m(i,"touchleave")&&n(i),i=i.parentNode}(o,null,function(e){p(0,n)}))}),window.addEventListener("pointermove",function(n){var o=n,i=c[o.identifier];T("pointer move fired"),t(n)||(T("x: "+n.screenX+", y: "+n.screenY),e.containsTouchAt(n.screenX,n.screenY)||(i&&!0===function(e){for(;e&&!e.handJobjs_forcePreventDefault;)e=e.parentNode;return!!e||window.handJobjs_forcePreventDefault}(i)&&n.preventDefault(),y("touchmove",o,i)))})}()))}()}}])});