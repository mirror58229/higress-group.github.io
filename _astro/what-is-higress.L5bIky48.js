import{c as h,__tla as l}from"./astro-component.cI6d52vQ.js";import{r as d,m as g,u,__tla as f}from"./constant.qZqNTy_-.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let t,o,a,i,r,c,s,p=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<p>Higress is a next-generation cloud-native gateway built on the core of open-source Istio + Envoy based on Alibaba\u2019s internal Envoy Gateway practice. It realizes the high integration capability of three-in-one traffic gateway + microservice gateway + security gateway, and deeply integrates Dubbo and Nacos , Sentinel and other micro-service technology stacks can help users greatly reduce the cost of gateway deployment and operation and maintenance without compromising capabilities; fully support Ingress and Gateway APIs in terms of standards, and actively embrace the standard API specifications under cloud native; at the same time, Higress The Controller also supports smooth migration of Nginx Ingress, helping users quickly migrate to Higress at zero cost.</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01iO9ph825juHbOIg75_!!6000000007563-2-tps-2483-2024.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="classification-of-traditional-gateways">Classification of traditional gateways</h2>
<p>In the industry, gateways are usually divided into two categories: traffic gateways and business gateways. Traffic gateways mainly provide global policy configurations that have nothing to do with back-end business. For example, Ali\u2019s internal unified access gateway Tengine is a typical traffic gateway. As the name suggests, the business gateway mainly provides independent business domain-level, tightly coupled policy configuration with the back-end business. With the evolution of the application architecture model from a single body to the current distributed micro-service, the business gateway also has a new name - micro-service gateway ( Illustrations are shown below). In the current cloud-native era dominated by container technology and K8s, is the next-generation gateway model still the same?</p>
<h2 id="positioning">Positioning</h2>
<p>Under the microservice architecture in the virtualization era, the business usually adopts a two-tier architecture of traffic gateway + microservice gateway. The traffic gateway is responsible for north-south traffic scheduling and security protection, and the microservice gateway is responsible for east-west traffic scheduling and service governance. In the cloud-native era dominated by K8s, Ingress has become the gateway standard of the K8s ecosystem, endowing the gateway with a new mission and making it possible to combine traffic gateway + microservice gateway into one.</p>
<p>As a north-south public network gateway, it is a common requirement to use Waf to protect abnormal traffic. As the Internet environment becomes more and more complex, users\u2019 demands for protection continue to increase. The conventional method is to access the traffic first. The Waf security gateway, after filtering, forwards the traffic to the traffic gateway, and finally reaches the microservice gateway; Higress hopes that through the built-in Waf module, the user\u2019s request link can be simultaneously completed Waf protection, traffic distribution, and microservice governance only through Higress. It can improve the link RT and reduce the operation and maintenance complexity of the gateway. Therefore, Higress realizes the high integration capability of three-in-one traffic gateway + microservice gateway + security gateway.</p>
<h2 id="why-did-higress-choose-envoyistio-as-the-engine">Why did Higress choose Envoy/Istio as the engine</h2>
<p>In the context of containerized cloud native, Kubernetes has become a standard interface between infrastructure and upper-layer applications. The natural internal and external network isolation environment of Kubernetes clusters requires external traffic to enter the Kubernetes cluster through an ingress gateway. Therefore, Kubernetes is standardized through Ingress The definition and standard of the ingress gateway. Although the Ingress standard has some shortcomings such as weak routing expression ability, the community has been actively promoting the definition of the Gateway API standard to solve it. However, it is undeniable that the Ingress standard still occupies the mainstream. CNCF annual report The usage of Ingress Provider (the implementers of the Ingress standard are collectively referred to as Ingress Provider) is also counted separately.</p>
<p>Although Nginx Ingress still occupies the top spot of K8s Ingress Provider, Envoy has the fastest growth, from less than 20% in 2019 to 37% in 2020, and only after Nginx Ingress , the growth momentum is very rapid, which shows that choosing Envoy as the core is in line with the development trend of cloud native; and as Service Mesh is gradually recognized by the public, the system of Istio + Envoy can cover both the Mesh and Ingress fields at the same time, realizing a set of technical architecture The goal of dispatching east-west and north-south global traffic is also very meaningful to users.</p>
<h2 id="higress-practise-inside-alibaba">Higress practise inside Alibaba</h2>
<p>Higress was incubated from Alibaba\u2019s internal \u201CLocal Life Campaign\u201D in May 2020. It was originally built to meet the demands of Alibaba Group and Ant Group to directly use RPC to request mutual visits, and the project also successfully incubated Dubbo 3.0\u2019s Triple Therefore, Higress is also the first internal application that supports the Triple protocol. In the same year, Higress also successfully supported major promotional activities such as Double 11 and Double 12. With the expansion of business scope, Higress has already supported Youku, DingTalk, For businesses such as Dharma Academy and Ant, the business scenarios have also been extended to global traffic scheduling in east-west and north-south directions.</p>`,i={title:"What Is Higress?",keywords:["Higress"],description:"Higress introduction"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/overview/what-is-higress.md",s=void 0,c=function(){return`
# What Is Higress?

 Higress is a next-generation cloud-native gateway built on the core of open-source Istio + Envoy based on Alibaba's internal Envoy Gateway practice. It realizes the high integration capability of three-in-one traffic gateway + microservice gateway + security gateway, and deeply integrates Dubbo and Nacos , Sentinel and other micro-service technology stacks can help users greatly reduce the cost of gateway deployment and operation and maintenance without compromising capabilities; fully support Ingress and Gateway APIs in terms of standards, and actively embrace the standard API specifications under cloud native; at the same time, Higress The Controller also supports smooth migration of Nginx Ingress, helping users quickly migrate to Higress at zero cost.

![image](https://img.alicdn.com/imgextra/i1/O1CN01iO9ph825juHbOIg75_!!6000000007563-2-tps-2483-2024.png)

## Classification of traditional gateways

In the industry, gateways are usually divided into two categories: traffic gateways and business gateways. Traffic gateways mainly provide global policy configurations that have nothing to do with back-end business. For example, Ali\u2019s internal unified access gateway Tengine is a typical traffic gateway. As the name suggests, the business gateway mainly provides independent business domain-level, tightly coupled policy configuration with the back-end business. With the evolution of the application architecture model from a single body to the current distributed micro-service, the business gateway also has a new name - micro-service gateway ( Illustrations are shown below). In the current cloud-native era dominated by container technology and K8s, is the next-generation gateway model still the same?

## Positioning

Under the microservice architecture in the virtualization era, the business usually adopts a two-tier architecture of traffic gateway + microservice gateway. The traffic gateway is responsible for north-south traffic scheduling and security protection, and the microservice gateway is responsible for east-west traffic scheduling and service governance. In the cloud-native era dominated by K8s, Ingress has become the gateway standard of the K8s ecosystem, endowing the gateway with a new mission and making it possible to combine traffic gateway + microservice gateway into one.

As a north-south public network gateway, it is a common requirement to use Waf to protect abnormal traffic. As the Internet environment becomes more and more complex, users' demands for protection continue to increase. The conventional method is to access the traffic first. The Waf security gateway, after filtering, forwards the traffic to the traffic gateway, and finally reaches the microservice gateway; Higress hopes that through the built-in Waf module, the user's request link can be simultaneously completed Waf protection, traffic distribution, and microservice governance only through Higress. It can improve the link RT and reduce the operation and maintenance complexity of the gateway. Therefore, Higress realizes the high integration capability of three-in-one traffic gateway + microservice gateway + security gateway.

## Why did Higress choose Envoy/Istio as the engine 

In the context of containerized cloud native, Kubernetes has become a standard interface between infrastructure and upper-layer applications. The natural internal and external network isolation environment of Kubernetes clusters requires external traffic to enter the Kubernetes cluster through an ingress gateway. Therefore, Kubernetes is standardized through Ingress The definition and standard of the ingress gateway. Although the Ingress standard has some shortcomings such as weak routing expression ability, the community has been actively promoting the definition of the Gateway API standard to solve it. However, it is undeniable that the Ingress standard still occupies the mainstream. CNCF annual report The usage of Ingress Provider (the implementers of the Ingress standard are collectively referred to as Ingress Provider) is also counted separately.

Although Nginx Ingress still occupies the top spot of K8s Ingress Provider, Envoy has the fastest growth, from less than 20% in 2019 to 37% in 2020, and only after Nginx Ingress , the growth momentum is very rapid, which shows that choosing Envoy as the core is in line with the development trend of cloud native; and as Service Mesh is gradually recognized by the public, the system of Istio + Envoy can cover both the Mesh and Ingress fields at the same time, realizing a set of technical architecture The goal of dispatching east-west and north-south global traffic is also very meaningful to users.

## Higress practise inside Alibaba

Higress was incubated from Alibaba's internal "Local Life Campaign" in May 2020. It was originally built to meet the demands of Alibaba Group and Ant Group to directly use RPC to request mutual visits, and the project also successfully incubated Dubbo 3.0's Triple Therefore, Higress is also the first internal application that supports the Triple protocol. In the same year, Higress also successfully supported major promotional activities such as Double 11 and Double 12. With the expansion of business scope, Higress has already supported Youku, DingTalk, For businesses such as Dharma Academy and Ant, the business scenarios have also been extended to global traffic scheduling in east-west and north-south directions.

`},o=function(){return e},r=function(){return[{depth:2,slug:"classification-of-traditional-gateways",text:"Classification of traditional gateways"},{depth:2,slug:"positioning",text:"Positioning"},{depth:2,slug:"why-did-higress-choose-envoyistio-as-the-engine",text:"Why did Higress choose Envoy/Istio as the engine"},{depth:2,slug:"higress-practise-inside-alibaba",text:"Higress practise inside Alibaba"}]},t=h((m,b,w)=>{const{layout:v,...n}=i;return n.file=a,n.url=s,d`${g()}${u(e)}`})});export{t as Content,p as __tla,o as compiledContent,t as default,a as file,i as frontmatter,r as getHeadings,c as rawContent,s as url};
