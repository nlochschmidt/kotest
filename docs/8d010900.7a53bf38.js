(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(151)),c={id:"exceptions",title:"Exceptions",slug:"exceptions.html"},i={unversionedId:"assertions/exceptions",id:"assertions/exceptions",isDocsHomePage:!1,title:"Exceptions",description:"To assert that a given block of code throws an exception, one can use the shouldThrow function. Eg,",source:"@site/docs/assertions/exceptions.md",slug:"/assertions/exceptions.html",permalink:"/docs/assertions/exceptions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/exceptions.md",version:"current",sidebar:"assertions",previous:{title:"Matchers",permalink:"/docs/assertions/matchers.html"},next:{title:"Clues",permalink:"/docs/assertions/clues.html"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To assert that a given block of code throws an exception, one can use the ",Object(a.b)("inlineCode",{parentName:"p"},"shouldThrow")," function. Eg,"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),"shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\n")),Object(a.b)("p",null,"You can also check the caught exception:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'val exception = shouldThrow<IllegalAccessException> {\n  // code in here that you expect to throw an IllegalAccessException\n}\nexception.message should startWith("Something went wrong")\n')),Object(a.b)("p",null,"If you want to test that a specific type of exception is thrown, then use ",Object(a.b)("inlineCode",{parentName:"p"},"shouldThrowExactly<E>"),". For example, the\nfollowing block would catch a ",Object(a.b)("inlineCode",{parentName:"p"},"FileNotFoundException")," but not a ",Object(a.b)("inlineCode",{parentName:"p"},"IOException")," even though ",Object(a.b)("inlineCode",{parentName:"p"},"FileNotFoundException"),"\nextends from ",Object(a.b)("inlineCode",{parentName:"p"},"IOException"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),"val exception = shouldThrowExactly<FileNotFoundException> {\n  // test here\n}\n")),Object(a.b)("p",null,"If you simply want to test that ",Object(a.b)("em",{parentName:"p"},"any")," exception is thrown, regardles of type, then use ",Object(a.b)("inlineCode",{parentName:"p"},"shouldThrowAny"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),"val exception = shouldThrowAny {\n  // test here can throw any type of Throwable!\n}\n")))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);