(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{552:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(a),d=n,u=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(552)),c={},o={unversionedId:"api/modules/_packages_schema_src_buildschemafromtypedefinitions_",id:"api/modules/_packages_schema_src_buildschemafromtypedefinitions_",isDocsHomePage:!1,title:"_packages_schema_src_buildschemafromtypedefinitions_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_schema_src_buildschemafromtypedefinitions_.md",slug:"/api/modules/_packages_schema_src_buildschemafromtypedefinitions_",permalink:"/docs/api/modules/_packages_schema_src_buildschemafromtypedefinitions_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_schema_src_buildschemafromtypedefinitions_.md",version:"current"},s=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"buildDocumentFromTypeDefinitions",id:"builddocumentfromtypedefinitions",children:[]},{value:"buildSchemaFromTypeDefinitions",id:"buildschemafromtypedefinitions",children:[]}]}],b={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(i.b)("h1",{id:"module-packagesschemasrcbuildschemafromtypedefinitions"},'Module: "packages/schema/src/buildSchemaFromTypeDefinitions"'),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_schema_src_buildschemafromtypedefinitions_#builddocumentfromtypedefinitions"}),"buildDocumentFromTypeDefinitions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/_packages_schema_src_buildschemafromtypedefinitions_#buildschemafromtypedefinitions"}),"buildSchemaFromTypeDefinitions"))),Object(i.b)("h2",{id:"functions-1"},"Functions"),Object(i.b)("h3",{id:"builddocumentfromtypedefinitions"},"buildDocumentFromTypeDefinitions"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"buildDocumentFromTypeDefinitions"),"(",Object(i.b)("inlineCode",{parentName:"p"},"typeDefinitions"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_interfaces_#itypedefinitions"}),"ITypeDefinitions"),", ",Object(i.b)("inlineCode",{parentName:"p"},"parseOptions?"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.graphqlparseoptions"}),"GraphQLParseOptions"),"): DocumentNode"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/schema/src/buildSchemaFromTypeDefinitions.ts#L31"}),"packages/schema/src/buildSchemaFromTypeDefinitions.ts:31"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"typeDefinitions")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_interfaces_#itypedefinitions"}),"ITypeDefinitions"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"parseOptions?")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.graphqlparseoptions"}),"GraphQLParseOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," DocumentNode"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"buildschemafromtypedefinitions"},"buildSchemaFromTypeDefinitions"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"buildSchemaFromTypeDefinitions"),"(",Object(i.b)("inlineCode",{parentName:"p"},"typeDefinitions"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_interfaces_#itypedefinitions"}),"ITypeDefinitions"),", ",Object(i.b)("inlineCode",{parentName:"p"},"parseOptions?"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.graphqlparseoptions"}),"GraphQLParseOptions"),", ",Object(i.b)("inlineCode",{parentName:"p"},"noExtensionExtraction?"),": boolean): GraphQLSchema"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/schema/src/buildSchemaFromTypeDefinitions.ts#L8"}),"packages/schema/src/buildSchemaFromTypeDefinitions.ts:8"))),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"typeDefinitions")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_interfaces_#itypedefinitions"}),"ITypeDefinitions"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"parseOptions?")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.graphqlparseoptions"}),"GraphQLParseOptions"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"noExtensionExtraction?")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," GraphQLSchema"))}p.isMDXComponent=!0}}]);