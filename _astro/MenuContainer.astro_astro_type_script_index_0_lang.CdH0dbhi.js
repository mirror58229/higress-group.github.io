var Dt=Object.defineProperty;var Ct=(w,g,E)=>g in w?Dt(w,g,{enumerable:!0,configurable:!0,writable:!0,value:E}):w[g]=E;var h=(w,g,E)=>Ct(w,typeof g!="symbol"?g+"":g,E);import{_ as _t,__tla as Ot}from"./astro/assets-service.tyfV9CK3.js";import{A as qt,__tla as Rt}from"./constant.B4c9UnlO.js";import{i as Nt}from"./index.CTbVEFV3.js";let Mt=Promise.all([(()=>{try{return Ot}catch{}})(),(()=>{try{return Rt}catch{}})()]).then(async()=>{class w extends HTMLElement{constructor(){super();const e=this.querySelector('[role="tablist"]');this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.tabs.forEach((n,o)=>{n.addEventListener("click",r=>{r.preventDefault();const i=e.querySelector("[aria-selected]");r.currentTarget!==i&&this.switchTab(r.currentTarget,o)}),n.addEventListener("keydown",r=>{const i=this.tabs.indexOf(r.currentTarget),a=r.key==="ArrowLeft"?i-1:r.key==="ArrowRight"?i+1:r.key==="Home"?0:r.key==="End"?this.tabs.length-1:null;a!==null&&this.tabs[a]&&(r.preventDefault(),this.switchTab(this.tabs[a],a))})})}switchTab(e,n){if(!e)return;this.tabs.forEach(r=>{r.removeAttribute("aria-selected"),r.setAttribute("tabindex","-1")}),this.panels.forEach(r=>{r.hidden=!0});const o=this.panels[n];o&&(o.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),e.focus()}}customElements.define("starlight-tabs",w),window.dataLayer=window.dataLayer||[];function g(){dataLayer.push(arguments)}g("js",new Date),g("config","G-YHS75WKFBR"),function(){if(!(window.location.hostname!=="higress.io"&&window.location.hostname!=="higress.cn")){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?4debd66ec73a32e236b30b46d219e2e3";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}(),function(t,e,n,o,r){t[o]=t[o]||[];var i=e.getElementsByTagName(n)[0],a=e.createElement(n);a.async=!0,a.id="beacon-aplus",a.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),a.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",a.crossorigin="anonymous",i.parentNode.insertBefore(a,i)}(window,document,"script","aplus_queue"),function(t){var e=t.createElement("script");e.type="text/javascript",e.async=!0,e.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js",e.onload=function(){window.location.hostname!=="higress.io"&&window.location.hostname!=="higress.cn"||(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"ZAwmfA",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{})])},setTimeout(function(){t.getElementsByTagName("body")[0].appendChild(e)},800)}(document);class E extends HTMLElement{constructor(){super();h(this,"ifscroll");h(this,"handleScroll",()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-neutral/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-neutral/[0.84]")))});this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}}customElements.define("my-layout",E);function N(){const t=document.createElement("script");t.type="text/javascript",t.src="https://g.alicdn.com/cm-design/copilot-booter/0.0.26/copilot-booter.js",t.addEventListener("load",function(){window.CNPilot&&window.CNPilot.mounted({CNPilot_OPEN_SOURCE:["higress.cn","higress.io"],CNPilot_OPEN_SOURCE_API:"https://ai.nacos.io",CNPilot_OPEN_SOURCE_PRODUCT_NAME:"higress",showFloatICON:!0,globalStyle:{top:"0",height:"100vh"},entryIconProps:{"position-type":"updown","icon-hover-text":"\u4E13\u5BB6\u7B54\u7591","icon-style":{color:"red",background:"white",border:"2px solid red",borderRadius:"20px"}},headerProps:{closeIcon:{show:!0},titleText:"AI\u7B54\u7591\u4E13\u5BB6"}})}),document.body.append(t)}N(),document.addEventListener("astro:page-load",function(){window.CNPilot&&window.CNPilot.unmounted(),N()});let D=document.createElement("script");D.src="https://g.alicdn.com/cm-design/mw-vendor/1.6.12/web-animations-next.min.js?spm=defwork.home.0.0.413a5c4bEOqptl&file=web-animations-next.min.js",D.onload=function(){document.getAnimations||(document.getAnimations=window.Element.prototype.getAnimations)},document.head.appendChild(D);const M=t=>{if(!t)return t;const e=t.indexOf("://"),n=t.indexOf("/",e===-1?0:e+3);return n===-1?t:t.substring(0,n)};let A="";class Q extends HTMLElement{constructor(){super(),setTimeout(()=>{A&&A!==window.location.href&&this.initDocSearch(),A=window.location.href},0),window.addEventListener("DOMContentLoaded",this.initDocSearch)}async initDocSearch(){const{default:e}=await _t(async()=>{const{default:o}=await import("./index.Bx7uDySs.js");return{default:o}},[]),n={...qt,container:"sl-doc-search",transformItems(o){if(!o||!o.length)return o;const r=[],i=M(A),a=A.substring(i.length).startsWith("/en");for(const l of o){const d=l.url;if(!d)continue;const u=M(d),c=d.substring(u.length);c.startsWith("/en")===a&&(u===i?r.push(l):r.push(Object.assign({},l,{url:i+c})))}return r}};try{const o=JSON.parse(this.dataset.translations||"{}");Object.assign(n,o)}catch{}e(n)}}customElements.define("sl-doc-search",Q);function tt(t){t.parentNode.style.display="none",window.alertBarClosed=!0}function j(){if(!["/","/en/","/cloud/","/en/cloud/","/news/","/en/news/","/activity","/en/activity","/blog/","/en/blog/","/wuyi/","/en/wuyi/","/plugin/","/en/plugin/"].includes(location.pathname))document.querySelector(".alert-bar")&&(document.querySelector(".alert-bar").style.display="none");else try{const t=document.querySelector(".alert-bar"),e=document.querySelector(".close-button");(window.alertBarClosed||!1)===!0?t.style.display="none":e.addEventListener("click",function(){tt(e)})}catch(t){console.log(t)}}window.addEventListener("DOMContentLoaded",j),document.addEventListener("astro:after-swap",j);class et extends HTMLElement{constructor(){super();const e=this.querySelector("button");e.addEventListener("click",()=>this.toggleExpanded());const n=this.closest("nav");n&&n.addEventListener("keyup",o=>this.closeOnEscape(o,e))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e,n){e.code==="Escape"&&(this.setExpanded(!1),n.focus())}}customElements.define("mobile-menu-button",et);const v="data-astro-transition-persist";function nt(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function ot(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function rt(t){for(const e of Array.from(document.head.children)){const n=at(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function it(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${v}]`)){const o=n.getAttribute(v),r=t.querySelector(`[${v}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&lt(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const st=()=>{const t=document.activeElement;if(t!=null&&t.closest(`[${v}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>C({activeElement:t,start:e,end:n})}return()=>C({activeElement:t})}else return()=>C({activeElement:null})},C=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},at=(t,e)=>{const n=t.getAttribute(v),o=n&&e.head.querySelector(`[${v}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},lt=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},ct=t=>{nt(t),ot(t),rt(t);const e=st();it(t.body,document.body),e()},dt="astro:before-preparation",ut="astro:after-preparation",mt="astro:before-swap",ht="astro:after-swap",ft=t=>document.dispatchEvent(new Event(t));class H extends Event{constructor(n,o,r,i,a,l,d,u,c,s){super(n,o);h(this,"from");h(this,"to");h(this,"direction");h(this,"navigationType");h(this,"sourceElement");h(this,"info");h(this,"newDocument");h(this,"signal");this.from=r,this.to=i,this.direction=a,this.navigationType=l,this.sourceElement=d,this.info=u,this.newDocument=c,this.signal=s,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class pt extends H{constructor(n,o,r,i,a,l,d,u,c,s){super(dt,{cancelable:!0},n,o,r,i,a,l,d,u);h(this,"formData");h(this,"loader");this.formData=c,this.loader=s.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class gt extends H{constructor(n,o){super(mt,void 0,n.from,n.to,n.direction,n.navigationType,n.sourceElement,n.info,n.newDocument,n.signal);h(this,"direction");h(this,"viewTransition");h(this,"swap");this.direction=n.direction,this.viewTransition=o,this.swap=()=>ct(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function wt(t,e,n,o,r,i,a,l,d){const u=new pt(t,e,n,o,r,i,window.document,a,l,d);return document.dispatchEvent(u)&&(await u.loader(),u.defaultPrevented||(ft(ut),u.navigationType!=="traverse"&&_({scrollX,scrollY}))),u}function bt(t,e){const n=new gt(t,e);return document.dispatchEvent(n),n.swap(),n}const yt=history.pushState.bind(history),T=history.replaceState.bind(history),_=t=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...t},""))},O=!!document.startViewTransition,q=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let f,b,P;const U=t=>document.dispatchEvent(new Event(t)),I=()=>U("astro:page-load"),Et=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{var n;let e=document.title||((n=document.querySelector("h1"))==null?void 0:n.textContent)||location.pathname;t.textContent=e},60)},X="data-astro-transition-persist",F="data-astro-transition",R="data-astro-transition-fallback";let k,S=0;history.state?(S=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):q()&&(T({index:S,scrollX,scrollY},""),history.scrollRestoration="manual");async function vt(t,e){var n;try{const o=await fetch(t,e),r=((n=o.headers.get("content-type"))!=null?n:"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:r}}catch{return null}}function $(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function At(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(a=>{o.onload=o.onerror=a});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const B=(t,e,n,o,r)=>{const i=Y(e,t),a=document.title;document.title=o;let l=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const d=history.state;T({...n.state,index:d.index,scrollX:d.scrollX,scrollY:d.scrollY},"",t.href)}else yt({...n.state,index:++S,scrollX:0,scrollY:0},"",t.href);if(document.title=a,P=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),l=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const d=history.state;location.href=t.href,history.state||(T(d,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else l||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function St(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${X}="${n.getAttribute(X)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function V(t,e,n,o,r){async function i(d){function u(m){const p=m.effect;return!p||!(p instanceof KeyframeEffect)||!p.target?!1:window.getComputedStyle(p.target,p.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(R,d);const s=document.getAnimations().filter(m=>!c.includes(m)&&!u(m));return Promise.allSettled(s.map(m=>m.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const a=document.title,l=bt(t,n.viewTransition);B(l.to,l.from,e,a,o),U(ht),r==="animate"&&(!n.transitionSkipped&&!l.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Lt(){return f==null||f.controller.abort(),f={controller:new AbortController}}async function W(t,e,n,o,r){const i=Lt();if(!q()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&_({scrollX,scrollY}),Y(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){B(n,e,o,document.title,r),i===f&&(f=void 0);return}const l=await wt(e,n,t,a,o.sourceElement,o.info,i.controller.signal,o.formData,d);if(l.defaultPrevented||l.signal.aborted){i===f&&(f=void 0),l.signal.aborted||(location.href=n.href);return}async function d(s){var Z,z;const m=s.to.href,p={signal:s.signal};if(s.formData){p.method="POST";const x=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:(Z=s.sourceElement)==null?void 0:Z.closest("form");p.body=((z=x==null?void 0:x.attributes.getNamedItem("enctype"))==null?void 0:z.value)==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const y=await vt(m,p);if(y===null){s.preventDefault();return}if(y.redirected&&(s.to=new URL(y.redirected)),k!=null||(k=new DOMParser),s.newDocument=k.parseFromString(y.html,y.mediaType),s.newDocument.querySelectorAll("noscript").forEach(x=>x.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const L=St(s.newDocument);L.length&&!s.signal.aborted&&await Promise.all(L)}async function u(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const c=await u();if(l.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(F,l.direction),O)c.viewTransition=document.startViewTransition(async()=>await V(l,o,c,r));else{const s=(async()=>{await Promise.resolve(),await V(l,o,c,r,$())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(m=>c.viewTransitionFinished=m),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(R)}}}c.viewTransition.updateCallbackDone.finally(async()=>{await At(),I(),Et()}),c.viewTransition.finished.finally(()=>{c.viewTransition=void 0,c===b&&(b=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(F),document.documentElement.removeAttribute(R)});try{await c.viewTransition.updateCallbackDone}catch(s){const m=s;console.log("[astro]",m.name,m.message,m.stack)}}async function K(t,e){await W("forward",P,new URL(t,location.href),e!=null?e:{})}function xt(t){if(!q()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>S?"forward":"back";S=n,W(o,P,new URL(location.href),{},e)}const G=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&_({scrollX,scrollY})};{if(O||$()!=="none")if(P=new URL(location.href),addEventListener("popstate",xt),addEventListener("load",I),"onscrollend"in window)addEventListener("scrollend",G);else{let t,e,n,o;const r=()=>{var i;if(o!==((i=history.state)==null?void 0:i.index)){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,G();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}function Tt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function J(t){return t.dataset.astroReload!==void 0}(O||Tt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;J(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),K(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{var c,s,m,p;let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||J(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),a=typeof n.method=="string"?n.method:n.getAttribute("method");let l=(s=(c=o==null?void 0:o.getAttribute("formaction"))!=null?c:i)!=null?s:location.pathname;const d=(p=(m=o==null?void 0:o.getAttribute("formmethod"))!=null?m:a)!=null?p:"get";if(d==="dialog"||location.origin!==new URL(l,location.href).origin)return;const u={sourceElement:o!=null?o:n};if(d==="get"){const y=new URLSearchParams(r),L=new URL(l);L.search=y.toString(),l=L.toString()}else u.formData=r;t.preventDefault(),K(l,u)}),Nt({prefetchAll:!0}));class Pt extends HTMLElement{constructor(){super();const e=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");o&&(e==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o.classList).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):e==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)})))}toggleUp(e){e.classList.remove("toggle-trigger-down"),e.classList.add("toggle-trigger-up")}toggleDown(e){e.classList.remove("toggle-trigger-up"),e.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",Pt);class kt extends HTMLElement{constructor(){super();const e=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{e.classList.remove("toggle-dropdown-active"),e.classList.add("toggle-dropdown-notactive")})}}customElements.define("menu-container",kt)});export{Mt as __tla};
