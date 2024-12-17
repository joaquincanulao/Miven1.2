"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(O,p,a)=>{a.d(p,{c:()=>i});var f=a(4261),l=a(1086),c=a(8607);const i=(n,r)=>{let e,t;const u=(s,m,h)=>{if(typeof document>"u")return;const _=document.elementFromPoint(s,m);_&&r(_)&&!_.disabled?_!==e&&(o(),d(_,h)):o()},d=(s,m)=>{e=s,t||(t=e);const h=e;(0,f.w)(()=>h.classList.add("ion-activated")),m()},o=(s=!1)=>{if(!e)return;const m=e;(0,f.w)(()=>m.classList.remove("ion-activated")),s&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:s=>u(s.currentX,s.currentY,l.a),onMove:s=>u(s.currentX,s.currentY,l.b),onEnd:()=>{o(!0),(0,l.h)(),t=void 0}})}},8438:(O,p,a)=>{a.d(p,{g:()=>l});var f=a(8476);const l=()=>{if(void 0!==f.w)return f.w.Capacitor}},5572:(O,p,a)=>{a.d(p,{c:()=>f,i:()=>l});const f=(c,i,n)=>"function"==typeof n?n(c,i):"string"==typeof n?c[n]===i[n]:Array.isArray(i)?i.includes(c):c===i,l=(c,i,n)=>void 0!==c&&(Array.isArray(c)?c.some(r=>f(r,i,n)):f(c,i,n))},3351:(O,p,a)=>{a.d(p,{g:()=>f});const f=(r,e,t,u,d)=>c(r[1],e[1],t[1],u[1],d).map(o=>l(r[0],e[0],t[0],u[0],o)),l=(r,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-r*Math.pow(d-1,3),c=(r,e,t,u,d)=>n((u-=d)-3*(t-=d)+3*(e-=d)-(r-=d),3*t-6*e+3*r,3*e-3*r,r).filter(s=>s>=0&&s<=1),n=(r,e,t,u)=>{if(0===r)return((r,e,t)=>{const u=e*e-4*r*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*r),(-e-Math.sqrt(u))/(2*r)]})(e,t,u);const d=(3*(t/=r)-(e/=r)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=r))/27;if(0===d)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-d),-Math.sqrt(-d)];const s=Math.pow(o/2,2)+Math.pow(d/3,3);if(0===s)return[Math.pow(o/2,.5)-e/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-e/3];const m=Math.sqrt(Math.pow(-d/3,3)),h=Math.acos(-o/(2*Math.sqrt(Math.pow(-d/3,3)))),_=2*Math.pow(m,1/3);return[_*Math.cos(h/3)-e/3,_*Math.cos((h+2*Math.PI)/3)-e/3,_*Math.cos((h+4*Math.PI)/3)-e/3]}},7464:(O,p,a)=>{a.d(p,{i:()=>f});const f=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(O,p,a)=>{a.r(p),a.d(p,{startFocusVisible:()=>i});const f="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let r=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,d=M=>{r.forEach(g=>g.classList.remove(f)),M.forEach(g=>g.classList.add(f)),r=M},o=()=>{e=!1,d([])},s=M=>{e=c.includes(M.key),e||d([])},m=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));d(g)}},h=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",s),t.addEventListener("focusin",m),t.addEventListener("focusout",h),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",s),t.removeEventListener("focusin",m),t.removeEventListener("focusout",h),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:d}}},1086:(O,p,a)=>{a.d(p,{I:()=>l,a:()=>e,b:()=>t,c:()=>r,d:()=>d,h:()=>u});var f=a(8438),l=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(l||{});const i={getEngine(){const o=(0,f.g)();if(null!=o&&o.isPluginAvailable("Haptics"))return o.Plugins.Haptics},available(){if(!this.getEngine())return!1;const s=(0,f.g)();return"web"!==(null==s?void 0:s.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(o){const s=this.getEngine();s&&s.impact({style:o.style})},notification(o){const s=this.getEngine();s&&s.notification({type:o.type})},selection(){this.impact({style:l.Light})},selectionStart(){const o=this.getEngine();o&&o.selectionStart()},selectionChanged(){const o=this.getEngine();o&&o.selectionChanged()},selectionEnd(){const o=this.getEngine();o&&o.selectionEnd()}},n=()=>i.available(),r=()=>{n()&&i.selection()},e=()=>{n()&&i.selectionStart()},t=()=>{n()&&i.selectionChanged()},u=()=>{n()&&i.selectionEnd()},d=o=>{n()&&i.impact(o)}},909:(O,p,a)=>{a.d(p,{I:()=>r,a:()=>d,b:()=>n,c:()=>m,d:()=>_,f:()=>o,g:()=>u,i:()=>t,p:()=>h,r:()=>M,s:()=>s});var f=a(467),l=a(4920),c=a(4929);const n="ion-content",r=".ion-content-scroll-host",e=`${n}, ${r}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,f.A)(function*(E){return t(E)?(yield new Promise(w=>(0,l.c)(E,w)),E.getScrollElement()):E});return function(w){return g.apply(this,arguments)}}(),d=g=>g.querySelector(r)||g.querySelector(e),o=g=>g.closest(e),s=(g,E)=>t(g)?g.scrollToTop(E):Promise.resolve(g.scrollTo({top:0,left:0,behavior:E>0?"smooth":"auto"})),m=(g,E,w,y)=>t(g)?g.scrollByPoint(E,w,y):Promise.resolve(g.scrollBy({top:w,left:E,behavior:y>0?"smooth":"auto"})),h=g=>(0,c.b)(g,n),_=g=>{if(t(g)){const w=g.scrollY;return g.scrollY=!1,w}return g.style.setProperty("overflow","hidden"),!0},M=(g,E)=>{t(g)?g.scrollY=E:g.style.removeProperty("overflow")}},3992:(O,p,a)=>{a.d(p,{a:()=>f,b:()=>m,c:()=>e,d:()=>h,e:()=>P,f:()=>r,g:()=>_,h:()=>c,i:()=>l,j:()=>v,k:()=>C,l:()=>t,m:()=>o,n:()=>M,o:()=>d,p:()=>n,q:()=>i,r:()=>D,s:()=>L,t:()=>s,u:()=>w,v:()=>y,w:()=>u,x:()=>g,y:()=>E});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(O,p,a)=>{a.d(p,{c:()=>i,g:()=>n});var f=a(8476),l=a(4920),c=a(4929);const i=(e,t,u)=>{let d,o;if(void 0!==f.w&&"MutationObserver"in f.w){const _=Array.isArray(t)?t:[t];d=new MutationObserver(M=>{for(const g of M)for(const E of g.addedNodes)if(E.nodeType===Node.ELEMENT_NODE&&_.includes(E.slot))return u(),void(0,l.r)(()=>s(E))}),d.observe(e,{childList:!0,subtree:!0})}const s=_=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(g=>{u();for(const E of g)for(const w of E.removedNodes)w.nodeType===Node.ELEMENT_NODE&&w.slot===t&&h()}),o.observe(null!==(M=_.parentElement)&&void 0!==M?M:_,{subtree:!0,childList:!0})},h=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),h()}}},n=(e,t,u)=>{const d=null==e?0:e.toString().length,o=r(d,t);if(void 0===u)return o;try{return u(d,t)}catch(s){return(0,c.a)("Exception in provided `counterFormatter`.",s),o}},r=(e,t)=>`${e} / ${t}`},1622:(O,p,a)=>{a.r(p),a.d(p,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>D,keyboardDidClose:()=>g,keyboardDidOpen:()=>_,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>h,setKeyboardOpen:()=>m,startKeyboardAssist:()=>o,trackViewportChanges:()=>y});var f=a(4379);a(8438),a(8476);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},o=v=>{if(f.K.getEngine())s(v);else{if(!v.visualViewport)return;t=D(v.visualViewport),v.visualViewport.onresize=()=>{y(v),_()||M(v)?m(v):g(v)&&h(v)}}},s=v=>{v.addEventListener("keyboardDidShow",C=>m(v,C)),v.addEventListener("keyboardDidHide",()=>h(v))},m=(v,C)=>{E(v,C),u=!0},h=v=>{w(v),u=!1},_=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=v=>u&&!g(v),g=v=>u&&t.height===v.innerHeight,E=(v,C)=>{const P=new CustomEvent(i,{detail:{keyboardHeight:C?C.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(P)},w=v=>{const C=new CustomEvent(n);v.dispatchEvent(C)},y=v=>{e=Object.assign({},t),t=D(v.visualViewport)},D=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(O,p,a)=>{a.d(p,{K:()=>i,a:()=>c});var f=a(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const i={getEngine(){const n=(0,f.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(r=>{if(r.code!==l.Unimplemented)throw r}):Promise.resolve(void 0)}}},4731:(O,p,a)=>{a.d(p,{c:()=>r});var f=a(467),l=a(8476),c=a(4379);const i=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=i(e);return null===t?0:t.clientHeight},r=function(){var e=(0,f.A)(function*(t){let u,d,o,s;const m=function(){var E=(0,f.A)(function*(){const w=yield c.K.getResizeMode(),y=void 0===w?void 0:w.mode;u=()=>{void 0===s&&(s=n(y)),o=!0,h(o,y)},d=()=>{o=!1,h(o,y)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return E.apply(this,arguments)}}(),h=(E,w)=>{t&&t(E,_(w))},_=E=>{if(0===s||s===n(E))return;const w=i(E);return null!==w?new Promise(y=>{const v=new ResizeObserver(()=>{w.clientHeight===s&&(v.disconnect(),y())});v.observe(w)}):void 0};return yield m(),{init:m,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},7838:(O,p,a)=>{a.d(p,{c:()=>l});var f=a(467);const l=()=>{let c;return{lock:function(){var n=(0,f.A)(function*(){const r=c;let e;return c=new Promise(t=>e=t),void 0!==r&&(yield r),e});return function(){return n.apply(this,arguments)}}()}}},9001:(O,p,a)=>{a.d(p,{c:()=>c});var f=a(8476),l=a(4920);const c=(i,n,r)=>{let e;const t=()=>!(void 0===n()||void 0!==i.label||null===r()),d=()=>{const s=n();if(void 0===s)return;if(!t())return void s.style.removeProperty("width");const m=r().scrollWidth;if(0===m&&null===s.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==e)return;const h=e=new IntersectionObserver(_=>{1===_[0].intersectionRatio&&(d(),h.disconnect(),e=void 0)},{threshold:.01,root:i});h.observe(s)}else s.style.setProperty("width",.75*m+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(O,p,a)=>{a.d(p,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,i,n)=>{const r=c*i/n-c+"ms",e=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(c,i,n)=>{const r=i/n,e=c*r-c+"ms",t=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})}}},7166:(O,p,a)=>{a.r(p),a.d(p,{createSwipeBackGesture:()=>n});var f=a(4920),l=a(7464),c=a(8607);a(1970);const n=(r,e,t,u,d)=>{const o=r.ownerDocument.defaultView;let s=(0,l.i)(r);const h=w=>s?-w.deltaX:w.deltaX;return(0,c.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w=>(s=(0,l.i)(r),(w=>{const{startX:D}=w;return s?D>=o.innerWidth-50:D<=50})(w)&&e()),onStart:t,onMove:w=>{const D=h(w)/o.innerWidth;u(D)},onEnd:w=>{const y=h(w),D=o.innerWidth,v=y/D,C=(w=>s?-w.velocityX:w.velocityX)(w),P=C>=0&&(C>.2||y>D/2),A=(P?1-v:v)*D;let b=0;if(A>5){const k=A/Math.abs(C);b=Math.min(k,540)}d(P,v<=0?.01:(0,f.j)(0,v,.9999),b)}})}},2935:(O,p,a)=>{a.d(p,{w:()=>f});const f=(i,n,r)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{r(l(t,n))});return e.observe(i,{childList:!0,subtree:!0}),e},l=(i,n)=>{let r;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)r=c(e.addedNodes[t],n)||r}),r},c=(i,n)=>{if(1!==i.nodeType)return;const r=i;return(r.tagName===n.toUpperCase()?[r]:Array.from(r.querySelectorAll(n))).find(t=>t.value===r.value)}},4796:(O,p,a)=>{a.d(p,{u:()=>t});var f=a(467),l=a(7935),c=a(3146),i=a(4438),n=a(1182),r=a(8079),e=a(9384);let t=(()=>{var u;class d{constructor(s,m,h){this.auth=s,this.firestore=m,this.router=h,this.requestPermission()}registerUser(s,m,h){var _=this;return(0,f.A)(function*(){try{const g=(yield _.auth.createUserWithEmailAndPassword(s,m)).user;if(g){yield _.firestore.collection("usuarios").doc(g.uid).set({nombre:h,correo_electronico:s,fecha_registro:new Date});try{const w=(0,c.dG)(),y=yield(0,c.gf)(w,{vapidKey:"TU_CLAVE_PUBLICA_VAPID"});y?(yield _.firestore.collection("usuarios").doc(g.uid).update({fcmToken:y}),console.log("Token FCM registrado:",y)):console.warn("No se pudo obtener el token FCM.")}catch(w){console.error("Error al registrar el token FCM:",w)}yield _.firestore.collection("usuarios").doc(g.uid).collection("inventario").add({nombre_producto:"Producto Ejemplo",cantidad:0,unidad_medida:"unidades",fecha_caducidad:new Date,categoria:"General"})}_.router.navigate(["./login"])}catch(M){console.error("Error en el registro:",M)}})()}loginUser(s,m){var h=this;return(0,f.A)(function*(){try{const _=yield h.auth.signInWithEmailAndPassword(s,m),M=_.user;return M&&(yield h.registerFCMToken(M.uid)),h.router.navigate(["./home"]),_}catch(_){throw console.error("Error en el inicio de sesi\xf3n:",_),_}})()}loginWithGoogle(){var s=this;return(0,f.A)(function*(){try{const m=yield s.auth.signInWithPopup(new l.A.auth.GoogleAuthProvider),h=m.user;if(h){const _=s.firestore.collection("usuarios").doc(h.uid),M=yield _.get().toPromise();M&&!M.exists&&(yield _.set({nombre:h.displayName,correo_electronico:h.email,fecha_registro:new Date}),yield _.collection("inventario").add({nombre_producto:"Producto Ejemplo",cantidad:0,unidad_medida:"unidades",fecha_caducidad:new Date,categoria:"General"})),yield s.registerFCMToken(h.uid)}return s.router.navigate(["./home"]),m}catch(m){throw console.error("Error al iniciar sesi\xf3n con Google:",m),m}})()}logoutUser(){return this.auth.signOut().then(()=>{this.router.navigate(["/login"])})}getCurrentUser(){return this.auth.currentUser}getUserData(s){return this.firestore.collection("usuarios").doc(s).valueChanges()}getInfoUser(){return this.auth.authState}registerFCMToken(s){var m=this;return(0,f.A)(function*(){try{const h=(0,c.dG)(),_=yield(0,c.gf)(h,{vapidKey:"TU_CLAVE_PUBLICA_VAPID"});_?(yield m.firestore.collection("usuarios").doc(s).update({fcmToken:_}),console.log("Token FCM registrado:",_)):console.log("No se pudo obtener el token.")}catch(h){console.error("Error al registrar el token FCM:",h)}})()}requestPermission(){return(0,f.A)(function*(){try{(0,c.dG)(),yield Notification.requestPermission(),console.log("Permiso de notificaciones concedido.")}catch(s){console.error("Permiso de notificaciones denegado:",s)}})()}}return(u=d).\u0275fac=function(s){return new(s||u)(i.KVO(n.DS),i.KVO(r.Qe),i.KVO(e.Ix))},u.\u0275prov=i.jDH({token:u,factory:u.\u0275fac,providedIn:"root"}),d})()}}]);