import{c as o,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as d,m as h,u as E,__tla as y}from"./constant.DFyrMJVC.js";import{__tla as g}from"./astro/assets-service.Da9pL5MS.js";let e,p,a,n,l,r,t,u=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s='<h2 id="\u4E91\u539F\u751F\u90E8\u7F72">\u4E91\u539F\u751F\u90E8\u7F72</h2>\n<h3 id="\u57FA\u4E8E-helm-\u5B9E\u73B0\u7248\u672C\u5347\u7EA7">\u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7</h3>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ${higress_version} \u7684\u503C\u793A\u4F8B: v1.1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://raw.githubusercontent.com/alibaba/higress/</span><span style="--0:#E1E4E8">${higress_version}</span><span style="--0:#9ECBFF">/helm/core/crds/customresourcedefinitions.gen.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f https://raw.githubusercontent.com/alibaba/higress/${higress_version}/helm/core/crds/customresourcedefinitions.gen.yaml\x7Fhelm repo update\x7Fhelm upgrade higress -n higress-system higress.io/higress"><div></div></button></div></figure></div>\n<h2 id="\u72EC\u7ACB\u90E8\u7F72">\u72EC\u7ACB\u90E8\u7F72</h2>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ${higress_dir} \u4E3A Higress \u72EC\u7ACB\u90E8\u7F72\u7684\u5B89\u88C5\u76EE\u5F55</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"${</span><span style="--0:#E1E4E8">higress_dir</span><span style="--0:#9ECBFF">}"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- &#x22;${higress_dir}&#x22; -u"><div></div></button></div></figure></div>',n={title:"\u7248\u672C\u5347\u7EA7",keywords:["Upgrade"],description:"Higress \u7248\u672C\u5347\u7EA7."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/upgrade.md",t=void 0,r=function(){return`
# \u7248\u672C\u5347\u7EA7

## \u4E91\u539F\u751F\u90E8\u7F72

### \u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7

\`\`\`bash
# \${higress_version} \u7684\u503C\u793A\u4F8B: v1.1.0
kubectl apply -f https://raw.githubusercontent.com/alibaba/higress/\${higress_version}/helm/core/crds/customresourcedefinitions.gen.yaml
helm repo update
helm upgrade higress -n higress-system higress.io/higress
\`\`\`

## \u72EC\u7ACB\u90E8\u7F72

\`\`\`bash
# \${higress_dir} \u4E3A Higress \u72EC\u7ACB\u90E8\u7F72\u7684\u5B89\u88C5\u76EE\u5F55
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "\${higress_dir}" -u
\`\`\`
`},p=function(){return s},l=function(){return[{depth:2,slug:"\u4E91\u539F\u751F\u90E8\u7F72",text:"\u4E91\u539F\u751F\u90E8\u7F72"},{depth:3,slug:"\u57FA\u4E8E-helm-\u5B9E\u73B0\u7248\u672C\u5347\u7EA7",text:"\u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7"},{depth:2,slug:"\u72EC\u7ACB\u90E8\u7F72",text:"\u72EC\u7ACB\u90E8\u7F72"}]},e=o((v,m,F)=>{const{layout:f,...i}=n;return i.file=a,i.url=t,d`${h()}${E(s)}`})});export{e as Content,u as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,r as rawContent,t as url};
