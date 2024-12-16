"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(y,w,a)=>{a.d(w,{c:()=>i});var v=a(4261),l=a(1086),c=a(8607);const i=(o,s)=>{let e,t;const u=(r,g,f)=>{if(typeof document>"u")return;const p=document.elementFromPoint(r,g);p&&s(p)&&!p.disabled?p!==e&&(n(),d(p,f)):n()},d=(r,g)=>{e=r,t||(t=e);const f=e;(0,v.w)(()=>f.classList.add("ion-activated")),g()},n=(r=!1)=>{if(!e)return;const g=e;(0,v.w)(()=>g.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>u(r.currentX,r.currentY,l.a),onMove:r=>u(r.currentX,r.currentY,l.b),onEnd:()=>{n(!0),(0,l.h)(),t=void 0}})}},8438:(y,w,a)=>{a.d(w,{g:()=>l});var v=a(8476);const l=()=>{if(void 0!==v.w)return v.w.Capacitor}},5572:(y,w,a)=>{a.d(w,{c:()=>v,i:()=>l});const v=(c,i,o)=>"function"==typeof o?o(c,i):"string"==typeof o?c[o]===i[o]:Array.isArray(i)?i.includes(c):c===i,l=(c,i,o)=>void 0!==c&&(Array.isArray(c)?c.some(s=>v(s,i,o)):v(c,i,o))},3351:(y,w,a)=>{a.d(w,{g:()=>v});const v=(s,e,t,u,d)=>c(s[1],e[1],t[1],u[1],d).map(n=>l(s[0],e[0],t[0],u[0],n)),l=(s,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-s*Math.pow(d-1,3),c=(s,e,t,u,d)=>o((u-=d)-3*(t-=d)+3*(e-=d)-(s-=d),3*t-6*e+3*s,3*e-3*s,s).filter(r=>r>=0&&r<=1),o=(s,e,t,u)=>{if(0===s)return((s,e,t)=>{const u=e*e-4*s*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*s),(-e-Math.sqrt(u))/(2*s)]})(e,t,u);const d=(3*(t/=s)-(e/=s)*e)/3,n=(2*e*e*e-9*e*t+27*(u/=s))/27;if(0===d)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-d),-Math.sqrt(-d)];const r=Math.pow(n/2,2)+Math.pow(d/3,3);if(0===r)return[Math.pow(n/2,.5)-e/3];if(r>0)return[Math.pow(-n/2+Math.sqrt(r),1/3)-Math.pow(n/2+Math.sqrt(r),1/3)-e/3];const g=Math.sqrt(Math.pow(-d/3,3)),f=Math.acos(-n/(2*Math.sqrt(Math.pow(-d/3,3)))),p=2*Math.pow(g,1/3);return[p*Math.cos(f/3)-e/3,p*Math.cos((f+2*Math.PI)/3)-e/3,p*Math.cos((f+4*Math.PI)/3)-e/3]}},7464:(y,w,a)=>{a.d(w,{i:()=>v});const v=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,w,a)=>{a.r(w),a.d(w,{startFocusVisible:()=>i});const v="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=o=>{let s=[],e=!0;const t=o?o.shadowRoot:document,u=o||document.body,d=M=>{s.forEach(_=>_.classList.remove(v)),M.forEach(_=>_.classList.add(v)),s=M},n=()=>{e=!1,d([])},r=M=>{e=c.includes(M.key),e||d([])},g=M=>{if(e&&void 0!==M.composedPath){const _=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(_)}},f=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",r),t.addEventListener("focusin",g),t.addEventListener("focusout",f),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",r),t.removeEventListener("focusin",g),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:d}}},1086:(y,w,a)=>{a.d(w,{I:()=>l,a:()=>e,b:()=>t,c:()=>s,d:()=>d,h:()=>u});var v=a(8438),l=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(l||{});const i={getEngine(){const n=(0,v.g)();if(null!=n&&n.isPluginAvailable("Haptics"))return n.Plugins.Haptics},available(){if(!this.getEngine())return!1;const r=(0,v.g)();return"web"!==(null==r?void 0:r.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(n){const r=this.getEngine();r&&r.impact({style:n.style})},notification(n){const r=this.getEngine();r&&r.notification({type:n.type})},selection(){this.impact({style:l.Light})},selectionStart(){const n=this.getEngine();n&&n.selectionStart()},selectionChanged(){const n=this.getEngine();n&&n.selectionChanged()},selectionEnd(){const n=this.getEngine();n&&n.selectionEnd()}},o=()=>i.available(),s=()=>{o()&&i.selection()},e=()=>{o()&&i.selectionStart()},t=()=>{o()&&i.selectionChanged()},u=()=>{o()&&i.selectionEnd()},d=n=>{o()&&i.impact(n)}},909:(y,w,a)=>{a.d(w,{I:()=>s,a:()=>d,b:()=>o,c:()=>g,d:()=>p,f:()=>n,g:()=>u,i:()=>t,p:()=>f,r:()=>M,s:()=>r});var v=a(467),l=a(4920),c=a(4929);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,t=_=>"ION-CONTENT"===_.tagName,u=function(){var _=(0,v.A)(function*(m){return t(m)?(yield new Promise(E=>(0,l.c)(m,E)),m.getScrollElement()):m});return function(E){return _.apply(this,arguments)}}(),d=_=>_.querySelector(s)||_.querySelector(e),n=_=>_.closest(e),r=(_,m)=>t(_)?_.scrollToTop(m):Promise.resolve(_.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),g=(_,m,E,O)=>t(_)?_.scrollByPoint(m,E,O):Promise.resolve(_.scrollBy({top:E,left:m,behavior:O>0?"smooth":"auto"})),f=_=>(0,c.b)(_,o),p=_=>{if(t(_)){const E=_.scrollY;return _.scrollY=!1,E}return _.style.setProperty("overflow","hidden"),!0},M=(_,m)=>{t(_)?_.scrollY=m:_.style.removeProperty("overflow")}},3992:(y,w,a)=>{a.d(w,{a:()=>v,b:()=>g,c:()=>e,d:()=>f,e:()=>P,f:()=>s,g:()=>p,h:()=>c,i:()=>l,j:()=>h,k:()=>C,l:()=>t,m:()=>n,n:()=>M,o:()=>d,p:()=>o,q:()=>i,r:()=>D,s:()=>L,t:()=>r,u:()=>E,v:()=>O,w:()=>u,x:()=>_,y:()=>m});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,w,a)=>{a.d(w,{c:()=>i,g:()=>o});var v=a(8476),l=a(4920),c=a(4929);const i=(e,t,u)=>{let d,n;if(void 0!==v.w&&"MutationObserver"in v.w){const p=Array.isArray(t)?t:[t];d=new MutationObserver(M=>{for(const _ of M)for(const m of _.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&p.includes(m.slot))return u(),void(0,l.r)(()=>r(m))}),d.observe(e,{childList:!0,subtree:!0})}const r=p=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(_=>{u();for(const m of _)for(const E of m.removedNodes)E.nodeType===Node.ELEMENT_NODE&&E.slot===t&&f()}),n.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},f=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),f()}}},o=(e,t,u)=>{const d=null==e?0:e.toString().length,n=s(d,t);if(void 0===u)return n;try{return u(d,t)}catch(r){return(0,c.a)("Exception in provided `counterFormatter`.",r),n}},s=(e,t)=>`${e} / ${t}`},1622:(y,w,a)=>{a.r(w),a.d(w,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>D,keyboardDidClose:()=>_,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>f,setKeyboardOpen:()=>g,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var v=a(4379);a(8438),a(8476);const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},n=h=>{if(v.K.getEngine())r(h);else{if(!h.visualViewport)return;t=D(h.visualViewport),h.visualViewport.onresize=()=>{O(h),p()||M(h)?g(h):_(h)&&f(h)}}},r=h=>{h.addEventListener("keyboardDidShow",C=>g(h,C)),h.addEventListener("keyboardDidHide",()=>f(h))},g=(h,C)=>{m(h,C),u=!0},f=h=>{E(h),u=!1},p=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=h=>u&&!_(h),_=h=>u&&t.height===h.innerHeight,m=(h,C)=>{const P=new CustomEvent(i,{detail:{keyboardHeight:C?C.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(P)},E=h=>{const C=new CustomEvent(o);h.dispatchEvent(C)},O=h=>{e=Object.assign({},t),t=D(h.visualViewport)},D=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(y,w,a)=>{a.d(w,{K:()=>i,a:()=>c});var v=a(8438),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),c=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(c||{});const i={getEngine(){const o=(0,v.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},4731:(y,w,a)=>{a.d(w,{c:()=>s});var v=a(467),l=a(8476),c=a(4379);const i=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},o=e=>{const t=i(e);return null===t?0:t.clientHeight},s=function(){var e=(0,v.A)(function*(t){let u,d,n,r;const g=function(){var m=(0,v.A)(function*(){const E=yield c.K.getResizeMode(),O=void 0===E?void 0:E.mode;u=()=>{void 0===r&&(r=o(O)),n=!0,f(n,O)},d=()=>{n=!1,f(n,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return m.apply(this,arguments)}}(),f=(m,E)=>{t&&t(m,p(E))},p=m=>{if(0===r||r===o(m))return;const E=i(m);return null!==E?new Promise(O=>{const h=new ResizeObserver(()=>{E.clientHeight===r&&(h.disconnect(),O())});h.observe(E)}):void 0};return yield g(),{init:g,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>n}});return function(u){return e.apply(this,arguments)}}()},7838:(y,w,a)=>{a.d(w,{c:()=>l});var v=a(467);const l=()=>{let c;return{lock:function(){var o=(0,v.A)(function*(){const s=c;let e;return c=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return o.apply(this,arguments)}}()}}},9001:(y,w,a)=>{a.d(w,{c:()=>c});var v=a(8476),l=a(4920);const c=(i,o,s)=>{let e;const t=()=>!(void 0===o()||void 0!==i.label||null===s()),d=()=>{const r=o();if(void 0===r)return;if(!t())return void r.style.removeProperty("width");const g=s().scrollWidth;if(0===g&&null===r.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==e)return;const f=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(d(),f.disconnect(),e=void 0)},{threshold:.01,root:i});f.observe(r)}else r.style.setProperty("width",.75*g+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,w,a)=>{a.d(w,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,i,o)=>{const s=c*i/o-c+"ms",e=2*Math.PI*i/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(c,i,o)=>{const s=i/o,e=c*s-c+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/o-c+"ms"}})}}},7166:(y,w,a)=>{a.r(w),a.d(w,{createSwipeBackGesture:()=>o});var v=a(4920),l=a(7464),c=a(8607);a(1970);const o=(s,e,t,u,d)=>{const n=s.ownerDocument.defaultView;let r=(0,l.i)(s);const f=E=>r?-E.deltaX:E.deltaX;return(0,c.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:E=>(r=(0,l.i)(s),(E=>{const{startX:D}=E;return r?D>=n.innerWidth-50:D<=50})(E)&&e()),onStart:t,onMove:E=>{const D=f(E)/n.innerWidth;u(D)},onEnd:E=>{const O=f(E),D=n.innerWidth,h=O/D,C=(E=>r?-E.velocityX:E.velocityX)(E),P=C>=0&&(C>.2||O>D/2),A=(P?1-h:h)*D;let x=0;if(A>5){const b=A/Math.abs(C);x=Math.min(b,540)}d(P,h<=0?.01:(0,v.j)(0,h,.9999),x)}})}},2935:(y,w,a)=>{a.d(w,{w:()=>v});const v=(i,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(l(t,o))});return e.observe(i,{childList:!0,subtree:!0}),e},l=(i,o)=>{let s;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=c(e.addedNodes[t],o)||s}),s},c=(i,o)=>{if(1!==i.nodeType)return;const s=i;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(t=>t.value===s.value)}},4796:(y,w,a)=>{a.d(w,{u:()=>e});var v=a(467),l=a(7935),c=a(3953),i=a(1182),o=a(8079),s=a(9384);let e=(()=>{var t;class u{constructor(n,r,g){this.auth=n,this.firestore=r,this.router=g}registerUser(n,r,g){this.auth.createUserWithEmailAndPassword(n,r).then(f=>{this.router.navigate(["./login"]);const p=f.user;p&&this.firestore.collection("usuarios").doc(p.uid).set({nombre:g,correo_electronico:n,fecha_registro:new Date}).then(()=>{this.firestore.collection("usuarios").doc(p.uid).collection("inventario").add({nombre_producto:"Producto Ejemplo",cantidad:0,unidad_medida:"unidades",fecha_caducidad:new Date,categoria:"General"})})}).catch(f=>{console.error("Error en el registro:",f)})}loginUser(n,r){var g=this;return(0,v.A)(function*(){try{const f=yield g.auth.signInWithEmailAndPassword(n,r);return g.router.navigate(["./home"]),f}catch(f){throw console.error("Error en el inicio de sesi\xf3n:",f),f}})()}loginWithGoogle(){var n=this;return(0,v.A)(function*(){try{const r=yield n.auth.signInWithPopup(new l.A.auth.GoogleAuthProvider),g=r.user;if(g){const f=n.firestore.collection("usuarios").doc(g.uid),p=yield f.get().toPromise();p&&!p.exists&&(yield f.set({nombre:g.displayName,correo_electronico:g.email,fecha_registro:new Date}),yield f.collection("inventario").add({nombre_producto:"Producto Ejemplo",cantidad:0,unidad_medida:"unidades",fecha_caducidad:new Date,categoria:"General"}))}return n.router.navigate(["./home"]),r}catch(r){throw console.error("Error al iniciar sesi\xf3n con Google:",r),r}})()}logoutUser(){return this.auth.signOut().then(()=>{this.router.navigate(["/login"])})}getCurrentUser(){return this.auth.currentUser}getUserData(n){return this.firestore.collection("usuarios").doc(n).valueChanges()}getInfoUser(){return this.auth.authState}}return(t=u).\u0275fac=function(n){return new(n||t)(c.KVO(i.DS),c.KVO(o.Qe),c.KVO(s.Ix))},t.\u0275prov=c.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),u})()}}]);