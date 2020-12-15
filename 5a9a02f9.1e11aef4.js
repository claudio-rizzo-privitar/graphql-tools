(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),p=(a(0),a(552)),c={},b={unversionedId:"api/modules/_packages_utils_src_prune_",id:"api/modules/_packages_utils_src_prune_",isDocsHomePage:!1,title:"_packages_utils_src_prune_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_utils_src_prune_.md",slug:"/api/modules/_packages_utils_src_prune_",permalink:"/docs/api/modules/_packages_utils_src_prune_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_utils_src_prune_.md",version:"current"},i=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"NamedInputType",id:"namedinputtype",children:[]},{value:"NamedOutputType",id:"namedoutputtype",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"pruneSchema",id:"pruneschema",children:[]},{value:"visitInputType",id:"visitinputtype",children:[]},{value:"visitOutputType",id:"visitoutputtype",children:[]},{value:"visitTypes",id:"visittypes",children:[]}]}],l={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("a",Object(n.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(p.b)("h1",{id:"module-packagesutilssrcprune"},'Module: "packages/utils/src/prune"'),Object(p.b)("h2",{id:"index"},"Index"),Object(p.b)("h3",{id:"interfaces"},"Interfaces"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"))),Object(p.b)("h3",{id:"type-aliases"},"Type aliases"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_prune_#namedinputtype"}),"NamedInputType")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_prune_#namedoutputtype"}),"NamedOutputType"))),Object(p.b)("h3",{id:"functions"},"Functions"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_prune_#pruneschema"}),"pruneSchema")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_prune_#visitinputtype"}),"visitInputType")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_prune_#visitoutputtype"}),"visitOutputType")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_prune_#visittypes"}),"visitTypes"))),Object(p.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(p.b)("h3",{id:"namedinputtype"},"NamedInputType"),Object(p.b)("p",null,"\u01ac  ",Object(p.b)("strong",{parentName:"p"},"NamedInputType"),": GraphQLInputObjectType ","|"," GraphQLEnumType ","|"," GraphQLScalarType"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Defined in ",Object(p.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/prune.ts#L28"}),"packages/utils/src/prune.ts:28"))),Object(p.b)("hr",null),Object(p.b)("h3",{id:"namedoutputtype"},"NamedOutputType"),Object(p.b)("p",null,"\u01ac  ",Object(p.b)("strong",{parentName:"p"},"NamedOutputType"),": GraphQLObjectType ","|"," GraphQLInterfaceType ","|"," GraphQLUnionType ","|"," GraphQLEnumType ","|"," GraphQLScalarType"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Defined in ",Object(p.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/prune.ts#L22"}),"packages/utils/src/prune.ts:22"))),Object(p.b)("h2",{id:"functions-1"},"Functions"),Object(p.b)("h3",{id:"pruneschema"},"pruneSchema"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("strong",{parentName:"p"},"pruneSchema"),"(",Object(p.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema, ",Object(p.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_types_.pruneschemaoptions"}),"PruneSchemaOptions"),"): GraphQLSchema"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Defined in ",Object(p.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/prune.ts#L41"}),"packages/utils/src/prune.ts:41"))),Object(p.b)("p",null,"Prunes the provided schema, removing unused and empty types"),Object(p.b)("h4",{id:"parameters"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"schema")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLSchema"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The schema to prune")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"options")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_types_.pruneschemaoptions"}),"PruneSchemaOptions")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional options for removing unused types from the schema")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," GraphQLSchema"),Object(p.b)("hr",null),Object(p.b)("h3",{id:"visitinputtype"},"visitInputType"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("strong",{parentName:"p"},"visitInputType"),"(",Object(p.b)("inlineCode",{parentName:"p"},"visitedTypes"),": Record","<","string, boolean\\",">",", ",Object(p.b)("inlineCode",{parentName:"p"},"pruningContext"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"),", ",Object(p.b)("inlineCode",{parentName:"p"},"type"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_prune_#namedinputtype"}),"NamedInputType"),"): void"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Defined in ",Object(p.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/prune.ts#L139"}),"packages/utils/src/prune.ts:139"))),Object(p.b)("h4",{id:"parameters-1"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"visitedTypes")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Record","<","string, boolean\\",">")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"pruningContext")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"type")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_prune_#namedinputtype"}),"NamedInputType"))))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," void"),Object(p.b)("hr",null),Object(p.b)("h3",{id:"visitoutputtype"},"visitOutputType"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("strong",{parentName:"p"},"visitOutputType"),"(",Object(p.b)("inlineCode",{parentName:"p"},"visitedTypes"),": Record","<","string, boolean\\",">",", ",Object(p.b)("inlineCode",{parentName:"p"},"pruningContext"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"),", ",Object(p.b)("inlineCode",{parentName:"p"},"type"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_prune_#namedoutputtype"}),"NamedOutputType"),"): void"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Defined in ",Object(p.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/prune.ts#L96"}),"packages/utils/src/prune.ts:96"))),Object(p.b)("h4",{id:"parameters-2"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"visitedTypes")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Record","<","string, boolean\\",">")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"pruningContext")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"type")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_prune_#namedoutputtype"}),"NamedOutputType"))))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," void"),Object(p.b)("hr",null),Object(p.b)("h3",{id:"visittypes"},"visitTypes"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("strong",{parentName:"p"},"visitTypes"),"(",Object(p.b)("inlineCode",{parentName:"p"},"pruningContext"),": ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"),", ",Object(p.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema): void"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"Defined in ",Object(p.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/prune.ts#L161"}),"packages/utils/src/prune.ts:161"))),Object(p.b)("h4",{id:"parameters-3"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"pruningContext")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_prune_.pruningcontext"}),"PruningContext"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"schema")),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLSchema")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," void"))}s.isMDXComponent=!0},552:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(a),O=n,m=u["".concat(c,".").concat(O)]||u[O]||o[O]||p;return a?r.a.createElement(m,b(b({ref:t},l),{},{components:a})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,c=new Array(p);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<p;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);