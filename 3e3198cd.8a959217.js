(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{170:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(170)),i=["components"],c={id:"rtos",title:"RTOS",sidebar_label:"RTOS"},s={unversionedId:"aurorav2/software/rtos",id:"aurorav2/software/rtos",isDocsHomePage:!1,title:"RTOS",description:"Escrito por Gabriel Aleksandravicius",source:"@site/docs/aurorav2/software/rtos.md",slug:"/aurorav2/software/rtos",permalink:"/avionicsdocumentation/docs/aurorav2/software/rtos",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/aurorav2/software/rtos.md",version:"current",sidebar_label:"RTOS",sidebar:"Docs",previous:{title:"Protocolo de Comunica\xe7\xe3o",permalink:"/avionicsdocumentation/docs/aurorav2/software/protocolodecomm"},next:{title:"Arquitetura",permalink:"/avionicsdocumentation/docs/quimera/arquitetura"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Escrito por Gabriel Aleksandravicius")),Object(o.b)("p",null,"O prop\xf3sito dessa p\xe1gina \xe9:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Apresentar conceito de software ",Object(o.b)("em",{parentName:"li"},"bare metal")),Object(o.b)("li",{parentName:"ul"},"Apresentar conceito de RTOS",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Fornecer casos de uso"))),Object(o.b)("li",{parentName:"ul"},"Comparar esses dois conceitos, trazendo vantagens e desvantagens deles",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Concluir se \xe9 v\xe1lido implementar RTOS nos nossos projetos"))),Object(o.b)("li",{parentName:"ul"},"Avaliar RTOS que podemos implementar e como faz\xea-lo")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Em desenvolvimento!")),Object(o.b)("div",{parentName:"div",className:"admonition-content"})))}p.isMDXComponent=!0}}]);