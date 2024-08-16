const s="Higress-gvr7dx_awbbpb_uwbg4wym8snz2m0z.mdx",e="blog",i="higress-gvr7dx_awbbpb_uwbg4wym8snz2m0z",a=`
<a name="tzEN3"></a>
## \u4E00\u3001\u8FDB\u5C55\u6982\u8981
Higress 0.6.0 \u5F00\u6E90\u7248\u672C\u4E3B\u8981\u56F4\u7ED5\u6613\u7528\u6027\u6F14\u8FDB\uFF0C\u6838\u5FC3\u8FDB\u5C55\u5982\u4E0B\uFF1A

- \u4E0D\u518D\u9700\u8981\u5B89\u88C5 Istio\uFF0C\u7B80\u5316\u5B89\u88C5\u548C\u8FD0\u7EF4
- wasm \u63D2\u4EF6\u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E\u66F4\u7B80\u5355\u6613\u61C2
- \u5F00\u6E90\u63A7\u5236\u53F0\u63D0\u4F9B\u529F\u80FD\u9884\u89C8
<a name="lNGPX"></a>
## \u4E8C\u3001\u65B0\u7279\u6027\u8BF4\u660E
<a name="N6QW5"></a>
### \u4E0D\u518D\u9700\u8981\u5B89\u88C5 Istio
\u5728\u4E0A\u4E00\u6B21\u793E\u533A\u5468\u4F1A\u8BA8\u8BBA\u7684\u8BAE\u9898\u300AHigress \u89E3\u9664\u5BF9 Istio \u7684\u5F3A\u4F9D\u8D56\u300B\u4E2D\uFF0C\u5206\u6790\u4E86\u4F9D\u8D56 Istio \u7684\u4F18\u52A3\u52BF\uFF1A

**\u4F18\u52BF\uFF1A**

- \u4E1A\u52A1\u53EF\u4EE5\u5BF9 Mesh \u4E2D\u7684\u4E1C\u897F\u5411\u3001\u5357\u5317\u5411\u6D41\u91CF\u5B9E\u73B0\u7EDF\u4E00\u7684\u7BA1\u63A7
- \u66FF\u6362 istio ingress gateway\uFF0C\u63D0\u4F9B\u5BF9 ingress \u66F4\u597D\u7684\u652F\u6301
- \u7AD9\u5728 istio \u793E\u533A\u7684\u80A9\u8180\u4E0A\u6269\u5C55\u80FD\u529B\uFF0C\u4E0D\u7528\u91CD\u590D\u9020\u8F6E\u5B50

**\u52A3\u52BF\uFF1A**

- \u5F15\u5165\u989D\u5916\u7684\u5B89\u88C5\u548C\u8FD0\u7EF4\u6210\u672C
- \u5BF9\u4E8E\u7B80\u5355\u7684 ingress \u4F7F\u7528\u573A\u666F\uFF0Cistio \u9700\u8981\u5B89\u88C5\u7684\u5927\u91CF CRD \u6709\u4E9B\u591A\u4F59\uFF0C\u5E76\u5BF9\u540E\u7EED\u975E K8s \u6A21\u5F0F\u7684\u652F\u6301\u5E26\u6765\u8D1F\u62C5

\u57FA\u4E8E\u6B64\uFF0C\u5728 Higress 0.6.0 \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5C06 istio \u4F5C\u4E3A\u9009\u88C5\u7EC4\u4EF6\u63D0\u4F9B\uFF0C\u53EF\u4EE5\u901A\u8FC7 helm \u53C2\u6570 global.enableMesh=true\u5F00\u542F\uFF0C\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u65E0\u9700\u5B89\u88C5 istio\u3002

Higress \u5B89\u88C5\u6B65\u9AA4\u7B80\u5316\u4E3A\u4E00\u6761\u547D\u4EE4:
\`\`\`
helm install higress -n higress-system oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress --create-namespace
\`\`\`
\u5982\u679C\u968F\u7740\u4E1A\u52A1\u6F14\u8FDB\uFF0C\u9700\u8981\u5F15\u5165 istio \u505A Service Mesh\uFF0C\u5E76\u5B9E\u73B0\u548C Higress \u63A7\u5236\u9762\u7EDF\u4E00\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 istio\uFF0C\u5E76\u5B8C\u6210 Higress \u9002\u914D\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u662F\u5E73\u6ED1\u751F\u6548\u7684\uFF1A
\`\`\`
helm install istio -n istio-system oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/istio --create-namespacehelm upgrade higress -n higress-system --set global.enableMesh=true oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress
\`\`\`
\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5\u4E86 istio \uFF0C\u5E0C\u671B\u89E3\u9664\u4F9D\u8D56\uFF0C\u4E5F\u53EF\u4EE5\u6309\u5982\u4E0B\u547D\u4EE4\u5E73\u6ED1\u751F\u6548\uFF1A
\`\`\`
helm upgrade higress -n higress-system --set global.enableMesh=false oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higresskubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Availablehelm delete istio -n istio-systemkubectl delete ns istio-systemkubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete
\`\`\`

<a name="smF4h"></a>
### \u7B80\u5316 Wasm \u63D2\u4EF6\u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E
Higress \u63D0\u4F9B\u7684 WasmPlugin CRD \u5B8C\u5168\u517C\u5BB9 Istio \u7684 WasmPlugin\uFF0C\u4E14\u63D0\u4F9B\u4E86\u989D\u5916\u7684\u4E24\u4E2A\u914D\u7F6E\u5B57\u6BB5:

- defaultConfig\uFF1A\u7528\u4F5C\u63D2\u4EF6\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u547D\u4E2D\u5339\u914D\u89C4\u5219\u7684\u8BF7\u6C42\u751F\u6548
- matchRules\uFF1A\u7528\u4E8E\u5339\u914D ingress \u6216\u8005\u57DF\u540D\uFF0C\u5E76\u751F\u6548\u6307\u5B9A\u7684\u914D\u7F6E

\u4EE5\u5C4F\u853D\u8BF7\u6C42\u7684 request-block \u63D2\u4EF6\u4E3A\u4F8B\uFF1A
\`\`\`
apiVersion: extensions.higress.io/v1alpha1kind: WasmPluginmetadata:  name: request-block  namespace: higress-systemspec:  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0  # \u9ED8\u8BA4\u914D\u7F6E  defaultConfig:    block_urls:    - "swagger.html"  # \u5339\u914D\u751F\u6548\u89C4\u5219  matchRules:   - ingress:    # \u5339\u914Dingress\u751F\u6548\uFF0C\u6B64\u4E3Adefault\u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u79F0\u4E3Afoo\u7684ingress    - default/foo    config:      block_urls:      - "/index.html"  - domain:    # \u5339\u914D\u57DF\u540D\u751F\u6548    - "*.example.com"    config:      block_urls:      - "/robots.txt"      - "/index.html"
\`\`\`
\u6CE8\u610F defaultConfig \u548C matchRules.[].config \u4E0B\u7684\u5B57\u6BB5\u4E3A\u63D2\u4EF6\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\u5B57\u6BB5\u3002
<a name="oLVdJ"></a>
## \u4E09\u3001\u63A7\u5236\u53F0\u529F\u80FD\u9884\u89C8
\u7279\u522B\u611F\u8C22**\u7F57\u6C38\u6CE2(abuexclusive)\u3001\u9879\u4FEE\u5349(xiangxiuhui)\u3001\u8881\u5764(heimanba)\u3001\u8463\u827A\u8343(CH3CHO)** \u7B49\u5F00\u53D1\u8005\u7684\u5DE5\u4F5C\uFF0CHigress \u5F00\u6E90\u63A7\u5236\u53F0\u7684\u524D\u7AEF\u9875\u9762\u548C\u540E\u7AEF\u6846\u67B6\u5DF2\u7ECF\u57FA\u672C\u5B8C\u6210\uFF0C\u76EE\u524D\u53EF\u4EE5\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://demo.higress.io \u8FDB\u884C\u529F\u80FD\u9884\u89C8\uFF1A<br />\u8DEF\u7531\u914D\u7F6E\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723434877429-b1aaedea-c792-4a3f-917a-c3e8250a9248.png#clientId=ud896ccf5-d8f6-4&from=paste&id=u3dd59ef0&originHeight=558&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=ubb731fbf-21c2-4128-885a-c8be4f07aa5&title=)<br />\u670D\u52A1\u5217\u8868\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723434875078-d3d31a5f-d46d-45a5-b968-301740ef7883.png#clientId=ud896ccf5-d8f6-4&from=paste&id=u7e60a0c5&originHeight=298&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u06c83bd2-4d7f-4e4c-b840-fc89a7dc102&title=)<br />\u57DF\u540D\u7BA1\u7406\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723434875090-f10cac04-a2fd-4419-923a-93f2068c703c.png#clientId=ud896ccf5-d8f6-4&from=paste&id=u416f494d&originHeight=271&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u495d28a9-3d47-4e78-b014-e89d6b8b82c&title=)
<a name="OFG3P"></a>
# **\u56DB\u3001Milestone \u89C4\u5212**
Higress \u4E0B\u4E2A\u7248\u672C\u5C06\u7EE7\u7EED\u56F4\u7ED5\u6613\u7528\u6027\u8FDB\u884C\u8FED\u4EE3\uFF0C\u9884\u8BA1\u5728 2 \u6708\u5E95\u63A8\u51FA\uFF0C\u8BA1\u5212\u63D0\u4F9B\u4E0B\u5217\u529F\u80FD\uFF1A<br />**Higress \u63A7\u5236\u53F0\uFF1A**

- \u670D\u52A1\u6765\u6E90\u53EF\u4EE5\u914D\u7F6E Nacos/Zookeeper \u7B49\u6CE8\u518C\u4E2D\u5FC3
- \u5B8C\u6210\u8DEF\u7531\u914D\u7F6E\u5230 Ingress \u8F6C\u6362\u7684\u5B8C\u6574\u529F\u80FD
- \u63D0\u4F9B\u8DEF\u7531/\u670D\u52A1\u7EA7\u7684 QPS \u548C\u5EF6\u65F6\u7B49\u6307\u6807\u76D1\u63A7\u56FE\u6807

**Higress \u5F15\u64CE\u4FA7\uFF1A**

- \u5B8C\u6210 Method/Header/Query \u8DEF\u7531\u5339\u914D\u6761\u4EF6\u7684 Ingress \u6CE8\u89E3\uFF0C\u63D0\u4F9B\u63A7\u5236\u53F0\u96C6\u6210
- \u5B9E\u73B0 Ingress API \u57FA\u4E8E Nacos \u505A\u914D\u7F6E\u5B58\u50A8\uFF0C\u53EF\u4EE5\u65E0\u9700\u4F9D\u8D56 K8s \u8FDB\u884C\u5B89\u88C5\u90E8\u7F72
- \u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 WAF \u63D2\u4EF6

GA \u7248\u672C\u9884\u8BA1\u5C06\u5728 3 \u6708\u4EFD\u63A8\u51FA\uFF0C\u6B22\u8FCE\u52A0\u5165 Higress \u793E\u533A\u7FA4\uFF0C\u53CA\u65F6\u4E86\u89E3\u7248\u672C\u52A8\u5411\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723434875077-37297f33-f087-43b3-83a8-2163a8a70d8e.png#clientId=ud896ccf5-d8f6-4&from=paste&id=u3eb5b15e&originHeight=405&originWidth=720&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=udeab772c-c351-4d38-b136-d6a7a501199&title=)
<a name="LnVhb"></a>
# **\u4E94\u3001\u53C2\u4E0E Higress \u793E\u533A**
Higress \u5F00\u6E90\u8D21\u732E\u5C0F\u7EC4\u6B63\u5728\u706B\u70ED\u62DB\u52DF\u8D21\u732E\u8005\u3002\u65E9\u671F\u53C2\u4E0E\u5F00\u6E90\u66F4\u5BB9\u6613\u6210\u4E3A\u9879\u76EE Committer\uFF0C\u5E76\u6709\u66F4\u591A\u673A\u4F1A\u6210\u4E3A Higress PMC(Project Management Committee) \u7684\u4E00\u5458\uFF0C\u53C2\u4E0E\u4E3B\u5BFC Higress \u793E\u533A\u7684\u524D\u8FDB\u65B9\u5411\u3002<br />\u6B22\u8FCE\u52A0\u5165 Higress \u5F00\u53D1\u8005\u9489\u9489\u7FA4\uFF0C\u4E86\u89E3\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723434875126-b9bfe914-448e-40d2-842e-029ec4c79857.png#clientId=ud896ccf5-d8f6-4&from=paste&id=u3da0a558&originHeight=1062&originWidth=812&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=ubc3bba33-0d33-4f97-8ed8-f523eeb474d&title=)
<a name="nbQRf"></a>
## **1. \u53C2\u4E0E Higress \u63A7\u5236\u53F0\u5B8C\u5584**
\u6280\u672F\u6808\uFF1ATypeScript/Java<br />Github \u5730\u5740\uFF1Ahttps://github.com/higress-group/higress-console<br />\u4E3B\u8981\u5185\u5BB9\u5305\u62EC\uFF1A

- Higress \u5F00\u6E90\u4EA7\u54C1\u7684\u4EA4\u4E92\u8BBE\u8BA1\u548C\u5B9E\u73B0
- \u96C6\u6210\u5F00\u6E90\u53EF\u89C2\u6D4B\u4EA7\u54C1\uFF0C\u5B9E\u73B0 Higress metrics/logging/tracing \u7684\u4EA7\u54C1\u5316\u80FD\u529B
- \u57FA\u4E8E Higress REST API \u7684\u524D\u540E\u7AEF\u5BF9\u63A5
- \u57FA\u4E8E K8s\u3001Nacos \u7B49\u914D\u7F6E\u6765\u6E90\u5B9E\u73B0 Ingress \u7B49\u914D\u7F6E\u7684\u5B58\u50A8\u548C\u89E3\u6790
<a name="PkMJE"></a>
## **2. \u53C2\u4E0E Higress \u7684 Ingress \u80FD\u529B\u5B9E\u73B0**
\u6280\u672F\u6808\uFF1AGo<br />Github \u5730\u5740\uFF1Ahttps://github.com/alibaba/higress<br />\u4E3B\u8981\u5185\u5BB9\u5305\u62EC\uFF1A

- \u627F\u63A5 Higress \u63A7\u5236\u53F0\u9700\u6C42\uFF0C\u5B8C\u6210\u5BF9\u5E94\u7684 Ingress \u6CE8\u89E3\u6216 Wasm \u63D2\u4EF6\u80FD\u529B\u5B9E\u73B0
- \u6316\u6398\u66F4\u591A Envoy \u7F51\u5173\u7684\u6280\u672F\u7EA2\u5229\uFF0C\u901A\u8FC7 Ingress \u6CE8\u89E3\u6216 Wasm \u63D2\u4EF6\u7684\u65B9\u5F0F\uFF0C\u4F7F\u5176\u66F4\u6613\u88AB\u4F7F\u7528
- \u5B9E\u73B0\u66F4\u591A Nginx Ingress \u6CE8\u89E3\u80FD\u529B\u7684\u517C\u5BB9
<a name="DLAHl"></a>
## **3. \u8865\u5145\u5355\u6D4B\u548C e2e \u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B**
\u6280\u672F\u6808\uFF1AGo<br />Github \u5730\u5740\uFF1Ahttps://github.com/alibaba/higress<br />\u4E3B\u8981\u5185\u5BB9\u5305\u62EC\uFF1A

- Ingress \u6CE8\u89E3/Wasm \u63D2\u4EF6\u76F8\u5173\u5B9E\u73B0\u7684 e2e \u6D4B\u8BD5\u7528\u4F8B\u7F16\u5199
- Ingress \u6CE8\u89E3/Wasm \u63D2\u4EF6\u76F8\u5173\u4EE3\u7801\u7684\u5355\u5143\u6D4B\u8BD5\u7F16\u5199

\u7279\u522B\u611F\u8C22**\u5218\u8BAD\u707C(Xunzhuo) **\u4E3A Higress \u793E\u533A\u8D21\u732E\u7684 e2e \u6D4B\u8BD5\u6846\u67B6\uFF1Ahttps://github.com/alibaba/higress/tree/main/test\uFF0C\u53EF\u4EE5\u5F88\u7B80\u5355\u5730\u57FA\u4E8E Yaml \u914D\u7F6E\u548C\u5C11\u91CF\u4EE3\u7801\u5B8C\u6210\u57FA\u4E8E Ingress \u80FD\u529B\u7684 e2e \u96C6\u6210\u6D4B\u8BD5\uFF1B\u57FA\u4E8E PR \u81EA\u52A8\u89E6\u53D1\u6D4B\u8BD5\u7684\u673A\u5236\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u4FDD\u969C Higress \u7684\u8FED\u4EE3\u8D28\u91CF\u3002<br />\u6700\u540E\uFF0C\u795D\u5927\u5BB6\u5047\u671F\u6109\u5FEB\uFF0C\u65B0\u5E74\u5FEB\u4E50\u54E6 


`,t={title:"Higress 0.6.0 \u7248\u672C\u53D1\u5E03\uFF1A\u66F4\u7B80\u5355\uFF0C\u66F4\u6613\u7528",description:"Higress 0.6.0 \u7248\u672C\u53D1\u5E03\uFF1A\u66F4\u7B80\u5355\uFF0C\u66F4\u6613\u7528",keywords:["Higress"],date:"2023-01-20",category:"article"},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_uwbg4wym8snz2m0z.mdx",rawData:void 0};export{r as _internal,a as body,e as collection,t as data,s as id,i as slug};
