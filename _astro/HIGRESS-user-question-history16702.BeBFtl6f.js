import{c as p,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as g,m as u,u as d,__tla as h}from"./constant.drmVjFn1.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let t,n,e,o,a,l,r,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u7684\u63D2\u4EF6\u4E0B\u8F7D\u5230\u54EA\u91CC\u53BB\u4E86</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u63D0\u5230\u7684\u95EE\u9898\uFF0C\u201Chigress higress\u7684\u63D2\u4EF6\u4E0B\u8F7D\u5230\u54EA\u91CC\u53BB\u4E86\u201D\uFF0C\u6211\u7406\u89E3\u60A8\u53EF\u80FD\u662F\u5728\u5BFB\u627EHigress\u63D2\u4EF6\u7684\u4E0B\u8F7D\u4F4D\u7F6E\u6216\u65B9\u6CD5\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u63D2\u4EF6\u5E76\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u4E00\u4E2A\u201C\u4E0B\u8F7D\u201D\u7684\u6982\u5FF5\uFF0C\u800C\u662F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u6765\u90E8\u7F72\u548C\u7BA1\u7406\u8FD9\u4E9B\u63D2\u4EF6\uFF0C\u4E3B\u8981\u662F\u5229\u7528Istio\u7684WasmPlugin CRD\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u6765\u5B9E\u73B0\u63D2\u4EF6\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u3002\u8FD9\u4E9B\u63D2\u4EF6\u5B9E\u9645\u4E0A\u662F\u4F5C\u4E3AWebAssembly\uFF08WASM\uFF09\u6A21\u5757\u5B58\u50A8\u5728\u7279\u5B9A\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u4E2D\uFF0C\u60A8\u9700\u8981\u901A\u8FC7Kubernetes\u6216Istio\u7684\u914D\u7F6E\u6765\u5F15\u7528\u8FD9\u4E9B\u955C\u50CF\u5730\u5740\u4EE5\u90E8\u7F72\u63D2\u4EF6\u3002</p>
<h3 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<ol>
<li><strong>\u63D2\u4EF6\u90E8\u7F72\u65B9\u5F0F\u8BEF\u89E3</strong>\uFF1A\u53EF\u80FD\u60A8\u4E60\u60EF\u4E8E\u4ECE\u7F51\u7AD9\u76F4\u63A5\u4E0B\u8F7D\u8F6F\u4EF6\u5305\u518D\u8FDB\u884C\u5B89\u88C5\u7684\u4F20\u7EDF\u65B9\u5F0F\uFF0C\u800CHigress\u63D2\u4EF6\u91C7\u7528\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u5316\u90E8\u7F72\u65B9\u5F0F\u3002</li>
<li><strong>\u955C\u50CF\u4ED3\u5E93\u8BA4\u77E5</strong>\uFF1A\u63D2\u4EF6\u4EE5\u5BB9\u5668\u955C\u50CF\u7684\u5F62\u5F0F\u6258\u7BA1\u5728\u7279\u5B9A\u7684\u955C\u50CF\u4ED3\u5E93\u4E2D\uFF0C\u5982\u963F\u91CC\u4E91\u7684CR\uFF08Container Registry\uFF09\uFF0C\u8FD9\u4E0E\u76F4\u63A5\u4E0B\u8F7DZIP\u6216EXE\u6587\u4EF6\u4E0D\u540C\u3002</li>
</ol>
<h3 id="\u89E3\u51B3\u6B65\u9AA4">\u89E3\u51B3\u6B65\u9AA4</h3>
<p>\u867D\u7136\u6CA1\u6709\u76F4\u63A5\u7684\u201C\u4E0B\u8F7D\u201D\u6B65\u9AA4\uFF0C\u4F46\u60A8\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6D41\u7A0B\u6765\u201C\u90E8\u7F72\u201DHigress\u63D2\u4EF6\uFF1A</p>
<ol>
<li>
<p><strong>\u786E\u8BA4\u73AF\u5883</strong>\uFF1A\u786E\u4FDD\u60A8\u7684\u73AF\u5883\u4E2D\u5DF2\u5B89\u88C5\u5E76\u914D\u7F6E\u597DIstio\u53CAHigress\u76F8\u5173\u7684\u7EC4\u4EF6\uFF0C\u4E14\u6709\u6743\u9650\u8BBF\u95EE\u5230\u63D2\u4EF6\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u3002</p>
</li>
<li>
<p><strong>\u67E5\u9605\u5B98\u65B9\u63D2\u4EF6\u955C\u50CF\u5730\u5740</strong>\uFF1A\u4ECE\u77E5\u8BC6\u4E2D\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u627E\u5230\u6BCF\u4E2A\u63D2\u4EF6\u5BF9\u5E94\u7684\u955C\u50CF\u5730\u5740\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u60F3\u90E8\u7F72\u201C\u8BF7\u6C42\u5C4F\u853D\u201D\u63D2\u4EF6\uFF0C\u955C\u50CF\u5730\u5740\u4E3A<code dir="auto">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0</code>\u3002</p>
</li>
<li>
<p><strong>\u521B\u5EFAWasmPlugin\u914D\u7F6E</strong>\uFF1A\u6839\u636E\u6240\u9700\u7684\u63D2\u4EF6\u529F\u80FD\uFF0C\u521B\u5EFA\u76F8\u5E94\u7684WasmPlugin CRD\u914D\u7F6E\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u9700\u8981\u5168\u5C40\u914D\u7F6E\u201C\u8BF7\u6C42\u5C4F\u853D\u201D\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0A\u9762\u7684\u77E5\u8BC6\u5185\u5BB9\u7F16\u5199YAML\u914D\u7F6E\uFF0C\u5305\u542B<code dir="auto">defaultConfig</code>\u90E8\u5206\u4EE5\u53CA\u63D2\u4EF6\u7684URL\u5730\u5740\u3002</p>
</li>
<li>
<p><strong>\u5E94\u7528\u914D\u7F6E</strong>\uFF1A\u901A\u8FC7kubectl\u547D\u4EE4\u6216\u8005Istio\u7684\u63A7\u5236\u5E73\u9762\uFF0C\u5C06\u914D\u7F6E\u6587\u4EF6\u5E94\u7528\u5230\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E2D\u3002\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">your-wasmplugin-config.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f your-wasmplugin-config.yaml"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u9A8C\u8BC1\u90E8\u7F72</strong>\uFF1A\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u6210\u529F\u90E8\u7F72\u5E76\u751F\u6548\uFF0C\u53EF\u4EE5\u901A\u8FC7\u65E5\u5FD7\u3001Istio\u7684\u72B6\u6001\u68C0\u67E5\u6216\u662F\u5B9E\u9645\u53D1\u9001\u8BF7\u6C42\u6765\u9A8C\u8BC1\u3002</p>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u6B64\u8FC7\u7A0B\u4E0D\u6D89\u53CA\u4F20\u7EDF\u610F\u4E49\u4E0A\u7684\u201C\u4E0B\u8F7D\u201D\uFF0C\u800C\u662F\u901A\u8FC7\u58F0\u660E\u5F0F\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177\uFF08Kubernetes/Istio\uFF09\u76F4\u63A5\u4ECE\u6307\u5B9A\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u62C9\u53D6\u63D2\u4EF6\u955C\u50CF\u5E76\u90E8\u7F72\u5230\u60A8\u7684\u670D\u52A1\u7F51\u683C\u4E2D\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u80FD\u591F\u81EA\u52A8\u5316\u3001\u6807\u51C6\u5316\u5730\u7BA1\u7406\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F\uFF0C\u540C\u65F6\u4E5F\u4FBF\u4E8E\u7248\u672C\u7BA1\u7406\u548C\u8DE8\u73AF\u5883\u7684\u4E00\u81F4\u6027\u90E8\u7F72\u3002</p>
<p>\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u60A8\u7684\u7F51\u7EDC\u7B56\u7565\u9650\u5236\u4E86\u5BF9\u7279\u5B9A\u955C\u50CF\u4ED3\u5E93\u7684\u8BBF\u95EE\uFF0C\u53EF\u80FD\u9700\u8981\u989D\u5916\u914D\u7F6E\u955C\u50CF\u62C9\u53D6\u7684\u51ED\u636E\u6216\u8C03\u6574\u7F51\u7EDC\u8BBE\u7F6E\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u63D2\u4EF6\u4F7F\u7528\u5F15\u5BFC</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16703" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,o={id:"question-history-16702",title:"higress\u7684\u63D2\u4EF6\u4E0B\u8F7D\u5230\u54EA\u91CC\u53BB\u4E86",date:"2024-09-03",category:"expertConsultation",description:"\u6839\u636E\u60A8\u63D0\u5230\u7684\u95EE\u9898\uFF0C\u201Chigress higress\u7684\u63D2\u4EF6\u4E0B\u8F7D\u5230\u54EA\u91CC\u53BB\u4E86\u201D\uFF0C\u6211\u7406\u89E3\u60A8\u53EF\u80FD\u662F\u5728\u5BFB\u627EHigress\u63D2\u4EF6\u7684\u4E0B\u8F7D\u4F4D\u7F6E\u6216\u65B9\u6CD5\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u63D2\u4EF6\u5E76\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u4E00\u4E2A\u201C\u4E0B\u8F7D\u201D\u7684\u6982\u5FF5\uFF0C\u800C\u662F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u6765\u90E8\u7F72\u548C\u7BA1\u7406\u8FD9\u4E9B\u63D2\u4EF6\uFF0C\u4E3B\u8981\u662F\u5229\u7528Istio\u7684WasmPlugin CRD\uFF08\u81EA"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16702.md",r=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u7684\u63D2\u4EF6\u4E0B\u8F7D\u5230\u54EA\u91CC\u53BB\u4E86  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u63D0\u5230\u7684\u95EE\u9898\uFF0C\u201Chigress higress\u7684\u63D2\u4EF6\u4E0B\u8F7D\u5230\u54EA\u91CC\u53BB\u4E86\u201D\uFF0C\u6211\u7406\u89E3\u60A8\u53EF\u80FD\u662F\u5728\u5BFB\u627EHigress\u63D2\u4EF6\u7684\u4E0B\u8F7D\u4F4D\u7F6E\u6216\u65B9\u6CD5\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u63D2\u4EF6\u5E76\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u4E00\u4E2A\u201C\u4E0B\u8F7D\u201D\u7684\u6982\u5FF5\uFF0C\u800C\u662F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u6765\u90E8\u7F72\u548C\u7BA1\u7406\u8FD9\u4E9B\u63D2\u4EF6\uFF0C\u4E3B\u8981\u662F\u5229\u7528Istio\u7684WasmPlugin CRD\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u6765\u5B9E\u73B0\u63D2\u4EF6\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u3002\u8FD9\u4E9B\u63D2\u4EF6\u5B9E\u9645\u4E0A\u662F\u4F5C\u4E3AWebAssembly\uFF08WASM\uFF09\u6A21\u5757\u5B58\u50A8\u5728\u7279\u5B9A\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u4E2D\uFF0C\u60A8\u9700\u8981\u901A\u8FC7Kubernetes\u6216Istio\u7684\u914D\u7F6E\u6765\u5F15\u7528\u8FD9\u4E9B\u955C\u50CF\u5730\u5740\u4EE5\u90E8\u7F72\u63D2\u4EF6\u3002

### \u5206\u6790\u95EE\u9898\u539F\u56E0

1. **\u63D2\u4EF6\u90E8\u7F72\u65B9\u5F0F\u8BEF\u89E3**\uFF1A\u53EF\u80FD\u60A8\u4E60\u60EF\u4E8E\u4ECE\u7F51\u7AD9\u76F4\u63A5\u4E0B\u8F7D\u8F6F\u4EF6\u5305\u518D\u8FDB\u884C\u5B89\u88C5\u7684\u4F20\u7EDF\u65B9\u5F0F\uFF0C\u800CHigress\u63D2\u4EF6\u91C7\u7528\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u5316\u90E8\u7F72\u65B9\u5F0F\u3002
2. **\u955C\u50CF\u4ED3\u5E93\u8BA4\u77E5**\uFF1A\u63D2\u4EF6\u4EE5\u5BB9\u5668\u955C\u50CF\u7684\u5F62\u5F0F\u6258\u7BA1\u5728\u7279\u5B9A\u7684\u955C\u50CF\u4ED3\u5E93\u4E2D\uFF0C\u5982\u963F\u91CC\u4E91\u7684CR\uFF08Container Registry\uFF09\uFF0C\u8FD9\u4E0E\u76F4\u63A5\u4E0B\u8F7DZIP\u6216EXE\u6587\u4EF6\u4E0D\u540C\u3002

### \u89E3\u51B3\u6B65\u9AA4

\u867D\u7136\u6CA1\u6709\u76F4\u63A5\u7684\u201C\u4E0B\u8F7D\u201D\u6B65\u9AA4\uFF0C\u4F46\u60A8\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6D41\u7A0B\u6765\u201C\u90E8\u7F72\u201DHigress\u63D2\u4EF6\uFF1A

1. **\u786E\u8BA4\u73AF\u5883**\uFF1A\u786E\u4FDD\u60A8\u7684\u73AF\u5883\u4E2D\u5DF2\u5B89\u88C5\u5E76\u914D\u7F6E\u597DIstio\u53CAHigress\u76F8\u5173\u7684\u7EC4\u4EF6\uFF0C\u4E14\u6709\u6743\u9650\u8BBF\u95EE\u5230\u63D2\u4EF6\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u3002

2. **\u67E5\u9605\u5B98\u65B9\u63D2\u4EF6\u955C\u50CF\u5730\u5740**\uFF1A\u4ECE\u77E5\u8BC6\u4E2D\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u627E\u5230\u6BCF\u4E2A\u63D2\u4EF6\u5BF9\u5E94\u7684\u955C\u50CF\u5730\u5740\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u60F3\u90E8\u7F72\u201C\u8BF7\u6C42\u5C4F\u853D\u201D\u63D2\u4EF6\uFF0C\u955C\u50CF\u5730\u5740\u4E3A\`oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0\`\u3002

3. **\u521B\u5EFAWasmPlugin\u914D\u7F6E**\uFF1A\u6839\u636E\u6240\u9700\u7684\u63D2\u4EF6\u529F\u80FD\uFF0C\u521B\u5EFA\u76F8\u5E94\u7684WasmPlugin CRD\u914D\u7F6E\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u9700\u8981\u5168\u5C40\u914D\u7F6E\u201C\u8BF7\u6C42\u5C4F\u853D\u201D\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0A\u9762\u7684\u77E5\u8BC6\u5185\u5BB9\u7F16\u5199YAML\u914D\u7F6E\uFF0C\u5305\u542B\`defaultConfig\`\u90E8\u5206\u4EE5\u53CA\u63D2\u4EF6\u7684URL\u5730\u5740\u3002

4. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7kubectl\u547D\u4EE4\u6216\u8005Istio\u7684\u63A7\u5236\u5E73\u9762\uFF0C\u5C06\u914D\u7F6E\u6587\u4EF6\u5E94\u7528\u5230\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E2D\u3002\u4F8B\u5982\uFF1A
   \`\`\`shell
   kubectl apply -f your-wasmplugin-config.yaml
   \`\`\`

5. **\u9A8C\u8BC1\u90E8\u7F72**\uFF1A\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u6210\u529F\u90E8\u7F72\u5E76\u751F\u6548\uFF0C\u53EF\u4EE5\u901A\u8FC7\u65E5\u5FD7\u3001Istio\u7684\u72B6\u6001\u68C0\u67E5\u6216\u662F\u5B9E\u9645\u53D1\u9001\u8BF7\u6C42\u6765\u9A8C\u8BC1\u3002

### \u89E3\u91CA

\u6B64\u8FC7\u7A0B\u4E0D\u6D89\u53CA\u4F20\u7EDF\u610F\u4E49\u4E0A\u7684\u201C\u4E0B\u8F7D\u201D\uFF0C\u800C\u662F\u901A\u8FC7\u58F0\u660E\u5F0F\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177\uFF08Kubernetes/Istio\uFF09\u76F4\u63A5\u4ECE\u6307\u5B9A\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u62C9\u53D6\u63D2\u4EF6\u955C\u50CF\u5E76\u90E8\u7F72\u5230\u60A8\u7684\u670D\u52A1\u7F51\u683C\u4E2D\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u80FD\u591F\u81EA\u52A8\u5316\u3001\u6807\u51C6\u5316\u5730\u7BA1\u7406\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F\uFF0C\u540C\u65F6\u4E5F\u4FBF\u4E8E\u7248\u672C\u7BA1\u7406\u548C\u8DE8\u73AF\u5883\u7684\u4E00\u81F4\u6027\u90E8\u7F72\u3002

\u8BF7\u6CE8\u610F\uFF0C\u5982\u679C\u60A8\u7684\u7F51\u7EDC\u7B56\u7565\u9650\u5236\u4E86\u5BF9\u7279\u5B9A\u955C\u50CF\u4ED3\u5E93\u7684\u8BBF\u95EE\uFF0C\u53EF\u80FD\u9700\u8981\u989D\u5916\u914D\u7F6E\u955C\u50CF\u62C9\u53D6\u7684\u51ED\u636E\u6216\u8C03\u6574\u7F51\u7EDC\u8BBE\u7F6E\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u63D2\u4EF6\u4F7F\u7528\u5F15\u5BFC 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16703)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return s},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"\u89E3\u51B3\u6B65\u9AA4",text:"\u89E3\u51B3\u6B65\u9AA4"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=p((m,b,_)=>{const{layout:C,...i}=o;return i.file=e,i.url=r,g`${u()}${d(s)}`})});export{t as Content,y as __tla,n as compiledContent,t as default,e as file,o as frontmatter,a as getHeadings,l as rawContent,r as url};
