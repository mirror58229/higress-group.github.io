var I=Object.defineProperty;var P=(r,t,n)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var a=(r,t,n)=>P(r,typeof t!="symbol"?t+"":t,n);var g,w,b;import{H as $,i as f,a as x,r as m,m as u,e as S,b as C}from"./index.ZXqh_YvC.js";const p={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:r=>`Invalid arguments passed to${r?` <${r}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."};function F(r){return r.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function E(r,t){if(!t||t.line===void 0||t.column===void 0)return"";const n=F(r).split(`
`).map(s=>s.replace(/\t/g,"  ")),o=[];for(let s=-2;s<=2;s++)n[t.line+s]&&o.push(t.line+s);let e=0;for(const s of o){let c=`> ${s}`;c.length>e&&(e=c.length)}let i="";for(const s of o){const c=s===t.line-1;i+=c?"> ":"  ",i+=`${s+1} | ${n[s]}
`,c&&(i+=`${Array.from({length:e}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return i}class T extends Error{constructor(n,o){const{name:e,title:i,message:s,stack:c,location:v,hint:A,frame:j}=n;super(s,o);a(this,"loc");a(this,"title");a(this,"hint");a(this,"frame");a(this,"type","AstroError");this.title=i,this.name=e,s&&(this.message=s),this.stack=c||this.stack,this.loc=v,this.hint=A,this.frame=j}setLocation(n){this.loc=n}setName(n){this.name=n}setMessage(n){this.message=n}setHint(n){this.hint=n}setFrame(n,o){this.frame=E(n,o)}static is(n){return n.type==="AstroError"}}function k(r){return!(r.length!==3||!r[0]||typeof r[0]!="object")}function h(r,t,n){var i,s;const o=(s=(i=t==null?void 0:t.split("/").pop())==null?void 0:i.replace(".astro",""))!=null?s:"",e=(...c)=>{if(!k(c))throw new T({...p,message:p.message(o)});return r(...c)};return Object.defineProperty(e,"name",{value:o,writable:!1}),e.isAstroComponentFactory=!0,e.moduleId=t,e.propagation=n,e}function D(r){return h(r.factory,r.moduleId,r.propagation)}function H(r,t,n){return typeof r=="function"?h(r,t,n):D(r)}const L=Symbol.for("astro:render");function M(r){return Object.defineProperty(r,L,{value:!0})}function O(){return M({type:"maybe-head"})}const y=Symbol.for("astro:slot-string");class R extends(w=$,g=y,w){constructor(n,o){super(n);a(this,"instructions");a(this,g);this.instructions=o,this[y]=!0}}async function l(r,t){if(f(t)&&(t=await t),t instanceof R)r.write(t);else if(x(t))r.write(t);else if(Array.isArray(t)){const n=t.map(o=>m(e=>l(e,o)));for(const o of n)o&&await o.renderToFinalDestination(r)}else if(typeof t=="function")await l(r,t());else if(typeof t=="string")r.write(u(S(t)));else if(!(!t&&t!==0))if(C(t))await t.render(r);else if(q(t))await t.render(r);else if(N(t))await t.render(r);else if(ArrayBuffer.isView(t))r.write(t);else if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))for await(const n of t)await l(r,n);else r.write(t)}const B=Symbol.for("astro.componentInstance");function N(r){return typeof r=="object"&&!!r[B]}const d=Symbol.for("astro.renderTemplateResult");b=d;class V{constructor(t,n){a(this,b,!0);a(this,"htmlParts");a(this,"expressions");a(this,"error");this.htmlParts=t,this.error=void 0,this.expressions=n.map(o=>f(o)?Promise.resolve(o).catch(e=>{if(!this.error)throw this.error=e,e}):o)}async render(t){const n=this.expressions.map(o=>m(e=>{if(o||o===0)return l(e,o)}));for(let o=0;o<this.htmlParts.length;o++){const e=this.htmlParts[o],i=n[o];t.write(u(e)),i&&await i.renderToFinalDestination(t)}}}function q(r){return typeof r=="object"&&!!r[d]}function z(r,...t){return new V(r,t)}export{H as c,O as m,z as r};
