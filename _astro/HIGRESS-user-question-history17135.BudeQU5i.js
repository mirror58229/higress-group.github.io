import{c,__tla as g}from"./astro-component.DIa0fJKh.js";import{r as h,m as u,u as p,__tla as d}from"./constant.B7GQ7DpS.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let r,n,s,t,a,l,o,m=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>meirics\u662F\u66B4\u9732\u5728higress-controller\u8FD8\u662Fgateway</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5173\u4E8E Higress \u7684\u76D1\u63A7\u6307\u6807\uFF08Higress Metrics\uFF09\u662F\u66B4\u9732\u5728\u54EA\u4E2A\u7EC4\u4EF6\u4E0A\uFF0C\u5E76\u672A\u76F4\u63A5\u63D0\u53CA\u3002\u4E0D\u8FC7\uFF0C\u901A\u5E38\u5728 Kubernetes \u7684\u670D\u52A1\u7F51\u683C\u6216 ingress \u63A7\u5236\u5668\u573A\u666F\u4E2D\uFF0C\u76D1\u63A7\u6307\u6807\u4F1A\u7531\u63A7\u5236\u5E73\u9762\u7EC4\u4EF6\u66B4\u9732\uFF0C\u4EE5\u4FBF\u4E8E\u6536\u96C6\u548C\u76D1\u63A7\u3002\u57FA\u4E8E\u6B64\u4E00\u822C\u89C4\u5F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u6D4B Higress \u7684\u76D1\u63A7\u6307\u6807\u66F4\u6709\u53EF\u80FD\u662F\u66B4\u9732\u5728 <code dir="auto">higress-controller</code> \u4E0A\uFF0C\u800C\u975E Gateway\u3002</p>
<p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u786E\u8BA4\u8FD9\u4E00\u70B9\u6216\u83B7\u53D6\u66F4\u591A\u5173\u4E8E Higress \u76D1\u63A7\u6307\u6807\u66B4\u9732\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u67E5\u9605 Higress \u7684\u5B98\u65B9\u6587\u6863\u6216\u8005\u76F4\u63A5\u68C0\u67E5 Higress \u63A7\u5236\u5668\u7684\u914D\u7F6E\u4E0E\u6587\u6863\u8BF4\u660E\u3002\u8FD9\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A</p>
<ol>
<li>
<p><strong>\u67E5\u9605\u5B98\u65B9\u6587\u6863</strong>\uFF1A\u8BBF\u95EE Higress \u7684\u5B98\u65B9GitHub\u4ED3\u5E93\u3001\u6587\u6863\u7AD9\u70B9\u6216\u5176\u4ED6\u5B98\u65B9\u8D44\u6E90\uFF0C\u641C\u7D22\u6709\u5173\u76D1\u63A7\u548C\u5EA6\u91CF\uFF08metrics\uFF09\u7684\u7AE0\u8282\u3002\u8FD9\u901A\u5E38\u4F1A\u63D0\u4F9B\u5982\u4F55\u5F00\u542F\u3001\u914D\u7F6E\u4EE5\u53CA\u8BBF\u95EE\u76D1\u63A7\u6307\u6807\u7684\u6307\u5357\u3002</p>
</li>
<li>
<p><strong>\u68C0\u67E5\u63A7\u5236\u5668\u914D\u7F6E</strong>\uFF1A\u5982\u679C\u60A8\u6709\u6743\u8BBF\u95EE\u8FD0\u884C\u4E2D\u7684 Higress \u73AF\u5883\uFF0C\u53EF\u4EE5\u68C0\u67E5 <code dir="auto">higress-controller</code> \u7684\u90E8\u7F72\u914D\u7F6E\uFF0C\u770B\u662F\u5426\u6709\u9488\u5BF9\u76D1\u63A7\u51FA\u53E3\uFF08\u6BD4\u5982 Prometheus metrics endpoint\uFF09\u7684\u914D\u7F6E\u9879\u3002</p>
</li>
<li>
<p><strong>\u5B9E\u9645\u64CD\u4F5C\u9A8C\u8BC1</strong>\uFF1A\u6309\u7167Higress\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u5C1D\u8BD5\u8BBF\u95EE <code dir="auto">higress-controller</code> \u670D\u52A1\u7684\u9ED8\u8BA4\u76D1\u63A7\u7AEF\u70B9\uFF08\u5982 <code dir="auto">/metrics</code>\uFF09\uFF0C\u8FD9\u901A\u5E38\u7528\u4E8E\u5BFC\u51FAPrometheus\u683C\u5F0F\u7684\u76D1\u63A7\u6570\u636E\u3002</p>
</li>
</ol>
<p>\u7531\u4E8E\u5177\u4F53\u6B65\u9AA4\u4F9D\u8D56\u4E8EHigress\u7684\u5B9E\u73B0\u7EC6\u8282\u548C\u6587\u6863\uFF0C\u800C\u8FD9\u4E9B\u4FE1\u606F\u5728\u5F53\u524D\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\u5E76\u672A\u6DB5\u76D6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u7ED9\u51FA\u786E\u5207\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002\u5EFA\u8BAE\u76F4\u63A5\u53C2\u8003Higress\u7684\u6700\u65B0\u6587\u6863\u6216\u793E\u533A\u8D44\u6E90\u6765\u83B7\u53D6\u6700\u51C6\u786E\u7684\u914D\u7F6E\u548C\u9A8C\u8BC1\u65B9\u6CD5\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17147" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-17135",title:"meirics\u662F\u66B4\u9732\u5728higress-controller\u8FD8\u662Fgateway",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5173\u4E8E Higress \u7684\u76D1\u63A7\u6307\u6807\uFF08Higress Metrics\uFF09\u662F\u66B4\u9732\u5728\u54EA\u4E2A\u7EC4\u4EF6\u4E0A\uFF0C\u5E76\u672A\u76F4\u63A5\u63D0\u53CA\u3002\u4E0D\u8FC7\uFF0C\u901A\u5E38\u5728 Kubernetes \u7684\u670D\u52A1\u7F51\u683C\u6216 ingress \u63A7\u5236\u5668\u573A\u666F\u4E2D\uFF0C\u76D1\u63A7\u6307\u6807\u4F1A\u7531\u63A7\u5236\u5E73\u9762\u7EC4\u4EF6\u66B4\u9732\uFF0C\u4EE5\u4FBF\u4E8E\u6536\u96C6\u548C\u76D1\u63A7\u3002\u57FA\u4E8E\u6B64\u4E00\u822C\u89C4\u5F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u6D4B Higress \u7684\u76D1\u63A7",tags:["higress","meirics","\u63A7\u5236\u5668","gateway","\u66B4\u9732"],keywords:["higress","meirics","\u63A7\u5236\u5668","gateway","\u66B4\u9732"]},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17135.md",o=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 meirics\u662F\u66B4\u9732\u5728higress-controller\u8FD8\u662Fgateway  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5173\u4E8E Higress \u7684\u76D1\u63A7\u6307\u6807\uFF08Higress Metrics\uFF09\u662F\u66B4\u9732\u5728\u54EA\u4E2A\u7EC4\u4EF6\u4E0A\uFF0C\u5E76\u672A\u76F4\u63A5\u63D0\u53CA\u3002\u4E0D\u8FC7\uFF0C\u901A\u5E38\u5728 Kubernetes \u7684\u670D\u52A1\u7F51\u683C\u6216 ingress \u63A7\u5236\u5668\u573A\u666F\u4E2D\uFF0C\u76D1\u63A7\u6307\u6807\u4F1A\u7531\u63A7\u5236\u5E73\u9762\u7EC4\u4EF6\u66B4\u9732\uFF0C\u4EE5\u4FBF\u4E8E\u6536\u96C6\u548C\u76D1\u63A7\u3002\u57FA\u4E8E\u6B64\u4E00\u822C\u89C4\u5F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u6D4B Higress \u7684\u76D1\u63A7\u6307\u6807\u66F4\u6709\u53EF\u80FD\u662F\u66B4\u9732\u5728 \`higress-controller\` \u4E0A\uFF0C\u800C\u975E Gateway\u3002

\u4E3A\u4E86\u8FDB\u4E00\u6B65\u786E\u8BA4\u8FD9\u4E00\u70B9\u6216\u83B7\u53D6\u66F4\u591A\u5173\u4E8E Higress \u76D1\u63A7\u6307\u6807\u66B4\u9732\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u67E5\u9605 Higress \u7684\u5B98\u65B9\u6587\u6863\u6216\u8005\u76F4\u63A5\u68C0\u67E5 Higress \u63A7\u5236\u5668\u7684\u914D\u7F6E\u4E0E\u6587\u6863\u8BF4\u660E\u3002\u8FD9\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A

1. **\u67E5\u9605\u5B98\u65B9\u6587\u6863**\uFF1A\u8BBF\u95EE Higress \u7684\u5B98\u65B9GitHub\u4ED3\u5E93\u3001\u6587\u6863\u7AD9\u70B9\u6216\u5176\u4ED6\u5B98\u65B9\u8D44\u6E90\uFF0C\u641C\u7D22\u6709\u5173\u76D1\u63A7\u548C\u5EA6\u91CF\uFF08metrics\uFF09\u7684\u7AE0\u8282\u3002\u8FD9\u901A\u5E38\u4F1A\u63D0\u4F9B\u5982\u4F55\u5F00\u542F\u3001\u914D\u7F6E\u4EE5\u53CA\u8BBF\u95EE\u76D1\u63A7\u6307\u6807\u7684\u6307\u5357\u3002

2. **\u68C0\u67E5\u63A7\u5236\u5668\u914D\u7F6E**\uFF1A\u5982\u679C\u60A8\u6709\u6743\u8BBF\u95EE\u8FD0\u884C\u4E2D\u7684 Higress \u73AF\u5883\uFF0C\u53EF\u4EE5\u68C0\u67E5 \`higress-controller\` \u7684\u90E8\u7F72\u914D\u7F6E\uFF0C\u770B\u662F\u5426\u6709\u9488\u5BF9\u76D1\u63A7\u51FA\u53E3\uFF08\u6BD4\u5982 Prometheus metrics endpoint\uFF09\u7684\u914D\u7F6E\u9879\u3002

3. **\u5B9E\u9645\u64CD\u4F5C\u9A8C\u8BC1**\uFF1A\u6309\u7167Higress\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u5C1D\u8BD5\u8BBF\u95EE \`higress-controller\` \u670D\u52A1\u7684\u9ED8\u8BA4\u76D1\u63A7\u7AEF\u70B9\uFF08\u5982 \`/metrics\`\uFF09\uFF0C\u8FD9\u901A\u5E38\u7528\u4E8E\u5BFC\u51FAPrometheus\u683C\u5F0F\u7684\u76D1\u63A7\u6570\u636E\u3002

\u7531\u4E8E\u5177\u4F53\u6B65\u9AA4\u4F9D\u8D56\u4E8EHigress\u7684\u5B9E\u73B0\u7EC6\u8282\u548C\u6587\u6863\uFF0C\u800C\u8FD9\u4E9B\u4FE1\u606F\u5728\u5F53\u524D\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\u5E76\u672A\u6DB5\u76D6\uFF0C\u56E0\u6B64\u65E0\u6CD5\u7ED9\u51FA\u786E\u5207\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002\u5EFA\u8BAE\u76F4\u63A5\u53C2\u8003Higress\u7684\u6700\u65B0\u6587\u6863\u6216\u793E\u533A\u8D44\u6E90\u6765\u83B7\u53D6\u6700\u51C6\u786E\u7684\u914D\u7F6E\u548C\u9A8C\u8BC1\u65B9\u6CD5\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17147)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return e},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},r=c((H,y,b)=>{const{layout:_,...i}=t;return i.file=s,i.url=o,h`${u()}${p(e)}`})});export{r as Content,m as __tla,n as compiledContent,r as default,s as file,t as frontmatter,a as getHeadings,l as rawContent,o as url};
