import"./compat.module.B_pd66n0.js";import{x,h as m,y as M,A as B}from"./hooks.module.6Mr8QjZg.js";import{G as L}from"./preact.module.LHOPIhyX.js";import{u as t}from"./jsxRuntime.module.B-HT3-kV.js";import{u as z}from"./useCustomSWR.RqhrMsUN.js";import{t as w}from"./bundle-mjs.Bq3hnN7U.js";const b=L({width:"100%",height:"100%"}),d=({d:i="M0 50 H300",width:n="100px",height:p="100px",viewBox:s="0 0 500 200",label:c="",isTurn:a=!1})=>{var r;const e=x(b);return t("svg",{class:"min-w-4",viewBox:s,style:{width:n,height:p},xmlns:"http://www.w3.org/2000/svg",children:[t("path",{class:"fill-none",stroke:a?"url(#backgroundGradient)":e.colors.arrowColor,"stroke-width":"5",style:{opacity:a?1:.1},d:i}),t("path",{class:" fill-none",style:"animation: dash 2s linear infinite;",d:i,"stroke-width":2,stroke:a?"url(#gradient)":(r=e.colors)==null?void 0:r.arrowColor,"stroke-dasharray":5,"marker-end":"url(#arrowhead)","stroke-linejoin":"round"}),t("text",{x:"50%",y:"60",fill:e.colors.highlightFontColor,"text-anchor":"middle","alignment-baseline":"hanging",class:"text-sm",children:c}),t("defs",{children:[t("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[t("stop",{offset:"0%","stop-color":e.colors.arrowColor,"stop-opacity":"0.1"}),t("stop",{offset:"100%",style:`stop-color:${e.colors.arrowColor}`})]}),t("linearGradient",{id:"backgroundGradient",x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[t("stop",{offset:"0%","stop-color":e.colors.arrowColor,"stop-opacity":"0.1"}),t("stop",{offset:"100%","stop-color":e.colors.arrowColor,"stop-opacity":"0.3"})]}),t("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"5",refX:"0",refY:"2.5",orient:"auto",children:t("polygon",{points:"0 0, 5 2.5, 0 5",fill:e.colors.arrowColor})})]})]})},y=({className:i="",width:n="100%",height:p="90%",children:s,title:c,titleStyle:a={},panelSkewDir:e=1,panelStyle:r={}})=>{const l=x(b);return t("div",{className:"h-full",style:{width:n,...r},children:[t("div",{className:"relative w-full",children:[t("div",{class:w("shadow-lg rounded-xl absolute top-0 w-full h-full",i),style:{transformStyle:"preserve-3d",transform:`perspective(2000px) rotateX(30deg) skewX(${e>0?"6":"-6"}deg)`,background:l.colors.panelColor,boxShadow:"0px 6px 1px 0px rgb(73 101 120 / 20%), 3px 10px 13px 2px rgb(0 0 0 / 0.1)"}}),t("div",{class:"h-full w-full flex items-center justify-evenly relative p-1",children:s})]}),t("div",{class:w("text-md mt-1"),style:{textShadow:"1px 1px 2px #8C99DD",color:l.colors.panelTitleColor,...a},children:c})]})},H=({image:i,title:n,labels:p,links:s,direction:c="top",isHovering:a})=>{var u;const{swrData:e={},fetchData:r}=z((u=s==null?void 0:s.Github)==null?void 0:u.apiLink),l=x(b),[F,N]=m(""),[O,_]=m(0),[v,S]=m(0);return M(()=>{const{stargazers_count:h=0,forks_count:g=0}=e||{};_(h||0),S(g||0)},[e]),M(()=>{a&&r()},[a]),N(c==="bottom"?"after:absolute after:bottom-full after:left-2/4 after:ml-[-5px] after:border-[5px] after:border-b-base-100 after:border-x-transparent after:border-t-transparent  after:content-['']":"after:absolute after:top-full after:left-2/4 after:ml-[-5px] after:border-[5px] after:border-t-base-100 after:border-x-transparent after:border-b-transparent  after:content-['']"),t("div",{className:`relative bg-base-100 text-base-100 p-6 rounded-xl backdrop-opacity-96 shadow-lg min-w-[400px] max-w-md mx-auto ${F}`,children:[t("div",{className:"flex items-center justify-between border-b border-success mb-4 pb-4",children:[t("img",{src:i,alt:"logo",className:"max-h-16 max-w-[130px] "}),t("div",{children:p.map((h,g)=>t("span",{className:" bg-opacity-60 border text-xs px-2 py-1 rounded mr-2 mb-2 whitespace-nowrap",style:`color:${l.colors.tagFontColor}; background-color:${l.colors.tagBgColor}; border-color:${l.colors.tagBorderColor};`,children:h},g))})]}),t("div",{children:[t("div",{className:"text-sm text-success mb-4 ",children:n}),Object.entries(s).map(([h,{link:g}],k)=>t("div",{className:"mb-2 flex justify-between",children:[t("div",{className:w("text-success text-sm mb-1"),children:[h,":"]}),t("div",{className:"w-[70%] overflow-hidden ",children:[t("a",{href:g,className:w("line-clamp-1 no-underline",l.linkStyle),style:`color:${l.colors.linkColor};`,children:g}),h==="Github"&&t("div",{className:"flex justify-start mt-1",children:[t("div",{className:"flex items-center text-xs py-1 px-2 rounded",style:`color:${l.colors.starForkFontColor};background-color:${l.colors.starForkBgColor};`,children:[t("svg",{t:"1711507787559",class:"icon w-4 h-4 mr-1",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5263",width:"200",height:"200",fill:"currentColor",children:t("path",{d:"M960 384l-313.6-40.96L512 64 377.6 343.04 64 384l230.4 208.64L234.88 896 512 746.88 789.12 896l-59.52-303.36L960 384z","p-id":"5264"})}),t("span",{children:O})]}),t("div",{className:"ml-2 flex items-center text-xs py-1 px-2 rounded",style:`color:${l.colors.starForkFontColor};background-color:${l.colors.starForkBgColor};`,children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",version:"1.1",width:"16",height:"18",viewBox:"0 0 1024 1024",class:"icon w-4 h-4 mr-1",children:t("g",{children:t("path",{d:"M384 160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-64v128h192a64 64 0 0 1 64 64v64h64a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h64V576h-448v64h64a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h64V576a64 64 0 0 1 64-64h192V384h-64a32 32 0 0 1-32-32v-192zM448 320h128V192H448v128z m-256 384v128h128v-128H192z m512 0v128h128v-128h-128z",fill:"currentColor","fill-opacity":"1"})})}),t("span",{children:v})]})]})]})]},k))]})]})},o=({image:i,label:n,hoverable:p=!0,hoverContent:s,direction:c="top",logo:a})=>{const[e,r]=m(!1);m({});const[l,F]=m({}),[N,O]=m(!1),_=B(null),v=B(null),S=x(b),u=async({})=>{r(!0),N||(r(!0),O(!0))},h=g=>{const{clientX:k,clientY:q}=g,f=v.current.getBoundingClientRect();k>=f.left&&k<=f.right&&q>=f.top&&q<=f.bottom||r(!1)};return t("div",{class:"relative cursor-pointer flex flex-col items-center justify-center p-1 ",style:{marginTop:"0 !important"},onMouseLeave:h,onMouseEnter:u,onTouchStart:u,onTouchEnd:h,children:[t("div",{class:"w-16 h-16 ",ref:_,children:[i&&!a&&t("img",{class:"w-full object-cover mx-auto",src:i,alt:n}),a&&t("div",{class:"flex flex-col items-center ",children:[t("div",{class:"z-[1] relative",style:{animation:e&&p?"bounce 4s infinite":"none"},children:[t("div",{class:"w-full h-8 flex items-center justify-center",children:t("img",{class:"w-[50%] object-cover mx-auto ",src:a,alt:n})}),t("img",{class:"w-full object-cover  mx-auto z-[1] relative -translate-y-[70%] visiblity-visible",src:"https://gw.alicdn.com/imgextra/i1/O1CN016wUWox1REEMXKzwhg_!!6000000002079-2-tps-168-84.png",alt:"",style:{visibility:e?"visible":"hidden"}})]}),t("img",{class:"w-[90%] object-cover mx-auto -translate-y-[120%]",src:"https://gw.alicdn.com/imgextra/i2/O1CN01sYFTnE21aVnWHhLGR_!!6000000007001-2-tps-144-112.png"})]})]}),t("p",{class:"text-center text-xs",style:`color:${S.colors.normalFontColor}`,children:n}),p&&t("div",{className:"absolute z-10 shadow-md -mt-20 ml-2",style:{visibility:e?"visible":"hidden",bottom:c==="top"?"95px":"",top:c==="top"?"":"165px"},onMouseLeave:()=>r(!1),ref:v,children:t(H,{...s,direction:c,data:l,isHovering:e})})]})},D={title:"Sentinel\u662F\u2F00\u6B3E\u9762\u5411\u5206\u5E03\u5F0F\u3001\u591A\u8BED\u8A00\u5F02\u6784\u5316\u670D\u52A1\u67B6\u6784\u7684\u6D41\u91CF\u6CBB\u7406\u7EC4\u4EF6\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01GNcMeH1n8f5u0Qus8_!!6000000005045-55-tps-200-36.svg",labels:["\u9AD8\u53EF\u7528","\u6D41\u91CF\u6CBB\u7406","\u6D41\u91CF\u9632\u62A4"],links:{Github:{link:"https://github.com/alibaba/Sentinel",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/sentinel"},\u5B98\u7F51:{link:"https://sentinelguard.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/Sentinel/releases/tag/1.8.6"},\u5FEB\u901F\u5165\u95E8:{link:"https://sentinelguard.io/zh-cn/docs/quick-start.html"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},A={title:"ChaosBlade\u662F\u2F00\u4E2A\u4E91\u539F\u751F\u6DF7\u6C8C\u5DE5\u7A0B\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u79CD\u73AF\u5883\u3001\u96C6\u7FA4\u548C\u8BED\u8A00\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN01uCl9p31NxKuC6WxON_!!6000000001636-55-tps-200-36.svg",labels:["\u9AD8\u53EF\u7528","\u4E91\u539F\u751F","\u6DF7\u6C8C\u5DE5\u7A0B"],links:{Github:{link:"https://github.com/chaosblade-io/chaosblade",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/chaosblade-io/chaosblade"},\u5B98\u7F51:{link:"https://chaosblade.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/chaosblade-io/chaosblade/releases/tag/v1.7.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://chaosblade.io/docs"}}},W={title:"\u4E00\u6B3E\u6807\u51C6\u3001\u901A\u7528\u4E14\u529F\u80FD\u5F3A\u5927\u7684\uFF0C\u81F4\u529B\u4E8E\u6784\u5EFA\u5E94\u7528\u591A\u6D3B\u67B6\u6784\u7684\u5F00\u6E90\u4E2D\u95F4\u4EF6\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN018Q4Lut1HqZMI4Rgot_!!6000000000809-55-tps-200-43.svg",labels:["\u591A\u6D3B\u5BB9\u707E","\u9AD8\u53EF\u7528","\u7A33\u5B9A\u6027"],links:{Github:{link:"https://github.com/alibaba/Appactive",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/Appactive"},\u5B98\u7F51:{link:"https://doc.appactive.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/Appactive/releases/tag/v0.2.1"},\u5FEB\u901F\u5165\u95E8:{link:"https://doc.appactive.io/docs/cn/README_CN.html/"}}},V={title:"\u2F00\u4E2A\u66F4\u6613\u4E8E\u6784\u5EFA\u4E91\u539F\u751F\u5E94\u7528\u7684\u52A8\u6001\u670D\u52A1\u53D1\u73B0\u3001\u914D\u7F6E\u7BA1\u7406\u548C\u670D\u52A1\u7BA1\u7406\u5E73\u53F0\u3002",image:"https://img.alicdn.com/imgextra/i1/O1CN01YjDURc26ODF5FQt4d_!!6000000007651-55-tps-123-24.svg",labels:["\u914D\u7F6E\u7BA1\u7406","\u670D\u52A1\u53D1\u73B0","\u670D\u52A1\u7BA1\u7406"],links:{Github:{link:"https://github.com/alibaba/nacos",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/nacos"},\u5B98\u7F51:{link:"https://nacos.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/nacos/releases/tag/2.1.2"},\u5FEB\u901F\u5165\u95E8:{link:"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},P={title:"OpenSergo\u662F\u2F00\u5957\u5F00\u653E\u901A\u7528\u7684\u3001\u9762\u5411\u4E91\u539F\u751F\u670D\u52A1\u3001\u8986\u76D6\u5FAE\u670D\u52A1\u53CA\u4E0A\u4E0B\u6E38\u5173\u8054\u7EC4\u4EF6\u7684\u5FAE\u670D\u52A1\u6CBB\u7406\u6807\u51C6\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN01Bs0YtX1qMoAvDQO9j_!!6000000005482-55-tps-200-36.svg",labels:["\u5FAE\u670D\u52A1\u6CBB\u7406","\u6CBB\u7406\u6807\u51C6","\u6D41\u91CF\u6CBB\u7406"],links:{Github:{link:"https://github.com/opensergo/opensergo-specification",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/opensergo/opensergo-specification"},\u5B98\u7F51:{link:"https://opensergo.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/opensergo/opensergo-java-sdk/releases/tag/v0.1.0-beta1"},\u5FEB\u901F\u5165\u95E8:{link:"https://opensergo.io/zh-cn/docs/quick-start/opensergo-control-plane/"}}},Q={title:"\u2F00\u4E2A\u9075\u5FAA\u5F00\u6E90Ingress/Gateway API\u6807\u51C6\uFF0C\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u2F00\u7684\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7684\u4E0B\u2F00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN0186oyN31ksVtlINQGM_!!6000000004739-55-tps-200-36.svg",labels:["\u6D41\u91CF\u7F51\u5173","\u5FAE\u670D\u52A1\u7F51\u5173","\u5B89\u5168\u7F51\u5173"],links:{Github:{link:"https://github.com/alibaba/higress",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/higress"},\u5B98\u7F51:{link:"https://higress.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/higress/releases/tag/v0.5.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://higress.io/zh-cn/docs/overview/what-is-higress.html"}}},E={title:"\u4E91\u539F\u751F\u201C\u6D88\u606F\u3001\u4E8B\u4EF6\u3001\u6D41\u201D\u5B9E\u65F6\u6570\u636E\u5904\u7406\u5E73\u53F0\uFF0C\u8986\u76D6\u4E91\u8FB9\u7AEF\u2F00\u4F53\u5316\u6570\u636E\u5904\u7406\u573A\u666F\u3002",image:"https://img.alicdn.com/imgextra/i1/O1CN01vJbfLg1Vtgfyuv3KF_!!6000000002711-2-tps-447-161.png",labels:["\u6D88\u606F","\u4E8B\u4EF6","\u6D41"],links:{Github:{link:"https://github.com/apache/rocketmq",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/apache/rocketmq"},\u5B98\u7F51:{link:"https://rocketmq.apache.org/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.0.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://rocketmq.apache.org/zh/docs/quickStart/02quickstart"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},j={title:"Apache Dubbo\u662F\u2F00\u6B3E\u5FAE\u670D\u52A1\u6846\u67B6\uFF0C\u4E3A\u2F24\u89C4\u6A21\u5FAE\u670D\u52A1 \u5B9E\u8DF5\u63D0\u4F9B\u2FBC\u6027\u80FDRPC\u901A\u4FE1\u3001\u6D41\u91CF\u6CBB\u7406\u3001\u53EF\u89C2\u6D4B\u6027\u7B49\u89E3\u51B3\u2F45\u6848\uFF0C\u6DB5\u76D6Java\u3001Golang\u7B49\u591A\u79CD\u8BED\u2F94SDK\u5B9E\u73B0\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN01Efw9Qu1Xto0ghUDgv_!!6000000002982-55-tps-200-36.svg",labels:["\u5FAE\u670D\u52A1","\u670D\u52A1\u8C03\u7528","RPC\u901A\u4FE1"],links:{Github:{link:"https://github.com/apache/dubbo",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/dubbo"},\u5B98\u7F51:{link:"https://dubbo.apache.org/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/apache/dubbo/releases/tag/dubbo-3.1.3"},\u5FEB\u901F\u5165\u95E8:{link:"https://cn.dubbo.apache.org/zh-cn/overview/"}}},T={title:"\u4E00\u7AD9\u5F0F\u7684\u5206\u5E03\u5F0F\u5E94\u7528\u5F00\u53D1\u6846\u67B6\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01GtWTyl1aLP6ky10ZS_!!6000000003313-2-tps-1212-114.png",labels:["\u5E94\u7528\u6846\u67B6","\u5FAE\u670D\u52A1"],links:{Github:{link:"https://github.com/alibaba/spring-cloud-alibaba",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/spring-cloud-alibaba"},\u5B98\u7F51:{link:"https://sca.aliyun.com/"},\u6700\u65B0\u7248\u672C:{link:"https://sca.aliyun.com/docs/2023/overview/version-explain/"},\u5FEB\u901F\u5165\u95E8:{link:"https://sca.aliyun.com/docs/2023/user-guide/ai/quick-start/"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},R={title:"Seata\u662F\u2F00\u6B3E\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u63D0\u4F9B\u9AD8\u6027\u80FD\u548C\u7B80\u5355\u6613\u7528\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u670D\u52A1\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN01ULY29M1JbZchZLegx_!!6000000001047-55-tps-200-36.svg",labels:["\u5206\u5E03\u5F0F\u4E8B\u52A1","\u6570\u636E\u4E00\u81F4\u6027","\u5FAE\u670D\u52A1"],links:{Github:{link:"https://github.com/seata/seata",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/seata/seata"},\u5B98\u7F51:{link:"https://seata.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/seata/seata/releases/tag/v1.5.2"},\u5FEB\u901F\u5165\u95E8:{link:"https://seata.io/zh-cn/docs/ops/deploy-guide-beginner.html"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},Z={title:"Kubernetes\u662F\u2F00\u4E2A\u5F00\u6E90\u7684\u5BB9\u5668\u7F16\u6392\u5F15\u64CE\uFF0C\u7528\u6765\u5BF9\u5BB9\u5668\u5316\u5E94\u7528\u8FDB\u884C\u81EA\u52A8\u5316\u90E8\u7F72\u3001\u6269\u7F29\u548C\u7BA1\u7406\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN012u7Nuk1fQ3CjgvLyT_!!6000000004000-55-tps-201-37.svg",labels:["\u5BB9\u5668\u7F16\u6392","\u5E94\u7528\u7BA1\u7406","\u53D1\u5E03\u90E8\u7F72"],links:{Github:{link:"https://github.com/kubernetes/kubernetes",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/kubernetes/kubernetes"},\u5B98\u7F51:{link:"https://kubernetes.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/kubernetes/kubernetes/releases/tag/v1.23.14"},\u5FEB\u901F\u5165\u95E8:{link:"https://kubernetes.io/zh-cn/docs/setup/"}}},K={title:"\u4E00\u6B3E\u5F00\u6E90\u7684\u76D1\u63A7\u89E3\u51B3\u65B9\u6848\uFF0C\u4E3A\u60A8\u7684\u6307\u6807\u548C\u62A5\u8B66\u63D0\u4F9B\u652F\u6301\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN01vV6wJj1PEZQfWuukM_!!6000000001809-2-tps-536-200.png",labels:["\u53EF\u89C2\u6D4B","\u5E94\u7528\u76D1\u63A7","Metrics"],links:{Github:{link:"https://github.com/prometheus/prometheus",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/prometheus/prometheus"},\u5B98\u7F51:{link:"https://prometheus.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/prometheus/prometheus/releases/tag/v2.51.1"},\u5FEB\u901F\u5165\u95E8:{link:"https://prometheus.io/docs/prometheus/latest/getting_started"}}},X={title:"\u9AD8\u8D28\u91CF\u3001\u4F7F\u7528\u5E7F\u6CDB\u548C\u53EF\u79FB\u690D\u7684\u53EF\u89C2\u6D4B\u6280\u672F\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01BhKykq1Jr95px13as_!!6000000001081-2-tps-72-72.png",labels:["\u53EF\u89C2\u6D4B","\u94FE\u8DEF\u8FFD\u8E2A","\u5E94\u7528\u76D1\u63A7"],links:{Github:{link:"https://github.com/open-telemetry",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/open-telemetry/opentelemetry-collector"},\u5B98\u7F51:{link:"https://opentelemetry.io"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/open-telemetry/opentelemetry-specification/releases/tag/v1.26.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://opentelemetry.io/docs/getting-started/dev/"}}},$={title:"\u4E91\u539F\u751F\u5E94\u7528\u7684\u81EA\u52A8\u5316\u7BA1\u7406\u5957\u4EF6\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN01hSarHT1u8OAkeN4eo_!!6000000005992-2-tps-288-80.png",labels:["\u8FD0\u7EF4\u90E8\u7F72","\u5E94\u7528\u7BA1\u7406","Workloads"],links:{Github:{link:"https://github.com/openkruise/kruise ",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/openkruise/kruise"},\u5B98\u7F51:{link:"https://openkruise.io"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/openkruise/kruise/releases/tag/v1.6.2"},\u5FEB\u901F\u5165\u95E8:{link:"https://openkruise.io/zh/docs/installation"}}},U={title:"\u4E00\u6B3E\u5FEB\u901F\u3001\u8F7B\u91CF\u7684\u53EF\u89C2\u6D4B\u6570\u636E\u91C7\u96C6\u5668\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01DkZf3V1cAWwyWl3PU_!!6000000003560-2-tps-372-80.png",labels:["\u53EF\u89C2\u6D4B","\u65E5\u5FD7","Metrics"],links:{Github:{link:"https://github.com/alibaba/ilogtail",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/ilogtail"},\u5B98\u7F51:{link:"https://ilogtail.gitbook.io/ilogtail-docs"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/ilogtail/releases/tag/v1.8.8"},\u5FEB\u901F\u5165\u95E8:{link:"https://ilogtail.gitbook.io/ilogtail-docs/installation/quick-start"}}},C=({title:i,children:n,width:p="30%",panelSkewDir:s=1})=>t(y,{title:i,width:p,panelSkewDir:s,children:n}),I=({})=>t(C,{title:"\u6CBB\u7406\u9762",children:[t(o,{logo:"https://img.alicdn.com/imgextra/i2/O1CN01bbN4uH1OXyb3Upgcg_!!6000000001716-2-tps-80-80.png",label:"Sentinel",hoverContent:D,direction:"bottom"}),t(o,{image:"https://gw.alicdn.com/imgextra/i3/O1CN018gvzgw1GnzVoYQSib_!!6000000000668-2-tps-216-148.png",direction:"bottom",logo:"https://img.alicdn.com/imgextra/i3/O1CN01MbnN5j20pL0WhvbDl_!!6000000006898-2-tps-80-80.png",label:"ChaosBlade",hoverContent:A}),t(o,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01yZolgm1U0RHWgJGC6_!!6000000002455-2-tps-216-178.png",hoverContent:W,direction:"bottom",logo:"https://img.alicdn.com/imgextra/i3/O1CN019Nt2qs1eyZRjJMDwi_!!6000000003940-2-tps-80-80.png",label:"AppActive"})]}),J=({})=>t(C,{title:"\u63A7\u5236\u9762",panelSkewDir:-1,children:[t(o,{image:"https://gw.alicdn.com/imgextra/i3/O1CN01dI5UtV1iMnEY2sB3r_!!6000000004399-2-tps-216-154.png",label:"Nacos",hoverContent:V,logo:"https://img.alicdn.com/imgextra/i3/O1CN01GdSxST24NB7Yl5Pdx_!!6000000007378-2-tps-80-80.png",direction:"bottom"}),t(o,{image:"https://gw.alicdn.com/imgextra/i3/O1CN01g7SsmO1GHTOMxOpzr_!!6000000000597-2-tps-216-160.png",label:"OpenSergo",hoverContent:P,logo:"https://img.alicdn.com/imgextra/i3/O1CN01oLvUis1DjSkwk53Tg_!!6000000000252-2-tps-80-80.png",direction:"bottom"})]}),Y=()=>t(C,{title:"\u8FD0\u7EF4\u9762",width:"25%",panelSkewDir:-1,children:[t(o,{logo:"https://img.alicdn.com/imgextra/i1/O1CN01wGWLaP1WHVHF2P73D_!!6000000002763-2-tps-80-80.png",label:"Openkruise",hoverContent:$}),t(o,{image:"https://gw.alicdn.com/imgextra/i4/O1CN01b9Zgrx1px9zjkxaBN_!!6000000005426-2-tps-216-160.png",logo:"https://img.alicdn.com/imgextra/i1/O1CN01FxpqPp1Q3rn1Xh6N1_!!6000000001921-2-tps-80-80.png",label:"Kubernetes",hoverContent:Z})]}),tt=()=>t(C,{title:"\u53EF\u89C2\u6D4B",children:[t(o,{logo:"https://img.alicdn.com/imgextra/i3/O1CN01jYzUO31nQywwUzAAv_!!6000000005085-2-tps-80-80.png",label:"iLogtail",hoverContent:U}),t(o,{logo:"https://img.alicdn.com/imgextra/i3/O1CN01hTFdm51Jor72V1UQ9_!!6000000001076-2-tps-80-80.png",label:"OpenTelemetry",hoverContent:X}),t(o,{logo:"https://img.alicdn.com/imgextra/i2/O1CN01xWWOPW1YLHmKw5I1Z_!!6000000003042-2-tps-80-80.png",label:"Prometheus",hoverContent:K})]}),et=()=>{const i=x(b);return t(y,{title:"\u6570\u636E\u9762",width:"90%",children:t("div",{className:"flex items-center justify-evenly w-full pt-1 pr-4",children:[t(o,{image:"https://gw.alicdn.com/imgextra/i2/O1CN014ZK8OP1msdEMGutsg_!!6000000005010-2-tps-166-160.png",label:"IoT/PC/Mobile",hoverable:!1}),t(d,{d:"M0 50 H80",viewBox:"0 0 100 100"}),t(o,{label:"\u7F51\u5173/Higress",hoverContent:Q,logo:"https://img.alicdn.com/imgextra/i4/O1CN01BodpHP1YS9ihnVuRB_!!6000000003057-2-tps-80-80.png"}),t(d,{d:"M0 50 H80",viewBox:"0 0 100 100"}),t("div",{className:"flex flex-1 flex-col justify-center items-center",children:[t("div",{className:"flex w-full px-4",children:[t(d,{d:"M10 100  V60 A10 10 0 0 1 20 50 H80",viewBox:"0 0 100 100",isTurn:!0,width:"30%"}),t("div",{className:"flex-1",children:t(o,{image:"https://gw.alicdn.com/imgextra/i3/O1CN01ZVqiyi1sSQGBsdTtE_!!6000000005765-2-tps-216-174.png",logo:"https://img.alicdn.com/imgextra/i4/O1CN01qZ4Kh71Vfwndw8Qoa_!!6000000002681-2-tps-80-80.png",label:t("span",{children:[t("span",{style:`color:${i.colors.highlightFontColor}`,children:"\u5F02\u6B65\u8C03\u7528 /"}),t("span",{children:"RocketMQ"})]}),hoverContent:E,direction:"bottom"})}),t(d,{d:"M10 50 H80 A10 10 0 0 1 90 60 V80",viewBox:"0 0 100 100",isTurn:!0,width:"30%"})]}),t("div",{className:"flex w-full items-center",children:[t(y,{title:"\u5FAE\u670D\u52A1\u96C6\u7FA4A",width:"auto",panelStyle:{flex:1},height:"auto",titleStyle:{fontSize:"0.75rem",color:i.colors.normalFontColor,textShadow:"none"},children:[t(o,{image:"https://gw.alicdn.com/imgextra/i2/O1CN01Qe8woR1OvKmr7JClT_!!6000000001767-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01TIWcnX1inMDF8jH9J_!!6000000004457-2-tps-80-80.png",label:"Dubbo",hoverContent:j}),t(o,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01QS9gNx27T54BcAw5L_!!6000000007797-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01kjTZ8b1d4remhTuM6_!!6000000003683-2-tps-80-80.png",label:"SCA",hoverContent:T})]}),t(d,{width:"30%",d:"M0 50 H180",viewBox:"0 0 200 100",label:"\u540C\u6B65\u8C03\u7528"}),t(y,{title:"\u5FAE\u670D\u52A1\u96C6\u7FA4B",width:"auto",panelStyle:{flex:1},height:"auto",titleStyle:{fontSize:"0.75rem",color:i.colors.normalFontColor,textShadow:"none",textAlign:"right"},children:[t(o,{image:"https://gw.alicdn.com/imgextra/i2/O1CN01Qe8woR1OvKmr7JClT_!!6000000001767-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01TIWcnX1inMDF8jH9J_!!6000000004457-2-tps-80-80.png",label:"Dubbo",hoverContent:j}),t(o,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01QS9gNx27T54BcAw5L_!!6000000007797-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01kjTZ8b1d4remhTuM6_!!6000000003683-2-tps-80-80.png",label:"SCA",hoverContent:T})]})]}),t("div",{className:"flex w-full px-4",children:[t(d,{d:"M10 0 V40 A10 10 0 0 0 20 50 H80",viewBox:"0 0 100 100",isTurn:!0,width:"30%"}),t("div",{className:"flex-1",children:t(o,{image:"https://gw.alicdn.com/imgextra/i2/O1CN014fUi061REEMVnXgBv_!!6000000002079-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i3/O1CN01W3W4PH1qXngVzf7uP_!!6000000005506-2-tps-80-80.png",label:t("span",{children:[t("span",{style:`color:${i.colors.highlightFontColor}`,children:"\u5206\u5E03\u5F0F\u4E8B\u52A1 /"}),t("span",{children:"Seata"})]}),hoverContent:R})}),t(d,{d:"M100 0 V40 A10 10 0 0 1 90 50 H10",viewBox:"0 0 100 100",isTurn:!0,width:"30%"})]})]}),t(d,{d:"M0 50 H80",viewBox:"0 0 100 100"}),t(o,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01VfCTpe1gHdXoaboh6_!!6000000004117-2-tps-200-211.png",label:"\u6570\u636E\u5B58\u50A8",hoverable:!1})]})})},G={panelColor:"linear-gradient(0deg, #FBFDFF 0%, #F4F8FF 100%)",arrowColor:"#2491FF",background:"url('https://gw.alicdn.com/imgextra/i3/O1CN01kMsmPQ1rqrmbBpNo1_!!6000000005683-0-tps-3600-1440.jpg')",normalFontColor:"#5C6170",highlightFontColor:"#567BE1",panelTitleColor:"#1F36AD",tagBgColor:"#e6f4ff",tagBorderColor:"#91caff",tagFontColor:"#1677ff",starForkFontColor:"#8498ee",starForkBgColor:"#ced3f1",linkColor:"#a3e635"};function it({colors:i=G,linkStyle:n="text-sm",className:p="",...s}){const[c,a]=m(!1),e=()=>{a(!0)},r=()=>{a(!1)};return t(b.Provider,{value:{linkStyle:n,colors:{...G,...i}},children:t("div",{class:" flex flex-col justify-around px-2 pt-4 pb-2 "+p,id:"overview-image-root",style:{background:i.background},...s,children:[t("div",{class:"hidden md:inline-block",children:[t("div",{class:"flex justify-around flex-1 items-center",children:[t(J,{}),t(I,{})]}),t("div",{class:"flex justify-around flex-[2]",children:t(et,{})}),t("div",{class:"flex justify-around flex-1",children:[t(Y,{}),t(tt,{})]})]}),t("img",{class:"md:hidden",alt:"overview image",onClick:e,src:"https://img.alicdn.com/imgextra/i2/O1CN01OhhnzT1CtFbbiKTWq_!!6000000000138-0-tps-2792-1502.jpg"}),c&&t("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},onClick:r,children:t("div",{style:{maxWidth:"80%",maxHeight:"90%",overflow:"auto"},onClick:l=>l.stopPropagation(),children:t("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01OhhnzT1CtFbbiKTWq_!!6000000000138-0-tps-2792-1502.jpg",alt:"overview image",style:{maxWidth:"100%"}})})})]})})}const ot=it;export{ot as OverviewImage};
