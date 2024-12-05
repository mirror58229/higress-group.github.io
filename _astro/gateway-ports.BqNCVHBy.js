import{c,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as o,m as E,u as y,__tla as v}from"./constant.BB-vDknj.js";import{__tla as h}from"./astro/assets-service.tyfV9CK3.js";let a,l,e,n,i,r,t,g=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<p>\u8BA9 Gateway \u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3\uFF0C\u9700\u8981\u5728\u5B89\u88C5\u6216\u8005\u5347\u7EA7\u65F6\u5019\u6307\u5B9A\u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3\u3002\u6BD4\u5982\u8C03\u6574 80 \u7AEF\u53E3\u5230 8080\uFF0C443 \u7AEF\u53E3\u5230 8443\u3002</p>
<h2 id="kubernetes-\u5B89\u88C5">Kubernetes \u5B89\u88C5</h2>
<p>helm \u53C2\u6570 values.yaml \u914D\u7F6E\u8C03\u6574\u5982\u4E0B:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">higress-core</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Gateway \u8BBE\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">gateway</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">httpPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">httpsPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http2</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="higress-core:\x7F  # Gateway \u8BBE\u7F6E\x7F  gateway:\x7F    httpPort: 8080\x7F    httpsPort: 8443\x7F  service:\x7F    ports:\x7F    - name: http2\x7F      port: 80\x7F      protocol: TCP\x7F      targetPort: 8080\x7F    - name: https\x7F      port: 443\x7F      protocol: TCP\x7F      targetPort: 8443"><div></div></button></div></figure></div>
<p>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5FEB\u901F\u5B89\u88C5 Higress \u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4F7F\u7528 Helm \u5728 Kubernetes \u96C6\u7FA4\u5B89\u88C5 Higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./values.yaml</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4F7F\u7528 hgctl \u5728 Kubernetes \u96C6\u7FA4\u5B89\u88C5 Higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=k8s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress higress.io/higress  -n higress-system  -f ./values.yaml --create-namespace\x7F  hgctl install --set profile=k8s -f ./values.yaml"><div></div></button></div></figure></div>
<h2 id="docker-\u73AF\u5883\u5B89\u88C5">Docker \u73AF\u5883\u5B89\u88C5</h2>
<p>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5FEB\u901F\u5B89\u88C5 Higress \u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4F7F\u7528 get-higress.sh \u5728 Docker \u73AF\u5883\u5B89\u88C5 Higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--gateway-http-port=8080</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--gateway-https-port=8443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4F7F\u7528 hgctl \u5728 Docker \u73AF\u5883\u5B89\u88C5 Higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=local-docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.httpPort=</span><span style="--0:#79B8FF">8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.httpsPort=</span><span style="--0:#79B8FF">8443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress --gateway-http-port=8080  --gateway-https-port=8443\x7F  hgctl install --set profile=local-docker --set gateway.httpPort=8080 --set gateway.httpsPort=8443"><div></div></button></div></figure></div>`,n={title:"\u4FEE\u6539 Gateway \u76D1\u542C\u7AEF\u53E3",keywords:["ops","config","route","tcp"],description:"\u4ECB\u7ECD\u5982\u4F55\u8BA9 Gateway \u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/tcp-route.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/gateway-ports.md",t=void 0,r=function(){return`\r
# \u4FEE\u6539 Gateway \u76D1\u542C\u7AEF\u53E3\r
\r
\u8BA9 Gateway \u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3\uFF0C\u9700\u8981\u5728\u5B89\u88C5\u6216\u8005\u5347\u7EA7\u65F6\u5019\u6307\u5B9A\u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3\u3002\u6BD4\u5982\u8C03\u6574 80 \u7AEF\u53E3\u5230 8080\uFF0C443 \u7AEF\u53E3\u5230 8443\u3002\r
\r
## Kubernetes \u5B89\u88C5\r
\r
helm \u53C2\u6570 values.yaml \u914D\u7F6E\u8C03\u6574\u5982\u4E0B:\r
\r
\`\`\`yaml\r
higress-core:\r
  # Gateway \u8BBE\u7F6E\r
  gateway:\r
    httpPort: 8080\r
    httpsPort: 8443\r
  service:\r
    ports:\r
    - name: http2\r
      port: 80\r
      protocol: TCP\r
      targetPort: 8080\r
    - name: https\r
      port: 443\r
      protocol: TCP\r
      targetPort: 8443\r
\`\`\`\r
\r
\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5FEB\u901F\u5B89\u88C5 Higress \u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\uFF1A\r
\r
\`\`\`shell\r
  # \u4F7F\u7528 Helm \u5728 Kubernetes \u96C6\u7FA4\u5B89\u88C5 Higress\r
  helm install higress higress.io/higress  -n higress-system  -f ./values.yaml --create-namespace\r
  # \u4F7F\u7528 hgctl \u5728 Kubernetes \u96C6\u7FA4\u5B89\u88C5 Higress\r
  hgctl install --set profile=k8s -f ./values.yaml\r
\`\`\`\r
\r
## Docker \u73AF\u5883\u5B89\u88C5\r
\r
\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5FEB\u901F\u5B89\u88C5 Higress \u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\uFF1A\r
\r
\`\`\`shell\r
  # \u4F7F\u7528 get-higress.sh \u5728 Docker \u73AF\u5883\u5B89\u88C5 Higress\r
  curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress --gateway-http-port=8080  --gateway-https-port=8443\r
  # \u4F7F\u7528 hgctl \u5728 Docker \u73AF\u5883\u5B89\u88C5 Higress\r
  hgctl install --set profile=local-docker --set gateway.httpPort=8080 --set gateway.httpsPort=8443\r
\`\`\`\r
\r
\r
\r
\r
`},l=function(){return s},i=function(){return[{depth:2,slug:"kubernetes-\u5B89\u88C5",text:"Kubernetes \u5B89\u88C5"},{depth:2,slug:"docker-\u73AF\u5883\u5B89\u88C5",text:"Docker \u73AF\u5883\u5B89\u88C5"}]},a=c((F,u,f)=>{const{layout:m,...p}=n;return p.file=e,p.url=t,o`${E()}${y(s)}`})});export{a as Content,g as __tla,l as compiledContent,a as default,e as file,n as frontmatter,i as getHeadings,r as rawContent,t as url};
