(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{112:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return o})),a.d(r,"metadata",(function(){return p})),a.d(r,"toc",(function(){return i})),a.d(r,"default",(function(){return s}));var t=a(3),n=a(7),l=(a(0),a(552)),o={},p={unversionedId:"api/modules/_packages_links_src_graphqlupload_",id:"api/modules/_packages_links_src_graphqlupload_",isDocsHomePage:!1,title:"_packages_links_src_graphqlupload_",description:"@graphql-tools/utils",source:"@site/docs/api/modules/_packages_links_src_graphqlupload_.md",slug:"/api/modules/_packages_links_src_graphqlupload_",permalink:"/docs/api/modules/_packages_links_src_graphqlupload_",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/_packages_links_src_graphqlupload_.md",version:"current"},i=[{value:"Index",id:"index",children:[{value:"Variables",id:"variables",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"GraphQLUpload",id:"graphqlupload",children:[]}]}],c={toc:i};function s(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},c,a,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",Object(t.a)({parentName:"strong"},{href:"../README"}),"@graphql-tools/utils"))),Object(l.b)("h1",{id:"module-packageslinkssrcgraphqlupload"},'Module: "packages/links/src/GraphQLUpload"'),Object(l.b)("h2",{id:"index"},"Index"),Object(l.b)("h3",{id:"variables"},"Variables"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/modules/_packages_links_src_graphqlupload_#graphqlupload"}),"GraphQLUpload"))),Object(l.b)("h2",{id:"variables-1"},"Variables"),Object(l.b)("h3",{id:"graphqlupload"},"GraphQLUpload"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("inlineCode",{parentName:"p"},"Const")," ",Object(l.b)("strong",{parentName:"p"},"GraphQLUpload"),": GraphQLScalarType = new GraphQLScalarType({ name: 'Upload', description: 'The ","`","Upload","`"," scalar type represents a file upload.', parseValue: value =\\",">"," { if (value != null && isPromise(value.promise)) { // graphql-upload v10 return value.promise; } else if (isPromise(value)) { // graphql-upload v9 return value; } throw new GraphQLError('Upload value invalid.'); }, // serialization requires to support schema stitching serialize: value =\\",">"," value, parseLiteral: ast =\\",">"," { throw new GraphQLError('Upload literal unsupported.', ast); },})"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(t.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/links/src/GraphQLUpload.ts#L4"}),"packages/links/src/GraphQLUpload.ts:4"))))}s.isMDXComponent=!0},552:function(e,r,a){"use strict";a.d(r,"a",(function(){return u})),a.d(r,"b",(function(){return m}));var t=a(0),n=a.n(t);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var r=n.a.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},u=function(e){var r=s(e.components);return n.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),b=t,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||l;return a?n.a.createElement(m,p(p({ref:r},c),{},{components:a})):n.a.createElement(m,p({ref:r},c))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=b;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);