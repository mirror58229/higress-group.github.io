import{c as g,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as c,m as p,u as h,__tla as u}from"./constant.CpE3CQMr.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let r,a,t,e,i,l,s,y=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u5982\u4F55\u4FEE\u6539 \u8FD4\u56DEbody\u7684\u5927\u5C0F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728 Higress \u4E2D\u4FEE\u6539\u8FD4\u56DEBody\u7684\u5927\u5C0F\u9650\u5236\u3002\u7136\u800C\uFF0C\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u4FEE\u6539\u54CD\u5E94\u4F53\uFF08\u8FD4\u56DEBody\uFF09\u5927\u5C0F\u7684\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u3002\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E3B\u8981\u8BB2\u8FF0\u4E86\u5982\u4F55\u914D\u7F6EHigress\u4EE5\u5C4F\u853D\u7279\u5B9A\u7684\u8BF7\u6C42URL\u3001\u8BF7\u6C42\u5934\u6216\u8BF7\u6C42\u4F53\u5185\u5BB9\uFF0C\u4EE5\u53CA\u5173\u4E8E\u8BF7\u6C42\u4F53\u5927\u5C0F\u9650\u5236\u7684\u8BF4\u660E\uFF0C\u4F46\u5E76\u672A\u6D89\u53CA\u8C03\u6574\u54CD\u5E94\u4F53\u5927\u5C0F\u7684\u914D\u7F6E\u3002</p>
<p>\u5C3D\u7BA1\u5982\u6B64\uFF0C\u6839\u636E\u4E00\u822C\u7684Web\u670D\u52A1\u548C\u4EE3\u7406\u670D\u52A1\u5668\u7684\u914D\u7F6E\u539F\u5219\uFF0C\u8FD4\u56DEBody\u7684\u5927\u5C0F\u901A\u5E38\u53D7\u5230\u4E0A\u6E38\u670D\u52A1\uFF08\u5982\u5E94\u7528\u670D\u52A1\u5668\uFF09\u548C\u4E0B\u6E38\u5BA2\u6237\u7AEF\u7684\u5904\u7406\u80FD\u529B\u9650\u5236\uFF0C\u800C\u4E0D\u662F\u7531\u53CD\u5411\u4EE3\u7406\uFF08\u5982Higress\uFF09\u76F4\u63A5\u63A7\u5236\u5176\u5927\u5C0F\u3002Higress\u4F5C\u4E3A\u4E00\u6B3E\u57FA\u4E8EIstio\u7684\u670D\u52A1\u7F51\u683C\u7F51\u5173\uFF0C\u66F4\u591A\u5730\u5173\u6CE8\u4E8E\u8BF7\u6C42\u7684\u8DEF\u7531\u3001\u5B89\u5168\u6027\u548C\u7B56\u7565\u63A7\u5236\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u5E94\u7528\u5C42\u6570\u636E\uFF08\u5982\u54CD\u5E94\u4F53\u5185\u5BB9\uFF09\u7684\u5927\u5C0F\u3002</p>
<p>\u5982\u679C\u60A8\u9047\u5230\u56E0\u54CD\u5E94\u8FC7\u5927\u5BFC\u81F4\u7684\u95EE\u9898\uFF0C\u5982\u5BA2\u6237\u7AEF\u6536\u5230<code dir="auto">413 Payload Too Large</code>\u9519\u8BEF\uFF0C\u8FD9\u901A\u5E38\u610F\u5473\u7740\u9700\u8981\u8C03\u6574\u7684\u662F\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u7F13\u51B2\u533A\u5927\u5C0F\u3001\u6216\u8005\u662F\u670D\u52A1\u7AEF\uFF08\u5E94\u7528\u7A0B\u5E8F\uFF09\u7684\u54CD\u5E94\u9650\u5236\u8BBE\u7F6E\uFF0C\u800C\u975E\u7F51\u5173\u5C42\u9762\u7684\u914D\u7F6E\u3002\u4F8B\u5982\uFF0C\u5728\u5E94\u7528\u670D\u52A1\u5668\uFF08\u5982Nginx\u3001Spring Boot\u5E94\u7528\u7B49\uFF09\u4E2D\uFF0C\u53EF\u4EE5\u8C03\u6574\u4E0E\u54CD\u5E94\u4F53\u5927\u5C0F\u76F8\u5173\u7684\u914D\u7F6E\u53C2\u6570\u3002</p>
<p><strong>\u603B\u7ED3\uFF1A</strong></p>
<ol>
<li><strong>\u95EE\u9898\u5206\u6790\uFF1A</strong> Higress\u76F4\u63A5\u914D\u7F6E\u4E2D\u4E0D\u6D89\u53CA\u4FEE\u6539\u8FD4\u56DEBody\u5927\u5C0F\u7684\u9009\u9879\uFF0C\u56E0\u4E3A\u8FD9\u901A\u5E38\u5C5E\u4E8E\u5E94\u7528\u5C42\u6216\u7F51\u7EDC\u4F20\u8F93\u5C42\u7684\u5904\u7406\u8303\u7574\u3002</li>
<li><strong>\u5EFA\u8BAE\u65B9\u5411\uFF1A</strong> \u82E5\u9047\u5230\u54CD\u5E94\u4F53\u5927\u5C0F\u5BFC\u81F4\u7684\u95EE\u9898\uFF0C\u5E94\u68C0\u67E5\u5E76\u8C03\u6574\u4E0A\u6E38\u670D\u52A1\uFF08\u5E94\u7528\u7A0B\u5E8F\u670D\u52A1\u5668\uFF09\u7684\u76F8\u5E94\u914D\u7F6E\uFF0C\u6BD4\u5982\u589E\u52A0\u5141\u8BB8\u7684\u6700\u5927\u54CD\u5E94\u4F53\u5927\u5C0F\u9650\u5236\u3002</li>
<li><strong>\u672A\u7ED9\u51FA\u5177\u4F53\u6B65\u9AA4\u7684\u539F\u56E0\uFF1A</strong> \u7531\u4E8E\u7F3A\u4E4F\u76F4\u63A5\u76F8\u5173\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u65E0\u6CD5\u63D0\u4F9B\u5177\u4F53\u7684Higress\u914D\u7F6E\u6B65\u9AA4\u6765\u89E3\u51B3\u6B64\u95EE\u9898\u3002</li>
<li><strong>\u989D\u5916\u63D0\u793A\uFF1A</strong> \u5982\u679C\u662F\u56E0\u4E3A\u8BF7\u6C42\u4F53\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u5BFC\u81F4\u7684<code dir="auto">413 Payload Too Large</code>\u9519\u8BEF\uFF0CHigress\u786E\u5B9E\u6709\u8BF7\u6C42\u4F53\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u5E76\u5728\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u6709\u63D0\u53CA\uFF0C\u4F46\u8FD9\u662F\u9488\u5BF9\u8BF7\u6C42\u800C\u975E\u54CD\u5E94\u7684\u5904\u7406\u3002</li>
</ol>
<p>\u5E0C\u671B\u4EE5\u4E0A\u5206\u6790\u80FD\u5E2E\u52A9\u60A8\u627E\u5230\u5408\u9002\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5982\u6709\u5176\u4ED6\u5173\u4E8EHigress\u914D\u7F6E\u6216\u670D\u52A1\u7F51\u683C\u7BA1\u7406\u7684\u95EE\u9898\uFF0C\u8BF7\u968F\u65F6\u63D0\u95EE\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u8BF7\u6C42\u5C4F\u853D</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17154" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,e={id:"question-history-17141",title:"\u5982\u4F55\u4FEE\u6539 \u8FD4\u56DEbody\u7684\u5927\u5C0F",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728 Higress \u4E2D\u4FEE\u6539\u8FD4\u56DEBody\u7684\u5927\u5C0F\u9650\u5236\u3002\u7136\u800C\uFF0C\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u4FEE\u6539\u54CD\u5E94\u4F53\uFF08\u8FD4\u56DEBody\uFF09\u5927\u5C0F\u7684\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u3002\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E3B\u8981\u8BB2\u8FF0\u4E86\u5982\u4F55\u914D\u7F6EHigress\u4EE5\u5C4F\u853D\u7279\u5B9A\u7684\u8BF7\u6C42URL\u3001\u8BF7\u6C42\u5934\u6216\u8BF7\u6C42\u4F53\u5185\u5BB9\uFF0C\u4EE5\u53CA\u5173\u4E8E\u8BF7\u6C42\u4F53\u5927\u5C0F\u9650\u5236\u7684\u8BF4\u660E\uFF0C\u4F46\u5E76\u672A\u6D89\u53CA\u8C03\u6574\u54CD\u5E94\u4F53\u5927\u5C0F\u7684\u914D",tags:["higress","\u4FEE\u6539","\u8FD4\u56DE","body","\u5927\u5C0F"],keywords:["higress","\u4FEE\u6539","\u8FD4\u56DE","body","\u5927\u5C0F"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17141.md",s=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u5982\u4F55\u4FEE\u6539 \u8FD4\u56DEbody\u7684\u5927\u5C0F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728 Higress \u4E2D\u4FEE\u6539\u8FD4\u56DEBody\u7684\u5927\u5C0F\u9650\u5236\u3002\u7136\u800C\uFF0C\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u4FEE\u6539\u54CD\u5E94\u4F53\uFF08\u8FD4\u56DEBody\uFF09\u5927\u5C0F\u7684\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u3002\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E3B\u8981\u8BB2\u8FF0\u4E86\u5982\u4F55\u914D\u7F6EHigress\u4EE5\u5C4F\u853D\u7279\u5B9A\u7684\u8BF7\u6C42URL\u3001\u8BF7\u6C42\u5934\u6216\u8BF7\u6C42\u4F53\u5185\u5BB9\uFF0C\u4EE5\u53CA\u5173\u4E8E\u8BF7\u6C42\u4F53\u5927\u5C0F\u9650\u5236\u7684\u8BF4\u660E\uFF0C\u4F46\u5E76\u672A\u6D89\u53CA\u8C03\u6574\u54CD\u5E94\u4F53\u5927\u5C0F\u7684\u914D\u7F6E\u3002

\u5C3D\u7BA1\u5982\u6B64\uFF0C\u6839\u636E\u4E00\u822C\u7684Web\u670D\u52A1\u548C\u4EE3\u7406\u670D\u52A1\u5668\u7684\u914D\u7F6E\u539F\u5219\uFF0C\u8FD4\u56DEBody\u7684\u5927\u5C0F\u901A\u5E38\u53D7\u5230\u4E0A\u6E38\u670D\u52A1\uFF08\u5982\u5E94\u7528\u670D\u52A1\u5668\uFF09\u548C\u4E0B\u6E38\u5BA2\u6237\u7AEF\u7684\u5904\u7406\u80FD\u529B\u9650\u5236\uFF0C\u800C\u4E0D\u662F\u7531\u53CD\u5411\u4EE3\u7406\uFF08\u5982Higress\uFF09\u76F4\u63A5\u63A7\u5236\u5176\u5927\u5C0F\u3002Higress\u4F5C\u4E3A\u4E00\u6B3E\u57FA\u4E8EIstio\u7684\u670D\u52A1\u7F51\u683C\u7F51\u5173\uFF0C\u66F4\u591A\u5730\u5173\u6CE8\u4E8E\u8BF7\u6C42\u7684\u8DEF\u7531\u3001\u5B89\u5168\u6027\u548C\u7B56\u7565\u63A7\u5236\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u5E94\u7528\u5C42\u6570\u636E\uFF08\u5982\u54CD\u5E94\u4F53\u5185\u5BB9\uFF09\u7684\u5927\u5C0F\u3002

\u5982\u679C\u60A8\u9047\u5230\u56E0\u54CD\u5E94\u8FC7\u5927\u5BFC\u81F4\u7684\u95EE\u9898\uFF0C\u5982\u5BA2\u6237\u7AEF\u6536\u5230\`413 Payload Too Large\`\u9519\u8BEF\uFF0C\u8FD9\u901A\u5E38\u610F\u5473\u7740\u9700\u8981\u8C03\u6574\u7684\u662F\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u7F13\u51B2\u533A\u5927\u5C0F\u3001\u6216\u8005\u662F\u670D\u52A1\u7AEF\uFF08\u5E94\u7528\u7A0B\u5E8F\uFF09\u7684\u54CD\u5E94\u9650\u5236\u8BBE\u7F6E\uFF0C\u800C\u975E\u7F51\u5173\u5C42\u9762\u7684\u914D\u7F6E\u3002\u4F8B\u5982\uFF0C\u5728\u5E94\u7528\u670D\u52A1\u5668\uFF08\u5982Nginx\u3001Spring Boot\u5E94\u7528\u7B49\uFF09\u4E2D\uFF0C\u53EF\u4EE5\u8C03\u6574\u4E0E\u54CD\u5E94\u4F53\u5927\u5C0F\u76F8\u5173\u7684\u914D\u7F6E\u53C2\u6570\u3002

**\u603B\u7ED3\uFF1A**
1. **\u95EE\u9898\u5206\u6790\uFF1A** Higress\u76F4\u63A5\u914D\u7F6E\u4E2D\u4E0D\u6D89\u53CA\u4FEE\u6539\u8FD4\u56DEBody\u5927\u5C0F\u7684\u9009\u9879\uFF0C\u56E0\u4E3A\u8FD9\u901A\u5E38\u5C5E\u4E8E\u5E94\u7528\u5C42\u6216\u7F51\u7EDC\u4F20\u8F93\u5C42\u7684\u5904\u7406\u8303\u7574\u3002
2. **\u5EFA\u8BAE\u65B9\u5411\uFF1A** \u82E5\u9047\u5230\u54CD\u5E94\u4F53\u5927\u5C0F\u5BFC\u81F4\u7684\u95EE\u9898\uFF0C\u5E94\u68C0\u67E5\u5E76\u8C03\u6574\u4E0A\u6E38\u670D\u52A1\uFF08\u5E94\u7528\u7A0B\u5E8F\u670D\u52A1\u5668\uFF09\u7684\u76F8\u5E94\u914D\u7F6E\uFF0C\u6BD4\u5982\u589E\u52A0\u5141\u8BB8\u7684\u6700\u5927\u54CD\u5E94\u4F53\u5927\u5C0F\u9650\u5236\u3002
3. **\u672A\u7ED9\u51FA\u5177\u4F53\u6B65\u9AA4\u7684\u539F\u56E0\uFF1A** \u7531\u4E8E\u7F3A\u4E4F\u76F4\u63A5\u76F8\u5173\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u65E0\u6CD5\u63D0\u4F9B\u5177\u4F53\u7684Higress\u914D\u7F6E\u6B65\u9AA4\u6765\u89E3\u51B3\u6B64\u95EE\u9898\u3002
4. **\u989D\u5916\u63D0\u793A\uFF1A** \u5982\u679C\u662F\u56E0\u4E3A\u8BF7\u6C42\u4F53\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u5BFC\u81F4\u7684\`413 Payload Too Large\`\u9519\u8BEF\uFF0CHigress\u786E\u5B9E\u6709\u8BF7\u6C42\u4F53\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u5E76\u5728\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u6709\u63D0\u53CA\uFF0C\u4F46\u8FD9\u662F\u9488\u5BF9\u8BF7\u6C42\u800C\u975E\u54CD\u5E94\u7684\u5904\u7406\u3002

\u5E0C\u671B\u4EE5\u4E0A\u5206\u6790\u80FD\u5E2E\u52A9\u60A8\u627E\u5230\u5408\u9002\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5982\u6709\u5176\u4ED6\u5173\u4E8EHigress\u914D\u7F6E\u6216\u670D\u52A1\u7F51\u683C\u7BA1\u7406\u7684\u95EE\u9898\uFF0C\u8BF7\u968F\u65F6\u63D0\u95EE\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u8BF7\u6C42\u5C4F\u853D 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17154)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},a=function(){return o},i=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},r=g((b,H,_)=>{const{layout:m,...n}=e;return n.file=t,n.url=s,c`${p()}${h(o)}`})});export{r as Content,y as __tla,a as compiledContent,r as default,t as file,e as frontmatter,i as getHeadings,l as rawContent,s as url};
