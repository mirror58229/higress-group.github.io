import{c as l,__tla as u}from"./astro-component.DIa0fJKh.js";import{r as d,m as p,u as h,__tla as c}from"./constant.DH1S1kY8.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let s,i,e,t,n,g,o,y=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return c}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let r;r=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u66FF\u6362 spring cloud gateway \u8BE6\u7EC6\u6B65\u9AA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u5C06Higress\u4E91\u539F\u751F\u7F51\u5173\u66FF\u6362\u4E3ASpring Cloud Gateway\uFF0C\u60A8\u9700\u8981\u9075\u5FAA\u4E00\u7CFB\u5217\u7EC6\u81F4\u7684\u6B65\u9AA4\u4EE5\u786E\u4FDD\u5E73\u6ED1\u8FC1\u79FB\u5E76\u5145\u5206\u5229\u7528Higress\u7684\u6027\u80FD\u4F18\u52BF\u3002\u867D\u7136\u76F4\u63A5\u7684\u6B65\u9AA4\u672A\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E2D\u660E\u786E\u7ED9\u51FA\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u4E0ESpring Cloud Gateway\u7684\u7279\u6027\u5BF9\u6BD4\u548C\u6027\u80FD\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u63A8\u5BFC\u51FA\u4E00\u4E2A\u5927\u81F4\u7684\u8FC1\u79FB\u7B56\u7565\u3002\u4EE5\u4E0B\u662F\u63A8\u8350\u7684\u8FC1\u79FB\u6B65\u9AA4\u53CA\u89E3\u91CA\uFF1A</p>
<h3 id="1-\u8BC4\u4F30\u73B0\u6709spring-cloud-gateway\u914D\u7F6E">1. <strong>\u8BC4\u4F30\u73B0\u6709Spring Cloud Gateway\u914D\u7F6E</strong></h3>
<ul>
<li><strong>\u5BA1\u67E5\u5F53\u524D\u914D\u7F6E</strong>\uFF1A\u9996\u5148\uFF0C\u5168\u9762\u5BA1\u67E5\u60A8\u73B0\u6709\u7684Spring Cloud Gateway\u914D\u7F6E\u6587\u4EF6\uFF08\u5982<code dir="auto">application.yaml</code>\uFF09\uFF0C\u8BB0\u5F55\u6240\u6709\u8DEF\u7531\u3001\u8FC7\u6EE4\u5668\u3001\u65AD\u8A00\u4EE5\u53CA\u4EFB\u4F55\u81EA\u5B9A\u4E49\u903B\u8F91\u7684\u7EC6\u8282\u3002</li>
<li><strong>\u7406\u89E3\u4E1A\u52A1\u9700\u6C42</strong>\uFF1A\u786E\u4FDD\u60A8\u5B8C\u5168\u7406\u89E3\u6BCF\u4E2A\u914D\u7F6E\u9879\u7684\u76EE\u7684\uFF0C\u7279\u522B\u662F\u6D89\u53CA\u5230\u8BF7\u6C42/\u54CD\u5E94\u4FEE\u6539\u7684<code dir="auto">GatewayFilter</code>\u914D\u7F6E\u3002</li>
</ul>
<h3 id="2-\u5B66\u4E60higress\u7279\u6027\u4E0E\u914D\u7F6E">2. <strong>\u5B66\u4E60Higress\u7279\u6027\u4E0E\u914D\u7F6E</strong></h3>
<ul>
<li><strong>\u9605\u8BFB\u6587\u6863</strong>\uFF1A\u6DF1\u5165\u7814\u7A76<a href="https://higress.io/docs/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u5B98\u65B9\u6587\u6863</a>\uFF0C\u7279\u522B\u662F\u5176\u8DEF\u7531\u914D\u7F6E\u3001Transformer\u63D2\u4EF6\u548C\u5176\u5B83\u4E0ESCG\u529F\u80FD\u76F8\u5BF9\u5E94\u7684\u90E8\u5206\u3002</li>
<li><strong>\u7406\u89E3Transformer\u63D2\u4EF6</strong>\uFF1A\u7279\u522B\u5173\u6CE8<a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/transformer" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Transformer\u63D2\u4EF6</a>\uFF0C\u7406\u89E3\u5B83\u5982\u4F55\u5B9E\u73B0HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u8F6C\u6362\uFF0C\u8FD9\u662F\u4E0ESCG Gateway Filters\u6700\u76F4\u63A5\u76F8\u5173\u7684\u90E8\u5206\u3002</li>
</ul>
<h3 id="3-\u8FC1\u79FB\u8DEF\u7531\u914D\u7F6E">3. <strong>\u8FC1\u79FB\u8DEF\u7531\u914D\u7F6E</strong></h3>
<ul>
<li><strong>\u8F6C\u6362\u8DEF\u7531\u5B9A\u4E49</strong>\uFF1A\u6839\u636EHigress\u7684\u8DEF\u7531\u914D\u7F6E\u683C\u5F0F\uFF0C\u5C06\u60A8\u7684Spring Cloud Gateway\u8DEF\u7531\u914D\u7F6E\u4E00\u4E00\u8F6C\u6362\u4E3AHigress\u7684\u914D\u7F6E\u3002\u6CE8\u610F\uFF0CHigress\u53EF\u80FD\u4F7F\u7528\u4E0D\u540C\u7684\u5173\u952E\u5B57\u548C\u7ED3\u6784\uFF0C\u786E\u4FDD\u6B63\u786E\u6620\u5C04\u8DEF\u5F84\u3001\u76EE\u6807URI\u548C\u8C13\u8BCD\u3002</li>
</ul>
<h3 id="4-\u5B9E\u65BD\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362">4. <strong>\u5B9E\u65BD\u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362</strong></h3>
<ul>
<li><strong>\u4F7F\u7528Transformer\u63D2\u4EF6</strong>\uFF1A\u5BF9\u4E8E\u4E4B\u524D\u5728SCG\u4E2D\u4F7F\u7528\u7684\u6BCF\u4E2A<code dir="auto">GatewayFilter</code>\uFF0C\u627E\u5230Higress\u4E2D\u5BF9\u5E94\u7684Transformer\u914D\u7F6E\u65B9\u5F0F\u3002\u6BD4\u5982\uFF0C\u5C06<code dir="auto">AddRequestHeader</code>\u3001<code dir="auto">MapRequestHeader</code>\u7B49\u64CD\u4F5C\u901A\u8FC7Higress\u7684Transformer\u5B9E\u73B0\u3002</li>
</ul>
<h3 id="5-\u6027\u80FD\u6D4B\u8BD5\u4E0E\u8C03\u4F18">5. <strong>\u6027\u80FD\u6D4B\u8BD5\u4E0E\u8C03\u4F18</strong></h3>
<ul>
<li><strong>\u57FA\u51C6\u6D4B\u8BD5</strong>\uFF1A\u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E2D\u90E8\u7F72\u914D\u7F6E\u597D\u7684Higress\uFF0C\u4F7F\u7528\u4E0ESCG\u76F8\u540C\u6216\u76F8\u4F3C\u7684\u8D1F\u8F7D\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5\uFF0C\u9A8C\u8BC1\u8FC1\u79FB\u540E\u662F\u5426\u8FBE\u5230\u9884\u671F\u7684\u6027\u80FD\u63D0\u5347\u3002</li>
<li><strong>\u8C03\u6574\u914D\u7F6E</strong>\uFF1A\u6839\u636E\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u53EF\u80FD\u9700\u8981\u8C03\u6574Higress\u7684\u914D\u7F6E\u6216\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u4EE5\u4F18\u5316\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002</li>
</ul>
<h3 id="6-\u76D1\u63A7\u4E0E\u65E5\u5FD7">6. <strong>\u76D1\u63A7\u4E0E\u65E5\u5FD7</strong></h3>
<ul>
<li><strong>\u8BBE\u7F6E\u76D1\u63A7</strong>\uFF1A\u786E\u4FDDHigress\u96C6\u6210\u6709\u4E0E\u4E4B\u524DSCG\u76F8\u7C7B\u4F3C\u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u7CFB\u7EDF\uFF0C\u4EE5\u4FBF\u6301\u7EED\u8DDF\u8E2A\u5176\u8FD0\u884C\u72B6\u51B5\u548C\u6027\u80FD\u3002</li>
<li><strong>\u65E5\u5FD7\u914D\u7F6E</strong>\uFF1A\u914D\u7F6E\u5408\u9002\u7684\u65E5\u5FD7\u7EA7\u522B\u548C\u8F93\u51FA\uFF0C\u5E2E\u52A9\u5FEB\u901F\u8BCA\u65AD\u4EFB\u4F55\u8FC1\u79FB\u540E\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\u3002</li>
</ul>
<h3 id="7-\u9010\u6B65\u8FC1\u79FB\u4E0E\u56DE\u6EDA\u8BA1\u5212">7. <strong>\u9010\u6B65\u8FC1\u79FB\u4E0E\u56DE\u6EDA\u8BA1\u5212</strong></h3>
<ul>
<li><strong>\u5206\u9636\u6BB5\u90E8\u7F72</strong>\uFF1A\u8003\u8651\u5148\u5728\u90E8\u5206\u6D41\u91CF\u6216\u670D\u52A1\u4E0A\u90E8\u7F72Higress\uFF0C\u9010\u6B65\u9A8C\u8BC1\u5E76\u8FC1\u79FB\uFF0C\u51CF\u5C11\u98CE\u9669\u3002</li>
<li><strong>\u51C6\u5907\u56DE\u6EDA\u7B56\u7565</strong>\uFF1A\u5236\u5B9A\u8BE6\u7EC6\u7684\u56DE\u6EDA\u8BA1\u5212\uFF0C\u786E\u4FDD\u5728\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u9047\u5230\u4E0D\u53EF\u9884\u89C1\u7684\u95EE\u9898\u65F6\uFF0C\u80FD\u8FC5\u901F\u6062\u590D\u5230Spring Cloud Gateway\u3002</li>
</ul>
<h3 id="8-\u5168\u9762\u5207\u6362\u4E0E\u4F18\u5316">8. <strong>\u5168\u9762\u5207\u6362\u4E0E\u4F18\u5316</strong></h3>
<ul>
<li><strong>\u5168\u9762\u90E8\u7F72</strong>\uFF1A\u786E\u8BA4\u65E0\u8BEF\u540E\uFF0C\u5168\u9762\u5207\u6362\u5230Higress\uFF0C\u5E76\u7EE7\u7EED\u76D1\u63A7\u5176\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002</li>
<li><strong>\u6301\u7EED\u4F18\u5316</strong>\uFF1A\u6839\u636E\u5B9E\u9645\u8FD0\u884C\u60C5\u51B5\uFF0C\u4E0D\u65AD\u4F18\u5316Higress\u914D\u7F6E\u548C\u57FA\u7840\u8BBE\u65BD\uFF0C\u4EE5\u8FDB\u4E00\u6B65\u63D0\u5347\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\u3002</li>
</ul>
<p>\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u7CFB\u7EDF\u5730\u5C06Spring Cloud Gateway\u66FF\u6362\u4E3AHigress\uFF0C\u540C\u65F6\u6700\u5927\u5316\u5229\u7528Higress\u5728\u6027\u80FD\u548C\u8D44\u6E90\u6548\u7387\u65B9\u9762\u7684\u4F18\u52BF\u3002\u5728\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u52A1\u5FC5\u4FDD\u6301\u8C28\u614E\uFF0C\u786E\u4FDD\u6BCF\u4E00\u6B65\u7684\u53D8\u66F4\u90FD\u88AB\u5145\u5206\u6D4B\u8BD5\u548C\u9A8C\u8BC1\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u6027\u80FD\u5BF9\u6BD4\u6D4B\u8BD5spring cloud gateway vs higress</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17075" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-17040",title:"higress \u66FF\u6362 spring cloud gateway \u8BE6\u7EC6\u6B65\u9AA4",date:"2024-09-26",category:"expertConsultation",description:"\u8981\u5C06Higress\u4E91\u539F\u751F\u7F51\u5173\u66FF\u6362\u4E3ASpring Cloud Gateway\uFF0C\u60A8\u9700\u8981\u9075\u5FAA\u4E00\u7CFB\u5217\u7EC6\u81F4\u7684\u6B65\u9AA4\u4EE5\u786E\u4FDD\u5E73\u6ED1\u8FC1\u79FB\u5E76\u5145\u5206\u5229\u7528Higress\u7684\u6027\u80FD\u4F18\u52BF\u3002\u867D\u7136\u76F4\u63A5\u7684\u6B65\u9AA4\u672A\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E2D\u660E\u786E\u7ED9\u51FA\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u4E0ESpring Cloud Gateway\u7684\u7279\u6027\u5BF9\u6BD4\u548C\u6027\u80FD\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u63A8\u5BFC\u51FA\u4E00\u4E2A\u5927",tags:["higress","\u66FF\u6362","spring","cloud","gateway","\u8BE6\u7EC6",""],keywords:["higress","\u66FF\u6362","spring","cloud","gateway","\u8BE6\u7EC6",""]},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17040.md",o=void 0,g=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u66FF\u6362 spring cloud gateway \u8BE6\u7EC6\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u5C06Higress\u4E91\u539F\u751F\u7F51\u5173\u66FF\u6362\u4E3ASpring Cloud Gateway\uFF0C\u60A8\u9700\u8981\u9075\u5FAA\u4E00\u7CFB\u5217\u7EC6\u81F4\u7684\u6B65\u9AA4\u4EE5\u786E\u4FDD\u5E73\u6ED1\u8FC1\u79FB\u5E76\u5145\u5206\u5229\u7528Higress\u7684\u6027\u80FD\u4F18\u52BF\u3002\u867D\u7136\u76F4\u63A5\u7684\u6B65\u9AA4\u672A\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E2D\u660E\u786E\u7ED9\u51FA\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u4E0ESpring Cloud Gateway\u7684\u7279\u6027\u5BF9\u6BD4\u548C\u6027\u80FD\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u63A8\u5BFC\u51FA\u4E00\u4E2A\u5927\u81F4\u7684\u8FC1\u79FB\u7B56\u7565\u3002\u4EE5\u4E0B\u662F\u63A8\u8350\u7684\u8FC1\u79FB\u6B65\u9AA4\u53CA\u89E3\u91CA\uFF1A

### 1. **\u8BC4\u4F30\u73B0\u6709Spring Cloud Gateway\u914D\u7F6E**

- **\u5BA1\u67E5\u5F53\u524D\u914D\u7F6E**\uFF1A\u9996\u5148\uFF0C\u5168\u9762\u5BA1\u67E5\u60A8\u73B0\u6709\u7684Spring Cloud Gateway\u914D\u7F6E\u6587\u4EF6\uFF08\u5982\`application.yaml\`\uFF09\uFF0C\u8BB0\u5F55\u6240\u6709\u8DEF\u7531\u3001\u8FC7\u6EE4\u5668\u3001\u65AD\u8A00\u4EE5\u53CA\u4EFB\u4F55\u81EA\u5B9A\u4E49\u903B\u8F91\u7684\u7EC6\u8282\u3002
- **\u7406\u89E3\u4E1A\u52A1\u9700\u6C42**\uFF1A\u786E\u4FDD\u60A8\u5B8C\u5168\u7406\u89E3\u6BCF\u4E2A\u914D\u7F6E\u9879\u7684\u76EE\u7684\uFF0C\u7279\u522B\u662F\u6D89\u53CA\u5230\u8BF7\u6C42/\u54CD\u5E94\u4FEE\u6539\u7684\`GatewayFilter\`\u914D\u7F6E\u3002

### 2. **\u5B66\u4E60Higress\u7279\u6027\u4E0E\u914D\u7F6E**

- **\u9605\u8BFB\u6587\u6863**\uFF1A\u6DF1\u5165\u7814\u7A76[Higress\u5B98\u65B9\u6587\u6863](https://higress.io/docs/)\uFF0C\u7279\u522B\u662F\u5176\u8DEF\u7531\u914D\u7F6E\u3001Transformer\u63D2\u4EF6\u548C\u5176\u5B83\u4E0ESCG\u529F\u80FD\u76F8\u5BF9\u5E94\u7684\u90E8\u5206\u3002
- **\u7406\u89E3Transformer\u63D2\u4EF6**\uFF1A\u7279\u522B\u5173\u6CE8[Higress Transformer\u63D2\u4EF6](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/transformer)\uFF0C\u7406\u89E3\u5B83\u5982\u4F55\u5B9E\u73B0HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u8F6C\u6362\uFF0C\u8FD9\u662F\u4E0ESCG Gateway Filters\u6700\u76F4\u63A5\u76F8\u5173\u7684\u90E8\u5206\u3002

### 3. **\u8FC1\u79FB\u8DEF\u7531\u914D\u7F6E**

- **\u8F6C\u6362\u8DEF\u7531\u5B9A\u4E49**\uFF1A\u6839\u636EHigress\u7684\u8DEF\u7531\u914D\u7F6E\u683C\u5F0F\uFF0C\u5C06\u60A8\u7684Spring Cloud Gateway\u8DEF\u7531\u914D\u7F6E\u4E00\u4E00\u8F6C\u6362\u4E3AHigress\u7684\u914D\u7F6E\u3002\u6CE8\u610F\uFF0CHigress\u53EF\u80FD\u4F7F\u7528\u4E0D\u540C\u7684\u5173\u952E\u5B57\u548C\u7ED3\u6784\uFF0C\u786E\u4FDD\u6B63\u786E\u6620\u5C04\u8DEF\u5F84\u3001\u76EE\u6807URI\u548C\u8C13\u8BCD\u3002

### 4. **\u5B9E\u65BD\u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362**

- **\u4F7F\u7528Transformer\u63D2\u4EF6**\uFF1A\u5BF9\u4E8E\u4E4B\u524D\u5728SCG\u4E2D\u4F7F\u7528\u7684\u6BCF\u4E2A\`GatewayFilter\`\uFF0C\u627E\u5230Higress\u4E2D\u5BF9\u5E94\u7684Transformer\u914D\u7F6E\u65B9\u5F0F\u3002\u6BD4\u5982\uFF0C\u5C06\`AddRequestHeader\`\u3001\`MapRequestHeader\`\u7B49\u64CD\u4F5C\u901A\u8FC7Higress\u7684Transformer\u5B9E\u73B0\u3002
  
### 5. **\u6027\u80FD\u6D4B\u8BD5\u4E0E\u8C03\u4F18**

- **\u57FA\u51C6\u6D4B\u8BD5**\uFF1A\u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E2D\u90E8\u7F72\u914D\u7F6E\u597D\u7684Higress\uFF0C\u4F7F\u7528\u4E0ESCG\u76F8\u540C\u6216\u76F8\u4F3C\u7684\u8D1F\u8F7D\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5\uFF0C\u9A8C\u8BC1\u8FC1\u79FB\u540E\u662F\u5426\u8FBE\u5230\u9884\u671F\u7684\u6027\u80FD\u63D0\u5347\u3002
- **\u8C03\u6574\u914D\u7F6E**\uFF1A\u6839\u636E\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u53EF\u80FD\u9700\u8981\u8C03\u6574Higress\u7684\u914D\u7F6E\u6216\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u4EE5\u4F18\u5316\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002

### 6. **\u76D1\u63A7\u4E0E\u65E5\u5FD7**

- **\u8BBE\u7F6E\u76D1\u63A7**\uFF1A\u786E\u4FDDHigress\u96C6\u6210\u6709\u4E0E\u4E4B\u524DSCG\u76F8\u7C7B\u4F3C\u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u7CFB\u7EDF\uFF0C\u4EE5\u4FBF\u6301\u7EED\u8DDF\u8E2A\u5176\u8FD0\u884C\u72B6\u51B5\u548C\u6027\u80FD\u3002
- **\u65E5\u5FD7\u914D\u7F6E**\uFF1A\u914D\u7F6E\u5408\u9002\u7684\u65E5\u5FD7\u7EA7\u522B\u548C\u8F93\u51FA\uFF0C\u5E2E\u52A9\u5FEB\u901F\u8BCA\u65AD\u4EFB\u4F55\u8FC1\u79FB\u540E\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\u3002

### 7. **\u9010\u6B65\u8FC1\u79FB\u4E0E\u56DE\u6EDA\u8BA1\u5212**

- **\u5206\u9636\u6BB5\u90E8\u7F72**\uFF1A\u8003\u8651\u5148\u5728\u90E8\u5206\u6D41\u91CF\u6216\u670D\u52A1\u4E0A\u90E8\u7F72Higress\uFF0C\u9010\u6B65\u9A8C\u8BC1\u5E76\u8FC1\u79FB\uFF0C\u51CF\u5C11\u98CE\u9669\u3002
- **\u51C6\u5907\u56DE\u6EDA\u7B56\u7565**\uFF1A\u5236\u5B9A\u8BE6\u7EC6\u7684\u56DE\u6EDA\u8BA1\u5212\uFF0C\u786E\u4FDD\u5728\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u9047\u5230\u4E0D\u53EF\u9884\u89C1\u7684\u95EE\u9898\u65F6\uFF0C\u80FD\u8FC5\u901F\u6062\u590D\u5230Spring Cloud Gateway\u3002

### 8. **\u5168\u9762\u5207\u6362\u4E0E\u4F18\u5316**

- **\u5168\u9762\u90E8\u7F72**\uFF1A\u786E\u8BA4\u65E0\u8BEF\u540E\uFF0C\u5168\u9762\u5207\u6362\u5230Higress\uFF0C\u5E76\u7EE7\u7EED\u76D1\u63A7\u5176\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002
- **\u6301\u7EED\u4F18\u5316**\uFF1A\u6839\u636E\u5B9E\u9645\u8FD0\u884C\u60C5\u51B5\uFF0C\u4E0D\u65AD\u4F18\u5316Higress\u914D\u7F6E\u548C\u57FA\u7840\u8BBE\u65BD\uFF0C\u4EE5\u8FDB\u4E00\u6B65\u63D0\u5347\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\u3002

\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u7CFB\u7EDF\u5730\u5C06Spring Cloud Gateway\u66FF\u6362\u4E3AHigress\uFF0C\u540C\u65F6\u6700\u5927\u5316\u5229\u7528Higress\u5728\u6027\u80FD\u548C\u8D44\u6E90\u6548\u7387\u65B9\u9762\u7684\u4F18\u52BF\u3002\u5728\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u52A1\u5FC5\u4FDD\u6301\u8C28\u614E\uFF0C\u786E\u4FDD\u6BCF\u4E00\u6B65\u7684\u53D8\u66F4\u90FD\u88AB\u5145\u5206\u6D4B\u8BD5\u548C\u9A8C\u8BC1\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u6027\u80FD\u5BF9\u6BD4\u6D4B\u8BD5spring cloud gateway vs higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17075)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return r},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u8BC4\u4F30\u73B0\u6709spring-cloud-gateway\u914D\u7F6E",text:"1. \u8BC4\u4F30\u73B0\u6709Spring Cloud Gateway\u914D\u7F6E"},{depth:3,slug:"2-\u5B66\u4E60higress\u7279\u6027\u4E0E\u914D\u7F6E",text:"2. \u5B66\u4E60Higress\u7279\u6027\u4E0E\u914D\u7F6E"},{depth:3,slug:"3-\u8FC1\u79FB\u8DEF\u7531\u914D\u7F6E",text:"3. \u8FC1\u79FB\u8DEF\u7531\u914D\u7F6E"},{depth:3,slug:"4-\u5B9E\u65BD\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362",text:"4. \u5B9E\u65BD\u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362"},{depth:3,slug:"5-\u6027\u80FD\u6D4B\u8BD5\u4E0E\u8C03\u4F18",text:"5. \u6027\u80FD\u6D4B\u8BD5\u4E0E\u8C03\u4F18"},{depth:3,slug:"6-\u76D1\u63A7\u4E0E\u65E5\u5FD7",text:"6. \u76D1\u63A7\u4E0E\u65E5\u5FD7"},{depth:3,slug:"7-\u9010\u6B65\u8FC1\u79FB\u4E0E\u56DE\u6EDA\u8BA1\u5212",text:"7. \u9010\u6B65\u8FC1\u79FB\u4E0E\u56DE\u6EDA\u8BA1\u5212"},{depth:3,slug:"8-\u5168\u9762\u5207\u6362\u4E0E\u4F18\u5316",text:"8. \u5168\u9762\u5207\u6362\u4E0E\u4F18\u5316"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=l((H,w,m)=>{const{layout:G,...a}=t;return a.file=e,a.url=o,d`${p()}${h(r)}`})});export{s as Content,y as __tla,i as compiledContent,s as default,e as file,t as frontmatter,n as getHeadings,g as rawContent,o as url};
