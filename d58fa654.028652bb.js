(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{471:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return s}));var r=t(3),n=t(7),c=(t(0),t(552)),o={},l={unversionedId:"api/classes/_packages_loaders_code_file_src_index_.codefileloader",id:"api/classes/_packages_loaders_code_file_src_index_.codefileloader",isDocsHomePage:!1,title:"_packages_loaders_code_file_src_index_.codefileloader",description:"@graphql-tools/utils",source:"@site/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader.md",slug:"/api/classes/_packages_loaders_code_file_src_index_.codefileloader",permalink:"/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader.md",version:"current",sidebar:"someSidebar",previous:{title:"_packages_loaders_prisma_src_prisma_yml_errors_clusternotset_.clusternotset",permalink:"/docs/api/classes/_packages_loaders_prisma_src_prisma_yml_errors_clusternotset_.clusternotset"},next:{title:"_packages_loaders_prisma_src_prisma_yml_environment_.environment",permalink:"/docs/api/classes/_packages_loaders_prisma_src_prisma_yml_environment_.environment"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],b={toc:i};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(c.b)("h1",{id:"class-codefileloader"},"Class: CodeFileLoader"),Object(c.b)("p",null,"This loader loads GraphQL documents and type definitions from code files\nusing ",Object(c.b)("inlineCode",{parentName:"p"},"graphql-tag-pluck"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const documents = await loadDocuments('queries/*.js', {\n  loaders: [\n    new CodeFileLoader()\n  ]\n});\n")),Object(c.b)("p",null,"Supported extensions include: ",Object(c.b)("inlineCode",{parentName:"p"},".ts"),", ",Object(c.b)("inlineCode",{parentName:"p"},".tsx"),", ",Object(c.b)("inlineCode",{parentName:"p"},".js"),", ",Object(c.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(c.b)("inlineCode",{parentName:"p"},".vue")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CodeFileLoader"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/_packages_utils_src_loaders_.loader"}),"Loader"),"<",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"),"\\",">")),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader#canload"}),"canLoad")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader#canloadsync"}),"canLoadSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader#load"}),"load")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader#loadsync"}),"loadSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_packages_loaders_code_file_src_index_.codefileloader#loaderid"}),"loaderId"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"canload"},"canLoad"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"canLoad"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"),"): Promise","<","boolean\\",">"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L57"}),"packages/loaders/code-file/src/index.ts:57"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","boolean\\",">"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"canloadsync"},"canLoadSync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"canLoadSync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"),"): boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L76"}),"packages/loaders/code-file/src/index.ts:76"))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"load"},"load"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"load"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"),"): Promise","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_loaders_.source"}),"Source"),"\\",">"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L92"}),"packages/loaders/code-file/src/index.ts:92"))),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_loaders_.source"}),"Source"),"\\",">"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadsync"},"loadSync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadSync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"pointer"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_loaders_.source"}),"Source")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L135"}),"packages/loaders/code-file/src/index.ts:135"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"pointer")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#schemapointersingle"}),"SchemaPointerSingle")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/_packages_utils_src_loaders_#documentpointersingle"}),"DocumentPointerSingle"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/code-file-loader#codefileloaderoptions"}),"CodeFileLoaderOptions"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/_packages_utils_src_loaders_.source"}),"Source")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loaderid"},"loaderId"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loaderId"),"(): string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/interfaces/_packages_utils_src_loaders_.loader"}),"Loader"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L53"}),"packages/loaders/code-file/src/index.ts:53"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," string"))}s.isMDXComponent=!0},552:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return O}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),s=function(e){var a=n.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=s(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,O=d["".concat(o,".").concat(m)]||d[m]||p[m]||c;return t?n.a.createElement(O,l(l({ref:a},b),{},{components:t})):n.a.createElement(O,l({ref:a},b))}));function O(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=t[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);