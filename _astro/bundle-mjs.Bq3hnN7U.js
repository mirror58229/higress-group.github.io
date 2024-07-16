const A="-";function ne(e){const r=le(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;function a(s){const i=s.split(A);return i[0]===""&&i.length!==1&&i.shift(),X(i,r)||se(s)}function n(s,i){const u=o[s]||[];return i&&t[s]?[...u,...t[s]]:u}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function X(e,r){var s;if(e.length===0)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),a=t?X(e.slice(1),t):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(A);return(s=r.validators.find(({validator:i})=>i(n)))==null?void 0:s.classGroupId}const Y=/^\[(.+)\]$/;function se(e){if(Y.test(e)){const r=Y.exec(e)[1],o=r==null?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function le(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return ae(Object.entries(e.classGroups),o).forEach(([a,n])=>{B(n,t,a,r)}),t}function B(e,r,o,t){e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:Z(r,a);n.classGroupId=o;return}if(typeof a=="function"){if(ie(a)){B(a(t),r,o,t);return}r.validators.push({validator:a,classGroupId:o});return}Object.entries(a).forEach(([n,s])=>{B(s,Z(r,n),o,t)})})}function Z(e,r){let o=e;return r.split(A).forEach(t=>{o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function ie(e){return e.isThemeGetter}function ae(e,r){return r?e.map(([o,t])=>{const a=t.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>[r+s,i])):n);return[o,a]}):e}function ce(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function a(n,s){o.set(n,s),r++,r>e&&(r=0,t=o,o=new Map)}return{get(n){let s=o.get(n);if(s!==void 0)return s;if((s=t.get(n))!==void 0)return a(n,s),s},set(n,s){o.has(n)?o.set(n,s):a(n,s)}}}const ee="!";function de(e){const{separator:r,experimentalParseClassName:o}=e,t=r.length===1,a=r[0],n=r.length;function s(i){const u=[];let f=0,p=0,m;for(let b=0;b<i.length;b++){let g=i[b];if(f===0){if(g===a&&(t||i.slice(b,b+n)===r)){u.push(i.slice(p,b)),p=b+n;continue}if(g==="/"){m=b;continue}}g==="["?f++:g==="]"&&f--}const h=u.length===0?i:i.substring(p),y=h.startsWith(ee),G=y?h.substring(1):h,x=m&&m>p?m-p:void 0;return{modifiers:u,hasImportantModifier:y,baseClassName:G,maybePostfixModifierPosition:x}}return o?function(i){return o({className:i,parseClassName:s})}:s}function ue(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach(t=>{t[0]==="["?(r.push(...o.sort(),t),o=[]):o.push(t)}),r.push(...o.sort()),r}function pe(e){return{cache:ce(e.cacheSize),parseClassName:de(e),...ne(e)}}const be=/\s+/;function fe(e,r){const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:a}=r,n=new Set;return e.trim().split(be).map(s=>{const{modifiers:i,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=o(s);let m=!!p,h=t(m?f.substring(0,p):f);if(!h){if(!m)return{isTailwindClass:!1,originalClassName:s};if(h=t(f),!h)return{isTailwindClass:!1,originalClassName:s};m=!1}const y=ue(i).join(":");return{isTailwindClass:!0,modifierId:u?y+ee:y,classGroupId:h,originalClassName:s,hasPostfixModifier:m}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:i,classGroupId:u,hasPostfixModifier:f}=s,p=i+u;return n.has(p)?!1:(n.add(p),a(u,f).forEach(m=>n.add(i+m)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function me(){let e=0,r,o,t="";for(;e<arguments.length;)(r=arguments[e++])&&(o=re(r))&&(t&&(t+=" "),t+=o);return t}function re(e){if(typeof e=="string")return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=re(e[t]))&&(o&&(o+=" "),o+=r);return o}function ge(e,...r){let o,t,a,n=s;function s(u){const f=r.reduce((p,m)=>m(p),e());return o=pe(f),t=o.cache.get,a=o.cache.set,n=i,i(u)}function i(u){const f=t(u);if(f)return f;const p=fe(u,o);return a(u,p),p}return function(){return n(me.apply(null,arguments))}}function c(e){const r=o=>o[e]||[];return r.isThemeGetter=!0,r}const oe=/^\[(?:([a-z-]+):)?(.+)\]$/i,he=/^\d+\/\d+$/,xe=new Set(["px","full","screen"]),ye=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,we=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ve=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ze=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return C(e)||xe.has(e)||he.test(e)}function k(e){return j(e,"length",Se)}function C(e){return!!e&&!Number.isNaN(Number(e))}function $(e){return j(e,"number",C)}function P(e){return!!e&&Number.isInteger(Number(e))}function Ce(e){return e.endsWith("%")&&C(e.slice(0,-1))}function l(e){return oe.test(e)}function z(e){return ye.test(e)}const je=new Set(["length","size","percentage"]);function Ge(e){return j(e,je,te)}function Ne(e){return j(e,"position",te)}const Ie=new Set(["image","url"]);function Pe(e){return j(e,Ie,Te)}function Me(e){return j(e,"",Ee)}function M(){return!0}function j(e,r,o){const t=oe.exec(e);return t?t[1]?typeof r=="string"?t[1]===r:r.has(t[1]):o(t[2]):!1}function Se(e){return we.test(e)&&!ve.test(e)}function te(){return!1}function Ee(e){return ke.test(e)}function Te(e){return ze.test(e)}function $e(){const e=c("colors"),r=c("spacing"),o=c("blur"),t=c("brightness"),a=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),i=c("borderWidth"),u=c("contrast"),f=c("grayscale"),p=c("hueRotate"),m=c("invert"),h=c("gap"),y=c("gradientColorStops"),G=c("gradientColorStopPositions"),x=c("inset"),b=c("margin"),g=c("opacity"),w=c("padding"),D=c("saturate"),O=c("scale"),F=c("sepia"),H=c("skew"),J=c("space"),K=c("translate"),R=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",l,r],d=()=>[l,r],L=()=>["",v,k],S=()=>["auto",C,l],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],_=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",l],V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[C,$],T=()=>[C,l];return{cacheSize:500,separator:":",theme:{colors:[M],spacing:[v,k],blur:["none","",z,l],brightness:I(),borderColor:[e],borderRadius:["none","","full",z,l],borderSpacing:d(),borderWidth:L(),contrast:I(),grayscale:N(),hueRotate:T(),invert:N(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Ce,k],inset:q(),margin:q(),opacity:I(),padding:d(),saturate:I(),scale:I(),sepia:N(),skew:T(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),l]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,l]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",P,l]}],"grid-cols":[{"grid-cols":[M]}],"col-start-end":[{col:["auto",{span:["full",P,l]},l]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[M]}],"row-start-end":[{row:["auto",{span:[P,l]},l]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$]}],"font-family":[{font:[M]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",C,$]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,k]}],"underline-offset":[{"underline-offset":["auto",v,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),Ne]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ge]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Pe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[G]}],"gradient-via-pos":[{via:[G]}],"gradient-to-pos":[{to:[G]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:E()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[v,l]}],"outline-w":[{outline:[v,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:L()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[v,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,Me]}],"shadow-color":[{shadow:[M]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",z,l]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[m]}],saturate:[{saturate:[D]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[P,l]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,k,$]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Oe=ge($e);export{Oe as t};
