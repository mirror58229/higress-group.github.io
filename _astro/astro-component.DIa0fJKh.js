import{A as m,I as l,__tla as y}from"./astro/assets-service.tyfV9CK3.js";let p,_=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function u(t){return!(t.length!==3||!t[0]||typeof t[0]!="object")}function e(t,r,o){var c,s;const a=(s=(c=r==null?void 0:r.split("/").pop())==null?void 0:c.replace(".astro",""))!=null?s:"",n=(...i)=>{if(!u(i))throw new m({...l,message:l.message(a)});return t(...i)};return Object.defineProperty(n,"name",{value:a,writable:!1}),n.isAstroComponentFactory=!0,n.moduleId=r,n.propagation=o,n}function f(t){return e(t.factory,t.moduleId,t.propagation)}p=function(t,r,o){return typeof t=="function"?e(t,r,o):f(t)}});export{_ as __tla,p as c};
