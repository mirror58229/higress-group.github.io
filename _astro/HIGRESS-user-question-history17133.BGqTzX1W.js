import{c as h,__tla as l}from"./astro-component.DIa0fJKh.js";import{r as a,m as u,u as c,__tla as d}from"./constant.DinD8ZYh.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let s,i,e,t,n,p,o,P=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let r;r=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u5982\u4F55\u5BF9\u63A5grpc</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u56DE\u7B54{{{\u95EE\u9898: higress higress \u5982\u4F55\u5BF9\u63A5grpc}}}\uFF1A</p>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728Higress\u4E2D\u914D\u7F6E\u8DEF\u7531\u4EE5\u5BF9\u63A5gRPC\u670D\u52A1\u3002\u4F9D\u636E\u63D0\u4F9B\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF0C\u7279\u522B\u662F\u7B2C1\u7BC7\u53C2\u8003\u5185\u5BB9\uFF0C\u6211\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4E00\u4E2A\u7B80\u660E\u7684\u6307\u5BFC\u6D41\u7A0B\u3002</p>
<h3 id="1-\u5206\u6790\u95EE\u9898\u539F\u56E0">1. \u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<p>\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\uFF0CgRPC\u4F5C\u4E3A\u4E00\u79CD\u9AD8\u6548\u7684RPC\uFF08Remote Procedure Call\uFF09\u6846\u67B6\uFF0C\u5E38\u7528\u4E8E\u670D\u52A1\u95F4\u901A\u4FE1\u3002Higress\u4F5C\u4E3A\u4E00\u6B3E\u73B0\u4EE3\u7F51\u5173\uFF0C\u652F\u6301\u914D\u7F6E\u8DEF\u7531\u4EE5\u4EE3\u7406\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\uFF0C\u5305\u62ECgRPC\u670D\u52A1\u3002\u60A8\u53EF\u80FD\u9762\u4E34\u7684\u95EE\u9898\u5728\u4E8E\u4E0D\u6E05\u695A\u5982\u4F55\u5728Higress\u914D\u7F6E\u4E2D\u8BBE\u7F6E\u8DEF\u7531\u89C4\u5219\uFF0C\u4F7F\u5176\u80FD\u591F\u6B63\u786E\u5730\u8F6C\u53D1\u8BF7\u6C42\u5230gRPC\u670D\u52A1\u3002</p>
<h3 id="2-\u914D\u7F6E\u6B65\u9AA4">2. \u914D\u7F6E\u6B65\u9AA4</h3>
<p>\u6839\u636E\u7B2C1\u7BC7\u53C2\u8003\u5185\u5BB9\u300A\u914D\u7F6E\u8DEF\u7531\u6307\u5411gRPC\u670D\u52A1\u300B\uFF0C\u5C3D\u7BA1\u5177\u4F53\u6B65\u9AA4\u672A\u5728\u6458\u8981\u4E2D\u8BE6\u7EC6\u5C55\u5F00\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u5E38\u89C4\u7684gRPC\u914D\u7F6E\u903B\u8F91\u7ED9\u51FA\u6307\u5BFC\u5EFA\u8BAE\uFF1A</p>
<h4 id="\u6B65\u9AA41\u786E\u4FDDgrpc\u670D\u52A1\u8FD0\u884C">\u6B65\u9AA41\uFF1A\u786E\u4FDDgRPC\u670D\u52A1\u8FD0\u884C</h4>
<p>\u786E\u4FDD\u60A8\u7684gRPC\u670D\u52A1\u5DF2\u7ECF\u5728\u76EE\u6807\u5730\u5740\u6B63\u5E38\u8FD0\u884C\uFF0C\u5E76\u4E14\u76D1\u542C\u76F8\u5E94\u7684\u7AEF\u53E3\u3002</p>
<h4 id="\u6B65\u9AA42\u8BBF\u95EEhigress\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6">\u6B65\u9AA42\uFF1A\u8BBF\u95EEHigress\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6</h4>
<p>\u767B\u5F55\u5230Higress\u7684\u7BA1\u7406\u63A7\u5236\u53F0\uFF0C\u6216\u8005\u76F4\u63A5\u7F16\u8F91Higress\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4F4D\u4E8EHigress\u90E8\u7F72\u65F6\u6307\u5B9A\u7684\u914D\u7F6E\u76EE\u5F55\u4E0B\u3002</p>
<h4 id="\u6B65\u9AA43\u6DFB\u52A0grpc\u8DEF\u7531\u89C4\u5219">\u6B65\u9AA43\uFF1A\u6DFB\u52A0gRPC\u8DEF\u7531\u89C4\u5219</h4>
<p>\u5728\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8DEF\u7531\u89C4\u5219\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p>
<ul>
<li><strong>\u8DEF\u7531\u5339\u914D</strong>\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u5339\u914D\u89C4\u5219\uFF0C\u5982\u8DEF\u5F84\u524D\u7F00\u3001\u7CBE\u786E\u8DEF\u5F84\u7B49\uFF0C\u4EE5\u4FBF\u8BC6\u522B\u51FA\u9700\u8981\u8F6C\u53D1\u5230gRPC\u670D\u52A1\u7684\u8BF7\u6C42\u3002</li>
<li><strong>\u4E0A\u6E38\u914D\u7F6E</strong>\uFF1A\u6307\u5B9AgRPC\u670D\u52A1\u7684\u5730\u5740\uFF08IP\u6216\u57DF\u540D\uFF09\u53CA\u7AEF\u53E3\u53F7\u3002\u5728\u67D0\u4E9B\u9AD8\u7EA7\u914D\u7F6E\u4E2D\uFF0C\u60A8\u53EF\u80FD\u8FD8\u9700\u8981\u914D\u7F6E\u534F\u8BAE\u660E\u786E\u4E3A<code dir="auto">grpc</code>\u6216<code dir="auto">grpcs</code>\uFF08\u5BF9\u4E8ETLS\u52A0\u5BC6\u7684gRPC\u670D\u52A1\uFF09\u3002</li>
<li><strong>\u534F\u8BAE\u8BBE\u7F6E</strong>\uFF1A\u786E\u4FDD\u8DEF\u7531\u914D\u7F6E\u6307\u5B9A\u4E86\u6B63\u786E\u7684\u534F\u8BAE\u7C7B\u578B\uFF0C\u4EE5\u652F\u6301gRPC\u901A\u4FE1\u3002</li>
</ul>
<h4 id="\u6B65\u9AA44\u9A8C\u8BC1\u914D\u7F6E">\u6B65\u9AA44\uFF1A\u9A8C\u8BC1\u914D\u7F6E</h4>
<p>\u4FDD\u5B58\u914D\u7F6E\u66F4\u6539\u540E\uFF0C\u901A\u8FC7\u53D1\u9001\u4E00\u4E2AgRPC\u8BF7\u6C42\u5230Higress\u7684\u524D\u7AEF\u5730\u5740\uFF0C\u9A8C\u8BC1\u8BF7\u6C42\u662F\u5426\u80FD\u88AB\u6B63\u786E\u5730\u4EE3\u7406\u81F3gRPC\u670D\u52A1\u5E76\u8FD4\u56DE\u9884\u671F\u54CD\u5E94\u3002</p>
<h3 id="3-\u89E3\u91CA\u8BF4\u660E">3. \u89E3\u91CA\u8BF4\u660E</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u662F\u57FA\u4E8E\u901A\u7528\u7684API\u7F51\u5173\u914D\u7F6E\u903B\u8F91\uFF0CHigress\u4F5C\u4E3A\u4E00\u4E2A\u7075\u6D3B\u7684\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u5176\u5177\u4F53\u914D\u7F6E\u7EC6\u8282\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\u3002\u56E0\u6B64\uFF0C\u5B9E\u9645\u64CD\u4F5C\u65F6\uFF0C\u5EFA\u8BAE\u8BE6\u7EC6\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u6216\u76F4\u63A5\u53C2\u8003\u7B2C1\u7BC7\u5185\u5BB9\u4E2D\u63D0\u5230\u7684\u81EA\u5B9A\u4E49\u7F16\u8F91\u94FE\u63A5[<a href="https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">custom_edit_url</a>]\uFF0C\u83B7\u53D6\u6700\u51C6\u786E\u548C\u6700\u65B0\u7684\u914D\u7F6E\u6307\u5357\u3002</p>
<p>\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u5728\u5B9E\u65BD\u8FC7\u7A0B\u4E2D\u9047\u5230\u4EFB\u4F55\u7279\u5B9A\u7684\u6280\u672F\u95EE\u9898\u6216\u6709\u8FDB\u4E00\u6B65\u7684\u5B9A\u5236\u9700\u6C42\uFF0C\u8003\u8651\u67E5\u770BHigress\u7684GitHub\u4ED3\u5E93[<a href="https://github.com/higress-group/higress-group.github.io" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GitHub\u4ED3\u5E93</a>]\u63D0\u4EA4\u95EE\u9898\u6216\u8D21\u732E\u4EE3\u7801\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u914D\u7F6E\u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u6559\u7A0B\uFF1A\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress \u63A7\u5236\u53F0</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u5982\u4F55\u914D\u7F6E\u6587\u4EF6\u670D\u52A1</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17145" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-17133",title:"higress \u5982\u4F55\u5BF9\u63A5grpc",date:"2024-09-26",category:"expertConsultation",description:"\u56DE\u7B54\u95EE\u9898: higress higress \u5982\u4F55\u5BF9\u63A5grpc\uFF1A\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728Higress\u4E2D\u914D\u7F6E\u8DEF\u7531\u4EE5\u5BF9\u63A5gRPC\u670D\u52A1\u3002\u4F9D\u636E\u63D0\u4F9B\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF0C\u7279\u522B\u662F\u7B2C1\u7BC7\u53C2\u8003\u5185\u5BB9\uFF0C\u6211\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4E00\u4E2A\u7B80\u660E\u7684\u6307\u5BFC\u6D41\u7A0B\u3002### 1. \u5206\u6790\u95EE\u9898\u539F\u56E0\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\uFF0CgRPC\u4F5C\u4E3A\u4E00\u79CD\u9AD8\u6548\u7684RPC\uFF08Remote P",tags:["higress","grpc","\u5BF9\u63A5","\u65B9\u6CD5","","\u914D\u7F6E","\u4F7F\u7528"],keywords:["higress","grpc","\u5BF9\u63A5","\u65B9\u6CD5","","\u914D\u7F6E","\u4F7F\u7528"]},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17133.md",o=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u5982\u4F55\u5BF9\u63A5grpc  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u56DE\u7B54{{{\u95EE\u9898: higress higress \u5982\u4F55\u5BF9\u63A5grpc}}}\uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728Higress\u4E2D\u914D\u7F6E\u8DEF\u7531\u4EE5\u5BF9\u63A5gRPC\u670D\u52A1\u3002\u4F9D\u636E\u63D0\u4F9B\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF0C\u7279\u522B\u662F\u7B2C1\u7BC7\u53C2\u8003\u5185\u5BB9\uFF0C\u6211\u5C06\u4E3A\u60A8\u63D0\u4F9B\u4E00\u4E2A\u7B80\u660E\u7684\u6307\u5BFC\u6D41\u7A0B\u3002

### 1. \u5206\u6790\u95EE\u9898\u539F\u56E0

\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\uFF0CgRPC\u4F5C\u4E3A\u4E00\u79CD\u9AD8\u6548\u7684RPC\uFF08Remote Procedure Call\uFF09\u6846\u67B6\uFF0C\u5E38\u7528\u4E8E\u670D\u52A1\u95F4\u901A\u4FE1\u3002Higress\u4F5C\u4E3A\u4E00\u6B3E\u73B0\u4EE3\u7F51\u5173\uFF0C\u652F\u6301\u914D\u7F6E\u8DEF\u7531\u4EE5\u4EE3\u7406\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\uFF0C\u5305\u62ECgRPC\u670D\u52A1\u3002\u60A8\u53EF\u80FD\u9762\u4E34\u7684\u95EE\u9898\u5728\u4E8E\u4E0D\u6E05\u695A\u5982\u4F55\u5728Higress\u914D\u7F6E\u4E2D\u8BBE\u7F6E\u8DEF\u7531\u89C4\u5219\uFF0C\u4F7F\u5176\u80FD\u591F\u6B63\u786E\u5730\u8F6C\u53D1\u8BF7\u6C42\u5230gRPC\u670D\u52A1\u3002

### 2. \u914D\u7F6E\u6B65\u9AA4

\u6839\u636E\u7B2C1\u7BC7\u53C2\u8003\u5185\u5BB9\u300A\u914D\u7F6E\u8DEF\u7531\u6307\u5411gRPC\u670D\u52A1\u300B\uFF0C\u5C3D\u7BA1\u5177\u4F53\u6B65\u9AA4\u672A\u5728\u6458\u8981\u4E2D\u8BE6\u7EC6\u5C55\u5F00\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u5E38\u89C4\u7684gRPC\u914D\u7F6E\u903B\u8F91\u7ED9\u51FA\u6307\u5BFC\u5EFA\u8BAE\uFF1A

#### \u6B65\u9AA41\uFF1A\u786E\u4FDDgRPC\u670D\u52A1\u8FD0\u884C
\u786E\u4FDD\u60A8\u7684gRPC\u670D\u52A1\u5DF2\u7ECF\u5728\u76EE\u6807\u5730\u5740\u6B63\u5E38\u8FD0\u884C\uFF0C\u5E76\u4E14\u76D1\u542C\u76F8\u5E94\u7684\u7AEF\u53E3\u3002

#### \u6B65\u9AA42\uFF1A\u8BBF\u95EEHigress\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6
\u767B\u5F55\u5230Higress\u7684\u7BA1\u7406\u63A7\u5236\u53F0\uFF0C\u6216\u8005\u76F4\u63A5\u7F16\u8F91Higress\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u4F4D\u4E8EHigress\u90E8\u7F72\u65F6\u6307\u5B9A\u7684\u914D\u7F6E\u76EE\u5F55\u4E0B\u3002

#### \u6B65\u9AA43\uFF1A\u6DFB\u52A0gRPC\u8DEF\u7531\u89C4\u5219
\u5728\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8DEF\u7531\u89C4\u5219\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u4EE5\u4E0B\u51E0\u70B9\uFF1A
- **\u8DEF\u7531\u5339\u914D**\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u5339\u914D\u89C4\u5219\uFF0C\u5982\u8DEF\u5F84\u524D\u7F00\u3001\u7CBE\u786E\u8DEF\u5F84\u7B49\uFF0C\u4EE5\u4FBF\u8BC6\u522B\u51FA\u9700\u8981\u8F6C\u53D1\u5230gRPC\u670D\u52A1\u7684\u8BF7\u6C42\u3002
- **\u4E0A\u6E38\u914D\u7F6E**\uFF1A\u6307\u5B9AgRPC\u670D\u52A1\u7684\u5730\u5740\uFF08IP\u6216\u57DF\u540D\uFF09\u53CA\u7AEF\u53E3\u53F7\u3002\u5728\u67D0\u4E9B\u9AD8\u7EA7\u914D\u7F6E\u4E2D\uFF0C\u60A8\u53EF\u80FD\u8FD8\u9700\u8981\u914D\u7F6E\u534F\u8BAE\u660E\u786E\u4E3A\`grpc\`\u6216\`grpcs\`\uFF08\u5BF9\u4E8ETLS\u52A0\u5BC6\u7684gRPC\u670D\u52A1\uFF09\u3002
- **\u534F\u8BAE\u8BBE\u7F6E**\uFF1A\u786E\u4FDD\u8DEF\u7531\u914D\u7F6E\u6307\u5B9A\u4E86\u6B63\u786E\u7684\u534F\u8BAE\u7C7B\u578B\uFF0C\u4EE5\u652F\u6301gRPC\u901A\u4FE1\u3002

#### \u6B65\u9AA44\uFF1A\u9A8C\u8BC1\u914D\u7F6E
\u4FDD\u5B58\u914D\u7F6E\u66F4\u6539\u540E\uFF0C\u901A\u8FC7\u53D1\u9001\u4E00\u4E2AgRPC\u8BF7\u6C42\u5230Higress\u7684\u524D\u7AEF\u5730\u5740\uFF0C\u9A8C\u8BC1\u8BF7\u6C42\u662F\u5426\u80FD\u88AB\u6B63\u786E\u5730\u4EE3\u7406\u81F3gRPC\u670D\u52A1\u5E76\u8FD4\u56DE\u9884\u671F\u54CD\u5E94\u3002

### 3. \u89E3\u91CA\u8BF4\u660E

\u4EE5\u4E0A\u6B65\u9AA4\u662F\u57FA\u4E8E\u901A\u7528\u7684API\u7F51\u5173\u914D\u7F6E\u903B\u8F91\uFF0CHigress\u4F5C\u4E3A\u4E00\u4E2A\u7075\u6D3B\u7684\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u5176\u5177\u4F53\u914D\u7F6E\u7EC6\u8282\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\u3002\u56E0\u6B64\uFF0C\u5B9E\u9645\u64CD\u4F5C\u65F6\uFF0C\u5EFA\u8BAE\u8BE6\u7EC6\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u6216\u76F4\u63A5\u53C2\u8003\u7B2C1\u7BC7\u5185\u5BB9\u4E2D\u63D0\u5230\u7684\u81EA\u5B9A\u4E49\u7F16\u8F91\u94FE\u63A5[[custom_edit_url](https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md)]\uFF0C\u83B7\u53D6\u6700\u51C6\u786E\u548C\u6700\u65B0\u7684\u914D\u7F6E\u6307\u5357\u3002

\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u5728\u5B9E\u65BD\u8FC7\u7A0B\u4E2D\u9047\u5230\u4EFB\u4F55\u7279\u5B9A\u7684\u6280\u672F\u95EE\u9898\u6216\u6709\u8FDB\u4E00\u6B65\u7684\u5B9A\u5236\u9700\u6C42\uFF0C\u8003\u8651\u67E5\u770BHigress\u7684GitHub\u4ED3\u5E93[[GitHub\u4ED3\u5E93](https://github.com/higress-group/higress-group.github.io)]\u63D0\u4EA4\u95EE\u9898\u6216\u8D21\u732E\u4EE3\u7801\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u914D\u7F6E\u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u6559\u7A0B\uFF1A\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress \u63A7\u5236\u53F0 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u5982\u4F55\u914D\u7F6E\u6587\u4EF6\u670D\u52A1 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17145)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return r},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"1. \u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"2-\u914D\u7F6E\u6B65\u9AA4",text:"2. \u914D\u7F6E\u6B65\u9AA4"},{depth:4,slug:"\u6B65\u9AA41\u786E\u4FDDgrpc\u670D\u52A1\u8FD0\u884C",text:"\u6B65\u9AA41\uFF1A\u786E\u4FDDgRPC\u670D\u52A1\u8FD0\u884C"},{depth:4,slug:"\u6B65\u9AA42\u8BBF\u95EEhigress\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6",text:"\u6B65\u9AA42\uFF1A\u8BBF\u95EEHigress\u63A7\u5236\u53F0\u6216\u914D\u7F6E\u6587\u4EF6"},{depth:4,slug:"\u6B65\u9AA43\u6DFB\u52A0grpc\u8DEF\u7531\u89C4\u5219",text:"\u6B65\u9AA43\uFF1A\u6DFB\u52A0gRPC\u8DEF\u7531\u89C4\u5219"},{depth:4,slug:"\u6B65\u9AA44\u9A8C\u8BC1\u914D\u7F6E",text:"\u6B65\u9AA44\uFF1A\u9A8C\u8BC1\u914D\u7F6E"},{depth:3,slug:"3-\u89E3\u91CA\u8BF4\u660E",text:"3. \u89E3\u91CA\u8BF4\u660E"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=h((C,R,H)=>{const{layout:b,...g}=t;return g.file=e,g.url=o,a`${u()}${c(r)}`})});export{s as Content,P as __tla,i as compiledContent,s as default,e as file,t as frontmatter,n as getHeadings,p as rawContent,o as url};
