import"./Sidebar.astro_astro_type_script_index_0_lang.xm2ZZZKq.js";import{__tla as v}from"./MenuContainer.astro_astro_type_script_index_0_lang.BS3NrwYe.js";import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{__tla as x}from"./astro/assets-service.Da9pL5MS.js";import{__tla as w}from"./constant.BZhQq30y.js";import"./index.CTbVEFV3.js";let S=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return w}catch{}})()]).then(async()=>{function u(){let o=new URL(window.location.href).searchParams.get("source");o&&(o=o.replace(/_/g,"/"));const t=document.querySelector("#back-btn a");t&&(t.onclick=r=>{r.preventDefault();const n=new URLSearchParams(window.location.search);n.delete("source");let c="";o&&o!=="undefined"?c=`/${o}/`:c="/";const s=`${c}${n.toString()?`?${n.toString()}`:""}`;window.location.href=s})}function m(){const o=document.getElementById("toggle-btn");o&&(o.onclick=t=>{t.preventDefault();const r=document.querySelector(".right-sidebar-container"),n=document.querySelectorAll(".content-panel-wrapper .sl-container"),c=document.querySelector("#toggle-btn .right_caret");r.classList.contains("collapsed")?(r.classList.remove("collapsed"),c.classList.remove("rotate"),n.forEach(s=>{s.classList.remove("max-unfold"),s.classList.add("max-fold")})):(r.classList.add("collapsed"),c.classList.add("rotate"),n.forEach(s=>{s.classList.remove("max-fold"),s.classList.add("max-unfold")}))})}document.addEventListener("astro:page-load",m),document.addEventListener("DOMContentLoaded",m),document.addEventListener("astro:page-load",u),document.addEventListener("DOMContentLoaded",u);const E="_top";class h extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],r=e=>{if(e instanceof HTMLHeadingElement){if(e.id===E)return!0;const l=e.tagName[1];if(l){const a=parseInt(l,10);if(a>=this.minH&&a<=this.maxH)return!0}}return!1},n=e=>{if(!e)return null;const l=e;for(;e;){if(r(e))return e;for(e=e.previousElementSibling;e!=null&&e.lastElementChild;)e=e.lastElementChild;const a=n(e);if(a)return a}return n(l.parentElement)},c=e=>{for(const{isIntersecting:l,target:a}of e){if(!l)continue;const f=n(a);if(!f)continue;const g=t.find(b=>b.hash==="#"+encodeURIComponent(f.id));if(g){this.current=g;break}}},s=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const d=()=>{i&&i.disconnect(),i=new IntersectionObserver(c,{rootMargin:this.getRootMargin()}),s.forEach(e=>i.observe(e))};d();const _=window.requestIdleCallback||(e=>setTimeout(e,1));let p;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(p),p=setTimeout(()=>_(d),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var i,d;const t=((i=document.querySelector("header"))==null?void 0:i.getBoundingClientRect().height)||0,r=((d=this.querySelector("summary"))==null?void 0:d.getBoundingClientRect().height)||0,n=t+r+32,c=n+53,s=document.documentElement.clientHeight;return`-${n}px 0% ${c-s}px`}}customElements.define("starlight-toc",h);class y extends h{set current(t){super.current=t;const r=this.querySelector(".display-current");r&&(r.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const r=()=>{t.open=!1};t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",r)}),window.addEventListener("click",n=>{t.contains(n.target)||r()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&t.open){const c=t.contains(document.activeElement);if(r(),c){const s=t.querySelector("summary");s&&s.focus()}}})}}customElements.define("mobile-starlight-toc",y);class L extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",r=>this.closeOnEscape(r))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",L)});export{S as __tla};
