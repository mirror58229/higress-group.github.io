const r="latest/zh-cn/ops/deploy-by-docker-compose.md",s="docs",e="latest/zh-cn/ops/deploy-by-docker-compose",o=`\r
# \u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72\r
\r
Docker Compose \u662F\u7528\u4E8E\u5B9A\u4E49\u548C\u8FD0\u884C\u591A\u5BB9\u5668 Docker \u5E94\u7528\u7A0B\u5E8F\u7684\u5DE5\u5177\u3002\u901A\u8FC7\u5B83\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 YAML \u6587\u4EF6\u6765\u8131\u79BB K8s \u96C6\u7FA4\u6765\u5B9E\u73B0 Higress \u7F51\u5173\u7684\u72EC\u7ACB\u90E8\u7F72\u3002\r
\r
> **\u6CE8\u610F**\r
> \r
> Standalone \u6A21\u5F0F\u6CA1\u6709\u5927\u89C4\u6A21\u751F\u4EA7\u4F7F\u7528\u8FC7\uFF0C\u76EE\u524D\u4E3B\u8981\u7528\u4E8E\u672C\u5730\u90E8\u7F72\u6D4B\u8BD5\u7684\u573A\u666F\uFF0C\u5982\u679C\u751F\u4EA7\u90E8\u7F72\u66F4\u5EFA\u8BAE[\u4E91\u539F\u751F\u6A21\u5F0F](https://higress.io/zh-cn/docs/ops/deploy-by-helm)\u90E8\u7F72\r
\r
## \u5B89\u88C5 Higress\r
\r
\u57FA\u4E8E Docker Compose \u90E8\u7F72\u65F6\uFF0CHigress \u7F51\u5173\u7531\u5982\u4E0B\u51E0\u4E2A\u670D\u52A1\u7EC4\u6210\uFF1A\r
- apiserver\uFF1A\u57FA\u7840\u8BBE\u65BD\u670D\u52A1\u3002\u8D1F\u8D23\u6A21\u62DF K8s \u7684 API Server\uFF1B\r
- controller\uFF1A\u63A7\u5236\u9762\u670D\u52A1\u4E00\u53F7\u3002\u8D1F\u8D23\u914D\u7F6E\u6536\u96C6\u6574\u5408\u6240\u6709\u7684\u914D\u7F6E\u6570\u636E\u548C\u670D\u52A1\u5217\u8868\uFF1B\r
- pilot\uFF1A\u63A7\u5236\u9762\u670D\u52A1\u4E00\u53F7\u3002\u8D1F\u8D23\u4E0B\u53D1\u7F51\u5173\u8DEF\u7531\u6570\u636E\uFF1B\r
- gateway\uFF1A\u6570\u636E\u9762\u670D\u52A1\u3002\u8D1F\u8D23\u627F\u8F7D\u5B9E\u9645\u7684\u7F51\u5173\u8BF7\u6C42\uFF1B\r
- console\uFF1AHigress \u7F51\u5173\u63A7\u5236\u53F0\r
\r
### \u5B89\u88C5\u547D\u4EE4\r
\r
\`\`\`shell\r
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- [DESTINATION] [OPTIONS...]\r
\`\`\`\r
\r
### \u5B89\u88C5\u53C2\u6570\r
\r
|**\u53C2\u6570\u540D**                                                     |**\u53C2\u6570\u8BF4\u660E**                                                                                                         |**\u9ED8\u8BA4\u503C**           |\r
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|--------------|\r
|DESTINATION                                             |\u76EE\u6807\u5B89\u88C5\u76EE\u5F55                                                                                                       |./higress     |\r
|-a<br/>--auto-run                                          |\u914D\u7F6E\u5B8C\u6210\u540E\u81EA\u52A8\u542F\u52A8 Higress \u7F51\u5173                                                                                         |\u65E0             |\r
|-c CONFIG_URL<br/>--config-url CONFIG_URL                  |\u914D\u7F6E\u670D\u52A1\u7684 URL\u3002<br/>- \u82E5\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684 Nacos \u670D\u52A1\uFF08\u7248\u672C\u4E0D\u4F4E\u4E8E 2.0.0\uFF09\uFF0CURL \u683C\u5F0F\u4E3A\uFF1Anacos://192.168.0.1:8848<br/>- \u82E5\u5728\u672C\u5730\u78C1\u76D8\u4E0A\u4FDD\u5B58\u914D\u7F6E\uFF0CURL \u683C\u5F0F\u4E3A\uFF1Afile://opt/higress/conf|\u65E0             |\r
|--use-builtin-nacos                                     |\u4F7F\u7528\u5185\u7F6E\u7684 Nacos \u670D\u52A1\u3002\u4E0D\u5EFA\u8BAE\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u5982\u679C\u8BBE\u7F6E\u672C\u53C2\u6570\uFF0C\u5219\u65E0\u9700\u8BBE\u7F6E\`-c\`\u53C2\u6570                                                                 |\u65E0             |\r
|--nacos-ns=NACOS_NAMESPACE                              |\u7528\u4E8E\u4FDD\u5B58 Higress \u914D\u7F6E\u7684 Nacos \u547D\u540D\u7A7A\u95F4 ID                                                                               |higress-system|\r
|--nacos-username=NACOS_USERNAME                         |\u7528\u4E8E\u8BBF\u95EE Nacos \u7684\u7528\u6237\u540D\u3002\u4EC5\u7528\u4E8E Nacos \u542F\u52A8\u4E86\u8BA4\u8BC1\u7684\u60C5\u51B5\u4E0B                                                                          |\u65E0             |\r
|--nacos-password=NACOS_PASSWORD                         |\u7528\u4E8E\u8BBF\u95EE Nacos \u7684\u7528\u6237\u5BC6\u7801\u3002\u4EC5\u7528\u4E8E Nacos \u542F\u52A8\u4E86\u8BA4\u8BC1\u7684\u60C5\u51B5\u4E0B                                                                         |\u65E0             |\r
|-k KEY<br/>--data-enc-key=KEY                              |\u7528\u4E8E\u52A0\u5BC6\u654F\u611F\u914D\u7F6E\u6570\u636E\u7684\u5BC6\u94A5\u3002\u957F\u5EA6\u5FC5\u987B\u4E3A 32 \u4E2A\u5B57\u7B26\u3002\u82E5\u672A\u8BBE\u7F6E\uFF0CHigress \u5C06\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u968F\u673A\u7684\u5BC6\u94A5\u3002\u82E5\u9700\u96C6\u7FA4\u90E8\u7F72\uFF0C\u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E                                           |\u968F\u673A\u5B57\u7B26\u4E32         |\r
|--nacos-port=NACOS_PORT                                 |\u5185\u7F6E NACOS \u670D\u52A1\u5728\u670D\u52A1\u5668\u672C\u5730\u76D1\u542C\u7684\u7AEF\u53E3                                                                                       |8848          |\r
|--gateway-http-port=GATEWAY_HTTP_PORT                   |Higress Gateway \u5728\u670D\u52A1\u5668\u672C\u5730\u76D1\u542C\u7684 HTTP \u7AEF\u53E3                                                                            |80            |\r
|--gateway-https-port=GATEWAY_HTTPS_PORT                 |Higress Gateway \u5728\u670D\u52A1\u5668\u672C\u5730\u76D1\u542C\u7684 HTTPS \u7AEF\u53E3                                                                           |443           |\r
|--gateway-metrics-port=GATEWAY_METRIC_PORT              |Higress Gateway \u5728\u670D\u52A1\u5668\u672C\u5730\u76D1\u542C\u7684\u7528\u4E8E\u66B4\u9732\u8FD0\u884C\u6307\u6807\u7AEF\u53E3                                                                          |15020         |\r
|--console-port=CONSOLE_PORT                             |Higress Console \u5728\u670D\u52A1\u5668\u672C\u5730\u76D1\u542C\u7684\u7AEF\u53E3                                                                                  |8080          |\r
|-r<br/>--rerun                                             |\u5728 Higress \u5DF2\u914D\u7F6E\u5B8C\u6210\u540E\u91CD\u65B0\u6267\u884C\u914D\u7F6E\u6D41\u7A0B                                                                                     |\u65E0             |\r
|-h<br/>--help                                              |\u663E\u793A\u5E2E\u52A9\u4FE1\u606F                                                                                                       |\u65E0             |\r
`,a={title:"\u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72",description:"\u5982\u4F55\u4F7F\u7528 Docker Compose \u5B9E\u73B0 Higress \u7684\u72EC\u7ACB\u90E8\u7F72",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["deploy","docker compose","docker","ops"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/deploy-by-docker-compose.md",rawData:void 0};export{t as _internal,o as body,s as collection,a as data,r as id,e as slug};
