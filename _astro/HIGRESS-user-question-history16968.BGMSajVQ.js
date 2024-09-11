import{c as o,__tla as d}from"./astro-component.cI6d52vQ.js";import{r as c,m as g,u as E,__tla as v}from"./constant.DFyrMJVC.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let e,r,n,a,p,l,i,u=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u600E\u4E48\u7ED9higress\u914D\u7F6E\u57DF\u540D</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u4E3AHigress\u914D\u7F6E\u57DF\u540D\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u914D\u7F6E\u57DF\u540D\u7684\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u4F5C\u4E3AKubernetes ingress\u63A7\u5236\u5668\u7684\u901A\u7528\u77E5\u8BC6\u6765\u89E3\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002\u901A\u5E38\u914D\u7F6E\u57DF\u540D\u6D89\u53CA\u5230Ingress\u8D44\u6E90\u7684\u521B\u5EFA\u548CDNS\u89E3\u6790\u8BBE\u7F6E\u3002\u4E0B\u9762\u6211\u5C06\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5316\u7684\u6307\u5BFC\u601D\u8DEF\uFF1A</p>
<h3 id="\u6B65\u9AA4\u5206\u6790">\u6B65\u9AA4\u5206\u6790</h3>
<h4 id="1-\u521B\u5EFAingress\u8D44\u6E90">1. \u521B\u5EFAIngress\u8D44\u6E90</h4>
<p>\u5728Kubernetes\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFAIngress\u8D44\u6E90\u6765\u5B9A\u4E49\u5916\u90E8\u8BBF\u95EE\u7684\u57DF\u540D\u548C\u8DEF\u5F84\u89C4\u5219\u3002Higress\u4F5C\u4E3AIngress\u63A7\u5236\u5668\uFF0C\u4F1A\u6839\u636E\u8FD9\u4E9B\u89C4\u5219\u6765\u8DEF\u7531\u6D41\u91CF\u5230\u540E\u7AEF\u670D\u52A1\u3002\u8BF7\u53C2\u7167Higress\u6587\u6863\u4E2D\u7684\u76F8\u5173\u90E8\u5206\uFF0C\u786E\u4FDD\u60A8\u7684Ingress\u914D\u7F6E\u7B26\u5408Higress\u7684\u8981\u6C42\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u672C\u7684Ingress YAML\u914D\u7F6E\u793A\u4F8B\uFF0C\u5B83\u5B9A\u4E49\u4E86\u4E00\u4E2A\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6DFB\u52A0Higress\u6240\u9700\u7684\u6CE8\u89E3\uFF0C\u6BD4\u5982\u8DEF\u7531\u7B56\u7565\u7B49</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your.domain.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u60A8\u5E0C\u671B\u914D\u7F6E\u7684\u57DF\u540D</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-service</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u540E\u7AEF\u670D\u52A1\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u540E\u7AEF\u670D\u52A1\u7AEF\u53E3</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: example-ingress\x7F  annotations:\x7F    # \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6DFB\u52A0Higress\u6240\u9700\u7684\u6CE8\u89E3\uFF0C\u6BD4\u5982\u8DEF\u7531\u7B56\u7565\u7B49\x7Fspec:\x7F  rules:\x7F  - host: your.domain.com # \u60A8\u5E0C\u671B\u914D\u7F6E\u7684\u57DF\u540D\x7F    http:\x7F      paths:\x7F      - path: /\x7F        pathType: Prefix\x7F        backend:\x7F          service:\x7F            name: your-service # \u540E\u7AEF\u670D\u52A1\u540D\u79F0\x7F            port:\x7F              number: 80 # \u540E\u7AEF\u670D\u52A1\u7AEF\u53E3"><div></div></button></div></figure></div>
<p>\u6B64\u6B65\u9AA4\u4E2D\uFF0C<code dir="auto">your.domain.com</code>\u662F\u60A8\u60F3\u8981\u7ED1\u5B9A\u7684\u57DF\u540D\uFF0C\u800C<code dir="auto">your-service</code>\u548C\u5BF9\u5E94\u7684\u7AEF\u53E3\u5219\u662FKubernetes\u96C6\u7FA4\u5185\u90E8\u7684\u670D\u52A1\u540D\u548C\u7AEF\u53E3\u3002</p>
<h4 id="2-dns\u89E3\u6790\u8BBE\u7F6E">2. DNS\u89E3\u6790\u8BBE\u7F6E</h4>
<ul>
<li><strong>\u8D2D\u4E70\u5E76\u7BA1\u7406\u57DF\u540D</strong>\uFF1A\u9996\u5148\uFF0C\u60A8\u9700\u8981\u62E5\u6709\u4E00\u4E2A\u57DF\u540D\u3002\u5982\u679C\u60A8\u8FD8\u6CA1\u6709\uFF0C\u8BF7\u4ECE\u57DF\u540D\u6CE8\u518C\u5546\u5904\u8D2D\u4E70\u3002</li>
<li><strong>\u914D\u7F6EDNS\u8BB0\u5F55</strong>\uFF1A\u767B\u5F55\u5230\u60A8\u7684\u57DF\u540D\u63D0\u4F9B\u5546\u7684\u63A7\u5236\u9762\u677F\uFF0C\u4E3A<code dir="auto">your.domain.com</code>\u521B\u5EFA\u4E00\u6761A\u8BB0\u5F55\u6216CNAME\u8BB0\u5F55\u6307\u5411\u60A8\u7684Higress\u7F51\u5173\u6240\u5728\u7684IP\u5730\u5740\u3002\u5982\u679C\u662F\u8D1F\u8F7D\u5747\u8861\u6216\u591A\u8282\u70B9\u90E8\u7F72\uFF0C\u53EF\u80FD\u9700\u8981\u914D\u7F6E\u5230\u8D1F\u8F7D\u5747\u8861\u5668\u7684IP\u3002</li>
</ul>
<h4 id="3-\u786E\u4FDDhigress\u914D\u7F6E\u6B63\u786E">3. \u786E\u4FDDHigress\u914D\u7F6E\u6B63\u786E</h4>
<ul>
<li>\u786E\u8BA4Higress\u5DF2\u7ECF\u6B63\u786E\u5B89\u88C5\u5E76\u914D\u7F6E\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u5916\u90E8\u8BBF\u95EE\u76F8\u5173\u7684\u8BBE\u7F6E\uFF0C\u5982\u76D1\u542C\u7684\u7AEF\u53E3\u3001TLS\u8BC1\u4E66\uFF08\u5982\u679C\u9700\u8981HTTPS\uFF09\u7B49\u3002</li>
<li>\u5982\u679CHigress\u90E8\u7F72\u5728\u4E91\u73AF\u5883\uFF0C\u53EF\u80FD\u8FD8\u9700\u8981\u68C0\u67E5\u4E91\u4F9B\u5E94\u5546\u7684\u7F51\u7EDC\u548C\u5B89\u5168\u7EC4\u8BBE\u7F6E\uFF0C\u786E\u4FDD\u7AEF\u53E3\u5F00\u653E\u4E14\u6D41\u91CF\u80FD\u591F\u6B63\u786E\u8DEF\u7531\u3002</li>
</ul>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<ul>
<li><strong>\u521B\u5EFAIngress\u8D44\u6E90</strong>\u662F\u914D\u7F6E\u57DF\u540D\u7684\u6838\u5FC3\u6B65\u9AA4\uFF0C\u5B83\u5B9A\u4E49\u4E86\u5916\u90E8\u8BBF\u95EE\u7684\u903B\u8F91\u5165\u53E3\u3002</li>
<li><strong>DNS\u89E3\u6790</strong>\u662F\u5C06\u7528\u6237\u8F93\u5165\u7684\u57DF\u540D\u89E3\u6790\u6210\u53EF\u8BBF\u95EE\u7684IP\u5730\u5740\uFF0C\u8FD9\u662F\u4E92\u8054\u7F51\u8BBF\u95EE\u7684\u57FA\u7840\u3002</li>
<li><strong>Higress\u914D\u7F6E\u9A8C\u8BC1</strong>\u786E\u4FDD\u4E86\u6D41\u91CF\u80FD\u591F\u88AB\u6B63\u786E\u63A5\u6536\u5E76\u6309\u9884\u671F\u8DEF\u7531\u5230\u540E\u7AEF\u670D\u52A1\u3002</li>
</ul>
<p>\u8BF7\u6CE8\u610F\uFF0C\u5177\u4F53\u64CD\u4F5C\u65F6\u8FD8\u9700\u7ED3\u5408Higress\u7684\u5B98\u65B9\u6587\u6863\u548C\u60A8\u5B9E\u9645\u7684\u57FA\u7840\u8BBE\u65BD\u60C5\u51B5\u6765\u8C03\u6574\u3002\u7531\u4E8E\u76F4\u63A5\u7684\u914D\u7F6E\u793A\u4F8B\u6216\u7279\u5B9A\u4E8EHigress\u7684\u57DF\u540D\u914D\u7F6E\u8BF4\u660E\u672A\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\u627E\u5230\uFF0C\u4E0A\u8FF0\u6B65\u9AA4\u662F\u57FA\u4E8E\u901A\u7528\u5B9E\u8DF5\u63D0\u51FA\u7684\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress AI \u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u80FD\u5426\u652F\u6301\u6309\u57DF\u540D\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16974" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,a={id:"question-history-16968",title:"\u600E\u4E48\u7ED9higress\u914D\u7F6E\u57DF\u540D",date:"2024-09-11",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u4E3AHigress\u914D\u7F6E\u57DF\u540D\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u914D\u7F6E\u57DF\u540D\u7684\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u4F5C\u4E3AKubernetes ingress\u63A7\u5236\u5668\u7684\u901A\u7528\u77E5\u8BC6\u6765\u89E3\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002\u901A\u5E38\u914D\u7F6E\u57DF\u540D\u6D89\u53CA\u5230Ingress\u8D44\u6E90\u7684\u521B\u5EFA\u548CDNS\u89E3\u6790\u8BBE\u7F6E\u3002\u4E0B\u9762\u6211\u5C06\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5316\u7684\u6307\u5BFC\u601D\u8DEF\uFF1A### \u6B65"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16968.md",i=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u600E\u4E48\u7ED9higress\u914D\u7F6E\u57DF\u540D  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u4E3AHigress\u914D\u7F6E\u57DF\u540D\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u914D\u7F6E\u57DF\u540D\u7684\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u4F5C\u4E3AKubernetes ingress\u63A7\u5236\u5668\u7684\u901A\u7528\u77E5\u8BC6\u6765\u89E3\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002\u901A\u5E38\u914D\u7F6E\u57DF\u540D\u6D89\u53CA\u5230Ingress\u8D44\u6E90\u7684\u521B\u5EFA\u548CDNS\u89E3\u6790\u8BBE\u7F6E\u3002\u4E0B\u9762\u6211\u5C06\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5316\u7684\u6307\u5BFC\u601D\u8DEF\uFF1A

### \u6B65\u9AA4\u5206\u6790

#### 1. \u521B\u5EFAIngress\u8D44\u6E90
\u5728Kubernetes\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFAIngress\u8D44\u6E90\u6765\u5B9A\u4E49\u5916\u90E8\u8BBF\u95EE\u7684\u57DF\u540D\u548C\u8DEF\u5F84\u89C4\u5219\u3002Higress\u4F5C\u4E3AIngress\u63A7\u5236\u5668\uFF0C\u4F1A\u6839\u636E\u8FD9\u4E9B\u89C4\u5219\u6765\u8DEF\u7531\u6D41\u91CF\u5230\u540E\u7AEF\u670D\u52A1\u3002\u8BF7\u53C2\u7167Higress\u6587\u6863\u4E2D\u7684\u76F8\u5173\u90E8\u5206\uFF0C\u786E\u4FDD\u60A8\u7684Ingress\u914D\u7F6E\u7B26\u5408Higress\u7684\u8981\u6C42\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u672C\u7684Ingress YAML\u914D\u7F6E\u793A\u4F8B\uFF0C\u5B83\u5B9A\u4E49\u4E86\u4E00\u4E2A\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\uFF1A

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    # \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6DFB\u52A0Higress\u6240\u9700\u7684\u6CE8\u89E3\uFF0C\u6BD4\u5982\u8DEF\u7531\u7B56\u7565\u7B49
spec:
  rules:
  - host: your.domain.com # \u60A8\u5E0C\u671B\u914D\u7F6E\u7684\u57DF\u540D
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: your-service # \u540E\u7AEF\u670D\u52A1\u540D\u79F0
            port:
              number: 80 # \u540E\u7AEF\u670D\u52A1\u7AEF\u53E3
\`\`\`
\u6B64\u6B65\u9AA4\u4E2D\uFF0C\`your.domain.com\`\u662F\u60A8\u60F3\u8981\u7ED1\u5B9A\u7684\u57DF\u540D\uFF0C\u800C\`your-service\`\u548C\u5BF9\u5E94\u7684\u7AEF\u53E3\u5219\u662FKubernetes\u96C6\u7FA4\u5185\u90E8\u7684\u670D\u52A1\u540D\u548C\u7AEF\u53E3\u3002

#### 2. DNS\u89E3\u6790\u8BBE\u7F6E
- **\u8D2D\u4E70\u5E76\u7BA1\u7406\u57DF\u540D**\uFF1A\u9996\u5148\uFF0C\u60A8\u9700\u8981\u62E5\u6709\u4E00\u4E2A\u57DF\u540D\u3002\u5982\u679C\u60A8\u8FD8\u6CA1\u6709\uFF0C\u8BF7\u4ECE\u57DF\u540D\u6CE8\u518C\u5546\u5904\u8D2D\u4E70\u3002
- **\u914D\u7F6EDNS\u8BB0\u5F55**\uFF1A\u767B\u5F55\u5230\u60A8\u7684\u57DF\u540D\u63D0\u4F9B\u5546\u7684\u63A7\u5236\u9762\u677F\uFF0C\u4E3A\`your.domain.com\`\u521B\u5EFA\u4E00\u6761A\u8BB0\u5F55\u6216CNAME\u8BB0\u5F55\u6307\u5411\u60A8\u7684Higress\u7F51\u5173\u6240\u5728\u7684IP\u5730\u5740\u3002\u5982\u679C\u662F\u8D1F\u8F7D\u5747\u8861\u6216\u591A\u8282\u70B9\u90E8\u7F72\uFF0C\u53EF\u80FD\u9700\u8981\u914D\u7F6E\u5230\u8D1F\u8F7D\u5747\u8861\u5668\u7684IP\u3002

#### 3. \u786E\u4FDDHigress\u914D\u7F6E\u6B63\u786E
- \u786E\u8BA4Higress\u5DF2\u7ECF\u6B63\u786E\u5B89\u88C5\u5E76\u914D\u7F6E\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u5916\u90E8\u8BBF\u95EE\u76F8\u5173\u7684\u8BBE\u7F6E\uFF0C\u5982\u76D1\u542C\u7684\u7AEF\u53E3\u3001TLS\u8BC1\u4E66\uFF08\u5982\u679C\u9700\u8981HTTPS\uFF09\u7B49\u3002
- \u5982\u679CHigress\u90E8\u7F72\u5728\u4E91\u73AF\u5883\uFF0C\u53EF\u80FD\u8FD8\u9700\u8981\u68C0\u67E5\u4E91\u4F9B\u5E94\u5546\u7684\u7F51\u7EDC\u548C\u5B89\u5168\u7EC4\u8BBE\u7F6E\uFF0C\u786E\u4FDD\u7AEF\u53E3\u5F00\u653E\u4E14\u6D41\u91CF\u80FD\u591F\u6B63\u786E\u8DEF\u7531\u3002

### \u89E3\u91CA
- **\u521B\u5EFAIngress\u8D44\u6E90**\u662F\u914D\u7F6E\u57DF\u540D\u7684\u6838\u5FC3\u6B65\u9AA4\uFF0C\u5B83\u5B9A\u4E49\u4E86\u5916\u90E8\u8BBF\u95EE\u7684\u903B\u8F91\u5165\u53E3\u3002
- **DNS\u89E3\u6790**\u662F\u5C06\u7528\u6237\u8F93\u5165\u7684\u57DF\u540D\u89E3\u6790\u6210\u53EF\u8BBF\u95EE\u7684IP\u5730\u5740\uFF0C\u8FD9\u662F\u4E92\u8054\u7F51\u8BBF\u95EE\u7684\u57FA\u7840\u3002
- **Higress\u914D\u7F6E\u9A8C\u8BC1**\u786E\u4FDD\u4E86\u6D41\u91CF\u80FD\u591F\u88AB\u6B63\u786E\u63A5\u6536\u5E76\u6309\u9884\u671F\u8DEF\u7531\u5230\u540E\u7AEF\u670D\u52A1\u3002

\u8BF7\u6CE8\u610F\uFF0C\u5177\u4F53\u64CD\u4F5C\u65F6\u8FD8\u9700\u7ED3\u5408Higress\u7684\u5B98\u65B9\u6587\u6863\u548C\u60A8\u5B9E\u9645\u7684\u57FA\u7840\u8BBE\u65BD\u60C5\u51B5\u6765\u8C03\u6574\u3002\u7531\u4E8E\u76F4\u63A5\u7684\u914D\u7F6E\u793A\u4F8B\u6216\u7279\u5B9A\u4E8EHigress\u7684\u57DF\u540D\u914D\u7F6E\u8BF4\u660E\u672A\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\u627E\u5230\uFF0C\u4E0A\u8FF0\u6B65\u9AA4\u662F\u57FA\u4E8E\u901A\u7528\u5B9E\u8DF5\u63D0\u51FA\u7684\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress AI \u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u80FD\u5426\u652F\u6301\u6309\u57DF\u540D\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16974)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},r=function(){return s},p=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u6B65\u9AA4\u5206\u6790",text:"\u6B65\u9AA4\u5206\u6790"},{depth:4,slug:"1-\u521B\u5EFAingress\u8D44\u6E90",text:"1. \u521B\u5EFAIngress\u8D44\u6E90"},{depth:4,slug:"2-dns\u89E3\u6790\u8BBE\u7F6E",text:"2. DNS\u89E3\u6790\u8BBE\u7F6E"},{depth:4,slug:"3-\u786E\u4FDDhigress\u914D\u7F6E\u6B63\u786E",text:"3. \u786E\u4FDDHigress\u914D\u7F6E\u6B63\u786E"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=o((h,f,m)=>{const{layout:x,...t}=a;return t.file=n,t.url=i,c`${g()}${E(s)}`})});export{e as Content,u as __tla,r as compiledContent,e as default,n as file,a as frontmatter,p as getHeadings,l as rawContent,i as url};
