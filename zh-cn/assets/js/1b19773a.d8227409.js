"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=d(n),c=a,y=o["".concat(u,".").concat(c)]||o[c]||k[c]||l;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[o]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u57fa\u4e8e Key \u9650\u6d41",keywords:["higress","rate-limit"],description:"Key \u9650\u6d41\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},i=void 0,p={unversionedId:"plugins/traffic/key-rate-limit",id:"plugins/traffic/key-rate-limit",title:"\u57fa\u4e8e Key \u9650\u6d41",description:"Key \u9650\u6d41\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/traffic/key-rate-limit.md",sourceDirName:"plugins/traffic",slug:"/plugins/traffic/key-rate-limit",permalink:"/zh-cn/docs/plugins/traffic/key-rate-limit",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugins/traffic/key-rate-limit.md",tags:[],version:"current",frontMatter:{title:"\u57fa\u4e8e Key \u9650\u6d41",keywords:["higress","rate-limit"],description:"Key \u9650\u6d41\u63d2\u4ef6\u914d\u7f6e\u53c2\u8003"},sidebar:"docs",previous:{title:"\u8bf7\u6c42\u5c4f\u853d",permalink:"/zh-cn/docs/plugins/traffic/request-block"},next:{title:"\u57fa\u4e8e Key \u96c6\u7fa4\u9650\u6d41",permalink:"/zh-cn/docs/plugins/traffic/cluster-key-rate-limit"}},u={},d=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u914d\u7f6e\u5b57\u6bb5",id:"\u914d\u7f6e\u5b57\u6bb5",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570 apikey\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570-apikey\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3},{value:"\u8bc6\u522b\u8bf7\u6c42\u5934 x-ca-key\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41",id:"\u8bc6\u522b\u8bf7\u6c42\u5934-x-ca-key\u8fdb\u884c\u533a\u522b\u9650\u6d41",level:3}],m={toc:d},o="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key-rate-limit")," \u63d2\u4ef6\u5b9e\u73b0\u4e86\u57fa\u4e8e\u7279\u5b9a\u952e\u503c\u5b9e\u73b0\u9650\u6d41\uff0c\u952e\u503c\u6765\u6e90\u53ef\u4ee5\u662f URL \u53c2\u6570\u3001HTTP \u8bf7\u6c42\u5934\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5b57\u6bb5"},"\u914d\u7f6e\u5b57\u6bb5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit_by_header"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"limit_by_header"),",",(0,a.kt)("inlineCode",{parentName:"td"},"limit_by_param")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 http \u8bf7\u6c42\u5934\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit_by_param"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"limit_by_header"),",",(0,a.kt)("inlineCode",{parentName:"td"},"limit_by_param")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u83b7\u53d6\u9650\u6d41\u952e\u503c\u7684\u6765\u6e90 URL \u53c2\u6570\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit_keys"),(0,a.kt)("td",{parentName:"tr",align:null},"array of object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5339\u914d\u952e\u503c\u540e\u7684\u9650\u6d41\u6b21\u6570")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"limit_keys")," \u4e2d\u6bcf\u4e00\u9879\u7684\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u586b\u5199\u8981\u6c42"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u7684\u952e\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query_per_second"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u79d2\u8bf7\u6c42\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query_per_minute"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u5206\u949f\u8bf7\u6c42\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query_per_hour"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u5c0f\u65f6\u8bf7\u6c42\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query_per_day"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u586b\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_second"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_minute"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_hour"),",",(0,a.kt)("inlineCode",{parentName:"td"},"query_per_day")," \u4e2d\u9009\u586b\u4e00\u9879"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u6bcf\u5929\u8bf7\u6c42\u6b21\u6570")))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570-apikey\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u8bc6\u522b\u8bf7\u6c42\u53c2\u6570 apikey\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"limit_by_param: apikey\nlimit_keys:\n- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n  query_per_second: 10\n- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n  query_per_minute: 100\n")),(0,a.kt)("h3",{id:"\u8bc6\u522b\u8bf7\u6c42\u5934-x-ca-key\u8fdb\u884c\u533a\u522b\u9650\u6d41"},"\u8bc6\u522b\u8bf7\u6c42\u5934 x-ca-key\uff0c\u8fdb\u884c\u533a\u522b\u9650\u6d41"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"limit_by_header: x-ca-key\nlimit_keys:\n- key: 102234\n  query_per_second: 10\n- key: 308239\n  query_per_hour: 10\n")))}k.isMDXComponent=!0}}]);