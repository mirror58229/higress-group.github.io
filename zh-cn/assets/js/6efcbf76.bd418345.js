"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[9659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,c=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(c,s(s({ref:t},g),{},{components:r})):n.createElement(c,s({ref:t},g))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u4f7f\u7528 Helm \u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72",keywords:["deploy","helm","kubernetes","k8s","ops"],description:"Higress Helm\u90e8\u7f72.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},s="\u4f7f\u7528 Helm \u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72",i={unversionedId:"ops/deploy-by-helm",id:"ops/deploy-by-helm",title:"\u4f7f\u7528 Helm \u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72",description:"Higress Helm\u90e8\u7f72.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/zh-cn/docs/ops/deploy-by-helm",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Helm \u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72",keywords:["deploy","helm","kubernetes","k8s","ops"],description:"Higress Helm\u90e8\u7f72.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},sidebar:"docs",previous:{title:"hgctl \u5de5\u5177\u4f7f\u7528\u8bf4\u660e",permalink:"/zh-cn/docs/ops/hgctl"},next:{title:"\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72",permalink:"/zh-cn/docs/ops/deploy-by-docker-compose"}},o={},p=[{value:"\u5b89\u88c5 Higress",id:"\u5b89\u88c5-higress",level:2},{value:"Helm \u5b89\u88c5\u547d\u4ee4",id:"helm-\u5b89\u88c5\u547d\u4ee4",level:3},{value:"\u5e38\u7528\u5b89\u88c5\u53c2\u6570",id:"\u5e38\u7528\u5b89\u88c5\u53c2\u6570",level:3},{value:"\u652f\u6301 Istio CRD\uff08\u53ef\u9009\uff09",id:"\u652f\u6301-istio-crd\u53ef\u9009",level:2},{value:"\u652f\u6301 Gateway API CRD\uff08\u53ef\u9009\uff09",id:"\u652f\u6301-gateway-api-crd\u53ef\u9009",level:2}],g={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-helm-\u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72"},"\u4f7f\u7528 Helm \u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u662f\u4e00\u4e2a\u7528\u4e8e\u81ea\u52a8\u5316\u7ba1\u7406\u548c\u53d1\u5e03 Kubernetes \u8f6f\u4ef6\u7684\u5305\u7ba1\u7406\u7cfb\u7edf\u3002\u901a\u8fc7 Helm \u53ef\u4ee5\u5728\u60a8\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5feb\u901f\u90e8\u7f72\u5b89\u88c5 Higress \u7f51\u5173\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-higress"},"\u5b89\u88c5 Higress"),(0,a.kt)("p",null,"Higress \u7f51\u5173\u7531\u63a7\u5236\u9762\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"higress-controller")," \u548c\u6570\u636e\u9762\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"higress-gateway")," \u7ec4\u6210\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"higress-gateway"),"\u8d1f\u8d23\u627f\u8f7d",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u6d41\u91cf"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"higress-controller")," \u8d1f\u8d23\u7ba1\u7406",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e0b\u53d1"),"\u3002"),(0,a.kt)("h3",{id:"helm-\u5b89\u88c5\u547d\u4ee4"},"Helm \u5b89\u88c5\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add higress.io https://higress.io/helm-charts\nhelm install higress higress.io/higress -n higress-system --create-namespace\n")),(0,a.kt)("h3",{id:"\u5e38\u7528\u5b89\u88c5\u53c2\u6570"},"\u5e38\u7528\u5b89\u88c5\u53c2\u6570"),(0,a.kt)("p",null,"\u5b8c\u6574\u53c2\u6570\u4ecb\u7ecd\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/user/configurations"},"\u8fd0\u7ef4\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u53c2\u6570\u540d")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u5168\u5c40\u53c2\u6570")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.local"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8981\u5b89\u88c5\u81f3\u672c\u5730 K8s \u96c6\u7fa4\uff08\u5982 Kind\u3001Rancher Desktop \u7b49\uff09\uff0c\u8bf7\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.ingressClass"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fc7\u6ee4\u88ab Higress Controller \u76d1\u542c\u7684 Ingress \u8d44\u6e90\u7684 ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class"},"IngressClass"),"\u3002",(0,a.kt)("br",null),"\u5728\u96c6\u7fa4\u5185\u90e8\u7f72\u4e86\u591a\u4e2a\u7f51\u5173\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e00\u53c2\u6570\u6765\u533a\u5206\u6bcf\u4e2a\u7f51\u5173\u7684\u804c\u8d23\u8303\u56f4\u3002",(0,a.kt)("br",null),"IngressClass \u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u53d6\u503c\uff1a",(0,a.kt)("br",null),"1. \u5982\u679c\u8bbe\u7f6e\u4e3a\u201cnginx\u201d\uff0cHigress Controller \u5c06\u76d1\u542c Ingress \u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"nginx")," \u6216\u4e3a\u7a7a\u7684 Ingress \u8d44\u6e90\u3002",(0,a.kt)("br",null),"2. \u5982\u679c\u8bbe\u4e3a\u7a7a\uff0cHigress Controller \u5c06\u76d1\u542c K8s \u96c6\u7fa4\u5185\u7684\u5168\u90e8 Ingress \u8d44\u6e90\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"higress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.watchNamespace"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u503c\u4e0d\u4e3a\u7a7a\uff0cHigress Controller \u5c06\u53ea\u4f1a\u76d1\u542c\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u8d44\u6e90\u3002",(0,a.kt)("br",null),"\u5f53\u57fa\u4e8e K8s \u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u4e1a\u52a1\u7cfb\u7edf\u9694\u79bb\u65f6\uff0c\u82e5\u9700\u8981\u5bf9\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u90e8\u7f72\u4e00\u5957\u72ec\u7acb\u7684\u7f51\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e00\u53c2\u6570\u6765\u9650\u5236 Higress \u76d1\u542c\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u5185\u7684 Ingress\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.disableAlpnH2"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728 ALPN \u4e2d\u7981\u7528 HTTP/2 \u534f\u8bae"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.enableStatus"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c Higress Controller \u5c06\u4f1a\u66f4\u65b0 Ingress \u8d44\u6e90\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"status")," \u5b57\u6bb5\u3002",(0,a.kt)("br",null),"\u4e3a\u907f\u514d\u4ece Nginx Ingress \u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u8986\u76d6 Ingress \u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"status")," \u5b57\u6bb5\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e00\u53c2\u6570\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"false"),"\uff0c\u8fd9\u6837 Higress \u9ed8\u8ba4\u5c31\u4e0d\u4f1a\u5c06\u5165\u53e3 IP \u5199\u5165 Ingress \u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"status")," \u5b57\u6bb5\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.enableIstioAPI"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\uff0cHigress Controller \u5c06\u540c\u65f6\u76d1\u542c istio \u8d44\u6e90"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.enableGatewayAPI"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\uff0cHigress Controller \u5c06\u540c\u65f6\u76d1\u542c Gateway API \u8d44\u6e90"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global.onlyPushRouteCluster"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\uff0cHigress Controller \u5c06\u4f1a\u53ea\u63a8\u9001\u88ab\u8def\u7531\u5173\u8054\u7684\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u6838\u5fc3\u7ec4\u4ef6\u53c2\u6570")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-core.gateway.replicas"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Gateway \u7684 pod \u6570\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-core.controller.replicas"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Controller \u7684 pod \u6570\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u63a7\u5236\u53f0\u53c2\u6570")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-console.replicaCount"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Console \u7684 pod \u6570\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-console.service.type"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Console \u6240\u4f7f\u7528\u7684 K8s Service \u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:null},"ClusterIP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-console.web.login.prompt"),(0,a.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u9875\u9762\u4e0a\u663e\u793a\u7684\u63d0\u793a\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},'""')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-console.o11y.enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5c06\u540c\u65f6\u5b89\u88c5\u53ef\u89c2\u6d4b\u6027\u5957\u4ef6\uff08Grafana + Promethues\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"higress-console.pvc.rwxSupported"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u76ee\u6807 K8s \u96c6\u7fa4\u662f\u5426\u652f\u6301 PersistentVolumeClaim \u7684 ReadWriteMany \u64cd\u4f5c\u65b9\u5f0f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"true")))),(0,a.kt)("h2",{id:"\u652f\u6301-istio-crd\u53ef\u9009"},"\u652f\u6301 Istio CRD\uff08\u53ef\u9009\uff09"),(0,a.kt)("p",null,"\u96c6\u7fa4\u91cc\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597d Istio \u7684 CRD\uff0c\u5982\u679c\u4e0d\u5e0c\u671b\u5b89\u88c5 Istio\uff0c\u4e5f\u53ef\u4ee5\u53ea\u5b89\u88c5 Istio \u7684 CRD\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add istio https://istio-release.storage.googleapis.com/charts\nhelm install istio-base istio/base -n istio-system --create-namespace\n")),(0,a.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u9700\u8981\u66f4\u65b0 Higress \u7684\u90e8\u7f72\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values\n")),(0,a.kt)("h2",{id:"\u652f\u6301-gateway-api-crd\u53ef\u9009"},"\u652f\u6301 Gateway API CRD\uff08\u53ef\u9009\uff09"),(0,a.kt)("p",null,"\u96c6\u7fa4\u91cc\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597d Gateway API \u7684 CRD\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/gateway-api/releases"},"https://github.com/kubernetes-sigs/gateway-api/releases")),(0,a.kt)("p",null,"\u4ee51.0.0\u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml\n")),(0,a.kt)("p",null,"\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u9700\u8981\u66f4\u65b0 Higress \u7684\u90e8\u7f72\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values\n")))}m.isMDXComponent=!0}}]);