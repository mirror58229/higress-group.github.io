import"./Sidebar.astro_astro_type_script_index_0_lang.xm2ZZZKq.js";import{__tla as x}from"./MenuContainer.astro_astro_type_script_index_0_lang.BllU7tnt.js";import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{__tla as w}from"./astro/assets-service.Da9pL5MS.js";import{__tla as S}from"./constant.qZqNTy_-.js";import"./index.CTbVEFV3.js";let q=Promise.all([(()=>{try{return x}catch{}})(),(()=>{try{return w}catch{}})(),(()=>{try{return S}catch{}})()]).then(async()=>{function u(){let o=new URL(window.location.href).searchParams.get("source");o&&(o=o.replace(/_/g,"/"));const t=document.querySelector("#back-btn a");t&&(t.onclick=n=>{n.preventDefault();const r=new URLSearchParams(window.location.search);r.delete("source");let i="";o&&o!=="undefined"?i=`/${o}/`:i="/";const s=`${i}${r.toString()?`?${r.toString()}`:""}`;window.location.href=s})}function m(){const o=document.getElementById("toggle-btn");o&&(o.onclick=t=>{t.preventDefault();const n=document.querySelector(".right-sidebar-container"),r=document.querySelectorAll(".content-panel-wrapper .sl-container"),i=document.querySelector("#toggle-btn .right_caret");n.classList.contains("collapsed")?(n.classList.remove("collapsed"),i.classList.remove("rotate"),r.forEach(s=>{s.classList.remove("max-unfold"),s.classList.add("max-fold")})):(n.classList.add("collapsed"),i.classList.add("rotate"),r.forEach(s=>{s.classList.remove("max-fold"),s.classList.add("max-unfold")}))})}function E(){const o=document.getElementById("toggle-btn"),t=parseFloat(getComputedStyle(document.documentElement).fontSize)*100,n=window.innerWidth;o&&n>t&&o.click()}document.addEventListener("astro:page-load",()=>{m(),E()}),document.addEventListener("DOMContentLoaded",m),document.addEventListener("astro:page-load",u),document.addEventListener("DOMContentLoaded",u);class y extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",y);const L="_top";class h extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],n=e=>{if(e instanceof HTMLHeadingElement){if(e.id===L)return!0;const d=e.tagName[1];if(d){const a=parseInt(d,10);if(a>=this.minH&&a<=this.maxH)return!0}}return!1},r=e=>{if(!e)return null;const d=e;for(;e;){if(n(e))return e;for(e=e.previousElementSibling;e!=null&&e.lastElementChild;)e=e.lastElementChild;const a=r(e);if(a)return a}return r(d.parentElement)},i=e=>{for(const{isIntersecting:d,target:a}of e){if(!d)continue;const g=r(a);if(!g)continue;const f=t.find(v=>v.hash==="#"+encodeURIComponent(g.id));if(f){this.current=f;break}}},s=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let c;const l=()=>{c&&c.disconnect(),c=new IntersectionObserver(i,{rootMargin:this.getRootMargin()}),s.forEach(e=>c.observe(e))};l();const b=window.requestIdleCallback||(e=>setTimeout(e,1));let p;window.addEventListener("resize",()=>{c&&c.disconnect(),clearTimeout(p),p=setTimeout(()=>b(l),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var c,l;const t=((c=document.querySelector("header"))==null?void 0:c.getBoundingClientRect().height)||0,n=((l=this.querySelector("summary"))==null?void 0:l.getBoundingClientRect().height)||0,r=t+n+32,i=r+53,s=document.documentElement.clientHeight;return`-${r}px 0% ${i-s}px`}}customElements.define("starlight-toc",h);class _ extends h{set current(t){super.current=t;const n=this.querySelector(".display-current");n&&(n.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const n=()=>{t.open=!1};t.querySelectorAll("a").forEach(r=>{r.addEventListener("click",n)}),window.addEventListener("click",r=>{t.contains(r.target)||n()}),window.addEventListener("keydown",r=>{if(r.key==="Escape"&&t.open){const i=t.contains(document.activeElement);if(n(),i){const s=t.querySelector("summary");s&&s.focus()}}})}}customElements.define("mobile-starlight-toc",_)});export{q as __tla};
