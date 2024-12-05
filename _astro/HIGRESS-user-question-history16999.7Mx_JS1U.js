import{c as u,__tla as g}from"./astro-component.DIa0fJKh.js";import{r as h,m as c,u as d,__tla as p}from"./constant.BB-vDknj.js";import{__tla as J}from"./astro/assets-service.tyfV9CK3.js";let s,i,r,e,l,a,t,f=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return J}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress jwt\u63D2\u4EF6 \u9274\u6743\u914D\u7F6E\u8BE6\u89E3</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress JWT\u63D2\u4EF6\u7684\u9274\u6743\u914D\u7F6E\u8BE6\u7EC6\u89E3\u6790\u5982\u4E0B\uFF0C\u8FD9\u5C06\u5E2E\u52A9\u60A8\u7406\u89E3\u5982\u4F55\u5728Higress\u4E2D\u914D\u7F6EJWT\u8BA4\u8BC1\u4EE5\u4FDD\u62A4\u60A8\u7684\u670D\u52A1\u548CAPI\u3002</p>
<h3 id="1-\u529F\u80FD\u6982\u8FF0">1. \u529F\u80FD\u6982\u8FF0</h3>
<p>JWT\uFF08JSON Web Tokens\uFF09\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8F7B\u91CF\u7EA7\u5B89\u5168\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5B83\u5141\u8BB8\u5404\u65B9\u4E4B\u95F4\u4EE5JSON\u5BF9\u8C61\u7684\u5F62\u5F0F\u5B89\u5168\u5730\u4F20\u8F93\u4FE1\u606F\u3002Higress JWT\u63D2\u4EF6(<code dir="auto">jwt-auth</code>)\u5229\u7528JWT\u5B9E\u73B0\u8BA4\u8BC1\u9274\u6743\uFF0C\u652F\u6301\u4ECEHTTP\u8BF7\u6C42\u7684\u4E0D\u540C\u6765\u6E90\uFF08\u5982URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\uFF09\u89E3\u6790JWT\uFF0C\u5E76\u9A8C\u8BC1\u5176\u8BBF\u95EE\u6743\u9650\u3002</p>
<h3 id="2-\u5168\u5C40\u914D\u7F6E">2. \u5168\u5C40\u914D\u7F6E</h3>
<p>\u5168\u5C40\u914D\u7F6E\u5F71\u54CD\u6574\u4E2AHigress\u670D\u52A1\u7684\u8BA4\u8BC1\u884C\u4E3A\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A</p>
<ul>
<li><strong>consumers</strong>: \u5B9A\u4E49\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u6BCF\u4E2Aconsumer\u9700\u914D\u7F6E\u5176\u540D\u79F0\u3001\u516C\u94A5\u96C6\u5408(jwks)\u3001\u7B7E\u53D1\u8005(issuer)\u7B49\uFF0C\u4EE5\u9A8C\u8BC1JWT\u7684\u6709\u6548\u6027\u3002</li>
<li><strong>global_auth</strong>: \u63A7\u5236\u8BA4\u8BC1\u673A\u5236\u7684\u751F\u6548\u8303\u56F4\uFF0C\u8BBE\u4E3Atrue\u65F6\u5168\u5C40\u751F\u6548\uFF0C\u8BBE\u4E3Afalse\u5219\u4EC5\u5BF9\u7279\u5B9A\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\uFF0C\u82E5\u4E0D\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4EC5\u5F53\u65E0\u7279\u5B9A\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\u3002</li>
</ul>
<h3 id="3-consumer\u914D\u7F6E\u8BE6\u60C5">3. Consumer\u914D\u7F6E\u8BE6\u60C5</h3>
<p>\u6BCF\u4E2Aconsumer\u7684\u914D\u7F6E\u6DB5\u76D6\u4EE5\u4E0B\u5173\u952E\u70B9\uFF1A</p>
<ul>
<li><strong>jwks</strong>: JSON Web Key Set\u7684URL\uFF0C\u7528\u4E8E\u9A8C\u8BC1JWT\u7B7E\u540D\u3002</li>
<li><strong>issuer</strong>: \u7B7E\u53D1JWT\u7684\u5B9E\u4F53\u540D\u79F0\uFF0C\u5E94\u4E0EJWT\u7684payload\u4E2D\u7684iss\u5B57\u6BB5\u5339\u914D\u3002</li>
<li><strong>claims_to_headers</strong>: \u62BD\u53D6JWT payload\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u5E76\u8BBE\u7F6E\u4E3A\u8BF7\u6C42\u5934\uFF0C\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u3002</li>
<li><strong>from_headers</strong>, <strong>from_params</strong>, <strong>from_cookies</strong>: \u5206\u522B\u5B9A\u4E49\u4ECE\u54EA\u91CC\u63D0\u53D6JWT\u3002</li>
<li><strong>clock_skew_seconds</strong>: \u5141\u8BB8\u7684\u65F6\u95F4\u504F\u79FB\u91CF\uFF0C\u786E\u4FDD\u65F6\u949F\u4E0D\u540C\u6B65\u65F6\u4E5F\u80FD\u6B63\u786E\u9A8C\u8BC1JWT\u7684\u6709\u6548\u671F\u3002</li>
<li><strong>keep_token</strong>: \u63A7\u5236\u662F\u5426\u5728\u8F6C\u53D1\u8BF7\u6C42\u65F6\u643A\u5E26JWT\u3002</li>
</ul>
<h3 id="4-\u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6jwt">4. \u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6JWT</h3>
<ul>
<li><strong>from_headers</strong>: \u5982\u914D\u7F6E<code dir="auto">Authorization</code>\u5934\uFF0C\u4E14\u524D\u7F00\u4E3A<code dir="auto">Bearer </code>\uFF0C\u5219\u53BB\u9664\u524D\u7F00\u540E\u4F7F\u7528\u5269\u4F59\u90E8\u5206\u4F5C\u4E3AJWT\u3002</li>
<li><strong>from_params</strong>\u548C<strong>from_cookies</strong>\u4E5F\u63D0\u4F9B\u4E86\u4ECEURL\u53C2\u6570\u6216Cookie\u4E2D\u63D0\u53D6JWT\u7684\u7075\u6D3B\u6027\u3002</li>
</ul>
<h3 id="5-\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E">5. \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E</h3>
<ul>
<li><strong>allow</strong>: \u5728\u57DF\u540D\u6216\u8DEF\u7531\u7EA7\u522B\u4E0A\uFF0C\u660E\u786E\u5217\u51FA\u5141\u8BB8\u8BBF\u95EE\u7684consumer\u540D\u79F0\u5217\u8868\uFF0C\u589E\u5F3A\u7EC6\u7C92\u5EA6\u7684\u8BBF\u95EE\u63A7\u5236\u3002</li>
</ul>
<h3 id="\u5B9E\u65BD\u6B65\u9AA4\u6982\u89C8">\u5B9E\u65BD\u6B65\u9AA4\u6982\u89C8</h3>
<ol>
<li><strong>\u786E\u5B9AConsumer</strong>: \u786E\u8BA4\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u5E76\u83B7\u53D6\u5176\u516C\u94A5\u96C6\u5408(jwks)\u548C\u7B7E\u53D1\u8005\u4FE1\u606F\u3002</li>
<li><strong>\u914D\u7F6EGlobal Settings</strong>: \u51B3\u5B9A\u662F\u5426\u542F\u7528\u5168\u5C40\u8BA4\u8BC1\u6216\u6309\u9700\u914D\u7F6E\u7279\u5B9A\u57DF\u540D\u53CA\u8DEF\u7531\u3002</li>
<li><strong>\u914D\u7F6EConsumer\u7EC6\u8282</strong>: \u5728Higress\u914D\u7F6E\u4E2D\u6DFB\u52A0\u6BCF\u4E2Aconsumer\uFF0C\u8BBE\u7F6Ejwks\u3001issuer\u7B49\u5FC5\u8981\u4FE1\u606F\u3002</li>
<li><strong>\u9009\u62E9JWT\u6765\u6E90</strong>: \u6839\u636E\u5E94\u7528\u9700\u6C42\uFF0C\u914D\u7F6EJWT\u662F\u4ECE\u8BF7\u6C42\u5934\u3001URL\u53C2\u6570\u8FD8\u662FCookie\u4E2D\u63D0\u53D6\u3002</li>
<li><strong>\u6620\u5C04Claims\u81F3Headers</strong>: \u5982\u6709\u9700\u8981\uFF0C\u914D\u7F6E\u54EA\u4E9BJWT payload\u4E2D\u7684\u5B57\u6BB5\u5E94\u88AB\u6620\u5C04\u4E3A\u8BF7\u6C42\u5934\u8F6C\u53D1\u7ED9\u540E\u7AEF\u3002</li>
<li><strong>\u7EC6\u5316\u8BBF\u95EE\u63A7\u5236</strong>: \u5728\u9700\u8981\u7684\u57DF\u540D\u6216\u8DEF\u7531\u4E0A\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684\u7279\u5B9Aconsumer\u5217\u8868\u3002</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u786E\u4FDD\u53EA\u6709\u7ECF\u8FC7\u6709\u6548JWT\u9A8C\u8BC1\u4E14\u5177\u6709\u76F8\u5E94\u6743\u9650\u7684\u8BF7\u6C42\u624D\u80FD\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684\u670D\u52A1\u3002\u8FD9\u6837\u7684\u914D\u7F6E\u4E0D\u4EC5\u63D0\u9AD8\u4E86\u5B89\u5168\u6027\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u8BA4\u8BC1\u7B56\u7565\u914D\u7F6E\u80FD\u529B\uFF0C\u9002\u5E94\u4E0D\u540C\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\u3002\u7279\u522B\u662F\u901A\u8FC7\u7EC6\u81F4\u7684\u57DF\u540D\u6821\u9A8C\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E\uFF0C\u80FD\u591F\u5B9E\u73B0\u66F4\u52A0\u7CBE\u786E\u7684\u8BBF\u95EE\u63A7\u5236\u7B56\u7565\u3002</p>
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
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17008" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,e={id:"question-history-16999",title:"higress jwt\u63D2\u4EF6 \u9274\u6743\u914D\u7F6E\u8BE6\u89E3",date:"2024-09-26",category:"expertConsultation",description:"Higress JWT\u63D2\u4EF6\u7684\u9274\u6743\u914D\u7F6E\u8BE6\u7EC6\u89E3\u6790\u5982\u4E0B\uFF0C\u8FD9\u5C06\u5E2E\u52A9\u60A8\u7406\u89E3\u5982\u4F55\u5728Higress\u4E2D\u914D\u7F6EJWT\u8BA4\u8BC1\u4EE5\u4FDD\u62A4\u60A8\u7684\u670D\u52A1\u548CAPI\u3002### 1. \u529F\u80FD\u6982\u8FF0JWT\uFF08JSON Web Tokens\uFF09\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8F7B\u91CF\u7EA7\u5B89\u5168\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5B83\u5141\u8BB8\u5404\u65B9\u4E4B\u95F4\u4EE5JSON\u5BF9\u8C61\u7684\u5F62\u5F0F\u5B89\u5168\u5730\u4F20\u8F93\u4FE1\u606F\u3002Higress JWT\u63D2\u4EF6(`j",tags:["higress","jwt","\u63D2\u4EF6","\u9274\u6743","\u914D\u7F6E","\u8BE6\u89E3"],keywords:["higress","jwt","\u63D2\u4EF6","\u9274\u6743","\u914D\u7F6E","\u8BE6\u89E3"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16999.md",t=void 0,a=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress jwt\u63D2\u4EF6 \u9274\u6743\u914D\u7F6E\u8BE6\u89E3  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress JWT\u63D2\u4EF6\u7684\u9274\u6743\u914D\u7F6E\u8BE6\u7EC6\u89E3\u6790\u5982\u4E0B\uFF0C\u8FD9\u5C06\u5E2E\u52A9\u60A8\u7406\u89E3\u5982\u4F55\u5728Higress\u4E2D\u914D\u7F6EJWT\u8BA4\u8BC1\u4EE5\u4FDD\u62A4\u60A8\u7684\u670D\u52A1\u548CAPI\u3002

### 1. \u529F\u80FD\u6982\u8FF0
JWT\uFF08JSON Web Tokens\uFF09\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8F7B\u91CF\u7EA7\u5B89\u5168\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5B83\u5141\u8BB8\u5404\u65B9\u4E4B\u95F4\u4EE5JSON\u5BF9\u8C61\u7684\u5F62\u5F0F\u5B89\u5168\u5730\u4F20\u8F93\u4FE1\u606F\u3002Higress JWT\u63D2\u4EF6(\`jwt-auth\`)\u5229\u7528JWT\u5B9E\u73B0\u8BA4\u8BC1\u9274\u6743\uFF0C\u652F\u6301\u4ECEHTTP\u8BF7\u6C42\u7684\u4E0D\u540C\u6765\u6E90\uFF08\u5982URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\uFF09\u89E3\u6790JWT\uFF0C\u5E76\u9A8C\u8BC1\u5176\u8BBF\u95EE\u6743\u9650\u3002

### 2. \u5168\u5C40\u914D\u7F6E
\u5168\u5C40\u914D\u7F6E\u5F71\u54CD\u6574\u4E2AHigress\u670D\u52A1\u7684\u8BA4\u8BC1\u884C\u4E3A\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A

- **consumers**: \u5B9A\u4E49\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u6BCF\u4E2Aconsumer\u9700\u914D\u7F6E\u5176\u540D\u79F0\u3001\u516C\u94A5\u96C6\u5408(jwks)\u3001\u7B7E\u53D1\u8005(issuer)\u7B49\uFF0C\u4EE5\u9A8C\u8BC1JWT\u7684\u6709\u6548\u6027\u3002
- **global_auth**: \u63A7\u5236\u8BA4\u8BC1\u673A\u5236\u7684\u751F\u6548\u8303\u56F4\uFF0C\u8BBE\u4E3Atrue\u65F6\u5168\u5C40\u751F\u6548\uFF0C\u8BBE\u4E3Afalse\u5219\u4EC5\u5BF9\u7279\u5B9A\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\uFF0C\u82E5\u4E0D\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4EC5\u5F53\u65E0\u7279\u5B9A\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\u3002

### 3. Consumer\u914D\u7F6E\u8BE6\u60C5
\u6BCF\u4E2Aconsumer\u7684\u914D\u7F6E\u6DB5\u76D6\u4EE5\u4E0B\u5173\u952E\u70B9\uFF1A
- **jwks**: JSON Web Key Set\u7684URL\uFF0C\u7528\u4E8E\u9A8C\u8BC1JWT\u7B7E\u540D\u3002
- **issuer**: \u7B7E\u53D1JWT\u7684\u5B9E\u4F53\u540D\u79F0\uFF0C\u5E94\u4E0EJWT\u7684payload\u4E2D\u7684iss\u5B57\u6BB5\u5339\u914D\u3002
- **claims_to_headers**: \u62BD\u53D6JWT payload\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u5E76\u8BBE\u7F6E\u4E3A\u8BF7\u6C42\u5934\uFF0C\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u3002
- **from_headers**, **from_params**, **from_cookies**: \u5206\u522B\u5B9A\u4E49\u4ECE\u54EA\u91CC\u63D0\u53D6JWT\u3002
- **clock_skew_seconds**: \u5141\u8BB8\u7684\u65F6\u95F4\u504F\u79FB\u91CF\uFF0C\u786E\u4FDD\u65F6\u949F\u4E0D\u540C\u6B65\u65F6\u4E5F\u80FD\u6B63\u786E\u9A8C\u8BC1JWT\u7684\u6709\u6548\u671F\u3002
- **keep_token**: \u63A7\u5236\u662F\u5426\u5728\u8F6C\u53D1\u8BF7\u6C42\u65F6\u643A\u5E26JWT\u3002

### 4. \u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6JWT
- **from_headers**: \u5982\u914D\u7F6E\`Authorization\`\u5934\uFF0C\u4E14\u524D\u7F00\u4E3A\`Bearer \`\uFF0C\u5219\u53BB\u9664\u524D\u7F00\u540E\u4F7F\u7528\u5269\u4F59\u90E8\u5206\u4F5C\u4E3AJWT\u3002
- **from_params**\u548C**from_cookies**\u4E5F\u63D0\u4F9B\u4E86\u4ECEURL\u53C2\u6570\u6216Cookie\u4E2D\u63D0\u53D6JWT\u7684\u7075\u6D3B\u6027\u3002

### 5. \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E
- **allow**: \u5728\u57DF\u540D\u6216\u8DEF\u7531\u7EA7\u522B\u4E0A\uFF0C\u660E\u786E\u5217\u51FA\u5141\u8BB8\u8BBF\u95EE\u7684consumer\u540D\u79F0\u5217\u8868\uFF0C\u589E\u5F3A\u7EC6\u7C92\u5EA6\u7684\u8BBF\u95EE\u63A7\u5236\u3002

### \u5B9E\u65BD\u6B65\u9AA4\u6982\u89C8
1. **\u786E\u5B9AConsumer**: \u786E\u8BA4\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u5E76\u83B7\u53D6\u5176\u516C\u94A5\u96C6\u5408(jwks)\u548C\u7B7E\u53D1\u8005\u4FE1\u606F\u3002
2. **\u914D\u7F6EGlobal Settings**: \u51B3\u5B9A\u662F\u5426\u542F\u7528\u5168\u5C40\u8BA4\u8BC1\u6216\u6309\u9700\u914D\u7F6E\u7279\u5B9A\u57DF\u540D\u53CA\u8DEF\u7531\u3002
3. **\u914D\u7F6EConsumer\u7EC6\u8282**: \u5728Higress\u914D\u7F6E\u4E2D\u6DFB\u52A0\u6BCF\u4E2Aconsumer\uFF0C\u8BBE\u7F6Ejwks\u3001issuer\u7B49\u5FC5\u8981\u4FE1\u606F\u3002
4. **\u9009\u62E9JWT\u6765\u6E90**: \u6839\u636E\u5E94\u7528\u9700\u6C42\uFF0C\u914D\u7F6EJWT\u662F\u4ECE\u8BF7\u6C42\u5934\u3001URL\u53C2\u6570\u8FD8\u662FCookie\u4E2D\u63D0\u53D6\u3002
5. **\u6620\u5C04Claims\u81F3Headers**: \u5982\u6709\u9700\u8981\uFF0C\u914D\u7F6E\u54EA\u4E9BJWT payload\u4E2D\u7684\u5B57\u6BB5\u5E94\u88AB\u6620\u5C04\u4E3A\u8BF7\u6C42\u5934\u8F6C\u53D1\u7ED9\u540E\u7AEF\u3002
6. **\u7EC6\u5316\u8BBF\u95EE\u63A7\u5236**: \u5728\u9700\u8981\u7684\u57DF\u540D\u6216\u8DEF\u7531\u4E0A\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684\u7279\u5B9Aconsumer\u5217\u8868\u3002

### \u89E3\u91CA
\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u786E\u4FDD\u53EA\u6709\u7ECF\u8FC7\u6709\u6548JWT\u9A8C\u8BC1\u4E14\u5177\u6709\u76F8\u5E94\u6743\u9650\u7684\u8BF7\u6C42\u624D\u80FD\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684\u670D\u52A1\u3002\u8FD9\u6837\u7684\u914D\u7F6E\u4E0D\u4EC5\u63D0\u9AD8\u4E86\u5B89\u5168\u6027\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u8BA4\u8BC1\u7B56\u7565\u914D\u7F6E\u80FD\u529B\uFF0C\u9002\u5E94\u4E0D\u540C\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\u3002\u7279\u522B\u662F\u901A\u8FC7\u7EC6\u81F4\u7684\u57DF\u540D\u6821\u9A8C\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E\uFF0C\u80FD\u591F\u5B9E\u73B0\u66F4\u52A0\u7CBE\u786E\u7684\u8BBF\u95EE\u63A7\u5236\u7B56\u7565\u3002


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
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17008)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return o},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u529F\u80FD\u6982\u8FF0",text:"1. \u529F\u80FD\u6982\u8FF0"},{depth:3,slug:"2-\u5168\u5C40\u914D\u7F6E",text:"2. \u5168\u5C40\u914D\u7F6E"},{depth:3,slug:"3-consumer\u914D\u7F6E\u8BE6\u60C5",text:"3. Consumer\u914D\u7F6E\u8BE6\u60C5"},{depth:3,slug:"4-\u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6jwt",text:"4. \u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6JWT"},{depth:3,slug:"5-\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E",text:"5. \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E"},{depth:3,slug:"\u5B9E\u65BD\u6B65\u9AA4\u6982\u89C8",text:"\u5B9E\u65BD\u6B65\u9AA4\u6982\u89C8"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=u((m,T,W)=>{const{layout:_,...n}=e;return n.file=r,n.url=t,h`${c()}${d(o)}`})});export{s as Content,f as __tla,i as compiledContent,s as default,r as file,e as frontmatter,l as getHeadings,a as rawContent,t as url};
