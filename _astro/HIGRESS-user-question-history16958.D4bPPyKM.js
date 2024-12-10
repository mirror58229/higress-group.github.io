const s="HIGRESS-user-question-history16958.md",e="faq",o="higress-user-question-history16958",r=`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u5728Kubernetes\u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u4F7F\u7528Higress\u7BA1\u7406\u9762\u677F\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF1A

### **\u9636\u6BB5\u4E00\uFF1A\u51C6\u5907\u4E0E\u5B89\u88C5Higress**

1. **\u914D\u7F6E\u96C6\u7FA4\u4EE5\u652F\u6301Higress**
   - \u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684Kubernetes\u96C6\u7FA4\u5DF2\u51C6\u5907\u597D\u3002\u5982\u679C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u6784\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u4F7F\u7528KinD\uFF08Kubernetes in Docker\uFF09\u5DE5\u5177\u3002\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\`higress\`\u7684\u96C6\u7FA4\uFF0C\u5E76\u914D\u7F6E\u5B83\u4EE5\u4FBFHigress\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u768480\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A
     \`\`\`shell
     kind create cluster --name higress --config=cluster.conf
     \`\`\`
     \u5176\u4E2D\`cluster.conf\`\u5E94\u5305\u542B\u9002\u5F53\u7684\u8282\u70B9\u914D\u7F6E\uFF0C\u5982\u793A\u4F8B\u4E2D\u7684\u6DFB\u52A0\u7279\u5B9A\u6807\u7B7E\u548C\u7AEF\u53E3\u6620\u5C04\u3002

2. **\u5B89\u88C5Higress**
   - \u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\u5E76\u5B89\u88C5Higress\u5230\u540D\u4E3A\`higress-system\`\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u540C\u65F6\u6307\u5B9A\u672C\u5730\u90E8\u7F72\u6A21\u5F0F\uFF1A
     \`\`\`shell
     helm repo add higress.io https://higress.io/helm-charts
     helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
     \`\`\`

### **\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E\u4E0E\u9A8C\u8BC1**

#### **\u914D\u7F6E\u670D\u52A1\u8DEF\u7531**

\u5047\u8BBE\u60A8\u5DF2\u6709\u670D\u52A1\u90E8\u7F72\u5728default\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u540D\u4E3A\`foo\`\u3002\u63A5\u4E0B\u6765\uFF0C\u914D\u7F6E\u8DEF\u7531\u8BA9\`http://foo.bar.com/foo\`\u6307\u5411\u8FD9\u4E2A\u670D\u52A1\u3002

1. **\u901A\u8FC7Ingress CRD\u914D\u7F6E**
   - \u521B\u5EFA\u4E00\u4E2AIngress\u8D44\u6E90\uFF0C\u6307\u5B9AHigress\u4F5C\u4E3AIngress Class\uFF0C\u5E76\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF1A
     \`\`\`yaml
     apiVersion: networking.k8s.io/v1
     kind: Ingress
     metadata:
       name: foo
     spec:
       ingressClassName: higress
       rules:
       - host: foo.bar.com
         http:
           paths:
           - pathType: Prefix
             path: "/foo"
             backend:
               service:
                 name: foo-service
                 port:
                   number: 5678
     \`\`\`
     \u4F7F\u7528\`kubectl apply -f <filename>.yaml\`\u5E94\u7528\u6B64\u914D\u7F6E\u3002

#### **\u6216\u4F7F\u7528Higress Console\u914D\u7F6E**

- \u5982\u679C\u60A8\u66F4\u503E\u5411\u4E8E\u56FE\u5F62\u754C\u9762\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528\`hgctl dashboard console\`\u547D\u4EE4\u542F\u52A8Higress\u63A7\u5236\u53F0\uFF0C\u5B8C\u6210\u7BA1\u7406\u5458\u8D26\u6237\u7684\u521D\u59CB\u5316\u540E\uFF0C\u624B\u52A8\u521B\u5EFA\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\uFF0C\u6839\u636E\u63A7\u5236\u53F0\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C\u3002

### **\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1**

- \u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u751F\u6548\uFF0C\u901A\u8FC7\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5230\u914D\u7F6E\u7684\u8DEF\u7531\u5730\u5740\uFF1A
  \`\`\`shell
  curl http://GatewayIP/foo -H 'host: foo.bar.com'
  \`\`\`
  \u5982\u679C\u4E00\u5207\u914D\u7F6E\u6B63\u786E\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230"foo"\u4F5C\u4E3A\u54CD\u5E94\uFF0C\u8868\u660E\u8BF7\u6C42\u5DF2\u88AB\u6B63\u786E\u8DEF\u7531\u5230\u540E\u7AEF\u670D\u52A1\u3002

### **\u603B\u7ED3**

\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u5B8C\u6210\u4E86Higress\u7BA1\u7406\u9762\u677F\u7684\u5B89\u88C5\u3001\u670D\u52A1\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u529F\u80FD\u9A8C\u8BC1\u3002\u65E0\u8BBA\u662F\u901A\u8FC7\u547D\u4EE4\u884C\u4F7F\u7528Ingress\u8D44\u6E90\u8FD8\u662F\u76F4\u89C2\u7684Higress\u63A7\u5236\u53F0\uFF0C\u90FD\u80FD\u7075\u6D3B\u5730\u7BA1\u7406Kubernetes\u96C6\u7FA4\u4E2D\u7684\u670D\u52A1\u8DEF\u7531\u3002\u8BF7\u786E\u4FDD\u6BCF\u4E00\u6B65\u64CD\u4F5C\u6210\u529F\u540E\u518D\u8FDB\u884C\u4E0B\u4E00\u6B65\uFF0C\u4EE5\u786E\u4FDD\u6574\u4E2A\u8FC7\u7A0B\u7684\u987A\u7545\u3002[[\u5B89\u88C5\u90E8\u7F72\u6587\u6863]](https://higress.cn/docs/latest/ops/deploy-by-helm/)\u63D0\u4F9B\u4E86\u66F4\u591A\u9AD8\u7EA7\u914D\u7F6E\u548C\u4F7F\u7528\u7EC6\u8282\uFF0C\u53EF\u4F9B\u8FDB\u4E00\u6B65\u63A2\u7D22\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16963)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`,t={title:"higress \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528",description:"\u8981\u5728Kubernetes\u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u4F7F\u7528Higress\u7BA1\u7406\u9762\u677F\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF1A### **\u9636\u6BB5\u4E00\uFF1A\u51C6\u5907\u4E0E\u5B89\u88C5Higress**1. **\u914D\u7F6E\u96C6\u7FA4\u4EE5\u652F\u6301Higress**   - \u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684Kubernetes\u96C6\u7FA4\u5DF2\u51C6\u5907\u597D\u3002\u5982\u679C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u6784\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u4F7F\u7528KinD\uFF08Kubernetes",keywords:["higress","\u7BA1\u7406\u9762\u677F","\u5B89\u88C5","\u4F7F\u7528"],date:"2024-09-26",category:"expertConsultation"},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16958.md",rawData:void 0};export{i as _internal,r as body,e as collection,t as data,s as id,o as slug};
