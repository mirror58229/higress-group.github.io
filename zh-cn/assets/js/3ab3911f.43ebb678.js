"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[6318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"AI \u7edf\u8ba1",keywords:["higress","ai"],description:"AI \u7edf\u8ba1\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},o=void 0,l={unversionedId:"plugins/ai/ai-statistics",id:"plugins/ai/ai-statistics",title:"AI \u7edf\u8ba1",description:"AI \u7edf\u8ba1\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/ai/ai-statistics.md",sourceDirName:"plugins/ai",slug:"/plugins/ai/ai-statistics",permalink:"/zh-cn/docs/plugins/ai/ai-statistics",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/ai/ai-statistics.md",tags:[],version:"current",frontMatter:{title:"AI \u7edf\u8ba1",keywords:["higress","ai"],description:"AI \u7edf\u8ba1\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"AI \u68c0\u7d22\u589e\u5f3a\u751f\u6210",permalink:"/zh-cn/docs/plugins/ai/ai-rag"},next:{title:"AI Token \u9650\u6d41",permalink:"/zh-cn/docs/plugins/ai/ai-token-ratelimit"}},s={},u=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e8e\u4f20\u7edf\u5fae\u670d\u52a1\uff0cLLM \u5e94\u7528\u4e2d\u4e3b\u8981\u901a\u8fc7 token \u6765\u8861\u91cf\u6d41\u91cf\u5927\u5c0f\uff0c\u9488\u5bf9\u6b64\u7279\u70b9\uff0cAI \u7edf\u8ba1\u63d2\u4ef6\u63d0\u4f9b\u4e86\u8def\u7531\u7ea7\u3001\u670d\u52a1\u7ea7\u3001\u6a21\u578b\u7ea7\u7684 token \u7528\u91cf\u89c2\u6d4b\u80fd\u529b\uff0c\u5305\u62ec\u65e5\u5fd7\u3001\u76d1\u63a7\u4ee5\u53ca\u544a\u8b66\u3002 AI \u7edf\u8ba1\u63d2\u4ef6\u9700\u8981\u5bf9\u63a5 ai-proxy \u63d2\u4ef6\uff0c\u5982\u679c\u4e0d\u63a5 ai-proxy \u63d2\u4ef6\u7684\u8bdd\uff0c\u5219\u53ea\u652f\u6301 openai \u534f\u8bae\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"enable")),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542fai\u7edf\u8ba1\u529f\u80fd")))),(0,a.kt)("p",null,"\u5f00\u542f\u540e metrics \u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'route_upstream_model_input_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 21\nroute_upstream_model_output_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 17\n')),(0,a.kt)("p",null,"\u65e5\u5fd7\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "model": "qwen-max",\n    "input_token": "21",\n    "output_token": "17",\n    "authority": "dashscope.aliyuncs.com",\n    "bytes_received": "336",\n    "bytes_sent": "1675",\n    "duration": "1590",\n    "istio_policy_status": "-",\n    "method": "POST",\n    "path": "/v1/chat/completions",\n    "protocol": "HTTP/1.1",\n    "request_id": "5895f5a9-e4e3-425b-98db-6c6a926195b7",\n    "requested_server_name": "-",\n    "response_code": "200",\n    "response_flags": "-",\n    "route_name": "openai",\n    "start_time": "2024-06-18T09:37:14.078Z",\n    "trace_id": "-",\n    "upstream_cluster": "qwen",\n    "upstream_service_time": "496",\n    "upstream_transport_failure_reason": "-",\n    "user_agent": "PostmanRuntime/7.37.3",\n    "x_forwarded_for": "-"\n}\n')))}m.isMDXComponent=!0}}]);