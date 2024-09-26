import{c,__tla as d}from"./astro-component.CwRucF1h.js";import{r as p,m as u,u as J,__tla as f}from"./constant.RZUI1T9l.js";import{__tla as g}from"./astro/assets-service.Dd3mQuiC.js";let t,a,e,r,n,l,i,T=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u4E2Djwt\u8BA4\u8BC1\u4E2D\u51FA\u73B0jwt verification fails</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u5728Higress\u7684JWT\u8BA4\u8BC1\u4E2D\uFF0C\u9047\u5230\u201DJwt verification fails\u201D\uFF08JWT\u9A8C\u8BC1\u5931\u8D25\uFF09\u7684\u9519\u8BEF\uFF0C\u901A\u5E38\u610F\u5473\u7740JWT\u7684\u6709\u6548\u8F7D\u8377(payload)\u5728\u9A8C\u8BC1\u8FC7\u7A0B\u4E2D\u672A\u901A\u8FC7\u68C0\u67E5\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\uFF0C\u8FD9\u53EF\u80FD\u6D89\u53CA\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u7684\u95EE\u9898\uFF1A</p>
<ol>
<li>
<p><strong>\u7B7E\u53D1\u8005(iss)\u4E0D\u5339\u914D</strong>\uFF1AJWT\u7684\u6709\u6548\u8F7D\u8377\u90E8\u5206\u5305\u542B\u4E00\u4E2A\u58F0\u660E\u201Ciss\u201D\uFF0C\u5B83\u6307\u5B9A\u4E86JWT\u7684\u7B7E\u53D1\u8005\u3002\u5982\u679C\u8FD9\u4E2A\u503C\u4E0E\u914D\u7F6E\u4E2D\u7684\u9884\u671F\u7B7E\u53D1\u8005\u4E0D\u7B26\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u9A8C\u8BC1\u5931\u8D25\u3002\u8BF7\u786E\u4FDDJWT\u4E2D\u7684<code dir="auto">iss</code>\u503C\u4E0E\u4F60\u5728Higress\u914D\u7F6E\u4E2D\u4E3A\u6D88\u8D39\u8005(consumer)\u5B9A\u4E49\u7684<code dir="auto">issuer</code>\u503C\u76F8\u5339\u914D\u3002</p>
</li>
<li>
<p><strong>\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25</strong>\uFF1AJWT\u5305\u542B\u4E00\u4E2A\u7B7E\u540D\u90E8\u5206\uFF0C\u5B83\u662F\u57FA\u4E8EJWT\u5934\u90E8(header)\u3001\u6709\u6548\u8F7D\u8377(payload)\u4EE5\u53CA\u4E00\u4E2A\u5BC6\u94A5\u4F7F\u7528\u6307\u5B9A\u7B97\u6CD5\u8BA1\u7B97\u5F97\u51FA\u7684\u3002\u5982\u679C\u7B7E\u540D\u65E0\u6CD5\u4F7F\u7528\u914D\u7F6E\u4E2D\u7684\u516C\u94A5\u6216\u5171\u4EAB\u5BC6\u94A5\u6B63\u786E\u9A8C\u8BC1\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u6B64\u9519\u8BEF\u3002\u9700\u8981\u68C0\u67E5\u4F60\u7684<code dir="auto">jwks</code>\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u4E14\u4E0E\u751F\u6210JWT\u65F6\u4F7F\u7528\u7684\u79C1\u94A5\u6216\u5BC6\u94A5\u5BF9\u5F97\u4E0A\u3002</p>
</li>
<li>
<p><strong>\u65F6\u95F4\u6709\u6548\u6027\u95EE\u9898</strong>\uFF1AJWT\u5305\u542B<code dir="auto">iat</code>\uFF08issued at\uFF09\u548C<code dir="auto">exp</code>\uFF08expiration time\uFF09\u58F0\u660E\uFF0C\u5206\u522B\u4EE3\u8868\u7B7E\u53D1\u65F6\u95F4\u548C\u8FC7\u671F\u65F6\u95F4\u3002\u5982\u679C\u5F53\u524D\u65F6\u95F4\u4E0D\u5728\u8FD9\u4E24\u4E2A\u65F6\u95F4\u6233\u4E4B\u95F4\uFF0CJWT\u4E5F\u4F1A\u88AB\u89C6\u4E3A\u65E0\u6548\u3002</p>
</li>
<li>
<p><strong>\u7B97\u6CD5\u4E0D\u5339\u914D</strong>\uFF1AJWT\u5934\u90E8\u58F0\u660E\u4E86\u7528\u4E8E\u7B7E\u540D\u7684\u7B97\u6CD5(<code dir="auto">alg</code>)\uFF0C\u5982\u679C\u8FD9\u4E2A\u7B97\u6CD5\u4E0E\u914D\u7F6E\u4E2D\u671F\u671B\u7684\u7B97\u6CD5\u4E0D\u540C\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u9A8C\u8BC1\u5931\u8D25\u3002\u8BF7\u786E\u4FDD\u914D\u7F6E\u4E2D\u7684\u7B97\u6CD5\u4E0EJWT\u5B9E\u9645\u4F7F\u7528\u7684\u7B97\u6CD5\u4E00\u81F4\u3002</p>
</li>
</ol>
<p><strong>\u89E3\u51B3\u6B65\u9AA4</strong>\uFF1A</p>
<p>\u7531\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u7ED9\u51FA\u89E3\u51B3\u8FD9\u7C7B\u9519\u8BEF\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u6211\u5C06\u57FA\u4E8E\u4E0A\u8FF0\u5206\u6790\u63D0\u4F9B\u4E00\u822C\u6027\u7684\u6307\u5BFC\u6B65\u9AA4\uFF1A</p>
<ol>
<li>
<p><strong>\u68C0\u67E5JWT\u7ED3\u6784</strong>\uFF1A\u9996\u5148\uFF0C\u4F7F\u7528\u5728\u7EBF\u5DE5\u5177\uFF08\u5982jwt.io\uFF09\u89E3\u6790\u51FA\u9519\u7684JWT\uFF0C\u4ED4\u7EC6\u6838\u5BF9\u5176<code dir="auto">iss</code>\u3001<code dir="auto">exp</code>\u3001<code dir="auto">iat</code>\u7B49\u5B57\u6BB5\u7684\u503C\uFF0C\u786E\u4FDD\u5B83\u4EEC\u4E0EHigress\u914D\u7F6E\u76F8\u5339\u914D\u3002</p>
</li>
<li>
<p><strong>\u9A8C\u8BC1\u7B7E\u53D1\u8005(iss)</strong>\uFF1A\u786E\u8BA4JWT\u4E2D\u7684<code dir="auto">iss</code>\u5B57\u6BB5\u4E0E\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684<code dir="auto">consumer</code>\u7684<code dir="auto">issuer</code>\u503C\u5B8C\u5168\u4E00\u81F4\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u9700\u8981\u4FEE\u6539JWT\u7684\u7B7E\u53D1\u903B\u8F91\u6216\u8C03\u6574Higress\u7684\u914D\u7F6E\u3002</p>
</li>
<li>
<p><strong>\u6821\u9A8C\u7B97\u6CD5\u4E0E\u5BC6\u94A5</strong>\uFF1A</p>
<ul>
<li>\u786E\u8BA4JWT\u5934\u90E8\u7684<code dir="auto">alg</code>\u4E0E\u914D\u7F6E\u7684<code dir="auto">jwks</code>\u4E2D\u7684\u7B97\u6CD5\u5339\u914D\u3002</li>
<li>\u68C0\u67E5<code dir="auto">jwks</code>\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u7279\u522B\u662F\u5BC6\u94A5\uFF08<code dir="auto">k</code>\u6216<code dir="auto">n</code>\u548C<code dir="auto">e</code>\u5BF9\u4E8ERSA\u5BC6\u94A5\uFF09\u662F\u5426\u4E0E\u751F\u6210JWT\u7684\u79C1\u94A5\u76F8\u5BF9\u5E94\u3002</li>
<li>\u5982\u679C\u4F7F\u7528\u7684\u662F\u5BF9\u79F0\u52A0\u5BC6\uFF08\u5982HS256\uFF09\uFF0C\u786E\u4FDD\u7528\u6765\u9A8C\u8BC1\u7B7E\u540D\u7684\u5BC6\u94A5\u4E0E\u751F\u6210JWT\u65F6\u4F7F\u7528\u7684\u5BC6\u94A5\u5B8C\u5168\u4E00\u81F4\u3002</li>
</ul>
</li>
<li>
<p><strong>\u65F6\u95F4\u9A8C\u8BC1</strong>\uFF1A\u786E\u8BA4JWT\u7684\u5F53\u524D\u65F6\u95F4\u5728\u5176\u6709\u6548\u671F\u5185\u3002\u5982\u679CJWT\u5DF2\u8FC7\u671F\u6216\u5C1A\u672A\u751F\u6548\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6\u4E00\u4E2A\u6709\u6548\u7684JWT\u3002</p>
</li>
<li>
<p><strong>\u6D4B\u8BD5\u4E0E\u8C03\u8BD5</strong>\uFF1A\u5728\u8FDB\u884C\u4E0A\u8FF0\u66F4\u6539\u540E\uFF0C\u4F7F\u7528\u4E4B\u524D\u63D0\u5230\u7684curl\u547D\u4EE4\u6216\u5176\u4ED6\u65B9\u5F0F\u518D\u6B21\u5C1D\u8BD5\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u89C2\u5BDF\u662F\u5426\u8FD8\u5B58\u5728\u540C\u6837\u7684\u9519\u8BEF\u3002</p>
</li>
</ol>
<p><strong>\u89E3\u91CA</strong>\uFF1A\u4E0A\u8FF0\u6B65\u9AA4\u65E8\u5728\u9010\u4E00\u6392\u67E5\u5E76\u89E3\u51B3\u53EF\u80FD\u5BFC\u81F4JWT\u9A8C\u8BC1\u5931\u8D25\u7684\u5E38\u89C1\u539F\u56E0\u3002\u4ECE\u9A8C\u8BC1JWT\u7684\u57FA\u672C\u7ED3\u6784\u5230\u5177\u4F53\u5B57\u6BB5\u7684\u5339\u914D\uFF0C\u518D\u5230\u6280\u672F\u7EC6\u8282\u5982\u7B97\u6CD5\u4E0E\u5BC6\u94A5\u7684\u6821\u9A8C\uFF0C\u90FD\u662F\u4E3A\u4E86\u786E\u4FDDJWT\u5728Higress\u7684\u8BA4\u8BC1\u6D41\u7A0B\u4E2D\u80FD\u591F\u88AB\u6B63\u786E\u89E3\u6790\u548C\u9A8C\u8BC1\uFF0C\u4ECE\u800C\u907F\u514D\u201CJwt verification fails\u201D\u9519\u8BEF\u7684\u53D1\u751F\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress JWT \u8BA4\u8BC1</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17016" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,r={id:"question-history-17003",title:"higress\u4E2Djwt\u8BA4\u8BC1\u4E2D\u51FA\u73B0jwt verification fails",date:"2024-09-26",category:"expertConsultation",description:"\u5728Higress\u7684JWT\u8BA4\u8BC1\u4E2D\uFF0C\u9047\u5230Jwt verification fails\uFF08JWT\u9A8C\u8BC1\u5931\u8D25\uFF09\u7684\u9519\u8BEF\uFF0C\u901A\u5E38\u610F\u5473\u7740JWT\u7684\u6709\u6548\u8F7D\u8377(payload)\u5728\u9A8C\u8BC1\u8FC7\u7A0B\u4E2D\u672A\u901A\u8FC7\u68C0\u67E5\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\uFF0C\u8FD9\u53EF\u80FD\u6D89\u53CA\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u7684\u95EE\u9898\uFF1A1. **\u7B7E\u53D1\u8005(iss)\u4E0D\u5339\u914D**\uFF1AJWT\u7684\u6709\u6548\u8F7D\u8377\u90E8\u5206\u5305\u542B\u4E00\u4E2A\u58F0\u660E\u201Ciss\u201D",tags:["higress","jwt","\u8BA4\u8BC1","\u5931\u8D25","verification","\u6545\u969C\u5206\u6790"],keywords:["higress","jwt","\u8BA4\u8BC1","\u5931\u8D25","verification","\u6545\u969C\u5206\u6790"]},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17003.md",i=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u4E2Djwt\u8BA4\u8BC1\u4E2D\u51FA\u73B0jwt verification fails  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u5728Higress\u7684JWT\u8BA4\u8BC1\u4E2D\uFF0C\u9047\u5230"Jwt verification fails"\uFF08JWT\u9A8C\u8BC1\u5931\u8D25\uFF09\u7684\u9519\u8BEF\uFF0C\u901A\u5E38\u610F\u5473\u7740JWT\u7684\u6709\u6548\u8F7D\u8377(payload)\u5728\u9A8C\u8BC1\u8FC7\u7A0B\u4E2D\u672A\u901A\u8FC7\u68C0\u67E5\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\uFF0C\u8FD9\u53EF\u80FD\u6D89\u53CA\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u7684\u95EE\u9898\uFF1A

1. **\u7B7E\u53D1\u8005(iss)\u4E0D\u5339\u914D**\uFF1AJWT\u7684\u6709\u6548\u8F7D\u8377\u90E8\u5206\u5305\u542B\u4E00\u4E2A\u58F0\u660E\u201Ciss\u201D\uFF0C\u5B83\u6307\u5B9A\u4E86JWT\u7684\u7B7E\u53D1\u8005\u3002\u5982\u679C\u8FD9\u4E2A\u503C\u4E0E\u914D\u7F6E\u4E2D\u7684\u9884\u671F\u7B7E\u53D1\u8005\u4E0D\u7B26\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u9A8C\u8BC1\u5931\u8D25\u3002\u8BF7\u786E\u4FDDJWT\u4E2D\u7684\`iss\`\u503C\u4E0E\u4F60\u5728Higress\u914D\u7F6E\u4E2D\u4E3A\u6D88\u8D39\u8005(consumer)\u5B9A\u4E49\u7684\`issuer\`\u503C\u76F8\u5339\u914D\u3002

2. **\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25**\uFF1AJWT\u5305\u542B\u4E00\u4E2A\u7B7E\u540D\u90E8\u5206\uFF0C\u5B83\u662F\u57FA\u4E8EJWT\u5934\u90E8(header)\u3001\u6709\u6548\u8F7D\u8377(payload)\u4EE5\u53CA\u4E00\u4E2A\u5BC6\u94A5\u4F7F\u7528\u6307\u5B9A\u7B97\u6CD5\u8BA1\u7B97\u5F97\u51FA\u7684\u3002\u5982\u679C\u7B7E\u540D\u65E0\u6CD5\u4F7F\u7528\u914D\u7F6E\u4E2D\u7684\u516C\u94A5\u6216\u5171\u4EAB\u5BC6\u94A5\u6B63\u786E\u9A8C\u8BC1\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u6B64\u9519\u8BEF\u3002\u9700\u8981\u68C0\u67E5\u4F60\u7684\`jwks\`\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u4E14\u4E0E\u751F\u6210JWT\u65F6\u4F7F\u7528\u7684\u79C1\u94A5\u6216\u5BC6\u94A5\u5BF9\u5F97\u4E0A\u3002

3. **\u65F6\u95F4\u6709\u6548\u6027\u95EE\u9898**\uFF1AJWT\u5305\u542B\`iat\`\uFF08issued at\uFF09\u548C\`exp\`\uFF08expiration time\uFF09\u58F0\u660E\uFF0C\u5206\u522B\u4EE3\u8868\u7B7E\u53D1\u65F6\u95F4\u548C\u8FC7\u671F\u65F6\u95F4\u3002\u5982\u679C\u5F53\u524D\u65F6\u95F4\u4E0D\u5728\u8FD9\u4E24\u4E2A\u65F6\u95F4\u6233\u4E4B\u95F4\uFF0CJWT\u4E5F\u4F1A\u88AB\u89C6\u4E3A\u65E0\u6548\u3002

4. **\u7B97\u6CD5\u4E0D\u5339\u914D**\uFF1AJWT\u5934\u90E8\u58F0\u660E\u4E86\u7528\u4E8E\u7B7E\u540D\u7684\u7B97\u6CD5(\`alg\`)\uFF0C\u5982\u679C\u8FD9\u4E2A\u7B97\u6CD5\u4E0E\u914D\u7F6E\u4E2D\u671F\u671B\u7684\u7B97\u6CD5\u4E0D\u540C\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u9A8C\u8BC1\u5931\u8D25\u3002\u8BF7\u786E\u4FDD\u914D\u7F6E\u4E2D\u7684\u7B97\u6CD5\u4E0EJWT\u5B9E\u9645\u4F7F\u7528\u7684\u7B97\u6CD5\u4E00\u81F4\u3002

**\u89E3\u51B3\u6B65\u9AA4**\uFF1A

\u7531\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u7ED9\u51FA\u89E3\u51B3\u8FD9\u7C7B\u9519\u8BEF\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u6211\u5C06\u57FA\u4E8E\u4E0A\u8FF0\u5206\u6790\u63D0\u4F9B\u4E00\u822C\u6027\u7684\u6307\u5BFC\u6B65\u9AA4\uFF1A

1. **\u68C0\u67E5JWT\u7ED3\u6784**\uFF1A\u9996\u5148\uFF0C\u4F7F\u7528\u5728\u7EBF\u5DE5\u5177\uFF08\u5982jwt.io\uFF09\u89E3\u6790\u51FA\u9519\u7684JWT\uFF0C\u4ED4\u7EC6\u6838\u5BF9\u5176\`iss\`\u3001\`exp\`\u3001\`iat\`\u7B49\u5B57\u6BB5\u7684\u503C\uFF0C\u786E\u4FDD\u5B83\u4EEC\u4E0EHigress\u914D\u7F6E\u76F8\u5339\u914D\u3002

2. **\u9A8C\u8BC1\u7B7E\u53D1\u8005(iss)**\uFF1A\u786E\u8BA4JWT\u4E2D\u7684\`iss\`\u5B57\u6BB5\u4E0E\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\`consumer\`\u7684\`issuer\`\u503C\u5B8C\u5168\u4E00\u81F4\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u9700\u8981\u4FEE\u6539JWT\u7684\u7B7E\u53D1\u903B\u8F91\u6216\u8C03\u6574Higress\u7684\u914D\u7F6E\u3002

3. **\u6821\u9A8C\u7B97\u6CD5\u4E0E\u5BC6\u94A5**\uFF1A
   - \u786E\u8BA4JWT\u5934\u90E8\u7684\`alg\`\u4E0E\u914D\u7F6E\u7684\`jwks\`\u4E2D\u7684\u7B97\u6CD5\u5339\u914D\u3002
   - \u68C0\u67E5\`jwks\`\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u7279\u522B\u662F\u5BC6\u94A5\uFF08\`k\`\u6216\`n\`\u548C\`e\`\u5BF9\u4E8ERSA\u5BC6\u94A5\uFF09\u662F\u5426\u4E0E\u751F\u6210JWT\u7684\u79C1\u94A5\u76F8\u5BF9\u5E94\u3002
   - \u5982\u679C\u4F7F\u7528\u7684\u662F\u5BF9\u79F0\u52A0\u5BC6\uFF08\u5982HS256\uFF09\uFF0C\u786E\u4FDD\u7528\u6765\u9A8C\u8BC1\u7B7E\u540D\u7684\u5BC6\u94A5\u4E0E\u751F\u6210JWT\u65F6\u4F7F\u7528\u7684\u5BC6\u94A5\u5B8C\u5168\u4E00\u81F4\u3002

4. **\u65F6\u95F4\u9A8C\u8BC1**\uFF1A\u786E\u8BA4JWT\u7684\u5F53\u524D\u65F6\u95F4\u5728\u5176\u6709\u6548\u671F\u5185\u3002\u5982\u679CJWT\u5DF2\u8FC7\u671F\u6216\u5C1A\u672A\u751F\u6548\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6\u4E00\u4E2A\u6709\u6548\u7684JWT\u3002

5. **\u6D4B\u8BD5\u4E0E\u8C03\u8BD5**\uFF1A\u5728\u8FDB\u884C\u4E0A\u8FF0\u66F4\u6539\u540E\uFF0C\u4F7F\u7528\u4E4B\u524D\u63D0\u5230\u7684curl\u547D\u4EE4\u6216\u5176\u4ED6\u65B9\u5F0F\u518D\u6B21\u5C1D\u8BD5\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u89C2\u5BDF\u662F\u5426\u8FD8\u5B58\u5728\u540C\u6837\u7684\u9519\u8BEF\u3002

**\u89E3\u91CA**\uFF1A\u4E0A\u8FF0\u6B65\u9AA4\u65E8\u5728\u9010\u4E00\u6392\u67E5\u5E76\u89E3\u51B3\u53EF\u80FD\u5BFC\u81F4JWT\u9A8C\u8BC1\u5931\u8D25\u7684\u5E38\u89C1\u539F\u56E0\u3002\u4ECE\u9A8C\u8BC1JWT\u7684\u57FA\u672C\u7ED3\u6784\u5230\u5177\u4F53\u5B57\u6BB5\u7684\u5339\u914D\uFF0C\u518D\u5230\u6280\u672F\u7EC6\u8282\u5982\u7B97\u6CD5\u4E0E\u5BC6\u94A5\u7684\u6821\u9A8C\uFF0C\u90FD\u662F\u4E3A\u4E86\u786E\u4FDDJWT\u5728Higress\u7684\u8BA4\u8BC1\u6D41\u7A0B\u4E2D\u80FD\u591F\u88AB\u6B63\u786E\u89E3\u6790\u548C\u9A8C\u8BC1\uFF0C\u4ECE\u800C\u907F\u514D\u201CJwt verification fails\u201D\u9519\u8BEF\u7684\u53D1\u751F\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress JWT \u8BA4\u8BC1 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17016)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},a=function(){return o},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=c((W,h,w)=>{const{layout:m,...s}=r;return s.file=e,s.url=i,p`${u()}${J(o)}`})});export{t as Content,T as __tla,a as compiledContent,t as default,e as file,r as frontmatter,n as getHeadings,l as rawContent,i as url};
