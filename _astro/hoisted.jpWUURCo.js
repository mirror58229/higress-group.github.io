var l=Object.defineProperty;var u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var n=(e,t,r)=>u(e,typeof t!="symbol"?t+"":t,r);import{__tla as d}from"./hoisted.C60WK3Kv.js";import{__tla as m}from"./MenuContainer.astro_astro_type_script_index_0_lang.BykBrPun.js";import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{__tla as h}from"./astro/assets-service.BSoMdJpH.js";import{__tla as _}from"./constant.DrzGeSTb.js";import"./index.CTbVEFV3.js";Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{class e extends HTMLElement{constructor(){super()}}customElements.define("use-companies",e);class t extends HTMLElement{constructor(){super();n(this,"cardSolution",null);n(this,"currentInputid");n(this,"flag");this.currentInputid="c0",this.flag=!0}connectedCallback(){var s=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(c){s.selectedLabel(c)})}selectedLabel(s){var c=this,a=s.target.closest("[input-id]"),i=a?a.getAttribute("input-id"):null;if(this.flag&&i&&i!==this.currentInputid){this.currentInputid=i,this.flag=!1,setTimeout(function(){c.flag=!0},200);var o=this.querySelector("input[type=radio]#"+i);o&&!o.checked&&(o.checked=!0)}}}customElements.define("card-solution",t)});
