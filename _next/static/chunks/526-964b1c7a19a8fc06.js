(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{83522:function(){},30017:function(e,t,n){"use strict";n.d(t,{ZP:function(){return e2}});var r,l,i,o,a=n(2265);let u="carousel",c="controller",s="portal",d="toolbar",f="loading",v="error",h="complete",p=e=>`active-slide-${e}`;p(f),p("playing"),p(v),p(h);let m="flex_center",g="no_scroll_padding",E="prev",b="next",w="swipe",y="close",x="onPointerDown",M="onPointerMove",N="onPointerUp",C="onPointerLeave",P="onPointerCancel",L="onKeyDown",k="onWheel",I="icon",S="contain",R="cover";var _=n(54887);let A="yarl__";function O(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...t].filter(Boolean).join(" ")}function W(e){return"".concat(A).concat(e)}function D(e){return"--".concat(A).concat(e)}function T(e,t){return"".concat(e).concat(t?"_".concat(t):"")}function U(e){return t=>T(e,t)}function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return()=>{t.forEach(e=>{e()})}}function X(e,t,n){return()=>{let r=a.useContext(n);if(!r)throw Error("".concat(e," must be used within a ").concat(t,".Provider"));return r}}function B(){return"undefined"!=typeof window}function z(e){return void 0===e.type||"image"===e.type}function H(e){return"string"==typeof e?Number.parseInt(e,10):e}function K(e){if("number"==typeof e)return{pixel:e};if("string"==typeof e){let t=H(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function V(e,t){var n;return e[(n=e.length)>0?(t%n+n)%n:0]}function Y(e,t){return e.length>0?V(e,t):void 0}let j=Number(a.version.split(".")[0])>=19,q={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[y]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:S,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Z(e,t){return{name:e,component:t}}function $(e,t){return{module:e,children:t}}function G(e,t,n){return e.flatMap(e=>{var r;return null!==(r=function e(t,n,r){return t.module.name===n?r(t):t.children?[$(t.module,t.children.flatMap(t=>{var l;return null!==(l=e(t,n,r))&&void 0!==l?l:[]}))]:[t]}(e,t,n))&&void 0!==r?r:[]})}let J=a.createContext(null),Q=X("useDocument","DocumentContext",J);function ee(e){let{nodeRef:t,children:n}=e,r=a.useMemo(()=>{let e=e=>{var n;return(null===(n=e||t.current)||void 0===n?void 0:n.ownerDocument)||document};return{getOwnerDocument:e,getOwnerWindow:t=>{var n;return(null===(n=e(t))||void 0===n?void 0:n.defaultView)||window}}},[t]);return a.createElement(J.Provider,{value:r},n)}let et=a.createContext(null),en=X("useEvents","EventsContext",et);function er(e){let{children:t}=e,[n]=a.useState({});a.useEffect(()=>()=>{Object.keys(n).forEach(e=>delete n[e])},[n]);let r=a.useMemo(()=>{let e=(e,t)=>{var r;null===(r=n[e])||void 0===r||r.splice(0,n[e].length,...n[e].filter(e=>e!==t))};return{publish:function(){for(var e,t=arguments.length,r=Array(t),l=0;l<t;l++)r[l]=arguments[l];let[i,o]=r;null===(e=n[i])||void 0===e||e.forEach(e=>e(o))},subscribe:(t,r)=>(n[t]||(n[t]=[]),n[t].push(r),()=>e(t,r)),unsubscribe:e}},[n]);return a.createElement(et.Provider,{value:r},t)}let el=a.createContext(null),ei=X("useLightboxProps","LightboxPropsContext",el);function eo(e){let{children:t,...n}=e;return a.createElement(el.Provider,{value:n},t)}let ea=a.createContext(null),eu=X("useLightboxState","LightboxStateContext",ea),ec=a.createContext(null),es=X("useLightboxDispatch","LightboxDispatchContext",ec);function ed(e,t){switch(t.type){case"swipe":{var n;let{slides:r}=e,l=(null==t?void 0:t.increment)||0,i=e.globalIndex+l,o=(n=r.length)>0?(i%n+n)%n:0,a=Y(r,o);return{slides:r,currentIndex:o,globalIndex:i,currentSlide:a,animation:l||t.duration?{increment:l,duration:t.duration,easing:t.easing}:void 0}}case"update":if(t.slides!==e.slides||t.index!==e.currentIndex)return{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Y(t.slides,t.index)};return e;default:throw Error("Unknown action type")}}function ef(e){let{slides:t,index:n,children:r}=e,[l,i]=a.useReducer(ed,{slides:t,currentIndex:n,globalIndex:n,currentSlide:Y(t,n)});a.useEffect(()=>{i({type:"update",slides:t,index:n})},[t,n]);let o=a.useMemo(()=>({...l,state:l,dispatch:i}),[l,i]);return a.createElement(ec.Provider,{value:i},a.createElement(ea.Provider,{value:o},r))}let ev=a.createContext(null),eh=X("useTimeouts","TimeoutsContext",ev);function ep(e){let{children:t}=e,[n]=a.useState([]);a.useEffect(()=>()=>{n.forEach(e=>window.clearTimeout(e)),n.splice(0,n.length)},[n]);let r=a.useMemo(()=>{let e=e=>{n.splice(0,n.length,...n.filter(t=>t!==e))};return{setTimeout:(t,r)=>{let l=window.setTimeout(()=>{e(l),t()},r);return n.push(l),l},clearTimeout:t=>{void 0!==t&&(e(t),window.clearTimeout(t))}}},[n]);return a.createElement(ev.Provider,{value:r},t)}let em=a.forwardRef(function(e,t){var n;let{label:r,className:l,icon:i,renderIcon:o,onClick:u,style:c,...s}=e,{styles:d,labels:f}=ei(),v=null!==(n=null==f?void 0:f[r])&&void 0!==n?n:r;return a.createElement("button",{ref:t,type:"button",title:v,"aria-label":v,className:O(W("button"),l),onClick:u,style:{...c,...d.button},...s},o?o():a.createElement(i,{className:W(I),style:d.icon}))});function eg(e,t){return function(e,t){let n=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...e},t);return n.displayName=e,n}(e,a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}let eE=eg("Close",a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),eb=eg("Previous",a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),ew=eg("Next",a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),ey=eg("Loading",a.createElement(a.Fragment,null,Array.from({length:8}).map((e,t,n)=>a.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:"rotate(".concat(360/n.length*t,", 12, 12)")})))),ex=eg("Error",a.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),eM=B()?a.useLayoutEffect:a.useEffect;function eN(){let[e,t]=a.useState(!1);return a.useEffect(()=>{var e,n;let r=null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)");t(null==r?void 0:r.matches);let l=e=>t(e.matches);return null===(n=null==r?void 0:r.addEventListener)||void 0===n||n.call(r,"change",l),()=>{var e;return null===(e=null==r?void 0:r.removeEventListener)||void 0===e?void 0:e.call(r,"change",l)}},[]),e}function eC(e,t){let n=a.useRef(),r=a.useRef(),l=eN();return eM(()=>{var i,o,a;if(e.current&&void 0!==n.current&&!l){let{keyframes:l,duration:u,easing:c,onfinish:s}=t(n.current,e.current.getBoundingClientRect(),function(e){let t=0,n=0,r=0,l=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(l){let e=l[1].split(",").map(H);6===e.length?(t=e[4],n=e[5]):16===e.length&&(t=e[12],n=e[13],r=e[14])}return{x:t,y:n,z:r}}(e.current))||{};if(l&&u){null===(i=r.current)||void 0===i||i.cancel(),r.current=void 0;try{r.current=null===(a=(o=e.current).animate)||void 0===a?void 0:a.call(o,l,{duration:u,easing:c})}catch(e){console.error(e)}r.current&&(r.current.onfinish=()=>{r.current=void 0,null==s||s()})}}n.current=void 0}),{prepareAnimation:e=>{n.current=e},isAnimationPlaying:()=>{var e;return(null===(e=r.current)||void 0===e?void 0:e.playState)==="running"}}}function eP(){let e=a.useRef(null),t=a.useRef(),[n,r]=a.useState();return{setContainerRef:a.useCallback(n=>{e.current=n,t.current&&(t.current.disconnect(),t.current=void 0);let l=()=>{if(n){let e=window.getComputedStyle(n),t=e=>parseFloat(e)||0;r({width:Math.round(n.clientWidth-t(e.paddingLeft)-t(e.paddingRight)),height:Math.round(n.clientHeight-t(e.paddingTop)-t(e.paddingBottom))})}else r(void 0)};l(),n&&"undefined"!=typeof ResizeObserver&&(t.current=new ResizeObserver(l),t.current.observe(n))},[]),containerRef:e,containerRect:n}}function eL(){let e=a.useRef(),{setTimeout:t,clearTimeout:n}=eh();return a.useCallback((r,l)=>{n(e.current),e.current=t(r,l>0?l:0)},[t,n])}function ek(e){let t=a.useRef(e);return eM(()=>{t.current=e}),a.useCallback(function(){for(var e,n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)},[])}function eI(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function eS(e,t){return a.useMemo(()=>null==e&&null==t?null:n=>{eI(e,n),eI(t,n)},[e,t])}function eR(){let[e,t]=a.useState(!1);return eM(()=>{t("rtl"===window.getComputedStyle(window.document.documentElement).direction)},[]),e}function e_(e,t){let n=a.useRef(0),r=eL(),l=ek(function(){for(var t=arguments.length,r=Array(t),l=0;l<t;l++)r[l]=arguments[l];n.current=Date.now(),e(r)});return a.useCallback(function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];r(()=>{l(i)},t-(Date.now()-n.current))},[t,l,r])}let eA=U("slide"),eO=U("slide_image");function eW(e){var t,n,r,l,i,o,u;let{slide:c,offset:s,render:d,rect:m,imageFit:g,imageProps:E,onClick:b,onLoad:w,onError:y,style:x}=e,[M,N]=a.useState(f),{publish:C}=en(),{setTimeout:P}=eh(),L=a.useRef(null);a.useEffect(()=>{0===s&&C(p(M))},[s,M,C]);let k=ek(e=>{("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{e.parentNode&&(N(h),P(()=>{null==w||w(e)},0))})}),_=a.useCallback(e=>{L.current=e,(null==e?void 0:e.complete)&&k(e)},[k]),A=a.useCallback(e=>{k(e.currentTarget)},[k]),D=ek(()=>{N(v),null==y||y()}),T=c.imageFit===R||c.imageFit!==S&&g===R,U=(e,t)=>Number.isFinite(e)?e:t,F=U(Math.max(...(null!==(n=null===(t=c.srcSet)||void 0===t?void 0:t.map(e=>e.width))&&void 0!==n?n:[]).concat(c.width?[c.width]:[]).filter(Boolean)),(null===(r=L.current)||void 0===r?void 0:r.naturalWidth)||0),X=U(Math.max(...(null!==(i=null===(l=c.srcSet)||void 0===l?void 0:l.map(e=>e.height))&&void 0!==i?i:[]).concat(c.height?[c.height]:[]).filter(Boolean)),(null===(o=L.current)||void 0===o?void 0:o.naturalHeight)||0),z=null===(u=c.srcSet)||void 0===u?void 0:u.sort((e,t)=>e.width-t.width).map(e=>"".concat(e.src," ").concat(e.width,"w")).join(", "),H=z&&m&&B()?"".concat(Math.round(Math.min(m&&!T&&c.width&&c.height?m.height/c.height*c.width:Number.MAX_VALUE,m.width)),"px"):void 0,{style:K,className:V,...Y}=E||{};return a.createElement(a.Fragment,null,a.createElement("img",{ref:_,onLoad:A,onError:D,onClick:b,draggable:!1,className:O(W(eO()),T&&W(eO("cover")),M!==h&&W(eO("loading")),V),style:{...F&&X?{maxWidth:"min(".concat(F,"px, 100%)"),maxHeight:"min(".concat(X,"px, 100%)")}:{maxWidth:"100%",maxHeight:"100%"},...x,...K},...Y,alt:c.alt,sizes:H,srcSet:z,src:c.src}),M!==h&&a.createElement("div",{className:W(eA("placeholder"))},M===f&&((null==d?void 0:d.iconLoading)?d.iconLoading():a.createElement(ey,{className:O(W(I),W(eA(f)))})),M===v&&((null==d?void 0:d.iconError)?d.iconError():a.createElement(ex,{className:O(W(I),W(eA(v)))}))))}let eD=a.forwardRef(function(e,t){let{className:n,children:r,...l}=e,i=a.useRef(null);return a.createElement(ee,{nodeRef:i},a.createElement("div",{ref:eS(t,i),className:O(W("root"),n),...l},r))});(r=i||(i={}))[r.NONE=0]="NONE",r[r.SWIPE=1]="SWIPE",r[r.PULL=2]="PULL",r[r.ANIMATION=3]="ANIMATION",(l=o||(o={}))[l.NONE=0]="NONE",l[l.SWIPE=1]="SWIPE",l[l.PULL=2]="PULL";let eT=U("container"),eU=a.createContext(null),eF=X("useController","ControllerContext",eU),eX=Z(c,function(e){var t;let{children:n,...r}=e,{carousel:l,animation:u,controller:c,on:d,styles:f,render:v}=r,{closeOnPullUp:h,closeOnPullDown:p,preventDefaultWheelX:g,preventDefaultWheelY:I}=c,[S,R]=a.useState(),_=eu(),A=es(),[T,U]=a.useState(i.NONE),X=a.useRef(0),B=a.useRef(0),z=a.useRef(1),{registerSensors:H,subscribeSensors:V}=function(){let[e]=a.useState({}),t=a.useCallback((t,n)=>{var r;null===(r=e[t])||void 0===r||r.forEach(e=>{n.isPropagationStopped()||e(n)})},[e]);return{registerSensors:a.useMemo(()=>({onPointerDown:e=>t(x,e),onPointerMove:e=>t(M,e),onPointerUp:e=>t(N,e),onPointerLeave:e=>t(C,e),onPointerCancel:e=>t(P,e),onKeyDown:e=>t(L,e),onKeyUp:e=>t("onKeyUp",e),onWheel:e=>t(k,e)}),[t]),subscribeSensors:a.useCallback((t,n)=>(e[t]||(e[t]=[]),e[t].unshift(n),()=>{let r=e[t];r&&r.splice(0,r.length,...r.filter(e=>e!==n))}),[e])}}(),{subscribe:Y,publish:j}=en(),q=eL(),Z=eL(),$=eL(),{containerRef:G,setContainerRef:J,containerRect:ee}=eP(),et=eS(function(e){let{preventDefaultWheelX:t,preventDefaultWheelY:n}=e,r=a.useRef(null),l=ek(e=>{let r=Math.abs(e.deltaX)>Math.abs(e.deltaY);(r&&t||!r&&n||e.ctrlKey)&&e.preventDefault()});return a.useCallback(e=>{var t;e?e.addEventListener("wheel",l,{passive:!1}):null===(t=r.current)||void 0===t||t.removeEventListener("wheel",l),r.current=e},[l])}({preventDefaultWheelX:g,preventDefaultWheelY:I}),J),er=a.useRef(null),el=eS(er,void 0),{getOwnerDocument:ei}=Q(),eo=eR(),ea=e=>(eo?-1:1)*("number"==typeof e?e:1),ec=ek(()=>{var e;return null===(e=G.current)||void 0===e?void 0:e.focus()}),ed=ek(()=>r),ef=ek(()=>_),ev=a.useCallback(e=>j(E,e),[j]),ep=a.useCallback(e=>j(b,e),[j]),em=a.useCallback(()=>j(y),[j]),eg=e=>!(l.finite&&(ea(e)>0&&0===_.currentIndex||0>ea(e)&&_.currentIndex===_.slides.length-1)),eE=e=>{var t;X.current=e,null===(t=G.current)||void 0===t||t.style.setProperty(D("swipe_offset"),"".concat(Math.round(e),"px"))},eb=e=>{var t,n;B.current=e,z.current=Math.min(Math.max(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=10**t;return Math.round((e+Number.EPSILON)*n)/n}(1-(p&&e>0?e:h&&e<0?-e:0)/60*.5,2),.5),1),null===(t=G.current)||void 0===t||t.style.setProperty(D("pull_offset"),"".concat(Math.round(e),"px")),null===(n=G.current)||void 0===n||n.style.setProperty(D("pull_opacity"),"".concat(z.current))},{prepareAnimation:ew}=eC(er,(e,t,n)=>{if(er.current&&ee)return{keyframes:[{transform:"translate(0, ".concat(e.rect.y-t.y+n.y,"px)"),opacity:e.opacity},{transform:"translate(0, 0)",opacity:1}],duration:e.duration,easing:u.easing.fade}}),ey=(e,t)=>{if(h||p){eb(e);let n=0;er.current&&(n=u.fade*(t?2:1),ew({rect:er.current.getBoundingClientRect(),opacity:z.current,duration:n})),$(()=>{eb(0),U(i.NONE)},n),U(i.ANIMATION),t||em()}},{prepareAnimation:ex,isAnimationPlaying:eM}=eC(er,(e,t,n)=>{var r;if(er.current&&ee&&(null===(r=_.animation)||void 0===r?void 0:r.duration)){let r=K(l.spacing),i=(r.percent?r.percent*ee.width/100:r.pixel)||0;return{keyframes:[{transform:"translate(".concat(ea(_.globalIndex-e.index)*(ee.width+i)+e.rect.x-t.x+n.x,"px, 0)")},{transform:"translate(0, 0)"}],duration:_.animation.duration,easing:_.animation.easing}}}),eN=ek(e=>{var t,n;let r=e.offset||0,l=r?u.swipe:null!==(t=u.navigation)&&void 0!==t?t:u.swipe,o=r||eM()?u.easing.swipe:u.easing.navigation,{direction:a}=e,c=null!==(n=e.count)&&void 0!==n?n:1,s=i.ANIMATION,d=l*c;if(!a){let t=null==ee?void 0:ee.width,n=e.duration||0,i=t?l/t*Math.abs(r):l;0!==c?(n<i?d=d/i*Math.max(n,i/5):t&&(d=l/t*(t-Math.abs(r))),a=ea(r)>0?E:b):d=l/2}let f=0;a===E?eg(ea(1))?f=-c:(s=i.NONE,d=l):a===b&&(eg(ea(-1))?f=c:(s=i.NONE,d=l)),Z(()=>{eE(0),U(i.NONE)},d=Math.round(d)),er.current&&ex({rect:er.current.getBoundingClientRect(),index:_.globalIndex}),U(s),j(w,{type:"swipe",increment:f,duration:d,easing:o})});a.useEffect(()=>{var e,t;(null===(e=_.animation)||void 0===e?void 0:e.increment)&&(null===(t=_.animation)||void 0===t?void 0:t.duration)&&q(()=>A({type:"swipe",increment:0}),_.animation.duration)},[_.animation,A,q]);let eI=[V,eg,(null==ee?void 0:ee.width)||0,u.swipe,()=>U(i.SWIPE),e=>eE(e),(e,t)=>eN({offset:e,duration:t,count:1}),e=>eN({offset:e,count:0})],e_=[()=>{p&&U(i.PULL)},e=>eb(e),e=>ey(e),e=>ey(e,!0)];!function(e,t,n,r,l,i,u,c,s,d,f,v,h,p){var m;let g=a.useRef(0),E=a.useRef([]),b=a.useRef(),w=a.useRef(0),y=a.useRef(o.NONE),L=a.useCallback(e=>{b.current===e.pointerId&&(b.current=void 0,y.current=o.NONE);let t=E.current;t.splice(0,t.length,...t.filter(t=>t.pointerId!==e.pointerId))},[]),k=a.useCallback(e=>{L(e),e.persist(),E.current.push(e)},[L]),I=ek(e=>{k(e)}),S=(e,t)=>d&&e>t||s&&e<-t,R=ek(e=>{if(E.current.find(t=>t.pointerId===e.pointerId)&&b.current===e.pointerId){let e=Date.now()-w.current,t=g.current;y.current===o.SWIPE?Math.abs(t)>.3*n||Math.abs(t)>5&&e<r?u(t,e):c(t):y.current===o.PULL&&(S(t,60)?h(t,e):p(t)),g.current=0,y.current=o.NONE}L(e)}),_=ek(e=>{let n=E.current.find(t=>t.pointerId===e.pointerId);if(n){let r=b.current===e.pointerId;if(0===e.buttons){r&&0!==g.current?R(e):L(n);return}let a=e.clientX-n.clientX,u=e.clientY-n.clientY;if(void 0===b.current){let n=t=>{k(e),b.current=e.pointerId,w.current=Date.now(),y.current=t};Math.abs(a)>Math.abs(u)&&Math.abs(a)>30&&t(a)?(n(o.SWIPE),l()):Math.abs(u)>Math.abs(a)&&S(u,30)&&(n(o.PULL),f())}else r&&(y.current===o.SWIPE?(g.current=a,i(a)):y.current===o.PULL&&(g.current=u,v(u)))}});a.useEffect(()=>F(e(x,I),e(M,_),e(N,R),e(C,R),e(P,R)),[e,I,_,R,m])}(...eI,h,p,...e_),function(e,t,n,r,l,o,u,c,s){let d=a.useRef(0),f=a.useRef(0),v=a.useRef(),h=a.useRef(),p=a.useRef(0),m=a.useRef(),g=a.useRef(0),{setTimeout:E,clearTimeout:b}=eh(),w=a.useCallback(()=>{v.current&&(b(v.current),v.current=void 0)},[b]),y=a.useCallback(()=>{h.current&&(b(h.current),h.current=void 0)},[b]),x=ek(()=>{e!==i.SWIPE&&(d.current=0,g.current=0,w(),y())});a.useEffect(x,[e,x]);let M=ek(e=>{h.current=void 0,d.current===e&&s(d.current)}),N=ek(t=>{if(t.ctrlKey||Math.abs(t.deltaY)>Math.abs(t.deltaX))return;let a=e=>{p.current=e,b(m.current),m.current=e>0?E(()=>{p.current=0,m.current=void 0},300):void 0};if(e===i.NONE){if(Math.abs(t.deltaX)<=1.2*Math.abs(p.current)){a(t.deltaX);return}if(!n(-t.deltaX))return;if(f.current+=t.deltaX,w(),Math.abs(f.current)>30)f.current=0,a(0),g.current=Date.now(),o();else{let e=f.current;v.current=E(()=>{v.current=void 0,e===f.current&&(f.current=0)},l)}}else if(e===i.SWIPE){let e=d.current-t.deltaX;if(e=Math.min(Math.abs(e),r)*Math.sign(e),d.current=e,u(e),y(),Math.abs(e)>.2*r){a(t.deltaX),c(e,Date.now()-g.current);return}h.current=E(()=>M(e),2*l)}else a(t.deltaX)});a.useEffect(()=>t(k,N),[t,N])}(T,...eI);let eA=ek(()=>{c.focus&&ei().querySelector(".".concat(W(s)," .").concat(W(eT())))&&ec()});a.useEffect(eA,[eA]);let eO=ek(()=>{var e;null===(e=d.view)||void 0===e||e.call(d,{index:_.currentIndex})});a.useEffect(eO,[_.globalIndex,eO]),a.useEffect(()=>F(Y(E,e=>eN({direction:E,...e})),Y(b,e=>eN({direction:b,...e})),Y(w,e=>A(e))),[Y,eN,A]);let eW=a.useMemo(()=>({prev:ev,next:ep,close:em,focus:ec,slideRect:ee?function(e,t){let n=K(t),r=void 0!==n.percent?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}(ee,l.padding):{width:0,height:0},containerRect:ee||{width:0,height:0},subscribeSensors:V,containerRef:G,setCarouselRef:el,toolbarWidth:S,setToolbarWidth:R}),[ev,ep,em,ec,V,ee,G,el,S,R,l.padding]);return a.useImperativeHandle(c.ref,()=>({prev:ev,next:ep,close:em,focus:ec,getLightboxProps:ed,getLightboxState:ef}),[ev,ep,em,ec,ed,ef]),a.createElement("div",{ref:et,className:O(W(eT()),W(m)),style:{...T===i.SWIPE?{[D("swipe_offset")]:"".concat(Math.round(X.current),"px")}:null,...T===i.PULL?{[D("pull_offset")]:"".concat(Math.round(B.current),"px"),[D("pull_opacity")]:"".concat(z.current)}:null,..."none"!==c.touchAction?{[D("controller_touch_action")]:c.touchAction}:null,...f.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...H},ee&&a.createElement(eU.Provider,{value:eW},n,null===(t=v.controls)||void 0===t?void 0:t.call(v)))});function eB(e){return T("slide",e)}function ez(e){var t,n,r,l;let i,{slide:o,offset:u}=e,c=a.useRef(null),{currentIndex:s}=eu(),{slideRect:d,close:f,focus:v}=eF(),{render:h,carousel:{imageFit:p,imageProps:g},on:{click:E},controller:{closeOnBackdropClick:b},styles:{slide:w}}=ei(),{getOwnerDocument:y}=Q(),x=0!==u;return a.useEffect(()=>{var e;x&&(null===(e=c.current)||void 0===e?void 0:e.contains(y().activeElement))&&v()},[x,v,y]),a.createElement("div",{ref:c,className:O(W(eB()),!x&&W(eB("current")),W(m)),inert:j?x:x?"":void 0,onClick:e=>{let t=c.current,n=e.target instanceof HTMLElement?e.target:void 0;b&&n&&t&&(n===t||Array.from(t.children).find(e=>e===n)&&n.classList.contains(W("slide_wrapper")))&&f()},style:w},(!(i=null===(t=h.slide)||void 0===t?void 0:t.call(h,{slide:o,offset:u,rect:d}))&&z(o)&&(i=a.createElement(eW,{slide:o,offset:u,render:h,rect:d,imageFit:p,imageProps:g,onClick:x?void 0:()=>null==E?void 0:E({index:s})})),i?a.createElement(a.Fragment,null,null===(n=h.slideHeader)||void 0===n?void 0:n.call(h,{slide:o}),(null!==(r=h.slideContainer)&&void 0!==r?r:e=>{let{children:t}=e;return t})({slide:o,children:i}),null===(l=h.slideFooter)||void 0===l?void 0:l.call(h,{slide:o})):null))}function eH(){let e=ei().styles.slide;return a.createElement("div",{className:W("slide"),style:e})}let eK=Z(u,function(e){let{carousel:t}=e,{slides:n,currentIndex:r,globalIndex:l}=eu(),{setCarouselRef:i}=eF(),o=K(t.spacing),c=K(t.padding),s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}(t,n,1),d=[];if(n.length>0)for(let e=r-s;e<=r+s;e+=1){let i=V(n,e),o=l-r+e,a=t.finite&&(e<0||e>n.length-1);d.push(a?{key:o}:{key:["".concat(o),z(i)?i.src:void 0].filter(Boolean).join("|"),offset:e-r,slide:i})}return a.createElement("div",{ref:i,className:O(W(T(u,void 0)),d.length>0&&W(T(u,"with_slides"))),style:{["".concat(D(T(u,"slides_count")))]:d.length,["".concat(D(T(u,"spacing_px")))]:o.pixel||0,["".concat(D(T(u,"spacing_percent")))]:o.percent||0,["".concat(D(T(u,"padding_px")))]:c.pixel||0,["".concat(D(T(u,"padding_percent")))]:c.percent||0}},d.map(e=>{let{key:t,slide:n,offset:r}=e;return n?a.createElement(ez,{key:t,slide:n,offset:r}):a.createElement(eH,{key:t})}))});function eV(){let{carousel:e}=ei(),{slides:t,currentIndex:n}=eu();return{prevDisabled:0===t.length||e.finite&&0===n,nextDisabled:0===t.length||e.finite&&n===t.length-1}}function eY(e){let{label:t,icon:n,renderIcon:r,action:l,onClick:i,disabled:o,style:u}=e;return a.createElement(em,{label:t,icon:n,renderIcon:r,className:W("navigation_".concat(l)),disabled:o,onClick:i,style:u,...function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.useRef();return eM(()=>{t&&n.current&&(n.current=!1,e())},[t,e]),{onFocus:a.useCallback(()=>{n.current=!0},[]),onBlur:a.useCallback(()=>{n.current=!1},[])}}(eF().focus,o)})}let ej=Z("navigation",function(e){let{render:{buttonPrev:t,buttonNext:n,iconPrev:r,iconNext:l},styles:i}=e,{prev:o,next:u,subscribeSensors:c}=eF(),{prevDisabled:s,nextDisabled:d}=eV();return!function(e){var t;let n=eR(),{publish:r}=en(),{animation:l}=ei(),{prevDisabled:i,nextDisabled:o}=eV(),u=(null!==(t=l.navigation)&&void 0!==t?t:l.swipe)/2,c=e_(()=>r(E),u),s=e_(()=>r(b),u),d=ek(e=>{switch(e.key){case"Escape":r(y);break;case"ArrowLeft":(n?o:i)||(n?s:c)();break;case"ArrowRight":(n?i:o)||(n?c:s)()}});a.useEffect(()=>e(L,d),[e,d])}(c),a.createElement(a.Fragment,null,t?t():a.createElement(eY,{label:"Previous",action:E,icon:eb,renderIcon:r,style:i.navigationPrev,disabled:s,onClick:o}),n?n():a.createElement(eY,{label:"Next",action:b,icon:ew,renderIcon:l,style:i.navigationNext,disabled:d,onClick:u}))}),eq=W("no_scroll"),eZ=W(g);function e$(e,t,n){let r=window.getComputedStyle(e),l=n?"padding-left":"padding-right",i=n?r.paddingLeft:r.paddingRight,o=e.style.getPropertyValue(l);return e.style.setProperty(l,"".concat((H(i)||0)+t,"px")),()=>{o?e.style.setProperty(l,o):e.style.removeProperty(l)}}let eG=Z("no-scroll",function(e){let{noScroll:{disabled:t},children:n}=e,r=eR(),{getOwnerDocument:l,getOwnerWindow:i}=Q();return a.useEffect(()=>{if(t)return()=>{};let e=[],n=i(),{body:o,documentElement:a}=l(),u=Math.round(n.innerWidth-a.clientWidth);if(u>0){e.push(e$(o,u,r));let t=o.getElementsByTagName("*");for(let l=0;l<t.length;l+=1){let i=t[l];"style"in i&&"fixed"===n.getComputedStyle(i).getPropertyValue("position")&&!i.classList.contains(eZ)&&e.push(e$(i,u,r))}}return o.classList.add(eq),()=>{o.classList.remove(eq),e.forEach(e=>e())}},[r,t,l,i]),a.createElement(a.Fragment,null,n)});function eJ(e,t,n){let r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}let eQ=Z(s,function(e){let{children:t,animation:n,styles:r,className:l,on:i,portal:o,close:u}=e,[c,d]=a.useState(!1),[f,v]=a.useState(!1),h=a.useRef([]),p=a.useRef(null),{setTimeout:m}=eh(),{subscribe:E}=en(),b=eN()?0:n.fade;a.useEffect(()=>(d(!0),()=>{d(!1),v(!1)}),[]);let w=ek(()=>{h.current.forEach(e=>e()),h.current=[]}),x=ek(()=>{var e;v(!1),w(),null===(e=i.exiting)||void 0===e||e.call(i),m(()=>{var e;null===(e=i.exited)||void 0===e||e.call(i),u()},b)});a.useEffect(()=>E(y,x),[E,x]);let M=ek(e=>{var t,n,r;e.scrollTop,v(!0),null===(t=i.entering)||void 0===t||t.call(i);let l=null!==(r=null===(n=e.parentNode)||void 0===n?void 0:n.children)&&void 0!==r?r:[];for(let t=0;t<l.length;t+=1){let n=l[t];-1===["TEMPLATE","SCRIPT","STYLE"].indexOf(n.tagName)&&n!==e&&(h.current.push(eJ(n,"inert","")),h.current.push(eJ(n,"aria-hidden","true")))}h.current.push(()=>{var e,t;null===(t=null===(e=p.current)||void 0===e?void 0:e.focus)||void 0===t||t.call(e)}),m(()=>{var e;null===(e=i.entered)||void 0===e||e.call(i)},b)}),N=a.useCallback(e=>{e?M(e):w()},[M,w]);return c?(0,_.createPortal)(a.createElement(eD,{ref:N,className:O(l,W(T(s,void 0)),W(g),f&&W(T(s,"open"))),role:"presentation","aria-live":"polite",style:{...n.fade!==q.animation.fade?{[D("fade_animation_duration")]:"".concat(b,"ms")}:null,...n.easing.fade!==q.animation.easing.fade?{[D("fade_animation_timing_function")]:n.easing.fade}:null,...r.root},onFocus:e=>{p.current||(p.current=e.relatedTarget)}},t),o.root||document.body):null}),e0=Z("root",function(e){let{children:t}=e;return a.createElement(a.Fragment,null,t)}),e1=Z(d,function(e){let{toolbar:{buttons:t},render:{buttonClose:n,iconClose:r},styles:l}=e,{close:i,setToolbarWidth:o}=eF(),{setContainerRef:u,containerRect:c}=eP();eM(()=>{o(null==c?void 0:c.width)},[o,null==c?void 0:c.width]);let s=()=>n?n():a.createElement(em,{key:y,label:"Close",icon:eE,renderIcon:r,onClick:i});return a.createElement("div",{ref:u,style:l.toolbar,className:W(T(d,void 0))},null==t?void 0:t.map(e=>e===y?s():e))});function e2(e){let{carousel:t,animation:n,render:r,toolbar:l,controller:i,noScroll:o,on:u,plugins:s,slides:d,index:f,...v}=e,{animation:h,carousel:p,render:m,toolbar:g,controller:E,noScroll:b,on:w,slides:y,index:x,plugins:M,...N}=q,{config:C,augmentation:P}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e,l=e=>{let t=[...r];for(;t.length>0;){let n=t.pop();if((null==n?void 0:n.module.name)===e)return!0;(null==n?void 0:n.children)&&t.push(...n.children)}return!1},i=(e,t)=>{if(""===e){r=[$(t,r)];return}r=G(r,e,e=>[$(t,[e])])},o=(e,t)=>{r=G(r,e,e=>[$(e.module,[$(t,e.children)])])},a=(e,t,n)=>{r=G(r,e,e=>{var r;return[$(e.module,[...n?[$(t)]:[],...null!==(r=e.children)&&void 0!==r?r:[],...n?[]:[$(t)]])]})},u=(e,t,n)=>{r=G(r,e,e=>[...n?[$(t)]:[],e,...n?[]:[$(t)]])},s=e=>{o(c,e)},d=(e,t)=>{r=G(r,e,e=>[$(t,e.children)])},f=e=>{r=G(r,e,e=>e.children)},v=e=>{n.push(e)};return t.forEach(e=>{e({contains:l,addParent:i,append:o,addChild:a,addSibling:u,addModule:s,replace:d,remove:f,augment:v})}),{config:r,augmentation:e=>n.reduce((e,t)=>t(e),e)}}([$(eQ,[$(eG,[$(eX,[$(eK),$(e1),$(ej)])])])],s||M),L=P({animation:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{easing:n,...r}=e,{easing:l,...i}=t;return{easing:{...n,...l},...r,...i}}(h,n),carousel:{...p,...t},render:{...m,...r},toolbar:{...g,...l},controller:{...E,...i},noScroll:{...b,...o},on:{...w,...u},...N,...v});return L.open?a.createElement(eo,{...L},a.createElement(ef,{slides:d||y,index:H(f||x)},a.createElement(ep,null,a.createElement(er,null,function e(t,n){var r;return a.createElement(t.module.component,{key:t.module.name,...n},null===(r=t.children)||void 0===r?void 0:r.map(t=>e(t,n)))}($(e0,C),L))))):null}}}]);