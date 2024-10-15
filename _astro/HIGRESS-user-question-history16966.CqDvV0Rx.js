import{c as g,__tla as h}from"./astro-component.BNo6A4i3.js";import{r as c,m as p,u as d,__tla as u}from"./constant.BrqYsSoD.js";import{__tla as f}from"./astro/assets-service.lesyujvn.js";let r,l,t,s,n,a,e,O=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u914D\u7F6E\u4E0D\u751F\u6548\u6392\u67E5</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\u300Chigress higress\u914D\u7F6E\u4E0D\u751F\u6548\u6392\u67E5\u300D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E{{{\u77E5\u8BC6: #higress CORS \u914D\u7F6E}}}\u4E2D\u7684\u4FE1\u606F\u6765\u8FDB\u884C\u5206\u6790\u548C\u89E3\u7B54\u3002</p>
<h3 id="\u95EE\u9898\u5206\u6790">\u95EE\u9898\u5206\u6790\uFF1A</h3>
<p>\u5F53Higress\u7684CORS\u914D\u7F6E\u4E0D\u751F\u6548\u65F6\uFF0C\u53EF\u80FD\u7684\u539F\u56E0\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A</p>
<ol>
<li><strong>\u914D\u7F6E\u9519\u8BEF</strong>\uFF1A\u53EF\u80FD\u662F\u914D\u7F6E\u683C\u5F0F\u6709\u8BEF\uFF0C\u6216\u8005\u8BBE\u7F6E\u7684\u5B57\u6BB5\u503C\u4E0D\u7B26\u5408\u9884\u671F\u3002</li>
<li><strong>\u91CD\u542F\u95EE\u9898</strong>\uFF1A\u914D\u7F6E\u66F4\u6539\u540E\uFF0C\u670D\u52A1\u6CA1\u6709\u88AB\u6B63\u786E\u5730\u91CD\u542F\u6216\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u3002</li>
<li><strong>\u4F5C\u7528\u57DF\u95EE\u9898</strong>\uFF1A\u914D\u7F6E\u53EF\u80FD\u672A\u6B63\u786E\u5E94\u7528\u4E8E\u76EE\u6807\u8DEF\u7531\u6216\u670D\u52A1\u3002</li>
<li><strong>\u6D4F\u89C8\u5668\u7F13\u5B58</strong>\uFF1A\u6709\u65F6\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u65E7\u7684CORS\u7B56\u7565\uFF0C\u5BFC\u81F4\u65B0\u914D\u7F6E\u770B\u8D77\u6765\u672A\u751F\u6548\u3002</li>
<li><strong>\u8BF7\u6C42\u7C7B\u578B</strong>\uFF1A\u786E\u4FDD\u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\u8FD8\u662F\u9700\u8981\u9884\u68C0\u8BF7\u6C42\uFF08Preflight Request\uFF09\uFF0C\u5E76\u68C0\u67E5\u662F\u5426\u90FD\u6309\u7167\u9884\u671F\u914D\u7F6E\u3002</li>
</ol>
<h3 id="\u6392\u67E5\u6B65\u9AA4">\u6392\u67E5\u6B65\u9AA4\uFF1A</h3>
<p>\u7531\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u5177\u4F53\u7684\u6392\u67E5\u6B65\u9AA4\uFF0C\u6211\u5C06\u57FA\u4E8E\u5E38\u89C1\u7684\u6545\u969C\u6392\u67E5\u903B\u8F91\u4E3A\u60A8\u63D0\u4F9B\u6307\u5BFC\uFF1A</p>
<ol>
<li>
<p><strong>\u5BA1\u67E5\u914D\u7F6E</strong>\uFF1A\u9996\u5148\uFF0C\u4ED4\u7EC6\u68C0\u67E5\u60A8\u7684Higress\u914D\u7F6E\u6587\u4EF6\uFF0C\u786E\u8BA4<code dir="auto">allow_origins</code>\u3001<code dir="auto">allow_methods</code>\u3001<code dir="auto">allow_headers</code>\u7B49CORS\u76F8\u5173\u914D\u7F6E\u9879\u662F\u5426\u6B63\u786E\u8BBE\u7F6E\uFF0C\u5E76\u7B26\u5408\u9884\u671F\u7684\u8BF7\u6C42\u9700\u6C42\u3002\u8BF7\u7279\u522B\u6CE8\u610F\u662F\u5426\u6709\u8BED\u6CD5\u9519\u8BEF\u6216\u9057\u6F0F\u7684\u5FC5\u8981\u914D\u7F6E\u3002</p>
</li>
<li>
<p><strong>\u91CD\u542F\u670D\u52A1</strong>\uFF1A\u5B8C\u6210\u914D\u7F6E\u4FEE\u6539\u540E\uFF0C\u786E\u4FDD\u91CD\u542FHigress\u670D\u52A1\u4EE5\u5E94\u7528\u65B0\u7684\u914D\u7F6E\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u670D\u52A1\u7BA1\u7406\u547D\u4EE4\uFF08\u5982<code dir="auto">systemctl restart higress</code>\uFF0C\u5177\u4F53\u547D\u4EE4\u4F9D\u636E\u60A8\u7684\u73AF\u5883\u800C\u5B9A\uFF09\u6765\u5B9E\u73B0\u3002</p>
</li>
<li>
<p><strong>\u9A8C\u8BC1\u914D\u7F6E</strong>\uFF1A\u4F7F\u7528<code dir="auto">curl</code>\u547D\u4EE4\u6216Postman\u7B49\u5DE5\u5177\uFF0C\u6A21\u62DF\u53D1\u51FA\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u89C2\u5BDF\u54CD\u5E94\u5934\u4E2D\u662F\u5426\u5305\u542B\u4E86\u9884\u671F\u7684CORS\u76F8\u5173\u5934\u90E8\uFF0C\u5982<code dir="auto">Access-Control-Allow-Origin</code>\u3002\u8FD9\u6709\u52A9\u4E8E\u786E\u8BA4\u914D\u7F6E\u662F\u5426\u751F\u6548\u3002</p>
</li>
<li>
<p><strong>\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58</strong>\uFF1A\u5982\u679C\u662F\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u5C1D\u8BD5\u6E05\u9664\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u548CCookies\uFF0C\u907F\u514D\u56E0\u6D4F\u89C8\u5668\u7F13\u5B58\u65E7\u7684CORS\u7B56\u7565\u800C\u5F71\u54CD\u6D4B\u8BD5\u7ED3\u679C\u3002</p>
</li>
<li>
<p><strong>\u65E5\u5FD7\u68C0\u67E5</strong>\uFF1A\u67E5\u770BHigress\u7684\u670D\u52A1\u65E5\u5FD7\uFF0C\u67E5\u627E\u4E0ECORS\u76F8\u5173\u7684\u9519\u8BEF\u6216\u8B66\u544A\u4FE1\u606F\u3002\u8FD9\u53EF\u80FD\u4F1A\u76F4\u63A5\u6307\u5411\u95EE\u9898\u6240\u5728\u3002</p>
</li>
<li>
<p><strong>\u7279\u5B9A\u573A\u666F\u68C0\u67E5</strong>\uFF1A\u5982\u679C\u6D89\u53CA\u5230\u9884\u68C0\u8BF7\u6C42\uFF0C\u8BF7\u786E\u4FDD<code dir="auto">OPTIONS</code>\u65B9\u6CD5\u4E5F\u88AB\u660E\u786E\u5141\u8BB8\uFF0C\u5E76\u4E14\u9884\u68C0\u8BF7\u6C42\u7684\u54CD\u5E94\u4E2D\u5305\u542B\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5934\u90E8\u3002</p>
</li>
</ol>
<h3 id="\u89E3\u91CA\u8BF4\u660E">\u89E3\u91CA\u8BF4\u660E\uFF1A</h3>
<p>\u4E0A\u8FF0\u6B65\u9AA4\u65E8\u5728\u7CFB\u7EDF\u6027\u5730\u6392\u67E5\u548C\u89E3\u51B3CORS\u914D\u7F6E\u4E0D\u751F\u6548\u7684\u95EE\u9898\uFF0C\u4ECE\u57FA\u672C\u7684\u914D\u7F6E\u590D\u67E5\u5230\u6DF1\u5165\u7684\u65E5\u5FD7\u5206\u6790\uFF0C\u6BCF\u4E00\u6B65\u90FD\u662F\u4E3A\u4E86\u5B9A\u4F4D\u95EE\u9898\u6839\u6E90\u5E76\u91C7\u53D6\u76F8\u5E94\u63AA\u65BD\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u60A8\u53EF\u4EE5\u9010\u6B65\u7F29\u5C0F\u95EE\u9898\u8303\u56F4\uFF0C\u76F4\u81F3\u627E\u5230\u5E76\u89E3\u51B3\u95EE\u9898\u3002\u5982\u679C\u5728\u6267\u884C\u8FD9\u4E9B\u6B65\u9AA4\u540E\u95EE\u9898\u4ECD\u672A\u89E3\u51B3\uFF0C\u5EFA\u8BAE\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u6216\u793E\u533A\u8BBA\u575B\uFF0C\u83B7\u53D6\u66F4\u8FDB\u4E00\u6B65\u7684\u5E2E\u52A9\u6216\u62A5\u544A\u53EF\u80FD\u5B58\u5728\u7684bug\u3002</p>
<p>\u8BF7\u6CE8\u610F\uFF0C\u867D\u7136\u8FD9\u91CC\u6CA1\u6709\u76F4\u63A5\u5F15\u7528\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u7684\u94FE\u63A5\uFF0C\u4F46\u4E0A\u8FF0\u89E3\u7B54\u662F\u57FA\u4E8ECORS\u914D\u7F6E\u7684\u57FA\u672C\u539F\u7406\u548C\u5E38\u89C1\u95EE\u9898\u89E3\u51B3\u7B56\u7565\uFF0C\u8FD9\u4E9B\u7B56\u7565\u666E\u904D\u9002\u7528\u4E8E\u7C7B\u4F3CHigress\u8FD9\u6837\u7684\u4EE3\u7406\u670D\u52A1\u914D\u7F6E\u8C03\u8BD5\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress CORS \u914D\u7F6E</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16972" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-16966",title:"higress\u914D\u7F6E\u4E0D\u751F\u6548\u6392\u67E5",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\u300Chigress higress\u914D\u7F6E\u4E0D\u751F\u6548\u6392\u67E5\u300D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u77E5\u8BC6: #higress CORS \u914D\u7F6E\u4E2D\u7684\u4FE1\u606F\u6765\u8FDB\u884C\u5206\u6790\u548C\u89E3\u7B54\u3002### \u95EE\u9898\u5206\u6790\uFF1A\u5F53Higress\u7684CORS\u914D\u7F6E\u4E0D\u751F\u6548\u65F6\uFF0C\u53EF\u80FD\u7684\u539F\u56E0\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A1. **\u914D\u7F6E\u9519\u8BEF**\uFF1A\u53EF\u80FD\u662F\u914D\u7F6E\u683C\u5F0F\u6709\u8BEF\uFF0C\u6216\u8005\u8BBE\u7F6E\u7684\u5B57\u6BB5\u503C\u4E0D\u7B26\u5408\u9884\u671F\u30022",tags:["higress","\u914D\u7F6E","\u4E0D\u751F\u6548","\u6392\u67E5"],keywords:["higress","\u914D\u7F6E","\u4E0D\u751F\u6548","\u6392\u67E5"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16966.md",e=void 0,a=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u914D\u7F6E\u4E0D\u751F\u6548\u6392\u67E5  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\u300Chigress higress\u914D\u7F6E\u4E0D\u751F\u6548\u6392\u67E5\u300D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E{{{\u77E5\u8BC6: #higress CORS \u914D\u7F6E}}}\u4E2D\u7684\u4FE1\u606F\u6765\u8FDB\u884C\u5206\u6790\u548C\u89E3\u7B54\u3002

### \u95EE\u9898\u5206\u6790\uFF1A
\u5F53Higress\u7684CORS\u914D\u7F6E\u4E0D\u751F\u6548\u65F6\uFF0C\u53EF\u80FD\u7684\u539F\u56E0\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A
1. **\u914D\u7F6E\u9519\u8BEF**\uFF1A\u53EF\u80FD\u662F\u914D\u7F6E\u683C\u5F0F\u6709\u8BEF\uFF0C\u6216\u8005\u8BBE\u7F6E\u7684\u5B57\u6BB5\u503C\u4E0D\u7B26\u5408\u9884\u671F\u3002
2. **\u91CD\u542F\u95EE\u9898**\uFF1A\u914D\u7F6E\u66F4\u6539\u540E\uFF0C\u670D\u52A1\u6CA1\u6709\u88AB\u6B63\u786E\u5730\u91CD\u542F\u6216\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u3002
3. **\u4F5C\u7528\u57DF\u95EE\u9898**\uFF1A\u914D\u7F6E\u53EF\u80FD\u672A\u6B63\u786E\u5E94\u7528\u4E8E\u76EE\u6807\u8DEF\u7531\u6216\u670D\u52A1\u3002
4. **\u6D4F\u89C8\u5668\u7F13\u5B58**\uFF1A\u6709\u65F6\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u65E7\u7684CORS\u7B56\u7565\uFF0C\u5BFC\u81F4\u65B0\u914D\u7F6E\u770B\u8D77\u6765\u672A\u751F\u6548\u3002
5. **\u8BF7\u6C42\u7C7B\u578B**\uFF1A\u786E\u4FDD\u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\u8FD8\u662F\u9700\u8981\u9884\u68C0\u8BF7\u6C42\uFF08Preflight Request\uFF09\uFF0C\u5E76\u68C0\u67E5\u662F\u5426\u90FD\u6309\u7167\u9884\u671F\u914D\u7F6E\u3002

### \u6392\u67E5\u6B65\u9AA4\uFF1A
\u7531\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u5177\u4F53\u7684\u6392\u67E5\u6B65\u9AA4\uFF0C\u6211\u5C06\u57FA\u4E8E\u5E38\u89C1\u7684\u6545\u969C\u6392\u67E5\u903B\u8F91\u4E3A\u60A8\u63D0\u4F9B\u6307\u5BFC\uFF1A

1. **\u5BA1\u67E5\u914D\u7F6E**\uFF1A\u9996\u5148\uFF0C\u4ED4\u7EC6\u68C0\u67E5\u60A8\u7684Higress\u914D\u7F6E\u6587\u4EF6\uFF0C\u786E\u8BA4\`allow_origins\`\u3001\`allow_methods\`\u3001\`allow_headers\`\u7B49CORS\u76F8\u5173\u914D\u7F6E\u9879\u662F\u5426\u6B63\u786E\u8BBE\u7F6E\uFF0C\u5E76\u7B26\u5408\u9884\u671F\u7684\u8BF7\u6C42\u9700\u6C42\u3002\u8BF7\u7279\u522B\u6CE8\u610F\u662F\u5426\u6709\u8BED\u6CD5\u9519\u8BEF\u6216\u9057\u6F0F\u7684\u5FC5\u8981\u914D\u7F6E\u3002

2. **\u91CD\u542F\u670D\u52A1**\uFF1A\u5B8C\u6210\u914D\u7F6E\u4FEE\u6539\u540E\uFF0C\u786E\u4FDD\u91CD\u542FHigress\u670D\u52A1\u4EE5\u5E94\u7528\u65B0\u7684\u914D\u7F6E\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u670D\u52A1\u7BA1\u7406\u547D\u4EE4\uFF08\u5982\`systemctl restart higress\`\uFF0C\u5177\u4F53\u547D\u4EE4\u4F9D\u636E\u60A8\u7684\u73AF\u5883\u800C\u5B9A\uFF09\u6765\u5B9E\u73B0\u3002

3. **\u9A8C\u8BC1\u914D\u7F6E**\uFF1A\u4F7F\u7528\`curl\`\u547D\u4EE4\u6216Postman\u7B49\u5DE5\u5177\uFF0C\u6A21\u62DF\u53D1\u51FA\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u89C2\u5BDF\u54CD\u5E94\u5934\u4E2D\u662F\u5426\u5305\u542B\u4E86\u9884\u671F\u7684CORS\u76F8\u5173\u5934\u90E8\uFF0C\u5982\`Access-Control-Allow-Origin\`\u3002\u8FD9\u6709\u52A9\u4E8E\u786E\u8BA4\u914D\u7F6E\u662F\u5426\u751F\u6548\u3002

4. **\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58**\uFF1A\u5982\u679C\u662F\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u5C1D\u8BD5\u6E05\u9664\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u548CCookies\uFF0C\u907F\u514D\u56E0\u6D4F\u89C8\u5668\u7F13\u5B58\u65E7\u7684CORS\u7B56\u7565\u800C\u5F71\u54CD\u6D4B\u8BD5\u7ED3\u679C\u3002

5. **\u65E5\u5FD7\u68C0\u67E5**\uFF1A\u67E5\u770BHigress\u7684\u670D\u52A1\u65E5\u5FD7\uFF0C\u67E5\u627E\u4E0ECORS\u76F8\u5173\u7684\u9519\u8BEF\u6216\u8B66\u544A\u4FE1\u606F\u3002\u8FD9\u53EF\u80FD\u4F1A\u76F4\u63A5\u6307\u5411\u95EE\u9898\u6240\u5728\u3002

6. **\u7279\u5B9A\u573A\u666F\u68C0\u67E5**\uFF1A\u5982\u679C\u6D89\u53CA\u5230\u9884\u68C0\u8BF7\u6C42\uFF0C\u8BF7\u786E\u4FDD\`OPTIONS\`\u65B9\u6CD5\u4E5F\u88AB\u660E\u786E\u5141\u8BB8\uFF0C\u5E76\u4E14\u9884\u68C0\u8BF7\u6C42\u7684\u54CD\u5E94\u4E2D\u5305\u542B\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5934\u90E8\u3002

### \u89E3\u91CA\u8BF4\u660E\uFF1A
\u4E0A\u8FF0\u6B65\u9AA4\u65E8\u5728\u7CFB\u7EDF\u6027\u5730\u6392\u67E5\u548C\u89E3\u51B3CORS\u914D\u7F6E\u4E0D\u751F\u6548\u7684\u95EE\u9898\uFF0C\u4ECE\u57FA\u672C\u7684\u914D\u7F6E\u590D\u67E5\u5230\u6DF1\u5165\u7684\u65E5\u5FD7\u5206\u6790\uFF0C\u6BCF\u4E00\u6B65\u90FD\u662F\u4E3A\u4E86\u5B9A\u4F4D\u95EE\u9898\u6839\u6E90\u5E76\u91C7\u53D6\u76F8\u5E94\u63AA\u65BD\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u60A8\u53EF\u4EE5\u9010\u6B65\u7F29\u5C0F\u95EE\u9898\u8303\u56F4\uFF0C\u76F4\u81F3\u627E\u5230\u5E76\u89E3\u51B3\u95EE\u9898\u3002\u5982\u679C\u5728\u6267\u884C\u8FD9\u4E9B\u6B65\u9AA4\u540E\u95EE\u9898\u4ECD\u672A\u89E3\u51B3\uFF0C\u5EFA\u8BAE\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u6216\u793E\u533A\u8BBA\u575B\uFF0C\u83B7\u53D6\u66F4\u8FDB\u4E00\u6B65\u7684\u5E2E\u52A9\u6216\u62A5\u544A\u53EF\u80FD\u5B58\u5728\u7684bug\u3002

\u8BF7\u6CE8\u610F\uFF0C\u867D\u7136\u8FD9\u91CC\u6CA1\u6709\u76F4\u63A5\u5F15\u7528\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u7684\u94FE\u63A5\uFF0C\u4F46\u4E0A\u8FF0\u89E3\u7B54\u662F\u57FA\u4E8ECORS\u914D\u7F6E\u7684\u57FA\u672C\u539F\u7406\u548C\u5E38\u89C1\u95EE\u9898\u89E3\u51B3\u7B56\u7565\uFF0C\u8FD9\u4E9B\u7B56\u7565\u666E\u904D\u9002\u7528\u4E8E\u7C7B\u4F3CHigress\u8FD9\u6837\u7684\u4EE3\u7406\u670D\u52A1\u914D\u7F6E\u8C03\u8BD5\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress CORS \u914D\u7F6E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16972)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return o},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u95EE\u9898\u5206\u6790",text:"\u95EE\u9898\u5206\u6790\uFF1A"},{depth:3,slug:"\u6392\u67E5\u6B65\u9AA4",text:"\u6392\u67E5\u6B65\u9AA4\uFF1A"},{depth:3,slug:"\u89E3\u91CA\u8BF4\u660E",text:"\u89E3\u91CA\u8BF4\u660E\uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},r=g((C,S,R)=>{const{layout:_,...i}=s;return i.file=t,i.url=e,c`${p()}${d(o)}`})});export{r as Content,O as __tla,l as compiledContent,r as default,t as file,s as frontmatter,n as getHeadings,a as rawContent,e as url};
