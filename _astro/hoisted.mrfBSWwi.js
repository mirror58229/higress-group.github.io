import"./Sidebar.astro_astro_type_script_index_0_lang.xm2ZZZKq.js";import"./hoisted.BkPnkal4.js";import"./index.CTbVEFV3.js";function g(){let s=new URL(window.location.href).searchParams.get("source");s&&(s=s.replace(/_/g,"/"));const t=document.querySelector("#back-btn a");t&&(t.onclick=r=>{r.preventDefault();const n=new URLSearchParams(window.location.search);n.delete("source");let i="";s&&s!=="undefined"?i=`/${s}/`:i="/",console.log("======backbtn");const c=`${i}${n.toString()?`?${n.toString()}`:""}`;window.location.href=c})}document.addEventListener("astro:page-load",g),document.addEventListener("DOMContentLoaded",g);class b extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",r=>this.closeOnEscape(r))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",b);const w="_top";class p extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],r=e=>{if(e instanceof HTMLHeadingElement){if(e.id===w)return!0;const d=e.tagName[1];if(d){const a=parseInt(d,10);if(a>=this.minH&&a<=this.maxH)return!0}}return!1},n=e=>{if(!e)return null;const d=e;for(;e;){if(r(e))return e;for(e=e.previousElementSibling;e!=null&&e.lastElementChild;)e=e.lastElementChild;const a=n(e);if(a)return a}return n(d.parentElement)},i=e=>{for(const{isIntersecting:d,target:a}of e){if(!d)continue;const m=n(a);if(!m)continue;const h=t.find(E=>E.hash==="#"+encodeURIComponent(m.id));if(h){this.current=h;break}}},c=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let o;const u=()=>{o&&o.disconnect(),o=new IntersectionObserver(i,{rootMargin:this.getRootMargin()}),c.forEach(e=>o.observe(e))};u();const f=window.requestIdleCallback||(e=>setTimeout(e,1));let l;window.addEventListener("resize",()=>{o&&o.disconnect(),clearTimeout(l),l=setTimeout(()=>f(u),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var o,u;const t=((o=document.querySelector("header"))==null?void 0:o.getBoundingClientRect().height)||0,r=((u=this.querySelector("summary"))==null?void 0:u.getBoundingClientRect().height)||0,n=t+r+32,i=n+53,c=document.documentElement.clientHeight;return`-${n}px 0% ${i-c}px`}}customElements.define("starlight-toc",p);class x extends p{set current(t){super.current=t;const r=this.querySelector(".display-current");r&&(r.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const r=()=>{t.open=!1};t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",r)}),window.addEventListener("click",n=>{t.contains(n.target)||r()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&t.open){const i=t.contains(document.activeElement);if(r(),i){const c=t.querySelector("summary");c&&c.focus()}}})}}customElements.define("mobile-starlight-toc",x);
