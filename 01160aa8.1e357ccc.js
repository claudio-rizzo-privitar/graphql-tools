(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{552:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var c=a(0),r=a.n(c);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,b=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=c,m=u["".concat(b,".").concat(d)]||u[d]||l[d]||n;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,b=new Array(n);b[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:c,b[1]=o;for(var s=2;s<n;s++)b[s]=a[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var c=a(3),r=a(7),n=(a(0),a(552)),b={},o={unversionedId:"api/modules/_packages_batch_execute_src_createbatchingexecutor_",id:"api/modules/_packages_batch_execute_src_createbatchingexecutor_",isDocsHomePage:!1,title:"_packages_batch_execute_src_createbatchingexecutor_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_batch_execute_src_createbatchingexecutor_.md",slug:"/api/modules/_packages_batch_execute_src_createbatchingexecutor_",permalink:"/docs/api/modules/_packages_batch_execute_src_createbatchingexecutor_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_batch_execute_src_createbatchingexecutor_.md",version:"current"},i=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createBatchingExecutor",id:"createbatchingexecutor",children:[]},{value:"createLoadFn",id:"createloadfn",children:[]},{value:"defaultExtensionsReducer",id:"defaultextensionsreducer",children:[]}]}],s={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(c.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(c.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(n.b)("h1",{id:"module-packagesbatch-executesrccreatebatchingexecutor"},'Module: "packages/batch-execute/src/createBatchingExecutor"'),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"functions"},"Functions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/api/modules/_packages_batch_execute_src_createbatchingexecutor_#createbatchingexecutor"}),"createBatchingExecutor")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/api/modules/_packages_batch_execute_src_createbatchingexecutor_#createloadfn"}),"createLoadFn")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/api/modules/_packages_batch_execute_src_createbatchingexecutor_#defaultextensionsreducer"}),"defaultExtensionsReducer"))),Object(n.b)("h2",{id:"functions-1"},"Functions"),Object(n.b)("h3",{id:"createbatchingexecutor"},"createBatchingExecutor"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createBatchingExecutor"),"(",Object(n.b)("inlineCode",{parentName:"p"},"executor"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/modules/_packages_delegate_src_types_#executor"}),"Executor"),", ",Object(n.b)("inlineCode",{parentName:"p"},"dataLoaderOptions?"),": DataLoader.Options","<","any, any, any\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"extensionsReducer?"),": (mergedExtensions: Record","<","string, any\\",">",", executionParams: ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_batch_execute_src_types_.executionparams"}),"ExecutionParams"),") =",">"," Record","<","string, any\\",">","): ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/modules/_packages_delegate_src_types_#executor"}),"Executor")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/batch-execute/src/createBatchingExecutor.ts#L14"}),"packages/batch-execute/src/createBatchingExecutor.ts:14"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"executor")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/modules/_packages_delegate_src_types_#executor"}),"Executor"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dataLoaderOptions?")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"DataLoader.Options","<","any, any, any\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"extensionsReducer?")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"(mergedExtensions: Record","<","string, any\\",">",", executionParams: ",Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_batch_execute_src_types_.executionparams"}),"ExecutionParams"),") =",">"," Record","<","string, any\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/modules/_packages_delegate_src_types_#executor"}),"Executor")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"createloadfn"},"createLoadFn"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createLoadFn"),"(",Object(n.b)("inlineCode",{parentName:"p"},"executor"),": (","_","_","namedParameters: { context: any ; document: DocumentNode ; info: GraphQLResolveInfo ; variables: Record","<","string, any\\",">","  }) =",">"," ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.executionresult"}),"ExecutionResult")," ","|"," Promise","<",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.executionresult"}),"ExecutionResult"),"\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"extensionsReducer"),": (mergedExtensions: Record","<","string, any\\",">",", executionParams: ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_batch_execute_src_types_.executionparams"}),"ExecutionParams"),") =",">"," Record","<","string, any\\",">","): (Anonymous function)"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/batch-execute/src/createBatchingExecutor.ts#L26"}),"packages/batch-execute/src/createBatchingExecutor.ts:26"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"executor")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"(","_","_","namedParameters: { context: any ; document: DocumentNode ; info: GraphQLResolveInfo ; variables: Record","<","string, any\\",">","  }) =",">"," ",Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.executionresult"}),"ExecutionResult")," ","|"," Promise","<",Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_utils_src_interfaces_.executionresult"}),"ExecutionResult"),"\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"extensionsReducer")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"(mergedExtensions: Record","<","string, any\\",">",", executionParams: ",Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_batch_execute_src_types_.executionparams"}),"ExecutionParams"),") =",">"," Record","<","string, any\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," (Anonymous function)"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"defaultextensionsreducer"},"defaultExtensionsReducer"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"defaultExtensionsReducer"),"(",Object(n.b)("inlineCode",{parentName:"p"},"mergedExtensions"),": Record","<","string, any\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"executionParams"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_batch_execute_src_types_.executionparams"}),"ExecutionParams"),"): Record","<","string, any\\",">"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/batch-execute/src/createBatchingExecutor.ts#L77"}),"packages/batch-execute/src/createBatchingExecutor.ts:77"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"mergedExtensions")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Record","<","string, any\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"executionParams")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/interfaces/_packages_batch_execute_src_types_.executionparams"}),"ExecutionParams"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Record","<","string, any\\",">"))}p.isMDXComponent=!0}}]);