import{$ as v,c as e,__tla as y}from"./Steps2.Dbs4Ox3F.js";import{F as r,__tla as g}from"./constant.B4c9UnlO.js";import{__tla as x}from"./astro-component.DIa0fJKh.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";import"./bundle-mjs.B-0Su4QS.js";import"./preact.module.CgDnIUX3.js";import"./hooks.module.HQXUcZE8.js";import"./Carousel_astro_astro_type_style_index_0_lang.62590812.l0sNRNKZ.js";import"./HeadLink_astro_astro_type_style_index_0_lang.8d75c6f7.l0sNRNKZ.js";import"./LanguageToggle_astro_astro_type_style_index_0_lang.c43df4b9.l0sNRNKZ.js";import"./_commonjsHelpers.BosuxZz1.js";import"./CarouselCard_astro_astro_type_style_index_0_lang.b9f36ead.l0sNRNKZ.js";import"./LinkText_astro_astro_type_style_index_0_lang.99e03892.l0sNRNKZ.js";import"./index.0pIt6myq.js";let i,a,t,l,h,o,m=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{l={title:"Higress \u793E\u533A\u5468\u4F1A\u8BB0\u8981\uFF082022/11/26\uFF09",description:"Higress \u793E\u533A\u5468\u4F1A\u8BB0\u8981\uFF082022/11/26\uFF09",date:"2022-11-29",category:"article",keywords:["Higress"],authors:"CH3CHO"},h=function(){return[{depth:2,slug:"\u4E00\u5206\u4EAB-higress-\u57FA\u4E8E-istioenvoy-\u67B6\u6784\u7684\u6280\u672F\u5B9E\u73B0\u539F\u7406",text:"\u4E00\u3001\u5206\u4EAB Higress \u57FA\u4E8E Istio/Envoy \u67B6\u6784\u7684\u6280\u672F\u5B9E\u73B0\u539F\u7406"},{depth:2,slug:"\u4E8C\u5F00\u6E90\u793E\u533A\u6700\u65B0\u8FDB\u5C55\u540C\u6B65",text:"\u4E8C\u3001\u5F00\u6E90\u793E\u533A\u6700\u65B0\u8FDB\u5C55\u540C\u6B65"},{depth:2,slug:"\u4E09\u652F\u6301\u975E-k8s-\u90E8\u7F72\u7684\u67B6\u6784\u63A2\u8BA8",text:"\u4E09\u3001\u652F\u6301\u975E K8s \u90E8\u7F72\u7684\u67B6\u6784\u63A2\u8BA8"}]},a=!0;function c(n){const s={a:"a",button:"button",code:"code",div:"div",figcaption:"figcaption",figure:"figure",h2:"h2",hr:"hr",img:"img",li:"li",link:"link",p:"p",pre:"pre",script:"script",span:"span",strong:"strong",ul:"ul",...n.components};return e(r,{children:[e(s.p,{children:"Higress \u662F\u9075\u5FAA\u5F00\u6E90 Ingress/Gateway API \u6807\u51C6\uFF0C\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\u3002"}),`
`,e(s.p,{children:"\u672C\u6B21\uFF082022/11/26\uFF09\u662F Higress \u793E\u533A\u7B2C\u4E00\u6B21\u5468\u4F1A\uFF0C\u53C2\u4F1A\u6210\u5458 50+\uFF0C\u4F1A\u8BAE\u8FC7\u7A0B\u8FDB\u884C\u4E86\u5F55\u5C4F\uFF0C\u5DF2\u7ECF\u53D1\u5E03\u5728 Higress \u5F00\u53D1\u8005\u9489\u9489\u7FA4\uFF0C\u53EF\u4EE5\u641C\u7D22\u9489\u7FA4\u53F7(30565000871)\u5165\u7FA4\u3002\u4E0B\u9762\u662F\u4F1A\u8BAE\u8FC7\u7A0B\u7684\u8BB0\u5F55\uFF1A"}),`
`,e("a",{name:"E4Ikl"}),`
`,e(s.h2,{id:"\u4E00\u5206\u4EAB-higress-\u57FA\u4E8E-istioenvoy-\u67B6\u6784\u7684\u6280\u672F\u5B9E\u73B0\u539F\u7406",children:"\u4E00\u3001\u5206\u4EAB Higress \u57FA\u4E8E Istio/Envoy \u67B6\u6784\u7684\u6280\u672F\u5B9E\u73B0\u539F\u7406"}),`
`,e(s.p,{children:["Listener \u548C Cluster \u662F\u5B9E\u73B0\u7F51\u5173\u8BF7\u6C42\u8F6C\u53D1\u80FD\u529B\u7684\u6700\u5C0F\u5316\u6A21\u578B\uFF0CEnvoy \u53EF\u4EE5\u57FA\u4E8E xDS \u534F\u8BAE\u4ECE gRPC server \u83B7\u53D6 LIstener \u548C Cluster \u7684\u914D\u7F6E\uFF0C\u5B9E\u73B0\u8FD9\u4E24\u90E8\u5206\u914D\u7F6E\u72EC\u7ACB\u66F4\u65B0\u4E92\u4E0D\u5F71\u54CD\uFF0C\u5982 Cluster \u91CD\u5EFA\u4E0D\u5F71\u54CD Listener \u4E0A\u5BA2\u6237\u7AEF\u8FDE\u63A5\u65AD\u5F00\u3002",e("br",{}),e(s.img,{src:"/img/1728551144580.png",alt:"",referrerpolicy:"no-referrer"}),e("br",{}),e(s.img,{src:"/img/1728551144740.png",alt:"",referrerpolicy:"no-referrer"}),e("br",{}),"Listener \u4E2D\u7684\u8BC1\u4E66\u3001\u8DEF\u7531\u3001\u8FC7\u6EE4\u5668\u90FD\u53EF\u4EE5\u5B9E\u73B0\u57FA\u4E8E xDS \u534F\u8BAE\u72EC\u7ACB\u66F4\u65B0\uFF0CCluster \u57FA\u4E8E EDS \u7C7B\u578B\u5B9E\u73B0\u540E\u7AEF\u8282\u70B9\u72EC\u7ACB\u66F4\u65B0\u3002\u8FD9\u662F Envoy \u548C Nginx \u6700\u660E\u663E\u7684\u533A\u522B\uFF1A"]}),`
`,e(s.ul,{children:[`
`,e(s.li,{children:[e(s.strong,{children:"Nginx:"}),"  \u57FA\u4E8E nginx.conf\uFF0C\u6574\u4E2A\u914D\u7F6E\u8DDF worker \u8FDB\u7A0B\u7684\u751F\u547D\u5468\u671F\u7ED1\u5B9A\uFF0C\u4EFB\u4F55\u914D\u7F6E\u53D8\u66F4 reload\uFF0C\u8FDB\u7A0B\u90FD\u8981\u91CD\u5EFA\uFF0C\u8DDF downstream \u548C upstream \u7684\u8FDE\u63A5\u90FD\u4F1A\u65AD\u5F00"]}),`
`,e(s.li,{children:"**Envoy\uFF1A**\u4E3E\u4F8B\u6765\u8BF4\uFF0CListener \u7684\u751F\u547D\u5468\u671F\u53EA\u8DDF Listener \u7684\u914D\u7F6E\u7ED1\u5B9A\uFF0C\u8DEF\u7531\u7684\u751F\u547D\u5468\u671F\u53EA\u8DDF\u8DEF\u7531\u7684\u914D\u7F6E\u7ED1\u5B9A\uFF0C\u5E76\u4E14\u90FD\u53EF\u4EE5\u57FA\u4E8E xDS \u534F\u8BAE\u72EC\u7ACB\u5730\u70ED\u66F4\u65B0"}),`
`]}),`
`,e(s.p,{children:["Istio \u62BD\u8C61\u4E86 API \u7528\u4E8E\u751F\u6210\u5404\u7C7B xDS \u914D\u7F6E\uFF0C\u4E0B\u56FE\u865A\u7EBF\u7BAD\u5934\u662F Istio API \u548C xDS \u914D\u7F6E\u95F4\u8F83\u76F4\u63A5\u7684\u6620\u5C04\u5173\u7CFB\u3002Istio API \u7684\u914D\u7F6E\u6765\u6E90\u53EF\u4EE5\u662F K8s CRD\uFF0C\u4E5F\u53EF\u4EE5\u662F\u57FA\u4E8E xDS \u534F\u8BAE\uFF08MCP-over-xDS\uFF09\u7684 gRPC Server\u3002",e("br",{}),e(s.img,{src:"/img/1728551144889.png",alt:"",referrerpolicy:"no-referrer"}),e("br",{}),"Higress \u5B9E\u73B0\u4E86\u5C06 K8s Ingress \u8F6C\u6362\u4E3A Istio API \u7684\u903B\u8F91\uFF0C\u5E76\u901A\u8FC7\u4E0A\u8FF0 gRPC Server \u5411 Istio \u63D0\u4F9B\u914D\u7F6E\u3002"]}),`
`,e(s.p,{children:[e(s.img,{src:"/img/1728551145040.png",alt:"",referrerpolicy:"no-referrer"}),e("br",{}),"\u4EE5\u901A\u8FC7 Ingress \u914D\u7F6E\u8DE8\u57DF\u8BBF\u95EE\u4E3A\u4F8B\uFF1A"]}),`
`,e(s.div,{class:"expressive-code",children:[e(s.link,{rel:"stylesheet",href:"/_astro/ec.1vui4.css"}),e(s.script,{type:"module",src:"/_astro/ec.dy9ns.js"}),e(s.figure,{class:"frame not-content",children:[e(s.figcaption,{class:"header"}),e(s.pre,{tabindex:"0",dir:"ltr",children:e(s.code,{children:[e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"apiVersion: networking.k8s.io/v1"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"kind: Ingress"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"metadata:"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"annotations:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"# higress \u517C\u5BB9\u4E86 nginx-ingress \u7684\u6CE8\u89E3"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:'nginx.ingress.kubernetes.io/enable-cors: "true"'})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"name: foo"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"namespace: default"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"spec:"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"rules:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- http:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"paths:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- backend:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"          "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"service:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"            "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"name: foo-service"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"            "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"port:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"              "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"number: 5678"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"        "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"path: /foo"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"        "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"pathType: Exact"})]})})]})}),e(s.div,{class:"copy",children:e(s.button,{title:"Copy to clipboard","data-copied":"Copied!","data-code":'apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    # higress \u517C\u5BB9\u4E86 nginx-ingress \u7684\u6CE8\u89E3\x7F    nginx.ingress.kubernetes.io/enable-cors: "true"\x7F  name: foo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678\x7F        path: /foo\x7F        pathType: Exact',children:e(s.div,{})})})]})]}),`
`,e(s.p,{children:"\u5C06\u88AB\u8F6C\u6362\u4E3A\uFF1A"}),`
`,e(s.div,{class:"expressive-code",children:e(s.figure,{class:"frame not-content",children:[e(s.figcaption,{class:"header"}),e(s.pre,{tabindex:"0",dir:"ltr",children:e(s.code,{children:[e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"---"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"kind: Gateway"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"apiVersion: networking.istio.io/v1alpha3"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"metadata:"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"name: istio-autogenerated-k8s-ingress-global"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"namespace: higress-system"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"spec:"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"selector:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"higress: higress-system-higress-gateway"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"servers:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- hosts:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:'- "*"'})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"port:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"name: http-80-ingress-global"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"number: 80"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"protocol: HTTP"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:" "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"---"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"kind: VirtualService"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"apiVersion: networking.istio.io/v1alpha3"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"metadata:"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"name: default-global"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"namespace: higress-system"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"spec:"})})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"gateways:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- higress-system/istio-autogenerated-k8s-ingress-global"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"hosts:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:'- "*"'})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"http:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"  "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- match:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- uri:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"        "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:'exact: "/foo"'})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"name: default/foo"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"route:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- destination:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"        "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"host: foo-service.default.svc.cluster.local"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"        "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"port:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"          "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"number: 5678"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"weight: 100"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"    "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"corsPolicy:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"allowCredentials: true"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"allowHeaders:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- DNT"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- X-CustomHeader"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- Keep-Alive"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- User-Agent"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- X-Requested-With"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- If-Modified-Since"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- Cache-Control"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- Content-Type"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- Authorization"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"allowMethods:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- GET"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- PUT"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- POST"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- DELETE"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- PATCH"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"- OPTIONS"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"allowOrigins:"})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:'- regex: ".*"'})]})}),e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:[e(s.span,{class:"indent",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"      "})}),e(s.span,{style:{"--0":"#e1e4e8"},children:"maxAge: 1728000s"})]})})]})}),e(s.div,{class:"copy",children:e(s.button,{title:"Copy to clipboard","data-copied":"Copied!","data-code":'---\x7Fkind: Gateway\x7FapiVersion: networking.istio.io/v1alpha3\x7Fmetadata:\x7F  name: istio-autogenerated-k8s-ingress-global\x7F  namespace: higress-system\x7Fspec:\x7F  selector:\x7F    higress: higress-system-higress-gateway\x7F  servers:\x7F  - hosts:\x7F    - "*"\x7F    port:\x7F      name: http-80-ingress-global\x7F      number: 80\x7F      protocol: HTTP\x7F ---\x7Fkind: VirtualService\x7FapiVersion: networking.istio.io/v1alpha3\x7Fmetadata:\x7F  name: default-global\x7F  namespace: higress-system\x7Fspec:\x7F  gateways:\x7F  - higress-system/istio-autogenerated-k8s-ingress-global\x7F  hosts:\x7F  - "*"\x7F  http:\x7F  - match:\x7F    - uri:\x7F        exact: "/foo"\x7F    name: default/foo\x7F    route:\x7F    - destination:\x7F        host: foo-service.default.svc.cluster.local\x7F        port:\x7F          number: 5678\x7F      weight: 100\x7F    corsPolicy:\x7F      allowCredentials: true\x7F      allowHeaders:\x7F      - DNT\x7F      - X-CustomHeader\x7F      - Keep-Alive\x7F      - User-Agent\x7F      - X-Requested-With\x7F      - If-Modified-Since\x7F      - Cache-Control\x7F      - Content-Type\x7F      - Authorization\x7F      allowMethods:\x7F      - GET\x7F      - PUT\x7F      - POST\x7F      - DELETE\x7F      - PATCH\x7F      - OPTIONS\x7F      allowOrigins:\x7F      - regex: ".*"\x7F      maxAge: 1728000s',children:e(s.div,{})})})]})}),`
`,e(s.p,{children:"\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u5230\uFF0CIngress \u6700\u5927\u7684\u4F18\u52BF\u5C31\u662F\u7B80\u5355\uFF0C\u53EA\u7528\u4E00\u4E2A\u6CE8\u89E3\u5C31\u5B9E\u73B0\u4E86\u8DE8\u57DF\u8FD9\u4E2A\u8DEF\u7531\u7B56\u7565\u3002"}),`
`,e(s.p,{children:"Higress \u4E5F\u652F\u6301 Ingress \u548C Istio API \u8FDB\u884C\u6DF7\u7528\uFF0C\u5BF9\u4E8E Ingress \u65E0\u6CD5\u6EE1\u8DB3\u7684\u9700\u6C42\u573A\u666F\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 Istio API \uFF08K8s CRD\uFF09\u6765\u5B9E\u73B0\u3002Higress \u4F1A\u6309\u7167\u4EE5 Istio API \u521B\u5EFA\u7684\u914D\u7F6E\u4F18\u5148\u4E3A\u539F\u5219\uFF0C\u5728\u751F\u6210\u6700\u7EC8\u7684\u8DEF\u7531\u914D\u7F6E\u65F6\u8FDB\u884C\u5408\u5E76\u3002"}),`
`,e("a",{name:"qe50F"}),`
`,e(s.h2,{id:"\u4E8C\u5F00\u6E90\u793E\u533A\u6700\u65B0\u8FDB\u5C55\u540C\u6B65",children:"\u4E8C\u3001\u5F00\u6E90\u793E\u533A\u6700\u65B0\u8FDB\u5C55\u540C\u6B65"}),`
`,e(s.p,{children:"\u611F\u8C22\u5F20\u6D77\u5F6C(@NameHaibinZhang)\u63D0\u4F9B\u4E86\u4E00\u4E2A\u540D\u4E3A McpBridge \u7684 API \u5B9E\u73B0\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5BF9\u63A5 Nacos/ZK \u7B49\u6CE8\u518C\u4E2D\u5FC3\u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\u3002\u5E76\u4E14\u662F\u76F4\u63A5\u57FA\u4E8E Nacos/ZK \u7684 go client \u83B7\u53D6\u670D\u52A1 ip\uFF0C\u65E0\u9700 Nacos/ZK \u7B49\u652F\u6301 Istio MCP \u534F\u8BAE\u3002\u8FD9\u4E5F\u662F McpBridge \u8FD9\u4E2A\u540D\u5B57\u7684\u7531\u6765\u3002"}),`
`,e(s.p,{children:[e(s.img,{src:"/img/1728551145240.png",alt:"",referrerpolicy:"no-referrer"}),e("br",{}),"\u914D\u7F6E\u65B9\u5F0F\u4E3A\u521B\u5EFA McpBridge \u8D44\u6E90\uFF0C\u6307\u5B9A\u6CE8\u518C\u4E2D\u5FC3\u7684\u5730\u5740\u548C\u7C7B\u578B\uFF1A"]}),`
`,e(s.div,{class:"expressive-code",children:e(s.figure,{class:"frame not-content",children:[e(s.figcaption,{class:"header"}),e(s.pre,{tabindex:"0",dir:"ltr",children:e(s.code,{children:e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:"apiVersion: networking.higress.io/v1kind: McpBridgemetadata:  name: default  namespace: higress-systemspec:  registries:  - domain: 127.0.0.1    nacosGroups:    - DEFAULT_GROUP    nacosNamespace: beeae72f-xxxx-xxxx-xxxx-d484cc4d7a2d    name: my-nacos-server    port: 8848    type: nacos"})})})})}),e(s.div,{class:"copy",children:e(s.button,{title:"Copy to clipboard","data-copied":"Copied!","data-code":"apiVersion: networking.higress.io/v1kind: McpBridgemetadata:  name: default  namespace: higress-systemspec:  registries:  - domain: 127.0.0.1    nacosGroups:    - DEFAULT_GROUP    nacosNamespace: beeae72f-xxxx-xxxx-xxxx-d484cc4d7a2d    name: my-nacos-server    port: 8848    type: nacos",children:e(s.div,{})})})]})}),`
`,e(s.p,{children:"\u7136\u540E\u5728 Ingress \u4E2D\u901A\u8FC7 backend.resource  \u5F15\u7528\u8FD9\u4E2A McpBridge \u8D44\u6E90\uFF0C\u5E76\u901A\u8FC7 higress.io/destination \u6CE8\u89E3\u6307\u5B9A\u76EE\u6807\u670D\u52A1\u5730\u5740\uFF0C\u4E0B\u9762\u8FD9\u4E2A Nacos \u7C7B\u578B\u7684\u670D\u52A1\uFF0C\u5176\u670D\u52A1\u5730\u5740\u683C\u5F0F\u4E3A\uFF1A\u670D\u52A1\u540D.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4.nacos"}),`
`,e(s.div,{class:"expressive-code",children:e(s.figure,{class:"frame not-content",children:[e(s.figcaption,{class:"header"}),e(s.pre,{tabindex:"0",dir:"ltr",children:e(s.code,{children:e(s.div,{class:"ec-line",children:e(s.div,{class:"code",children:e(s.span,{style:{"--0":"#e1e4e8"},children:'apiVersion: networking.k8s.io/v1kind: Ingressmetadata:  annotations:    higress.io/destination: "sc.DEFAULT-GROUP.beeae72f-xxxx-xxxx-xxxx-d484cc4d7a2d.nacos"  name: foo  namespace: defaultspec:  rules:  - http:      paths:      - backend:          resource:            apiGroup: networking.higress.io/v1            kind: McpBridge            name: default        path: /foo        pathType: Exact'})})})})}),e(s.div,{class:"copy",children:e(s.button,{title:"Copy to clipboard","data-copied":"Copied!","data-code":'apiVersion: networking.k8s.io/v1kind: Ingressmetadata:  annotations:    higress.io/destination: "sc.DEFAULT-GROUP.beeae72f-xxxx-xxxx-xxxx-d484cc4d7a2d.nacos"  name: foo  namespace: defaultspec:  rules:  - http:      paths:      - backend:          resource:            apiGroup: networking.higress.io/v1            kind: McpBridge            name: default        path: /foo        pathType: Exact',children:e(s.div,{})})})]})}),`
`,e(s.p,{children:"\uFF08\u5907\u6CE8\uFF1A\u8FD9\u4E2A\u914D\u7F6E\u65B9\u5F0F\u76EE\u524D\u6682\u672A\u5B8C\u5168\u5B9A\u7A3F\uFF0C\u6B22\u8FCE\u5C0F\u4F19\u4F34\u53C2\u4E0E\u8BA8\u8BBA\uFF0C\u5B8C\u6574\u7684\u4F7F\u7528\u6587\u6863\u5C06\u5728\u8FD9\u90E8\u5206\u4EE3\u7801\u6B63\u5F0F release \u4E4B\u540E\u63D0\u4F9B\uFF09"}),`
`,e("a",{name:"Sodwd"}),`
`,e(s.h2,{id:"\u4E09\u652F\u6301\u975E-k8s-\u90E8\u7F72\u7684\u67B6\u6784\u63A2\u8BA8",children:"\u4E09\u3001\u652F\u6301\u975E K8s \u90E8\u7F72\u7684\u67B6\u6784\u63A2\u8BA8"}),`
`,e(s.p,{children:["\u6700\u540E\u63A2\u8BA8\u4E86\u793E\u533A\u5C0F\u4F19\u4F34\u6700\u4E3A\u5173\u5FC3\u7684\uFF0C\u5982\u4F55\u652F\u6301\u975E K8s \u573A\u666F\u4F7F\u7528\u7684\u95EE\u9898\u3002\u5B9E\u73B0\u7684\u65B9\u5F0F\u5982\u4E0B\u56FE\u6240\u793A\uFF0CHigress \u4F1A\u501F\u9274 Istio \u5BF9\u4E8E\u914D\u7F6E\u6765\u6E90\u7684\u62BD\u8C61\u65B9\u5F0F\uFF0C\u652F\u6301\u4ECE Nacos/Etcd \u7B49\u914D\u7F6E\u4E2D\u5FC3\u83B7\u53D6 Ingress/Gateway \u7B49 API\u3002\u8FD9\u90E8\u5206\u5B9E\u73B0\u5C06\u4F5C\u4E3A Higress \u793E\u533A\u540E\u7EED\u7684\u91CD\u70B9\u5DE5\u4F5C\u8FDB\u884C\u63A8\u8FDB\u3002\u6B22\u8FCE\u6709\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u4E00\u8D77\u53C2\u4E0E\u5171\u5EFA\u3002",e("br",{}),e(s.img,{src:"/img/1728551145394.png",alt:"",referrerpolicy:"no-referrer"})]}),`
`,e(s.hr,{}),`
`,e(s.p,{children:["**Higress \u5F00\u6E90\u8D21\u732E\u5C0F\u7EC4\u6B63\u5728\u706B\u70ED\u62DB\u52DF\u8D21\u732E\u8005\u3002**\u5982\u679C\u60A8\u6709\u65F6\u95F4\uFF0C\u6709\u70ED\u60C5\uFF0C\u6709\u610F\u613F\uFF0C\u6B22\u8FCE\u8054\u7CFB\u793E\u533A\u52A0\u5165\u5F00\u6E90\u8D21\u732E\u5C0F\u7EC4\uFF0C\u4E00\u8D77\u5171\u540C\u5B8C\u5584 Higress\uFF0C\u4E00\u8D77\u4E3B\u5BFC\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\u7684\u8BBE\u8BA1\u548C\u5B9E\u73B0\u3002",e("br",{}),"\u793E\u533A\u5B98\u7F51\uFF08\u70B9\u51FB\u201C\u9605\u8BFB\u539F\u6587\u201D\u8DF3\u8F6C\uFF09: ",e(s.a,{href:"https://higress.io",referrerpolicy:"unsafe-url",rel:"nofollow",target:"_blank",children:"https://higress.io"}),e("br",{}),"\u793E\u533A\u5F00\u53D1\u8005\u7FA4\uFF08\u9489\u9489\u7FA4\uFF09\uFF1A30565000871",e("br",{}),"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF1A",e("br",{}),e(s.img,{src:"/img/1728551145571.png",alt:"",referrerpolicy:"no-referrer"})]})]})}function p(n={}){const{wrapper:s}=n.components||{};return s?e(s,{...n,children:e(c,{...n})}):c(n)}o="src/content/blog/Higress-gvr7dx_awbbpb_pcctqnntrosrhh0d.mdx/",t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_pcctqnntrosrhh0d.mdx",i=(n={})=>{var s,d;return p({...n,components:{Fragment:r,...n.components,"astro-image":(d=(s=n.components)==null?void 0:s.img)!=null?d:v}})},i[Symbol.for("mdx-component")]=!0,i[Symbol.for("astro.needsHeadRendering")]=!l.layout,i.moduleId="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_pcctqnntrosrhh0d.mdx"});export{i as Content,m as __tla,a as __usesAstroImage,i as default,t as file,l as frontmatter,h as getHeadings,o as url};
