import{c as a,__tla as h}from"./astro-component.DIa0fJKh.js";import{r as u,m as p,u as c,__tla as f}from"./constant.CkjzUQhq.js";import{__tla as d}from"./astro/assets-service.tyfV9CK3.js";let t,i,r,s,l,g,n,K=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return d}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress vs. kong \u5BF9\u6BD4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u4E3A\u4E86\u5168\u9762\u4E14\u51C6\u786E\u5730\u5BF9\u6BD4Higress\u4E0EKong\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u4ECE\u51E0\u4E2A\u5173\u952E\u65B9\u9762\u6765\u5206\u6790\u8FD9\u4E24\u4E2AAPI\u7F51\u5173\u5E73\u53F0\u7684\u7279\u70B9\u3001\u529F\u80FD\u4EE5\u53CA\u9002\u7528\u573A\u666F\u3002\u7531\u4E8E\u6211\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6216\u5F15\u7528{{{\u77E5\u8BC6:}}}\u4E2D\u7684\u5177\u4F53\u4FE1\u606F\uFF0C\u6211\u5C06\u57FA\u4E8E\u5E7F\u6CDB\u8BA4\u53EF\u7684\u4FE1\u606F\u548C\u6211\u7684\u5185\u7F6E\u77E5\u8BC6\u6765\u5C55\u5F00\u8BA8\u8BBA\u3002</p>
<h3 id="1-\u6027\u80FD\u4E0E\u53EF\u6269\u5C55\u6027">1. <strong>\u6027\u80FD\u4E0E\u53EF\u6269\u5C55\u6027</strong></h3>
<ul>
<li><strong>Higress</strong>: Higress\u662F\u7531\u963F\u91CC\u5DF4\u5DF4\u5F00\u53D1\u7684\u4E00\u6B3E\u9AD8\u6027\u80FD\u3001\u4E91\u539F\u751F\u7684API\u7F51\u5173\uFF0C\u5B83\u8BBE\u8BA1\u7528\u4E8E\u5904\u7406\u5927\u89C4\u6A21\u670D\u52A1\u7684\u9AD8\u5E76\u53D1\u8BF7\u6C42\uFF0C\u652F\u6301\u81EA\u52A8\u6269\u7F29\u5BB9\u4EE5\u5E94\u5BF9\u6D41\u91CF\u5CF0\u503C\u3002</li>
<li><strong>Kong</strong>: Kong\u662F\u4E00\u6B3E\u6D41\u884C\u7684\u5F00\u6E90API\u7F51\u5173\uFF0C\u4EE5\u5176\u7075\u6D3B\u6027\u548C\u6A21\u5757\u5316\u67B6\u6784\u8457\u79F0\u3002\u901A\u8FC7\u63D2\u4EF6\u7CFB\u7EDF\uFF0CKong\u53EF\u4EE5\u8F7B\u677E\u6269\u5C55\u529F\u80FD\uFF0C\u540C\u65F6\u652F\u6301\u6C34\u5E73\u6269\u5C55\u4EE5\u6EE1\u8DB3\u6027\u80FD\u9700\u6C42\u3002</li>
</ul>
<h3 id="2-\u529F\u80FD\u7279\u6027">2. <strong>\u529F\u80FD\u7279\u6027</strong></h3>
<ul>
<li>
<p><strong>Higress</strong>:</p>
<ul>
<li><strong>\u4E91\u539F\u751F\u96C6\u6210</strong>: \u4E13\u4E3AKubernetes\u7B49\u4E91\u73AF\u5883\u8BBE\u8BA1\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u5BB9\u5668\u5316\u652F\u6301\u3002</li>
<li><strong>\u5B89\u5168\u7279\u6027</strong>: \u652F\u6301OAuth2\u3001JWT\u7B49\u591A\u79CD\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u786E\u4FDDAPI\u7684\u5B89\u5168\u8BBF\u95EE\u3002</li>
<li><strong>\u6D41\u91CF\u7BA1\u7406\u4E0E\u8DEF\u7531</strong>: \u63D0\u4F9B\u7CBE\u7EC6\u7684\u6D41\u91CF\u63A7\u5236\u548C\u52A8\u6001\u8DEF\u7531\u80FD\u529B\u3002</li>
</ul>
</li>
<li>
<p><strong>Kong</strong>:</p>
<ul>
<li><strong>\u63D2\u4EF6\u751F\u6001\u7CFB\u7EDF</strong>: Kong\u62E5\u6709\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E93\uFF0C\u6DB5\u76D6\u5B89\u5168\u3001\u76D1\u63A7\u3001\u9650\u6D41\u7B49\u591A\u4E2A\u9886\u57DF\uFF0C\u6613\u4E8E\u5B9A\u5236\u5316\u3002</li>
<li><strong>API\u751F\u547D\u5468\u671F\u7BA1\u7406</strong>: \u63D0\u4F9B\u4ECE\u8BBE\u8BA1\u5230\u9000\u5F79\u7684\u5B8C\u6574API\u751F\u547D\u5468\u671F\u7BA1\u7406\u5DE5\u5177\u3002</li>
<li><strong>\u9AD8\u6027\u80FD\u4EE3\u7406</strong>: \u57FA\u4E8ENGINX\uFF0C\u63D0\u4F9B\u9AD8\u6027\u80FD\u7684HTTP\u548CTCP/UDP\u4EE3\u7406\u80FD\u529B\u3002</li>
</ul>
</li>
</ul>
<h3 id="3-\u793E\u533A\u4E0E\u652F\u6301">3. <strong>\u793E\u533A\u4E0E\u652F\u6301</strong></h3>
<ul>
<li><strong>Higress</strong>: \u4F5C\u4E3A\u8F83\u65B0\u7684\u9879\u76EE\uFF0C\u5176\u793E\u533A\u76F8\u8F83\u4E8EKong\u53EF\u80FD\u8F83\u5C0F\uFF0C\u4F46\u80CC\u9760\u963F\u91CC\u5DF4\u5DF4\uFF0C\u6709\u8F83\u5F3A\u7684\u4F01\u4E1A\u7EA7\u652F\u6301\u548C\u670D\u52A1\u80FD\u529B\u3002</li>
<li><strong>Kong</strong>: \u62E5\u6709\u5E9E\u5927\u7684\u5F00\u53D1\u8005\u793E\u533A\u548C\u6210\u719F\u7684\u652F\u6301\u4F53\u7CFB\uFF0C\u5305\u62EC\u4F01\u4E1A\u7248Kong Enterprise\uFF0C\u9002\u5408\u5BFB\u6C42\u957F\u671F\u7A33\u5B9A\u652F\u6301\u7684\u7528\u6237\u3002</li>
</ul>
<h3 id="\u7ED3\u8BBA">\u7ED3\u8BBA</h3>
<p>\u9009\u62E9Higress\u8FD8\u662FKong\u53D6\u51B3\u4E8E\u60A8\u7684\u5177\u4F53\u9700\u6C42\uFF1A</p>
<ul>
<li>\u5982\u679C\u60A8\u662F\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u5DE5\u4F5C\uFF0C\u8FFD\u6C42\u9AD8\u6027\u80FD\u548C\u6DF1\u5EA6\u96C6\u6210\u4E91\u670D\u52A1\uFF0CHigress\u53EF\u80FD\u662F\u66F4\u4F18\u7684\u9009\u62E9\u3002</li>
<li>\u82E5\u60A8\u9700\u8981\u9AD8\u5EA6\u7684\u7075\u6D3B\u6027\u3001\u5E7F\u6CDB\u7684\u63D2\u4EF6\u652F\u6301\u4EE5\u53CA\u6210\u719F\u7684\u793E\u533A\u8D44\u6E90\uFF0CKong\u5219\u66F4\u52A0\u5408\u9002\uFF0C\u7279\u522B\u662F\u5F53\u60A8\u7684\u5E94\u7528\u573A\u666F\u9700\u8981\u5927\u91CF\u5B9A\u5236\u5316\u65F6\u3002</li>
</ul>
<p>\u7531\u4E8E\u7F3A\u4E4F\u76F4\u63A5\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u53C2\u8003\uFF0C\u4EE5\u4E0A\u5206\u6790\u57FA\u4E8E\u516C\u5F00\u4FE1\u606F\u548C\u4E00\u822C\u8BA4\u77E5\u3002\u5982\u9700\u66F4\u6DF1\u5165\u7684\u6280\u672F\u5BF9\u6BD4\u6216\u7279\u5B9A\u573A\u666F\u4E0B\u7684\u5EFA\u8BAE\uFF0C\u8BF7\u8003\u8651\u67E5\u9605\u5B98\u65B9\u6587\u6863\u3001\u793E\u533A\u8BBA\u575B\u6216\u8FDB\u884C\u5B9E\u9645\u6D4B\u8BD5\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress FAQ</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17017" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-17004",title:"higress vs. kong \u5BF9\u6BD4",date:"2024-09-26",category:"expertConsultation",description:"\u4E3A\u4E86\u5168\u9762\u4E14\u51C6\u786E\u5730\u5BF9\u6BD4Higress\u4E0EKong\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u4ECE\u51E0\u4E2A\u5173\u952E\u65B9\u9762\u6765\u5206\u6790\u8FD9\u4E24\u4E2AAPI\u7F51\u5173\u5E73\u53F0\u7684\u7279\u70B9\u3001\u529F\u80FD\u4EE5\u53CA\u9002\u7528\u573A\u666F\u3002\u7531\u4E8E\u6211\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6216\u5F15\u7528\u77E5\u8BC6:\u4E2D\u7684\u5177\u4F53\u4FE1\u606F\uFF0C\u6211\u5C06\u57FA\u4E8E\u5E7F\u6CDB\u8BA4\u53EF\u7684\u4FE1\u606F\u548C\u6211\u7684\u5185\u7F6E\u77E5\u8BC6\u6765\u5C55\u5F00\u8BA8\u8BBA\u3002### 1. **\u6027\u80FD\u4E0E\u53EF\u6269\u5C55\u6027**- **Higress**: Higress\u662F\u7531",tags:["higress","kong","\u5BF9\u6BD4","vs"],keywords:["higress","kong","\u5BF9\u6BD4","vs"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17004.md",n=void 0,g=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress vs. kong \u5BF9\u6BD4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u4E3A\u4E86\u5168\u9762\u4E14\u51C6\u786E\u5730\u5BF9\u6BD4Higress\u4E0EKong\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u4ECE\u51E0\u4E2A\u5173\u952E\u65B9\u9762\u6765\u5206\u6790\u8FD9\u4E24\u4E2AAPI\u7F51\u5173\u5E73\u53F0\u7684\u7279\u70B9\u3001\u529F\u80FD\u4EE5\u53CA\u9002\u7528\u573A\u666F\u3002\u7531\u4E8E\u6211\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6216\u5F15\u7528{{{\u77E5\u8BC6:}}}\u4E2D\u7684\u5177\u4F53\u4FE1\u606F\uFF0C\u6211\u5C06\u57FA\u4E8E\u5E7F\u6CDB\u8BA4\u53EF\u7684\u4FE1\u606F\u548C\u6211\u7684\u5185\u7F6E\u77E5\u8BC6\u6765\u5C55\u5F00\u8BA8\u8BBA\u3002

### 1. **\u6027\u80FD\u4E0E\u53EF\u6269\u5C55\u6027**

- **Higress**: Higress\u662F\u7531\u963F\u91CC\u5DF4\u5DF4\u5F00\u53D1\u7684\u4E00\u6B3E\u9AD8\u6027\u80FD\u3001\u4E91\u539F\u751F\u7684API\u7F51\u5173\uFF0C\u5B83\u8BBE\u8BA1\u7528\u4E8E\u5904\u7406\u5927\u89C4\u6A21\u670D\u52A1\u7684\u9AD8\u5E76\u53D1\u8BF7\u6C42\uFF0C\u652F\u6301\u81EA\u52A8\u6269\u7F29\u5BB9\u4EE5\u5E94\u5BF9\u6D41\u91CF\u5CF0\u503C\u3002
- **Kong**: Kong\u662F\u4E00\u6B3E\u6D41\u884C\u7684\u5F00\u6E90API\u7F51\u5173\uFF0C\u4EE5\u5176\u7075\u6D3B\u6027\u548C\u6A21\u5757\u5316\u67B6\u6784\u8457\u79F0\u3002\u901A\u8FC7\u63D2\u4EF6\u7CFB\u7EDF\uFF0CKong\u53EF\u4EE5\u8F7B\u677E\u6269\u5C55\u529F\u80FD\uFF0C\u540C\u65F6\u652F\u6301\u6C34\u5E73\u6269\u5C55\u4EE5\u6EE1\u8DB3\u6027\u80FD\u9700\u6C42\u3002

### 2. **\u529F\u80FD\u7279\u6027**

- **Higress**:
  - **\u4E91\u539F\u751F\u96C6\u6210**: \u4E13\u4E3AKubernetes\u7B49\u4E91\u73AF\u5883\u8BBE\u8BA1\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u5BB9\u5668\u5316\u652F\u6301\u3002
  - **\u5B89\u5168\u7279\u6027**: \u652F\u6301OAuth2\u3001JWT\u7B49\u591A\u79CD\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u786E\u4FDDAPI\u7684\u5B89\u5168\u8BBF\u95EE\u3002
  - **\u6D41\u91CF\u7BA1\u7406\u4E0E\u8DEF\u7531**: \u63D0\u4F9B\u7CBE\u7EC6\u7684\u6D41\u91CF\u63A7\u5236\u548C\u52A8\u6001\u8DEF\u7531\u80FD\u529B\u3002

- **Kong**:
  - **\u63D2\u4EF6\u751F\u6001\u7CFB\u7EDF**: Kong\u62E5\u6709\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E93\uFF0C\u6DB5\u76D6\u5B89\u5168\u3001\u76D1\u63A7\u3001\u9650\u6D41\u7B49\u591A\u4E2A\u9886\u57DF\uFF0C\u6613\u4E8E\u5B9A\u5236\u5316\u3002
  - **API\u751F\u547D\u5468\u671F\u7BA1\u7406**: \u63D0\u4F9B\u4ECE\u8BBE\u8BA1\u5230\u9000\u5F79\u7684\u5B8C\u6574API\u751F\u547D\u5468\u671F\u7BA1\u7406\u5DE5\u5177\u3002
  - **\u9AD8\u6027\u80FD\u4EE3\u7406**: \u57FA\u4E8ENGINX\uFF0C\u63D0\u4F9B\u9AD8\u6027\u80FD\u7684HTTP\u548CTCP/UDP\u4EE3\u7406\u80FD\u529B\u3002

### 3. **\u793E\u533A\u4E0E\u652F\u6301**

- **Higress**: \u4F5C\u4E3A\u8F83\u65B0\u7684\u9879\u76EE\uFF0C\u5176\u793E\u533A\u76F8\u8F83\u4E8EKong\u53EF\u80FD\u8F83\u5C0F\uFF0C\u4F46\u80CC\u9760\u963F\u91CC\u5DF4\u5DF4\uFF0C\u6709\u8F83\u5F3A\u7684\u4F01\u4E1A\u7EA7\u652F\u6301\u548C\u670D\u52A1\u80FD\u529B\u3002
- **Kong**: \u62E5\u6709\u5E9E\u5927\u7684\u5F00\u53D1\u8005\u793E\u533A\u548C\u6210\u719F\u7684\u652F\u6301\u4F53\u7CFB\uFF0C\u5305\u62EC\u4F01\u4E1A\u7248Kong Enterprise\uFF0C\u9002\u5408\u5BFB\u6C42\u957F\u671F\u7A33\u5B9A\u652F\u6301\u7684\u7528\u6237\u3002

### \u7ED3\u8BBA

\u9009\u62E9Higress\u8FD8\u662FKong\u53D6\u51B3\u4E8E\u60A8\u7684\u5177\u4F53\u9700\u6C42\uFF1A
- \u5982\u679C\u60A8\u662F\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u5DE5\u4F5C\uFF0C\u8FFD\u6C42\u9AD8\u6027\u80FD\u548C\u6DF1\u5EA6\u96C6\u6210\u4E91\u670D\u52A1\uFF0CHigress\u53EF\u80FD\u662F\u66F4\u4F18\u7684\u9009\u62E9\u3002
- \u82E5\u60A8\u9700\u8981\u9AD8\u5EA6\u7684\u7075\u6D3B\u6027\u3001\u5E7F\u6CDB\u7684\u63D2\u4EF6\u652F\u6301\u4EE5\u53CA\u6210\u719F\u7684\u793E\u533A\u8D44\u6E90\uFF0CKong\u5219\u66F4\u52A0\u5408\u9002\uFF0C\u7279\u522B\u662F\u5F53\u60A8\u7684\u5E94\u7528\u573A\u666F\u9700\u8981\u5927\u91CF\u5B9A\u5236\u5316\u65F6\u3002

\u7531\u4E8E\u7F3A\u4E4F\u76F4\u63A5\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u53C2\u8003\uFF0C\u4EE5\u4E0A\u5206\u6790\u57FA\u4E8E\u516C\u5F00\u4FE1\u606F\u548C\u4E00\u822C\u8BA4\u77E5\u3002\u5982\u9700\u66F4\u6DF1\u5165\u7684\u6280\u672F\u5BF9\u6BD4\u6216\u7279\u5B9A\u573A\u666F\u4E0B\u7684\u5EFA\u8BAE\uFF0C\u8BF7\u8003\u8651\u67E5\u9605\u5B98\u65B9\u6587\u6863\u3001\u793E\u533A\u8BBA\u575B\u6216\u8FDB\u884C\u5B9E\u9645\u6D4B\u8BD5\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress FAQ 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17017)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return o},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u6027\u80FD\u4E0E\u53EF\u6269\u5C55\u6027",text:"1. \u6027\u80FD\u4E0E\u53EF\u6269\u5C55\u6027"},{depth:3,slug:"2-\u529F\u80FD\u7279\u6027",text:"2. \u529F\u80FD\u7279\u6027"},{depth:3,slug:"3-\u793E\u533A\u4E0E\u652F\u6301",text:"3. \u793E\u533A\u4E0E\u652F\u6301"},{depth:3,slug:"\u7ED3\u8BBA",text:"\u7ED3\u8BBA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=a((P,I,H)=>{const{layout:_,...e}=s;return e.file=r,e.url=n,u`${p()}${c(o)}`})});export{t as Content,K as __tla,i as compiledContent,t as default,r as file,s as frontmatter,l as getHeadings,g as rawContent,n as url};
