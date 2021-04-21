(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{232:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(262)),c={},i={unversionedId:"api/interfaces/utils_src.loaddocumenterror",id:"api/interfaces/utils_src.loaddocumenterror",isDocsHomePage:!1,title:"utils_src.loaddocumenterror",description:"Interface: LoadDocumentError",source:"@site/docs/api/interfaces/utils_src.loaddocumenterror.md",slug:"/api/interfaces/utils_src.loaddocumenterror",permalink:"/docs/api/interfaces/utils_src.loaddocumenterror",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/interfaces/utils_src.loaddocumenterror.md",version:"current",sidebar:"someSidebar",previous:{title:"loaders_json_file_src.jsonfileloaderoptions",permalink:"/docs/api/interfaces/loaders_json_file_src.jsonfileloaderoptions"},next:{title:"utils_src.loader",permalink:"/docs/api/interfaces/utils_src.loader"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"errors",id:"errors",children:[]},{value:"filePath",id:"filepath",children:[]}]}],s={toc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-loaddocumenterror"},"Interface: LoadDocumentError"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"../modules/utils_src"},"utils/src"),".LoadDocumentError"),Object(o.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.loaddocumenterror#errors"},"errors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.loaddocumenterror#filepath"},"filePath"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"errors"},"errors"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(o.b)("strong",{parentName:"p"},"errors"),": readonly ",Object(o.b)("em",{parentName:"p"},"GraphQLError"),"[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/validate-documents.ts#L18"},"packages/utils/src/validate-documents.ts:18")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"filepath"},"filePath"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(o.b)("strong",{parentName:"p"},"filePath"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/validate-documents.ts#L17"},"packages/utils/src/validate-documents.ts:17")))}p.isMDXComponent=!0},262:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(f,i(i({ref:r},s),{},{components:t})):a.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);