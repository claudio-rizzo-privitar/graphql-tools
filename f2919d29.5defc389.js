(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{524:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(552)),p={},i={unversionedId:"api/modules/_packages_utils_src_implementsabstracttype_",id:"api/modules/_packages_utils_src_implementsabstracttype_",isDocsHomePage:!1,title:"_packages_utils_src_implementsabstracttype_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_utils_src_implementsabstracttype_.md",slug:"/api/modules/_packages_utils_src_implementsabstracttype_",permalink:"/docs/api/modules/_packages_utils_src_implementsabstracttype_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_utils_src_implementsabstracttype_.md",version:"current"},l=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"implementsAbstractType",id:"implementsabstracttype",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(c.b)("h1",{id:"module-packagesutilssrcimplementsabstracttype"},'Module: "packages/utils/src/implementsAbstractType"'),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/modules/_packages_utils_src_implementsabstracttype_#implementsabstracttype"}),"implementsAbstractType"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"implementsabstracttype"},"implementsAbstractType"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"implementsAbstractType"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema, ",Object(c.b)("inlineCode",{parentName:"p"},"typeA"),": GraphQLType, ",Object(c.b)("inlineCode",{parentName:"p"},"typeB"),": GraphQLType): boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/implementsAbstractType.ts#L3"}),"packages/utils/src/implementsAbstractType.ts:3"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQLSchema")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"typeA")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQLType")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"typeB")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQLType")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," boolean"))}b.isMDXComponent=!0},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),o=b(n),u=a,d=o["".concat(p,".").concat(u)]||o[u]||m[u]||c;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<c;s++)p[s]=n[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);