import{c as l,__tla as u}from"./astro-component.DIa0fJKh.js";import{r as h,m as p,u as c,__tla as f}from"./constant.BB-vDknj.js";import{__tla as d}from"./astro/assets-service.tyfV9CK3.js";let t,g,r,s,i,a,e,I=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return d}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>Higress \u548C Kong \u6709\u4EC0\u4E48\u533A\u522B</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress\u548CKong\u90FD\u662F\u6D41\u884C\u7684API\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u4E00\u4E9B\u5173\u952E\u533A\u522B\uFF0C\u8FD9\u4E9B\u5DEE\u5F02\u53EF\u4EE5\u4ECE\u5B83\u4EEC\u7684\u8BBE\u8BA1\u7406\u5FF5\u3001\u6838\u5FC3\u6280\u672F\u548C\u5E94\u7528\u573A\u666F\u6765\u5206\u6790\u3002</p>
<h3 id="\u8BBE\u8BA1\u7406\u5FF5\u4E0E\u6838\u5FC3\u6280\u672F">\u8BBE\u8BA1\u7406\u5FF5\u4E0E\u6838\u5FC3\u6280\u672F</h3>
<p><strong>Higress:</strong></p>
<ul>
<li><strong>\u8BBE\u8BA1\u7406\u5FF5\uFF1A</strong> Higress\u5F3A\u8C03\u7684\u662F\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u9AD8\u96C6\u6210\u80FD\u529B\u548C\u7B80\u5316\u8FD0\u7EF4\u3002\u5B83\u662F\u4E00\u4E2A\u57FA\u4E8E\u5F00\u6E90Istio\u548CEnvoy\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u65E8\u5728\u901A\u8FC7\u4E00\u4F53\u5316\u7684\u8BBE\u8BA1\uFF08\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\uFF09\u6765\u964D\u4F4E\u90E8\u7F72\u4E0E\u8FD0\u7EF4\u6210\u672C\u3002</li>
<li><strong>\u6838\u5FC3\u6280\u672F\uFF1A</strong> Higress\u5229\u7528Envoy\u7684\u5F3A\u5927\u4EE3\u7406\u529F\u80FD\u548CIstio\u7684\u670D\u52A1\u7F51\u683C\u80FD\u529B\uFF0C\u652F\u6301Ingress\u4E0EGateway API\u6807\u51C6\uFF0C\u786E\u4FDD\u4E86\u4E0E\u4E91\u539F\u751F\u751F\u6001\u7684\u7D27\u5BC6\u96C6\u6210\u3002\u6B64\u5916\uFF0C\u5B83\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u7279\u522B\u9002\u5408\u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2\u5185\u90E8\u4EE5\u53CA\u4E0E\u4E4B\u7C7B\u4F3C\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u3002</li>
</ul>
<p><strong>Kong:</strong></p>
<ul>
<li><strong>\u8BBE\u8BA1\u7406\u5FF5\uFF1A</strong> Kong\u5219\u66F4\u4FA7\u91CD\u4E8E\u63D0\u4F9B\u9AD8\u5EA6\u53EF\u6269\u5C55\u548C\u7075\u6D3B\u7684API\u7BA1\u7406\u5E73\u53F0\u3002\u5B83\u901A\u8FC7\u63D2\u4EF6\u5316\u7684\u67B6\u6784\u8BBE\u8BA1\uFF0C\u5141\u8BB8\u7528\u6237\u6839\u636E\u9700\u6C42\u6DFB\u52A0\u529F\u80FD\uFF0C\u6BD4\u5982\u8BA4\u8BC1\u3001\u9650\u6D41\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\uFF0C\u4ECE\u800C\u63D0\u4F9B\u4E86\u6781\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u5B9A\u5236\u6027\u3002</li>
<li><strong>\u6838\u5FC3\u6280\u672F\uFF1A</strong> Kong\u6700\u521D\u57FA\u4E8ENGINX\uFF0C\u540E\u6765\u53D1\u5C55\u51FA\u4E86\u57FA\u4E8EGo\u8BED\u8A00\u7684\u9AD8\u6027\u80FD\u6570\u636E\u5E73\u9762Kong Gateway\uFF0C\u4EE5\u53CA\u7BA1\u7406\u5E73\u9762Kong Manager\u548CKong Hub\u3002\u8FD9\u79CD\u5206\u79BB\u5F0F\u7684\u67B6\u6784\u8BA9Kong\u80FD\u591F\u72EC\u7ACB\u4E8E\u5E95\u5C42\u4EE3\u7406\u6280\u672F\u8FDB\u884C\u5FEB\u901F\u8FED\u4EE3\u548C\u6269\u5C55\u3002</li>
</ul>
<h3 id="\u5E94\u7528\u573A\u666F\u4E0E\u7279\u6027">\u5E94\u7528\u573A\u666F\u4E0E\u7279\u6027</h3>
<ul>
<li><strong>Higress</strong>\u7531\u4E8E\u5176\u5185\u7F6E\u7684\u5B89\u5168\u7F51\u5173\uFF08\u5982WAF\uFF09\u548C\u5BF9\u5FAE\u670D\u52A1\u751F\u6001\u7684\u6DF1\u5EA6\u96C6\u6210\uFF0C\u7279\u522B\u9002\u5408\u90A3\u4E9B\u5E0C\u671B\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u5B9E\u73B0\u5FAE\u670D\u52A1\u6CBB\u7406\u3001\u5E76\u8FFD\u6C42\u4F4E\u5EF6\u8FDF\u3001\u9AD8\u5B89\u5168\u6027\u548C\u8FD0\u7EF4\u6548\u7387\u7684\u4F01\u4E1A\u3002</li>
<li><strong>Kong</strong>\u7531\u4E8E\u5176\u9AD8\u5EA6\u7684\u53EF\u6269\u5C55\u6027\u548C\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E02\u573A\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u9AD8\u5EA6\u5B9A\u5236\u5316API\u7BA1\u7406\u65B9\u6848\u7684\u573A\u666F\uFF0C\u7279\u522B\u662F\u5F53\u4F01\u4E1A\u6709\u7279\u5B9A\u7684\u5B89\u5168\u3001\u76D1\u63A7\u6216\u6027\u80FD\u9700\u6C42\u65F6\uFF0CKong\u7684\u7075\u6D3B\u6027\u53EF\u4EE5\u66F4\u597D\u5730\u6EE1\u8DB3\u8FD9\u4E9B\u9700\u6C42\u3002</li>
</ul>
<h3 id="\u7ED3\u8BBA">\u7ED3\u8BBA</h3>
<p>\u9009\u62E9Higress\u8FD8\u662FKong\uFF0C\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53D6\u51B3\u4E8E\u60A8\u7684\u5177\u4F53\u9700\u6C42\u548C\u73B0\u6709\u6280\u672F\u6808\u3002\u5982\u679C\u60A8\u6B63\u5904\u5728\u4E91\u539F\u751F\u8F6C\u578B\u4E2D\uFF0C\u5BFB\u6C42\u9AD8\u5EA6\u96C6\u6210\u3001\u7B80\u5316\u8FD0\u7EF4\u548C\u6DF1\u5EA6\u5FAE\u670D\u52A1\u652F\u6301\uFF0CHigress\u53EF\u80FD\u662F\u66F4\u5408\u9002\u7684\u9009\u62E9\u3002\u76F8\u53CD\uFF0C\u5982\u679C\u60A8\u9700\u8981\u4E00\u4E2A\u9AD8\u5EA6\u7075\u6D3B\u3001\u53EF\u9AD8\u5EA6\u5B9A\u5236\u7684API\u7BA1\u7406\u5E73\u53F0\uFF0C\u5C24\u5176\u662F\u5728\u5DF2\u6709NGINX\u57FA\u7840\u6216\u9700\u8981\u7279\u5B9A\u63D2\u4EF6\u652F\u6301\u7684\u60C5\u51B5\u4E0B\uFF0CKong\u5219\u66F4\u80FD\u6EE1\u8DB3\u60A8\u7684\u9700\u6C42\u3002</p>
<p>\u4EE5\u4E0A\u5206\u6790\u57FA\u4E8E\u5F53\u524D\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5177\u4F53\u9009\u62E9\u8FD8\u9700\u7ED3\u5408\u5B9E\u9645\u9879\u76EE\u7684\u6280\u672F\u8981\u6C42\u3001\u56E2\u961F\u719F\u6089\u5EA6\u548C\u957F\u671F\u53D1\u5C55\u89C4\u5212\u6765\u7EFC\u5408\u8003\u91CF\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress\u662F\u4EC0\u4E48?</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16724" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-16710",title:"Higress \u548C Kong \u6709\u4EC0\u4E48\u533A\u522B",date:"2024-09-26",category:"expertConsultation",description:"Higress\u548CKong\u90FD\u662F\u6D41\u884C\u7684API\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u4E00\u4E9B\u5173\u952E\u533A\u522B\uFF0C\u8FD9\u4E9B\u5DEE\u5F02\u53EF\u4EE5\u4ECE\u5B83\u4EEC\u7684\u8BBE\u8BA1\u7406\u5FF5\u3001\u6838\u5FC3\u6280\u672F\u548C\u5E94\u7528\u573A\u666F\u6765\u5206\u6790\u3002### \u8BBE\u8BA1\u7406\u5FF5\u4E0E\u6838\u5FC3\u6280\u672F**Higress:**- **\u8BBE\u8BA1\u7406\u5FF5\uFF1A** Higress\u5F3A\u8C03\u7684\u662F\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u9AD8\u96C6\u6210\u80FD\u529B\u548C\u7B80\u5316\u8FD0\u7EF4\u3002\u5B83\u662F\u4E00\u4E2A\u57FA\u4E8E\u5F00\u6E90Istio\u548CE",tags:["Higress","Kong","\u533A\u522B","\u6BD4\u8F83","\u5206\u6790","\u529F\u80FD","\u5DEE\u5F02"],keywords:["Higress","Kong","\u533A\u522B","\u6BD4\u8F83","\u5206\u6790","\u529F\u80FD","\u5DEE\u5F02"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16710.md",e=void 0,a=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 Higress \u548C Kong \u6709\u4EC0\u4E48\u533A\u522B  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress\u548CKong\u90FD\u662F\u6D41\u884C\u7684API\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u4E00\u4E9B\u5173\u952E\u533A\u522B\uFF0C\u8FD9\u4E9B\u5DEE\u5F02\u53EF\u4EE5\u4ECE\u5B83\u4EEC\u7684\u8BBE\u8BA1\u7406\u5FF5\u3001\u6838\u5FC3\u6280\u672F\u548C\u5E94\u7528\u573A\u666F\u6765\u5206\u6790\u3002

### \u8BBE\u8BA1\u7406\u5FF5\u4E0E\u6838\u5FC3\u6280\u672F

**Higress:**
- **\u8BBE\u8BA1\u7406\u5FF5\uFF1A** Higress\u5F3A\u8C03\u7684\u662F\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u9AD8\u96C6\u6210\u80FD\u529B\u548C\u7B80\u5316\u8FD0\u7EF4\u3002\u5B83\u662F\u4E00\u4E2A\u57FA\u4E8E\u5F00\u6E90Istio\u548CEnvoy\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u65E8\u5728\u901A\u8FC7\u4E00\u4F53\u5316\u7684\u8BBE\u8BA1\uFF08\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\uFF09\u6765\u964D\u4F4E\u90E8\u7F72\u4E0E\u8FD0\u7EF4\u6210\u672C\u3002
- **\u6838\u5FC3\u6280\u672F\uFF1A** Higress\u5229\u7528Envoy\u7684\u5F3A\u5927\u4EE3\u7406\u529F\u80FD\u548CIstio\u7684\u670D\u52A1\u7F51\u683C\u80FD\u529B\uFF0C\u652F\u6301Ingress\u4E0EGateway API\u6807\u51C6\uFF0C\u786E\u4FDD\u4E86\u4E0E\u4E91\u539F\u751F\u751F\u6001\u7684\u7D27\u5BC6\u96C6\u6210\u3002\u6B64\u5916\uFF0C\u5B83\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u7279\u522B\u9002\u5408\u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2\u5185\u90E8\u4EE5\u53CA\u4E0E\u4E4B\u7C7B\u4F3C\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u3002

**Kong:**
- **\u8BBE\u8BA1\u7406\u5FF5\uFF1A** Kong\u5219\u66F4\u4FA7\u91CD\u4E8E\u63D0\u4F9B\u9AD8\u5EA6\u53EF\u6269\u5C55\u548C\u7075\u6D3B\u7684API\u7BA1\u7406\u5E73\u53F0\u3002\u5B83\u901A\u8FC7\u63D2\u4EF6\u5316\u7684\u67B6\u6784\u8BBE\u8BA1\uFF0C\u5141\u8BB8\u7528\u6237\u6839\u636E\u9700\u6C42\u6DFB\u52A0\u529F\u80FD\uFF0C\u6BD4\u5982\u8BA4\u8BC1\u3001\u9650\u6D41\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\uFF0C\u4ECE\u800C\u63D0\u4F9B\u4E86\u6781\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u5B9A\u5236\u6027\u3002
- **\u6838\u5FC3\u6280\u672F\uFF1A** Kong\u6700\u521D\u57FA\u4E8ENGINX\uFF0C\u540E\u6765\u53D1\u5C55\u51FA\u4E86\u57FA\u4E8EGo\u8BED\u8A00\u7684\u9AD8\u6027\u80FD\u6570\u636E\u5E73\u9762Kong Gateway\uFF0C\u4EE5\u53CA\u7BA1\u7406\u5E73\u9762Kong Manager\u548CKong Hub\u3002\u8FD9\u79CD\u5206\u79BB\u5F0F\u7684\u67B6\u6784\u8BA9Kong\u80FD\u591F\u72EC\u7ACB\u4E8E\u5E95\u5C42\u4EE3\u7406\u6280\u672F\u8FDB\u884C\u5FEB\u901F\u8FED\u4EE3\u548C\u6269\u5C55\u3002

### \u5E94\u7528\u573A\u666F\u4E0E\u7279\u6027

- **Higress**\u7531\u4E8E\u5176\u5185\u7F6E\u7684\u5B89\u5168\u7F51\u5173\uFF08\u5982WAF\uFF09\u548C\u5BF9\u5FAE\u670D\u52A1\u751F\u6001\u7684\u6DF1\u5EA6\u96C6\u6210\uFF0C\u7279\u522B\u9002\u5408\u90A3\u4E9B\u5E0C\u671B\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u5B9E\u73B0\u5FAE\u670D\u52A1\u6CBB\u7406\u3001\u5E76\u8FFD\u6C42\u4F4E\u5EF6\u8FDF\u3001\u9AD8\u5B89\u5168\u6027\u548C\u8FD0\u7EF4\u6548\u7387\u7684\u4F01\u4E1A\u3002
- **Kong**\u7531\u4E8E\u5176\u9AD8\u5EA6\u7684\u53EF\u6269\u5C55\u6027\u548C\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E02\u573A\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u9AD8\u5EA6\u5B9A\u5236\u5316API\u7BA1\u7406\u65B9\u6848\u7684\u573A\u666F\uFF0C\u7279\u522B\u662F\u5F53\u4F01\u4E1A\u6709\u7279\u5B9A\u7684\u5B89\u5168\u3001\u76D1\u63A7\u6216\u6027\u80FD\u9700\u6C42\u65F6\uFF0CKong\u7684\u7075\u6D3B\u6027\u53EF\u4EE5\u66F4\u597D\u5730\u6EE1\u8DB3\u8FD9\u4E9B\u9700\u6C42\u3002

### \u7ED3\u8BBA

\u9009\u62E9Higress\u8FD8\u662FKong\uFF0C\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53D6\u51B3\u4E8E\u60A8\u7684\u5177\u4F53\u9700\u6C42\u548C\u73B0\u6709\u6280\u672F\u6808\u3002\u5982\u679C\u60A8\u6B63\u5904\u5728\u4E91\u539F\u751F\u8F6C\u578B\u4E2D\uFF0C\u5BFB\u6C42\u9AD8\u5EA6\u96C6\u6210\u3001\u7B80\u5316\u8FD0\u7EF4\u548C\u6DF1\u5EA6\u5FAE\u670D\u52A1\u652F\u6301\uFF0CHigress\u53EF\u80FD\u662F\u66F4\u5408\u9002\u7684\u9009\u62E9\u3002\u76F8\u53CD\uFF0C\u5982\u679C\u60A8\u9700\u8981\u4E00\u4E2A\u9AD8\u5EA6\u7075\u6D3B\u3001\u53EF\u9AD8\u5EA6\u5B9A\u5236\u7684API\u7BA1\u7406\u5E73\u53F0\uFF0C\u5C24\u5176\u662F\u5728\u5DF2\u6709NGINX\u57FA\u7840\u6216\u9700\u8981\u7279\u5B9A\u63D2\u4EF6\u652F\u6301\u7684\u60C5\u51B5\u4E0B\uFF0CKong\u5219\u66F4\u80FD\u6EE1\u8DB3\u60A8\u7684\u9700\u6C42\u3002

\u4EE5\u4E0A\u5206\u6790\u57FA\u4E8E\u5F53\u524D\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5177\u4F53\u9009\u62E9\u8FD8\u9700\u7ED3\u5408\u5B9E\u9645\u9879\u76EE\u7684\u6280\u672F\u8981\u6C42\u3001\u56E2\u961F\u719F\u6089\u5EA6\u548C\u957F\u671F\u53D1\u5C55\u89C4\u5212\u6765\u7EFC\u5408\u8003\u91CF\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress\u662F\u4EC0\u4E48? 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16724)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},g=function(){return o},i=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u8BBE\u8BA1\u7406\u5FF5\u4E0E\u6838\u5FC3\u6280\u672F",text:"\u8BBE\u8BA1\u7406\u5FF5\u4E0E\u6838\u5FC3\u6280\u672F"},{depth:3,slug:"\u5E94\u7528\u573A\u666F\u4E0E\u7279\u6027",text:"\u5E94\u7528\u573A\u666F\u4E0E\u7279\u6027"},{depth:3,slug:"\u7ED3\u8BBA",text:"\u7ED3\u8BBA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=l((K,H,b)=>{const{layout:y,...n}=s;return n.file=r,n.url=e,h`${p()}${c(o)}`})});export{t as Content,I as __tla,g as compiledContent,t as default,r as file,s as frontmatter,i as getHeadings,a as rawContent,e as url};
