const s="Higress-gvr7dx_awbbpb_rggp2v9saa6gehsg.mdx",a="blog",e="higress-gvr7dx_awbbpb_rggp2v9saa6gehsg",i=`
> \u672C\u6587\u4F5C\u8005<br />\u6F84\u6F6D, \u963F\u91CC\u4E91API\u7F51\u5173\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\uFF0CHigress\u5F00\u6E90\u9879\u76EE\u4E3B\u8981\u8D21\u732E\u8005<br />\u4F55\u826F, Intel Web Platform Engineering\u8F6F\u4EF6\u5DE5\u7A0B\u5E08, WAMR\u5F00\u6E90\u9879\u76EE\u4E3B\u8981\u8D21\u732E\u8005

\u672C\u6587\u4ECB\u7ECDHigress\u5C06Wasm\u63D2\u4EF6\u7684\u8FD0\u884C\u65F6\u4ECEV8\u5207\u6362\u5230WebAssembly Micro Runtime (WAMR)\u7684\u6700\u65B0\u8FDB\u5C55\u3002\u901A\u8FC7\u5207\u6362\u5230WAMR\u5E76\u5F00\u542FAOT\u6A21\u5F0F\u5927\u5E45\u63D0\u5347\u4E86Wasm\u63D2\u4EF6\u6027\u80FD\uFF0C\u4ECE\u6211\u4EEC\u7684\u6D4B\u8BD5\u4E2D\u5927\u90E8\u5206\u63D2\u4EF6\u5E73\u5747\u670950%\u5DE6\u53F3\u7684\u6027\u80FD\u63D0\u5347\uFF0C\u4E00\u4E9B\u903B\u8F91\u590D\u6742\u7684\u63D2\u4EF6\u6027\u80FD\u76F4\u63A5\u7FFB\u500D\u3002
<a name="kDGsg"></a>
## Higress Wasm\u63D2\u4EF6
Higress\u4F5C\u4E3A\u9996\u4E2A\u63A8\u51FAWasm\u6269\u5C55\u80FD\u529B\u7684\u4E91\u4EA7\u54C1\u7F51\u5173\uFF0C\u4ECE2022\u5E74\u5C31\u4E0A\u7EBF\u4E86Wasm\u63D2\u4EF6\u5E02\u573A\uFF0C\u6211\u4EEC\u4F7F\u7528Wasm\u6280\u672F\u4F5C\u4E3A\u4E3B\u8981\u7684\u7F51\u5173\u6269\u5C55\u624B\u6BB5\uFF0C\u662F\u56E0\u4E3A\u5B83\u80FD\u4E3A\u7528\u6237\u5E26\u6765\u7684\u72EC\u7279\u4EF7\u503C\uFF1A

1. \u5DE5\u7A0B\u53EF\u9760\u6027\uFF1A\u76F8\u6BD4Lua\u7B49\u52A8\u6001\u7C7B\u578B+\u89E3\u91CA\u6267\u884C\u8BED\u8A00\uFF0CWasm\u53EF\u57FA\u4E8E\u591A\u79CD\u9759\u6001\u7C7B\u578B\u8BED\u8A00\u7F16\u8BD1\uFF0C\u53EF\u4EE5\u505A\u7F16\u8BD1\u671F\u68C0\u67E5\uFF0C\u907F\u514D\u8FD0\u884C\u65F6\u51FA\u9519\u628A\u751F\u4EA7\u73AF\u5883\u53D8\u6210\u4EE3\u7801\u6349\u866B\u73B0\u573A
2. \u6C99\u7BB1\u5B89\u5168\u6027\uFF1AWasm\u63D2\u4EF6\u8FD0\u884C\u5728\u4E25\u683C\u7684\u865A\u62DF\u673A\u6C99\u7BB1\u73AF\u5883\u5185\uFF0C\u6709\u81EA\u5DF1\u7684\u72EC\u7ACB\u5185\u5B58\u7A7A\u95F4\uFF0C\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u5916\u90E8\u5185\u5B58\uFF0C\u53EF\u4EE5\u907F\u514D\u63D2\u4EF6\u4EE3\u7801bug\u5BFC\u81F4\u906D\u5230\u7F13\u51B2\u533A\u6EA2\u51FA\u3001\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u7B49\u653B\u51FB
3. \u70ED\u66F4\u65B0\uFF1AHigress\u57FA\u4E8EEnvoy\u7684xDS\u673A\u5236\uFF0C\u63D2\u4EF6\u4E8C\u8FDB\u5236\u548C\u914D\u7F6E\u90FD\u53EF\u4EE5\u72EC\u7ACB\u70ED\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u5F15\u8D77\u8FDE\u63A5\u65AD\u5F00\uFF0C\u5BF9WebSocket/gRPC\u7B49\u4E1A\u52A1\u573A\u666F\u66F4\u53CB\u597D

Higress\u7AD9\u5728Istio/Envoy\u7684\u80A9\u8180\u4E0A\uFF0C\u4E3AWasm\u63D2\u4EF6\u673A\u5236\u589E\u52A0\u4E86\u4E09\u4E2A\u6838\u5FC3\u80FD\u529B\uFF1A

1. \u57DF\u540D/\u8DEF\u7531\u7EA7\u751F\u6548\uFF1AIstio/Envoy\u81EA\u5E26\u7684\u5168\u5C40\u751F\u6548\u65B9\u5F0F\u96BE\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u573A\u666F\u9700\u6C42\uFF0C\u800C\u57FA\u4E8EHigress Wasm sdk\u5F00\u53D1\u7684\u63D2\u4EF6\u53EF\u4EE5\u505A\u5230\u8FD9\u70B9\uFF0C\u540C\u65F6\u7F16\u8BD1\u51FA\u7684\u63D2\u4EF6\u4E5F\u8DDFIstio/Envoy\u751F\u6001\u517C\u5BB9\uFF08\u4EC5\u5168\u5C40\u751F\u6548\uFF09
2. Redis\u8BBF\u95EE\u80FD\u529B\uFF1A\u63D0\u4F9B\u4E86\u8BBF\u95EERedis\u7684Host Function\uFF0C\u63D2\u4EF6\u4EE3\u7801\u53EF\u4EE5\u57FA\u4E8ERedis\u5B9E\u73B0\u591A\u79CD\u80FD\u529B\uFF0C\u4F8B\u5982\u5168\u5C40\u9650\u6D41\uFF0CSession\u72B6\u6001\u7BA1\u7406\u7B49
3. \u865A\u62DF\u673A\u81EA\u6108\u673A\u5236\uFF1A\u5F00\u53D1\u7684\u63D2\u4EF6\u903B\u8F91\u4E2D\u82E5\u51FA\u73B0\u4E86\u7A7A\u6307\u9488\u8BBF\u95EE\u3001\u6570\u7EC4\u8D8A\u754C\u3001\u5185\u5B58\u6CC4\u6F0F\u7B49\u95EE\u9898\uFF0C\u5C06\u88AB\u8FD0\u884C\u65F6\u7CFB\u7EDF\u6355\u83B7\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u7F51\u5173\u5D29\u6E83\uFF1BHigress\u652F\u6301Wasm\u6A21\u5757\u5F02\u5E38\u540E\u81EA\u52A8\u91CD\u542F\uFF0C\u5E76\u80FD\u5728\u5FEB\u901F\u6B62\u8840\u7684\u540C\u65F6\uFF0C\u901A\u8FC7\u544A\u8B66\u901A\u77E5\u7528\u6237\u51FA\u73B0\u95EE\u9898\u7684\u4EE3\u7801\u5806\u6808

\u4ECEHigress\u7684\u4F01\u4E1A\u7528\u6237\u770BWasm\u63D2\u4EF6\u6280\u672F\u7684\u91C7\u7528\u5468\u671F\uFF0C\u5DF2\u7ECF\u8DE8\u57DF\u8FC7\u9E3F\u6C9F\uFF0C\u6B65\u5165\u65E9\u671F\u91C7\u7528\u5927\u4F17\u9636\u6BB5\uFF0C\u6838\u5FC3\u7684\u9A71\u52A8\u529B\u662F\u6027\u80FD\u7EA2\u5229\u5E26\u6765\u7684\u6210\u672C\u4E0B\u964D\u3002\u7528\u6237\u4F7F\u7528Wasm\u63D2\u4EF6\u6765\u5F00\u53D1\u6EE1\u8DB3\u81EA\u5DF1\u7279\u5B9A\u4E1A\u52A1\u9700\u6C42\u7684\u80FD\u529B\uFF0C\u5BF9\u4E8E\u9274\u6743\u3001\u52A0\u89E3\u5BC6\u3001\u4F1A\u8BDD\u7BA1\u7406\u7B49\u903B\u8F91\u5728\u7F51\u5173\u5B8C\u6210\u8BA1\u7B97\u8D44\u6E90\u7684\u5378\u8F7D\uFF0C\u65E0\u9700\u540E\u7AEF\u670D\u52A1\u5904\u7406\uFF0C\u4ECE\u800C\u5168\u5C40\u964D\u4F4E\u8BA1\u7B97\u6210\u672C\u3002<br />\u6027\u80FD\u6570\u636E\u4E0A\uFF0C\u4E4B\u524D\u53D1\u8868\u7684\u8FD9\u7BC7\u6587\u6863[\u300A\u901A\u8FC7Higress Wasm\u63D2\u4EF63\u500D\u6027\u80FD\u5B9E\u73B0Spring Cloud Gateway\u529F\u80FD\u300B](https://mp.weixin.qq.com/s/hL8VjWSILLzvFwZ1yqJjMw)\u53CD\u9988\u4E86\u8FC7\u53BB\u7684\u6027\u80FD\u6210\u679C\u3002<br />\u5728Higress\u5C06Wasm\u8FD0\u884C\u65F6\u4ECEV8\u66FF\u6362\u4E3AWAMR\u540E\uFF0CWasm\u63D2\u4EF6\u7684\u6027\u80FD\u5BF9\u6BD4\u4E4B\u524D\u53C8\u6709\u4E86\u5927\u5E45\u63D0\u5347\u3002

<a name="fG8W7"></a>
## Wasm\u8FD0\u884C\u65F6\u5347\u7EA7\uFF1A\u4ECEV8\u5230WAMR
<a name="h11Dt"></a>
### V8\u5B58\u5728\u7684\u95EE\u9898
Wasm\u6280\u672F\u8BDE\u751F\u4E8E\u6D4F\u89C8\u5668\u573A\u666F\uFF0C\u4F5C\u4E3AChromium\u7684JS\u5F15\u64CE\uFF0CV8\u662F\u6700\u65E9\u652F\u6301Wasm\u7684\u8FD0\u884C\u65F6\u4E4B\u4E00\uFF0CV8\u5F15\u64CE\u57FA\u4E8EJIT\u6A21\u5F0F\u8FD0\u884CWasm\u6A21\u5757\uFF0C\u6709\u7740\u5F88\u597D\u7684\u6027\u80FD\u3002\u4F46\u4E5F\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898\uFF1A

1. V8\u9879\u76EE\u590D\u6742\u5EA6\u5F88\u9AD8\uFF1AWasm\u76F8\u5173\u5B9E\u73B0\u8DDFJS\u5904\u7406\u903B\u8F91\u6709\u8F83\u591A\u8026\u5408\uFF0C\u6BD4\u5982\u65E9\u671F\u7684Envoy Wasm\u63D2\u4EF6\u7684\u4E00\u4E2A[bug](https://bugs.chromium.org/p/v8/issues/detail?id=12592)\u5C31\u662FV8\u4E3A\u4F18\u5316JS\u6267\u884C\u5185\u5B58\u5F15\u5165\u6307\u9488\u538B\u7F29\u5BFC\u81F4
2. V8\u793E\u533A\u548CEnvoy\u793E\u533A\u4E4B\u95F4\u7F3A\u5C11\u534F\u4F5C\uFF1AEnvoy\u76EE\u524D\u5BF9\u4E8EV8\u7684\u7248\u672C\u4F9D\u8D56\u8FD8\u505C\u7559\u57282022\u5E74\u7684\u63D0\u4EA4\uFF0C\u65E0\u6CD5\u652F\u6301Wasm GC\u7B49\u65B0\u7279\u6027\uFF0C\u56E0\u4E3A\u9879\u76EE\u590D\u6742\u5EA6\u9AD8\uFF0C\u5347\u7EA7V8\u4F9D\u8D56\u7684\u98CE\u9669\u4E5F\u5F88\u9AD8
3. \u5BA2\u6237\u7AEF\u504F\u597D\uFF1AV8\u7684\u7528\u6237\u548C\u5F00\u53D1\u8005\u5927\u591A\u6765\u81EA\u5BA2\u6237\u7AEF\uFF0C\u8003\u8651\u8BBE\u5907\u517C\u5BB9\u6027\uFF0C\u66F4\u91CD\u89C6JIT\u6A21\u5F0F\u7684\u4F18\u5316\uFF0CAOT\u6A21\u5F0F\u4E0B\u6027\u80FD\u63D0\u5347\u4E0D\u5927\uFF0C\u65E0\u6CD5\u5B8C\u5168\u53D1\u6325Wasm\u6027\u80FD\u4F18\u52BF
<a name="SHmcJ"></a>
### WAMR\u7684\u4F18\u52BF
WAMR\u662F\u6700\u65E9\u7531Intel\u56E2\u961F\u5F00\u53D1\uFF0C\u5728\u5B57\u8282\u7801\u8054\u76DF\uFF08Bytecode Alliance, \u9762\u5411Wasm\u8F6F\u4EF6\u751F\u6001\u7684\u975E\u76C8\u5229\u7EC4\u7EC7\uFF09\u4E0B\u7684\u4E00\u4E2A\u5E7F\u53D7\u6B22\u8FCE\u7684WebAssembly\u8FD0\u884C\u65F6\u5F00\u6E90\u9879\u76EE\u3002\u76EE\u524D\u793E\u533A\u6D3B\u8DC3\u7684\u8D21\u732E\u8005\u5305\u542B\u6765\u81EAIntel\u3001\u5C0F\u7C73\u3001\u4E9A\u9A6C\u900A\u3001\u7D22\u5C3C\u3001Midokura\u3001\u897F\u95E8\u5B50\u3001\u8682\u8681\u7B49\u516C\u53F8\u7684\u5DE5\u7A0B\u5E08\u3002WAMR\u4F7F\u7528C\u8BED\u8A00\u5F00\u53D1\uFF0C\u5177\u6709\u826F\u597D\u7684\u5E73\u53F0\u9002\u5E94\u6027\u3002\u652F\u6301\u89E3\u91CA\u6A21\u5F0F\u3001\u5373\u65F6\u7F16\u8BD1\u53CA\u9884\u7F16\u8BD1\u7B49\u6A21\u5F0F\u8FD0\u884CWasm\u6A21\u5757\uFF0C\u6709\u7740\u4F18\u826F\u7684\u6027\u80FD\uFF0C\u5728\u591A\u4E2A\u516C\u5F00\u6027\u80FD\u6D4B\u8BC4\u62A5\u544A\u4E2D\u5747\u8868\u73B0\u4F18\u5F02\uFF0C\u540C\u65F6\u53C8\u6781\u4F4E\u7684\u8D44\u6E90\u5F00\u9500\uFF0C\u53EF\u4EE5\u5728100KB\u5185\u5B58\u4E2D\u8FD0\u884C\u5355\u4E2AWasm\u5B9E\u4F8B\u3002

<a name="E0wqC"></a>
### \u6027\u80FD\u5BF9\u6BD4

- **\u538B\u6D4B\u5DE5\u5177**\uFF1Ak6
- **\u670D\u52A1\u5668CPU\u578B\u53F7**\uFF1AIntel(R) Xeon(R) Platinum 8369B CPU @ 2.90GHz
- **\u538B\u6D4B\u65B9\u5F0F**\uFF1AHigress\u542F\u52A82\u4E2Aworker\u7EBF\u7A0B\uFF0C\u538B\u6D4B\u671F\u95F4\u56FA\u5B9Ak6\u7684\u538B\u529B\uFF0C\u8DD1\u6EE1\u4E24\u4E2A\u7EBF\u7A0B

\u9009\u53D6\u4E86\u90E8\u5206Higress\u63D2\u4EF6\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5\uFF0C\u60C5\u51B5\u5982\u4E0B\uFF1A

| \u63D2\u4EF6\u540D\u79F0 | \u63D2\u4EF6\u7528\u9014 | V8<br />(ms) | WAMR<br />(ms) | \u6027\u80FD\u63D0\u5347 |
| --- | --- | --- | --- | --- |
| bot-detect | \u57FA\u4E8E\u6B63\u5219\u8BC6\u522B\u963B\u6B62\u4E92\u8054\u7F51\u722C\u866B\u5BF9\u7AD9\u70B9\u8D44\u6E90\u7684\u722C\u53D6 | 1.25 | 0.64 | 95% |
| hmac-auth | \u57FA\u4E8EHMAC\u7B97\u6CD5\u4E3AHTTP\u8BF7\u6C42\u751F\u6210\u4E0D\u53EF\u4F2A\u9020\u7684\u7B7E\u540D\uFF0C<br />\u5E76\u57FA\u4E8E\u7B7E\u540D\u5B9E\u73B0\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u9274\u6743 | 4.44 | 3.25 | 36% |
| jwt-auth | \u57FA\u4E8EJWT(JSON Web Tokens)\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743 | 11.98 | 7.46 | 60% |
| jwt-logout | \u57FA\u4E8ERedis\u5B9E\u73B0JWT\u7684\u5F31\u72B6\u6001\u7BA1\u7406\uFF0C\u89E3\u51B3JWT\u65E0\u6CD5\u767B\u51FA\u7684\u95EE\u9898 | 14.08 | 8.44 | 66% |
| key-auth | \u57FA\u4E8E API Key \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743 | 1.66 | 1.16 | 43% |
| oauth | \u57FA\u4E8EJWT\u8FDB\u884COAuth2 Access Token\u7B7E\u53D1 | 10.15 | 4.75 | 113% |

> \u6CE8\uFF1A\u8868\u683C\u4E2D\u7684\u6570\u636E\u4E3A\u5355\u8BF7\u6C42\u5E73\u5747\u9644\u52A0\u5EF6\u65F6


\u6574\u4F53\u6765\u770B\uFF0CWasm\u6307\u4EE4\u8D8A\u590D\u6742\u7684\u63D2\u4EF6\uFF0CWAMR\u7684\u63D0\u5347\u8D8A\u660E\u663E\u3002\u4E0A\u8FF0\u6240\u6709\u63D2\u4EF6\u9664\`jwt-logout\`\u662F\u4F01\u4E1A\u7248\u63D2\u4EF6\u672A\u5F00\u6E90\u4EE5\u5916\uFF0C\u5176\u4F59\u63D2\u4EF6\u5747\u53EF\u4EE5\u5728Higress\u5F00\u6E90\u4ED3\u5E93\u76EE\u5F55\u4E0B\u67E5\u770B\u5BF9\u5E94\u6E90\u7801\u5B9E\u73B0\uFF1A[https://github.com/alibaba/higress/tree/main/plugins/wasm-cpp/extensions](https://github.com/alibaba/higress/tree/main/plugins/wasm-cpp/extensions)<br />\u7F16\u8BD1\u751F\u6210AOT\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528wamrc\u8FD9\u4E2AWAMR\u63D0\u4F9B\u7684\u5B98\u65B9\u7F16\u8BD1\u5DE5\u5177\uFF1A\`wamrc --invoke-c-api-import -o plugin.aot plugin.wasm\`\u3002<br />\u4E3A\u4E86\u751F\u6210\u7684wasm\u6587\u4EF6\u53EF\u4EE5\u517C\u5BB9JIT\u6A21\u5F0F\uFF0C\u4F7F\u7528WAMR\u4ED3\u5E93\u4E0B\u7684\u811A\u672C\u751F\u6210\u5408\u5E76\u6587\u4EF6\uFF1A\`python3 wasm-micro-runtime/test-tools/append-aot-to-wasm/append_aot_to_wasm.py --aot plugin.aot --wasm plugin.wasm -o plugin.aot.wasm\`<br />\u4EE5\u63D0\u5347\u6700\u5927\u7684oauth\u63D2\u4EF6\u4E3A\u4F8B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u8FF0\u914D\u7F6E\u8FDB\u884C\u590D\u73B0\uFF1A<br />**k6\u538B\u6D4B\u547D\u4EE4**\uFF1A\`k6 run --vus 300 ./script.js --duration 60s\`<br />**k6\u538B\u6D4B\u811A\u672C**\uFF1A
\`\`\`javascript
import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('http://11.164.3.16:10000/',{headers: {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uL2F0K2p3dCJ9.eyJhdWQiOiJ0ZXN0MiIsImNsaWVudF9pZCI6Ijk1MTViNTY0LTBiMWQtMTFlZS05YzRjLTAwMTYzZTEyNTBiNSIsImV4cCI6MTY2NTY3MzgyOSwiaWF0IjoxNjY1NjczODE5LCJpc3MiOiJIaWdyZXNzLUdhdGV3YXkiLCJqdGkiOiIxMDk1OWQxYi04ZDYxLTRkZWMtYmVhNy05NDgxMDM3NWI2M2MiLCJzY29wZSI6InRlc3QiLCJzdWIiOiJjb25zdW1lcjEifQ.LsZ6mlRxlaqWa0IAZgmGVuDgypRbctkTcOyoCxqLrHY'}});
    check(res, { 'status was 200': (r) => r.status == 200 });
}
\`\`\`
**envoy\u914D\u7F6E\u7247\u6BB5**
\`\`\`yaml
                  - name: envoy.filters.http.wasm
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      config:
                        name: "my_plugin"
                        configuration:
                          "@type": "type.googleapis.com/google.protobuf.StringValue"
                          value: |
                            {
                                "consumers": [
                                    {
                                        "name": "consumer1",
                                        "client_id": "9515b564-0b1d-11ee-9c4c-00163e1250b5",
                                        "client_secret": "9e55de56-0b1d-11ee-b8ec-00163e1250b5"
                                    }
                                ],
                                "clock_skew_seconds": 3153600000
                            }
                        vm_config:
                          runtime: envoy.wasm.runtime.wamr
                          #runtime: envoy.wasm.runtime.v8
                          code:
                            local:
                             filename: "oauth.aot.wasm"
                          allow_precompiled: true
\`\`\`

<a name="gqXOi"></a>
### \u6027\u80FD\u63D0\u5347\u539F\u56E0
\u4E3B\u8981\u7684\u539F\u56E0\u5305\u542B\uFF1A

1. WAMR\u63D0\u4F9B\u4E86\u6DF1\u5EA6\u4F18\u5316\u7684\u9884\u7F16\u8BD1\u7684\u80FD\u529B\u3002\u5728\u90E8\u7F72\u524D\uFF0CWAMR\u5C06Wasm opcodes\u7FFB\u8BD1\u4E3AIR\uFF0C\u7ECF\u8FC7\u5B9A\u5236\u7684\u4F18\u5316\u6D41\u6C34\u7EBF\uFF0C\u751F\u6210\u6307\u5B9A\u5E73\u53F0\u7684\u673A\u5668\u7801\u3002\u5728\u8FD0\u884C\u65F6\uFF0C\u6267\u884C\u9884\u7F16\u8BD1\u540E\u7684Wasm\u53EF\u4EE5\u83B7\u5F97\u5AB2\u7F8Enative binary\u7684\u6027\u80FD\u3002
2. WAMR\u91C7\u7528\u4E86\u9AD8\u5EA6\u4F18\u5316\u7684FFI\u3002\u6709\u6548\u964D\u4F4E\u5728host(c/c++)\u548Cguest(wasm)\u4E24\u4E2A\u4E16\u754C\u95F4\u201C\u7A7F\u68AD\u201D\u65F6\u9700\u8981\u7684\u7C7B\u578B\u8F6C\u6362\u548C\u5185\u5B58\u62F7\u8D1D\u7684\u6B21\u6570\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u635F\u8017\u3002
3. WAMR\u53EF\u4EE5\u667A\u80FD\u611F\u77E5\u5E73\u53F0\u7684\u786C\u4EF6\u52A0\u901F\u80FD\u529B\u5E76\u4E88\u4EE5\u5145\u5206\u5229\u7528\u3002\u6BD4\u5982\u5F53\u8FD0\u884C\u5728X86\u5E73\u53F0\u65F6\uFF0CWAMR\u5B9E\u73B0\u4E86\u5B66\u672F\u754C\u6700\u65B0\u63D0\u51FA\u7684"segue"\u7B97\u6CD5\uFF0C\u5229\u7528GS\u5BC4\u5B58\u5668\u4F5C\u4E3A\u5BFB\u5740\u65B9\u6CD5\uFF0C\u63D0\u5347\u4E86\u8BBF\u95EEWasm\u7EBF\u6027\u7A7A\u95F4\u7684\u6548\u7387\u3002

<a name="H0Iyq"></a>
## \u672A\u6765\u5C55\u671B
\u5728Higress\u56E2\u961F\u548CWAMR\u56E2\u961F\u4E4B\u95F4\u7684\u7D27\u5BC6\u534F\u4F5C\u4E0B\uFF0C\u9664\u4E86\u5728\u7F51\u5173\u573A\u666F\u63D0\u5347Wasm\u63D2\u4EF6\u6027\u80FD\uFF0C\u8FD8\u5E26\u6765\u4E86\u5F88\u591A\u5B9E\u7528\u7684\u65B0\u7279\u6027\u5373\u5C06\u53D1\u5E03\uFF0C\u656C\u8BF7\u671F\u5F85\uFF1A

1. \u652F\u6301\u751F\u6210CPU\u706B\u7130\u56FE\uFF0C\u4F8B\u5982\u4E0B\u9762\u662FWasm\u63D2\u4EF6\u4E2D\u6267\u884Cfibonacci\u9012\u5F52\u770B\u5230\u7684CPU\u706B\u7130\u56FE\uFF1A<br />![image.png](/img/1728551757297.png)
2. \u652F\u6301Wasm\u63D2\u4EF6\u4E2D\u903B\u8F91\u95EE\u9898\u5BFC\u81F4Crash\u540E\uFF0C\u63D2\u4EF6\u65E5\u5FD7\u4E2D\u6253\u5370\u5B8C\u6574\u7684\u51FD\u6570\u5806\u6808\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7WAMR\u63D0\u4F9B\u7684addr2line\u5DE5\u5177\u5B9A\u4F4D\u5230\u6E90\u4EE3\u7801\u4E2D\u7684\u5177\u4F53\u884C\u53F7
3. \u652F\u6301\u89C2\u6D4B\u6BCF\u4E2AWasm\u63D2\u4EF6\u6A21\u5757\u7684CPU\u548C\u5185\u5B58\u5360\u7528\u60C5\u51B5
4. \u652F\u6301\u4F7F\u7528TypeScript\u7F16\u5199Wasm\u63D2\u4EF6\uFF0C\u5B8C\u6574\u8BED\u6CD5\u652F\u6301

\u6B22\u8FCE\u66F4\u591A\u5F00\u53D1\u8005\u4E00\u8D77\u53C2\u4E0EHigress\u548CWAMR\u5F00\u6E90\u793E\u533A\uFF0CGitHub\u9879\u76EE\u5730\u5740\uFF1A<br />Higress: [https://github.com/alibaba/higress](https://github.com/alibaba/higress)<br />WAMR: [https://github.com/bytecodealliance/wasm-micro-runtime](https://github.com/bytecodealliance/wasm-micro-runtime)

`,t={title:"Higress\u5168\u65B0Wasm\u8FD0\u884C\u65F6\uFF0C\u6027\u80FD\u5927\u5E45\u63D0\u5347",description:"Higress\u5168\u65B0Wasm\u8FD0\u884C\u65F6\uFF0C\u6027\u80FD\u5927\u5E45\u63D0\u5347",keywords:["Higress"],date:"2024-08-12",category:"article"},m={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_rggp2v9saa6gehsg.mdx",rawData:void 0};export{m as _internal,i as body,a as collection,t as data,s as id,e as slug};
