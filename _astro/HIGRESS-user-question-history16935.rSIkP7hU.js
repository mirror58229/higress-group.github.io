import{c as a,__tla as u}from"./astro-component.cI6d52vQ.js";import{r as p,m as h,u as c,__tla as f}from"./constant.Byn2PIAB.js";import{__tla as x}from"./astro/assets-service.Da9pL5MS.js";let e,o,r,n,g,l,t,K=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>K8s\u4F53\u7CFB\u4E0B\uFF0C\u4EE5ingress \u548C higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u548C\u4F20\u7EDF\u7684Nginx\u6709\u54EA\u4E9B\u4E0D\u540C\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u5728higress\u5728Kubernetes\uFF08K8s\uFF09\u4F53\u7CFB\u4E0B\u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\u4E0E\u4F20\u7EDFNginx\u7684\u4E0D\u540C\u4E4B\u5904\u524D\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u56DE\u987E\u4E00\u4E0B{{{\u77E5\u8BC6: Kubernetes Ingress\u4E0ENginx ingress controller\u5BF9\u6BD4}}}(\u94FE\u63A5\u5047\u8BBE\u5B58\u5728\u4F46\u672A\u5177\u4F53\u7ED9\u51FA)\u4E2D\u7684\u5173\u952E\u70B9\uFF0C\u4EE5\u4FBF\u66F4\u6E05\u6670\u5730\u7406\u89E3\u4E24\u8005\u7684\u5DEE\u5F02\u3002</p>
<h3 id="\u5206\u6790\u539F\u56E0">\u5206\u6790\u539F\u56E0</h3>
<ol>
<li>
<p><strong>\u67B6\u6784\u8BBE\u8BA1\u5DEE\u5F02</strong>:</p>
<ul>
<li><strong>Nginx</strong>: \u4F20\u7EDF\u4E0A\uFF0CNginx\u4F5C\u4E3A\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684Web\u670D\u52A1\u5668\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5E38\u88AB\u90E8\u7F72\u5728\u88F8\u91D1\u5C5E\u6216\u865A\u62DF\u673A\u4E0A\uFF0C\u624B\u52A8\u914D\u7F6E\u4EE5\u5B9E\u73B0\u6D41\u91CF\u8DEF\u7531\u548C\u8D1F\u8F7D\u5747\u8861\u3002</li>
<li><strong>Higress (Ingress)</strong>: \u5728Kubernetes\u73AF\u5883\u4E2D\uFF0CIngress\u8D44\u6E90\u662F\u4E00\u79CDAPI\u5BF9\u8C61\uFF0C\u7528\u4E8E\u7BA1\u7406\u96C6\u7FA4\u5185\u670D\u52A1\u7684\u5916\u90E8\u8BBF\u95EE\u65B9\u5F0F\u3002Higress\u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u76F4\u63A5\u96C6\u6210\u5728K8s\u4F53\u7CFB\u5185\uFF0C\u652F\u6301\u58F0\u660E\u5F0F\u914D\u7F6E\uFF0C\u81EA\u52A8\u5316\u7684\u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531\u7BA1\u7406\u3002</li>
</ul>
</li>
<li>
<p><strong>\u7075\u6D3B\u6027\u4E0E\u81EA\u52A8\u5316</strong>:</p>
<ul>
<li>Nginx\u914D\u7F6E\u53D8\u66F4\u901A\u5E38\u9700\u8981\u624B\u52A8\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6\u5E76\u91CD\u542F\u670D\u52A1\uFF0C\u5BF9\u4E8E\u52A8\u6001\u73AF\u5883\u4E0D\u591F\u7075\u6D3B\u3002</li>
<li>Higress\u5229\u7528Ingress\u8D44\u6E90\u5B9A\u4E49\uFF0C\u901A\u8FC7YAML\u6587\u4EF6\u58F0\u660E\u5F0F\u914D\u7F6E\uFF0C\u4E0EK8s\u7684\u5176\u4ED6\u7EC4\u4EF6\u7D27\u5BC6\u96C6\u6210\uFF0C\u652F\u6301\u52A8\u6001\u66F4\u65B0\uFF0C\u66F4\u9002\u5408\u5FAE\u670D\u52A1\u548CCI/CD\u6D41\u7A0B\u3002</li>
</ul>
</li>
<li>
<p><strong>\u6269\u5C55\u6027\u4E0E\u7279\u6027\u96C6</strong>:</p>
<ul>
<li>Nginx\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5\u989D\u5916\u6A21\u5757\u589E\u5F3A\u529F\u80FD\uFF0C\u5982SSL\u7EC8\u6B62\u3001HTTP/2\u7B49\uFF0C\u4F46\u914D\u7F6E\u548C\u7EF4\u62A4\u590D\u6742\u5EA6\u8F83\u9AD8\u3002</li>
<li>Higress\u4F5C\u4E3A\u4E91\u539F\u751F\u89E3\u51B3\u65B9\u6848\uFF0C\u5929\u7136\u652F\u6301K8s\u751F\u6001\u7CFB\u7EDF\uFF0C\u5982\u81EA\u52A8TLS\u8BC1\u4E66\u7BA1\u7406\u3001\u91D1\u4E1D\u96C0\u53D1\u5E03\u3001\u81EA\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u7B49\u9AD8\u7EA7\u529F\u80FD\uFF0C\u6613\u4E8E\u6269\u5C55\u548C\u7EF4\u62A4\u3002</li>
</ul>
</li>
<li>
<p><strong>\u8FD0\u7EF4\u7BA1\u7406</strong>:</p>
<ul>
<li>Nginx\u9700\u8981\u5355\u72EC\u7684\u8FD0\u7EF4\u6D41\u7A0B\u548C\u5DE5\u5177\u8FDB\u884C\u76D1\u63A7\u3001\u65E5\u5FD7\u7BA1\u7406\u548C\u6545\u969C\u6392\u67E5\u3002</li>
<li>Higress\u5219\u53EF\u4EE5\u5229\u7528K8s\u7684\u539F\u751F\u5DE5\u5177\u548C\u5B9E\u8DF5\u8FDB\u884C\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5305\u62EC\u65E5\u5FD7\u6536\u96C6\u3001\u5065\u5EB7\u68C0\u67E5\u3001\u81EA\u52A8\u6269\u7F29\u5BB9\u7B49\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA">\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA</h3>
<p>\u7531\u4E8E\u95EE\u9898\u672C\u8EAB\u5E76\u4E0D\u76F4\u63A5\u8981\u6C42\u63D0\u4F9B\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u800C\u662F\u8BE2\u95EE\u4E24\u8005\u95F4\u7684\u533A\u522B\uFF0C\u57FA\u4E8E\u4E0A\u8FF0\u5206\u6790\uFF0C\u6211\u4EEC\u65E0\u9700\u63D0\u4F9B\u5177\u4F53\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002\u4E0D\u8FC7\uFF0C\u4E3A\u4E86\u5E2E\u52A9\u7406\u89E3\u5982\u4F55\u5728K8s\u4E2D\u5E94\u7528\u8FD9\u4E9B\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u6B65\u9AA4\u6765\u4F53\u9A8C\u6216\u8FC1\u79FB\u81F3Higress\uFF1A</p>
<ol>
<li>
<p><strong>\u8BC4\u4F30\u73B0\u6709Nginx\u914D\u7F6E</strong>: \u5BA1\u67E5\u5F53\u524DNginx\u914D\u7F6E\uFF0C\u8BC6\u522B\u6240\u6709\u8DEF\u7531\u89C4\u5219\u3001SSL\u8BC1\u4E66\u7BA1\u7406\u3001\u8BBF\u95EE\u63A7\u5236\u7B49\u9700\u6C42\u3002</p>
</li>
<li>
<p><strong>\u8BBE\u8BA1Higress Ingress\u89C4\u5219</strong>: \u6839\u636E\u8BC4\u4F30\u7ED3\u679C\uFF0C\u8BBE\u8BA1\u5BF9\u5E94\u7684Ingress\u8D44\u6E90\u5B9A\u4E49\uFF0C\u8F6C\u6362\u539F\u6709Nginx\u914D\u7F6E\u4E3AKubernetes\u7684YAML\u683C\u5F0F\u3002</p>
</li>
<li>
<p><strong>\u90E8\u7F72Higress Controller</strong>: \u5728Kubernetes\u96C6\u7FA4\u4E2D\u90E8\u7F72Higress\uFF08\u6216\u5176\u4ED6\u517C\u5BB9\u7684Ingress\u63A7\u5236\u5668\uFF09\uFF0C\u786E\u4FDD\u5B83\u80FD\u4E0E\u96C6\u7FA4\u65E0\u7F1D\u96C6\u6210\u3002</p>
</li>
<li>
<p><strong>\u5E94\u7528\u5E76\u6D4B\u8BD5Ingress\u89C4\u5219</strong>: \u5E94\u7528\u8BBE\u8BA1\u597D\u7684Ingress\u8D44\u6E90\uFF0C\u5E76\u901A\u8FC7\u96C6\u7FA4\u5185\u5916\u7684\u8BF7\u6C42\u6D4B\u8BD5\uFF0C\u9A8C\u8BC1\u8DEF\u7531\u662F\u5426\u6B63\u786E\u65E0\u8BEF\u3002</p>
</li>
<li>
<p><strong>\u76D1\u63A7\u4E0E\u4F18\u5316</strong>: \u5229\u7528Kubernetes\u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u5DE5\u5177\u76D1\u63A7Higress\u7684\u8868\u73B0\uFF0C\u6839\u636E\u9700\u8981\u8C03\u6574\u914D\u7F6E\u4EE5\u4F18\u5316\u6027\u80FD\u548C\u5B89\u5168\u6027\u3002</p>
</li>
</ol>
<h3 id="\u603B\u7ED3">\u603B\u7ED3</h3>
<p>Higress\uFF08\u6216\u4EFB\u4F55K8s Ingress\u63A7\u5236\u5668\uFF09\u4E0E\u4F20\u7EDFNginx\u7684\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u5176\u4E91\u539F\u751F\u7279\u6027\uFF0C\u5982\u58F0\u660E\u5F0F\u914D\u7F6E\u3001\u81EA\u52A8\u5316\u8FD0\u7EF4\u3001\u4EE5\u53CA\u4E0EKubernetes\u751F\u6001\u7CFB\u7EDF\u7684\u6DF1\u5EA6\u96C6\u6210\uFF0C\u8FD9\u4E9B\u7279\u6027\u4F7F\u5F97\u5728\u73B0\u4EE3\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u7BA1\u7406\u7F51\u7EDC\u6D41\u91CF\u66F4\u52A0\u9AD8\u6548\u548C\u7075\u6D3B\u3002\u867D\u7136\u6CA1\u6709\u63D0\u4F9B\u76F4\u63A5\u7684\u6B65\u9AA4\u94FE\u63A5\uFF0C\u4F46\u4EE5\u4E0A\u5206\u6790\u548C\u5EFA\u8BAE\u6B65\u9AA4\u5E94\u80FD\u5E2E\u52A9\u7406\u89E3\u8FC1\u79FB\u548C\u91C7\u7528\u4E91\u539F\u751F\u7F51\u5173\u7684\u8FC7\u7A0B\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Ingress Annotation \u914D\u7F6E\u8BF4\u660E</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16941" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16935",title:"K8s\u4F53\u7CFB\u4E0B\uFF0C\u4EE5ingress \u548C higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u548C\u4F20\u7EDF\u7684Nginx\u6709\u54EA\u4E9B\u4E0D\u540C\uFF1F",date:"2024-09-11",category:"expertConsultation",description:"\u5728higress\u5728Kubernetes\uFF08K8s\uFF09\u4F53\u7CFB\u4E0B\u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\u4E0E\u4F20\u7EDFNginx\u7684\u4E0D\u540C\u4E4B\u5904\u524D\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u56DE\u987E\u4E00\u4E0B\u77E5\u8BC6: Kubernetes Ingress\u4E0ENginx ingress controller\u5BF9\u6BD4(\u94FE\u63A5\u5047\u8BBE\u5B58\u5728\u4F46\u672A\u5177\u4F53\u7ED9\u51FA)\u4E2D\u7684\u5173\u952E\u70B9\uFF0C\u4EE5\u4FBF\u66F4\u6E05\u6670\u5730\u7406\u89E3\u4E24\u8005\u7684\u5DEE\u5F02\u3002### \u5206\u6790\u539F\u56E01"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16935.md",t=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 K8s\u4F53\u7CFB\u4E0B\uFF0C\u4EE5ingress \u548C higress\u4EE3\u8868\u7684\u4E91\u539F\u751F\u7F51\u5173\u548C\u4F20\u7EDF\u7684Nginx\u6709\u54EA\u4E9B\u4E0D\u540C\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u5728higress\u5728Kubernetes\uFF08K8s\uFF09\u4F53\u7CFB\u4E0B\u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\u4E0E\u4F20\u7EDFNginx\u7684\u4E0D\u540C\u4E4B\u5904\u524D\uFF0C\u8BA9\u6211\u4EEC\u9996\u5148\u56DE\u987E\u4E00\u4E0B{{{\u77E5\u8BC6: Kubernetes Ingress\u4E0ENginx ingress controller\u5BF9\u6BD4}}}(\u94FE\u63A5\u5047\u8BBE\u5B58\u5728\u4F46\u672A\u5177\u4F53\u7ED9\u51FA)\u4E2D\u7684\u5173\u952E\u70B9\uFF0C\u4EE5\u4FBF\u66F4\u6E05\u6670\u5730\u7406\u89E3\u4E24\u8005\u7684\u5DEE\u5F02\u3002

### \u5206\u6790\u539F\u56E0

1. **\u67B6\u6784\u8BBE\u8BA1\u5DEE\u5F02**:
   - **Nginx**: \u4F20\u7EDF\u4E0A\uFF0CNginx\u4F5C\u4E3A\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684Web\u670D\u52A1\u5668\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5E38\u88AB\u90E8\u7F72\u5728\u88F8\u91D1\u5C5E\u6216\u865A\u62DF\u673A\u4E0A\uFF0C\u624B\u52A8\u914D\u7F6E\u4EE5\u5B9E\u73B0\u6D41\u91CF\u8DEF\u7531\u548C\u8D1F\u8F7D\u5747\u8861\u3002
   - **Higress (Ingress)**: \u5728Kubernetes\u73AF\u5883\u4E2D\uFF0CIngress\u8D44\u6E90\u662F\u4E00\u79CDAPI\u5BF9\u8C61\uFF0C\u7528\u4E8E\u7BA1\u7406\u96C6\u7FA4\u5185\u670D\u52A1\u7684\u5916\u90E8\u8BBF\u95EE\u65B9\u5F0F\u3002Higress\u4F5C\u4E3A\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u76F4\u63A5\u96C6\u6210\u5728K8s\u4F53\u7CFB\u5185\uFF0C\u652F\u6301\u58F0\u660E\u5F0F\u914D\u7F6E\uFF0C\u81EA\u52A8\u5316\u7684\u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531\u7BA1\u7406\u3002

2. **\u7075\u6D3B\u6027\u4E0E\u81EA\u52A8\u5316**:
   - Nginx\u914D\u7F6E\u53D8\u66F4\u901A\u5E38\u9700\u8981\u624B\u52A8\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6\u5E76\u91CD\u542F\u670D\u52A1\uFF0C\u5BF9\u4E8E\u52A8\u6001\u73AF\u5883\u4E0D\u591F\u7075\u6D3B\u3002
   - Higress\u5229\u7528Ingress\u8D44\u6E90\u5B9A\u4E49\uFF0C\u901A\u8FC7YAML\u6587\u4EF6\u58F0\u660E\u5F0F\u914D\u7F6E\uFF0C\u4E0EK8s\u7684\u5176\u4ED6\u7EC4\u4EF6\u7D27\u5BC6\u96C6\u6210\uFF0C\u652F\u6301\u52A8\u6001\u66F4\u65B0\uFF0C\u66F4\u9002\u5408\u5FAE\u670D\u52A1\u548CCI/CD\u6D41\u7A0B\u3002

3. **\u6269\u5C55\u6027\u4E0E\u7279\u6027\u96C6**:
   - Nginx\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5\u989D\u5916\u6A21\u5757\u589E\u5F3A\u529F\u80FD\uFF0C\u5982SSL\u7EC8\u6B62\u3001HTTP/2\u7B49\uFF0C\u4F46\u914D\u7F6E\u548C\u7EF4\u62A4\u590D\u6742\u5EA6\u8F83\u9AD8\u3002
   - Higress\u4F5C\u4E3A\u4E91\u539F\u751F\u89E3\u51B3\u65B9\u6848\uFF0C\u5929\u7136\u652F\u6301K8s\u751F\u6001\u7CFB\u7EDF\uFF0C\u5982\u81EA\u52A8TLS\u8BC1\u4E66\u7BA1\u7406\u3001\u91D1\u4E1D\u96C0\u53D1\u5E03\u3001\u81EA\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u7B49\u9AD8\u7EA7\u529F\u80FD\uFF0C\u6613\u4E8E\u6269\u5C55\u548C\u7EF4\u62A4\u3002

4. **\u8FD0\u7EF4\u7BA1\u7406**:
   - Nginx\u9700\u8981\u5355\u72EC\u7684\u8FD0\u7EF4\u6D41\u7A0B\u548C\u5DE5\u5177\u8FDB\u884C\u76D1\u63A7\u3001\u65E5\u5FD7\u7BA1\u7406\u548C\u6545\u969C\u6392\u67E5\u3002
   - Higress\u5219\u53EF\u4EE5\u5229\u7528K8s\u7684\u539F\u751F\u5DE5\u5177\u548C\u5B9E\u8DF5\u8FDB\u884C\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5305\u62EC\u65E5\u5FD7\u6536\u96C6\u3001\u5065\u5EB7\u68C0\u67E5\u3001\u81EA\u52A8\u6269\u7F29\u5BB9\u7B49\u3002

### \u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA

\u7531\u4E8E\u95EE\u9898\u672C\u8EAB\u5E76\u4E0D\u76F4\u63A5\u8981\u6C42\u63D0\u4F9B\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u800C\u662F\u8BE2\u95EE\u4E24\u8005\u95F4\u7684\u533A\u522B\uFF0C\u57FA\u4E8E\u4E0A\u8FF0\u5206\u6790\uFF0C\u6211\u4EEC\u65E0\u9700\u63D0\u4F9B\u5177\u4F53\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002\u4E0D\u8FC7\uFF0C\u4E3A\u4E86\u5E2E\u52A9\u7406\u89E3\u5982\u4F55\u5728K8s\u4E2D\u5E94\u7528\u8FD9\u4E9B\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u6B65\u9AA4\u6765\u4F53\u9A8C\u6216\u8FC1\u79FB\u81F3Higress\uFF1A

1. **\u8BC4\u4F30\u73B0\u6709Nginx\u914D\u7F6E**: \u5BA1\u67E5\u5F53\u524DNginx\u914D\u7F6E\uFF0C\u8BC6\u522B\u6240\u6709\u8DEF\u7531\u89C4\u5219\u3001SSL\u8BC1\u4E66\u7BA1\u7406\u3001\u8BBF\u95EE\u63A7\u5236\u7B49\u9700\u6C42\u3002
   
2. **\u8BBE\u8BA1Higress Ingress\u89C4\u5219**: \u6839\u636E\u8BC4\u4F30\u7ED3\u679C\uFF0C\u8BBE\u8BA1\u5BF9\u5E94\u7684Ingress\u8D44\u6E90\u5B9A\u4E49\uFF0C\u8F6C\u6362\u539F\u6709Nginx\u914D\u7F6E\u4E3AKubernetes\u7684YAML\u683C\u5F0F\u3002
   
3. **\u90E8\u7F72Higress Controller**: \u5728Kubernetes\u96C6\u7FA4\u4E2D\u90E8\u7F72Higress\uFF08\u6216\u5176\u4ED6\u517C\u5BB9\u7684Ingress\u63A7\u5236\u5668\uFF09\uFF0C\u786E\u4FDD\u5B83\u80FD\u4E0E\u96C6\u7FA4\u65E0\u7F1D\u96C6\u6210\u3002
   
4. **\u5E94\u7528\u5E76\u6D4B\u8BD5Ingress\u89C4\u5219**: \u5E94\u7528\u8BBE\u8BA1\u597D\u7684Ingress\u8D44\u6E90\uFF0C\u5E76\u901A\u8FC7\u96C6\u7FA4\u5185\u5916\u7684\u8BF7\u6C42\u6D4B\u8BD5\uFF0C\u9A8C\u8BC1\u8DEF\u7531\u662F\u5426\u6B63\u786E\u65E0\u8BEF\u3002
   
5. **\u76D1\u63A7\u4E0E\u4F18\u5316**: \u5229\u7528Kubernetes\u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u5DE5\u5177\u76D1\u63A7Higress\u7684\u8868\u73B0\uFF0C\u6839\u636E\u9700\u8981\u8C03\u6574\u914D\u7F6E\u4EE5\u4F18\u5316\u6027\u80FD\u548C\u5B89\u5168\u6027\u3002

### \u603B\u7ED3

Higress\uFF08\u6216\u4EFB\u4F55K8s Ingress\u63A7\u5236\u5668\uFF09\u4E0E\u4F20\u7EDFNginx\u7684\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u5176\u4E91\u539F\u751F\u7279\u6027\uFF0C\u5982\u58F0\u660E\u5F0F\u914D\u7F6E\u3001\u81EA\u52A8\u5316\u8FD0\u7EF4\u3001\u4EE5\u53CA\u4E0EKubernetes\u751F\u6001\u7CFB\u7EDF\u7684\u6DF1\u5EA6\u96C6\u6210\uFF0C\u8FD9\u4E9B\u7279\u6027\u4F7F\u5F97\u5728\u73B0\u4EE3\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u7BA1\u7406\u7F51\u7EDC\u6D41\u91CF\u66F4\u52A0\u9AD8\u6548\u548C\u7075\u6D3B\u3002\u867D\u7136\u6CA1\u6709\u63D0\u4F9B\u76F4\u63A5\u7684\u6B65\u9AA4\u94FE\u63A5\uFF0C\u4F46\u4EE5\u4E0A\u5206\u6790\u548C\u5EFA\u8BAE\u6B65\u9AA4\u5E94\u80FD\u5E2E\u52A9\u7406\u89E3\u8FC1\u79FB\u548C\u91C7\u7528\u4E91\u539F\u751F\u7F51\u5173\u7684\u8FC7\u7A0B\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Ingress Annotation \u914D\u7F6E\u8BF4\u660E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16941)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},o=function(){return s},g=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u539F\u56E0",text:"\u5206\u6790\u539F\u56E0"},{depth:3,slug:"\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA",text:"\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=a((d,I,b)=>{const{layout:N,...i}=n;return i.file=r,i.url=t,p`${h()}${c(s)}`})});export{e as Content,K as __tla,o as compiledContent,e as default,r as file,n as frontmatter,g as getHeadings,l as rawContent,t as url};
