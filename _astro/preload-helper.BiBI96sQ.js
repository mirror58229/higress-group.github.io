const m="modulepreload",p=function(c){return"/"+c},s={},h=function(c,l,f){let i=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),r=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));i=Promise.all(l.map(t=>{if(t=p(t),t in s)return;s[t]=!0;const o=t.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":m,o||(n.as="script",n.crossOrigin=""),n.href=t,r&&n.setAttribute("nonce",r),document.head.appendChild(n),o)return new Promise((d,u)=>{n.addEventListener("load",d),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})}))}return i.then(()=>c()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})};export{h as _};
