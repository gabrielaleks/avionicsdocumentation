(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return u}));var r=t(3),o=t(7),n=(t(0),t(163)),i=["components"],c={id:"cargaedescarga",title:"Carga e Descarga das Baterias",sidebar_label:"Carga e Descarga das Baterias"},s={unversionedId:"glossario/testes/cargaedescarga",id:"glossario/testes/cargaedescarga",isDocsHomePage:!1,title:"Carga e Descarga das Baterias",description:"Escrito por Daniel Relva",source:"@site/docs/glossario/testes/cargaedescarga.md",slug:"/glossario/testes/cargaedescarga",permalink:"/avionicsdocumentation/docs/glossario/testes/cargaedescarga",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/glossario/testes/cargaedescarga.md",version:"current",sidebar_label:"Carga e Descarga das Baterias",sidebar:"Docs",previous:{title:"Leitura e Escrita no SD",permalink:"/avionicsdocumentation/docs/glossario/testes/leituraescrita"},next:{title:"I2C",permalink:"/avionicsdocumentation/docs/glossario/protocolos/i2c"}},l=[{value:"Objetivo",id:"objetivo",children:[]},{value:"M\xe9todo",id:"m\xe9todo",children:[{value:"Conectado a uma carga",id:"conectado-a-uma-carga",children:[]},{value:"Mult\xedmetro acoplado \xe0 PMM",id:"mult\xedmetro-acoplado-\xe0-pmm",children:[]},{value:"INA219",id:"ina219",children:[]}]}],d={toc:l};function u(e){var a=e.components,t=Object(o.a)(e,i);return Object(n.b)("wrapper",Object(r.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Escrito por Daniel Relva")),Object(n.b)("h2",{id:"objetivo"},"Objetivo"),Object(n.b)("p",null,"Uma vez que o EPS tenha sido fabricado, podemos integr\xe1-lo a outros subsistemas e determinar por quanto tempo ele mant\xe9m a PMM alimentada. Assumindo que a bateria n\xe3o esteja vazia, iremos carreg\xe1-la completamente antes de iniciar os testes."),Object(n.b)("h2",{id:"m\xe9todo"},"M\xe9todo"),Object(n.b)("h3",{id:"conectado-a-uma-carga"},"Conectado a uma carga"),Object(n.b)("p",null,"Conectamos uma carga (um resistor, por exemplo) na bateria, e, com um mult\xedmetro, medimos as varia\xe7\xf5es de corrente em rela\xe7\xe3o ao tempo.\nEssa carga deve ser equivalente ao restante do circuito das placas."),Object(n.b)("h3",{id:"mult\xedmetro-acoplado-\xe0-pmm"},"Mult\xedmetro acoplado \xe0 PMM"),Object(n.b)("p",null,"Nesse m\xe9todo prendemos o mult\xedmetro nos conectores da bateria, de forma a monitorar a corrente. Tamb\xe9m ser\xe1 acionado um dos leds do CDHS, que ir\xe1 indicar os momentos em que o circuito est\xe1 alimentado.\nEste m\xe9todo pode ser utilizado na carga tamb\xe9m. Se utilizarmos a fonte do laborat\xf3rio (que j\xe1 indica a varia\xe7\xe3o da corrente. podemos substituir o mult\xedmetro."),Object(n.b)("h3",{id:"ina219"},"INA219"),Object(n.b)("p",null,"De forma an\xe1loga ao m\xe9todo 1.2, podemos usar o INA para monitorar o consumo de corrente. Como estamos utilizando o Teensy para transmitir/armazenar, podemos interface\xe1-lo com um computador e fazer a leitura simult\xe2nea dos dados do INA."))}u.isMDXComponent=!0},163:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return b}));var r=t(0),o=t.n(r);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var a=o.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=d(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},p=o.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||n;return t?o.a.createElement(b,c(c({ref:a},l),{},{components:t})):o.a.createElement(b,c({ref:a},l))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<n;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);