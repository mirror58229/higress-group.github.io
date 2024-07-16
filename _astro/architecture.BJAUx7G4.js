const e="latest/zh-cn/dev/architecture.md",t="docs",s="latest/zh-cn/dev/architecture",a=`
# \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E

## Higress Controller

Higress \u7684\u63A7\u5236\u9762\u7A0B\u5E8F\uFF0C\u4F1A\u8FDE\u63A5 Istio \uFF0C\u7528\u4E8E\u751F\u6210 Istio API \u5BF9\u8C61\uFF0C\u901A\u8FC7 xDS \u534F\u8BAE\u53D1\u9001\u7ED9 Istio\u3002

\u5728 higress \u4ED3\u5E93\u76EE\u5F55\u4E0B\u6267\u884C \`make build\` \u5373\u53EF\u8FDB\u884C\u672C\u5730\u73AF\u5883\u80FD\u8FD0\u884C\u7684\u4E8C\u8FDB\u5236\u7F16\u8BD1

\u82E5\u9700\u8981\u7F16\u8BD1 docker \u955C\u50CF\uFF0C\u8BF7\u6267\u884C \`make docker-build\`\u3002Higress Controller\u4F7F\u7528\u7684Istio pilot\u955C\u50CF\u4F7F\u7528\`make build-istio-local\` \u7F16\u8BD1\u3002

## Higress Gateway

Higress \u7684\u6570\u636E\u9762\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u8F6C\u53D1\u7B49\u80FD\u529B\u3002

### \u5FEB\u901F\u6784\u5EFA

\u9002\u7528\u573A\u666F\uFF1A\u672A\u5BF9 Envoy \u672C\u4F53\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u5373\u4E0D\u9700\u8981\u91CD\u65B0\u7F16\u8BD1 Envoy \u672C\u4F53\u7684\u60C5\u51B5

\u6784\u5EFA\u6B65\u9AA4\uFF1A
1. \u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 higress \u4ED3\u5E93\u76EE\u5F55\uFF1B
2. \u6267\u884C \`make build-gateway-local\` \u547D\u4EE4\uFF0C\u8FDB\u884C Higress Gateway \u955C\u50CF\u7684\u6784\u5EFA\uFF1B
3. \u6784\u5EFA\u5B8C\u6210\u540E\u4F1A\u8F93\u51FA\u955C\u50CF tag\u3002

### \u5B8C\u6574\u6784\u5EFA

\u9002\u7528\u573A\u666F\uFF1A\u9700\u8981\u91CD\u65B0\u7F16\u8BD1 Envoy \u672C\u4F53\u7684\u60C5\u51B5

\u6784\u5EFA\u6B65\u9AA4\uFF1A
1. \u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 higress \u4ED3\u5E93\u76EE\u5F55\uFF1B
2. \u6267\u884C \`cd external/proxy; BUILD_WITH_CONTAINER=1 make test_release\` \u547D\u4EE4\uFF0C\u6784\u5EFA Envoy \u672C\u4F53\uFF1B
3. \u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u7684 \`envoy.tar.gz\` \u6587\u4EF6\u4F1A\u653E\u5728 higress \u4ED3\u5E93\u76EE\u5F55\u7684 \`external/package\` \u5B50\u76EE\u5F55\u5185\uFF1B
4. \u5C06\u6784\u5EFA\u5B8C\u6210\u540E\u8F93\u51FA\u7684 \`envoy.tar.gz\` \u6587\u4EF6\uFF0C\u6839\u636E\u672C\u673A\u7684\u7CFB\u7EDF\u67B6\u6784\u91CD\u547D\u540D\u4E3A \`envoy-amd64.tar.gz\` \u6216 \`envoy-arm64.tar.gz\`\uFF1B
5. \u5982\u679C\u9700\u8981\u6784\u5EFA\u591A\u5E73\u53F0\u955C\u50CF\uFF0C\u90A3\u4E48\u9700\u8981\u5728\u53E6\u4E00\u4E2A\u5E73\u53F0\u7684\u7CFB\u7EDF\u4E0A\u5B8C\u6210 Envoy \u7684\u6784\u5EFA\uFF0C\u5E76\u5C06\u5176\u751F\u6210\u7684 envoy.tar.gz \u6587\u4EF6\u91CD\u547D\u540D\u540E\u590D\u5236\u5230\u672C\u673A\u4E0A\uFF08\u53C2\u8003\u4EE5\u4E0A 2\u30013 \u4E24\u6B65\uFF09\uFF1B
6. \u53C2\u8003\u4E0A\u9762\u7684\u5FEB\u901F\u6784\u5EFA\u6B65\u9AA4\uFF0C\u6784\u5EFA Higress Gateway \u955C\u50CF\u3002`,r={title:"\u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E",description:"Higress \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","architecture"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/architecture.md",rawData:void 0};export{i as _internal,a as body,t as collection,r as data,e as id,s as slug};
