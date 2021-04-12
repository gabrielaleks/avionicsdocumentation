(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=(a(0),a(139)),o={id:"rec",title:"REC / RECB",sidebar_label:"REC / RECB"},i={unversionedId:"aurorav2/hardware/placas/rec",id:"aurorav2/hardware/placas/rec",isDocsHomePage:!1,title:"REC / RECB",description:"Objetivo",source:"@site/docs/aurorav2/hardware/placas/rec.md",slug:"/aurorav2/hardware/placas/rec",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/rec",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/aurorav2/hardware/placas/rec.md",version:"current",sidebar_label:"REC / RECB",sidebar:"Docs",previous:{title:"CDHS - Command Data Handling System",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/cdhs"},next:{title:"CAM",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/cam"}},l=[{value:"Objetivo",id:"objetivo",children:[{value:"Placa principal - REC",id:"placa-principal---rec",children:[]},{value:"Placa associada - RECB",id:"placa-associada---recb",children:[]}]},{value:"Componentes",id:"componentes",children:[{value:"REC",id:"rec",children:[]},{value:"RECB",id:"recb",children:[]}]},{value:"Esquem\xe1tico",id:"esquem\xe1tico",children:[{value:"REC",id:"rec-1",children:[]},{value:"REC_EPS",id:"rec_eps",children:[]}]},{value:"PCB",id:"pcb",children:[{value:"REC",id:"rec-2",children:[]},{value:"RECB",id:"recb-1",children:[]}]},{value:"Simula\xe7\xf5es",id:"simula\xe7\xf5es",children:[{value:"3v3 on | 9v off | 9v off",id:"3v3-on--9v-off--9v-off",children:[]},{value:"3v3 off | 9v on | 9v off",id:"3v3-off--9v-on--9v-off",children:[]},{value:"3v3 off | 9v off | 9v off",id:"3v3-off--9v-off--9v-off",children:[]},{value:"3v3 on | 9v on | 9v on",id:"3v3-on--9v-on--9v-on",children:[]}]},{value:"Testes no Prot\xf3tipo",id:"testes-no-prot\xf3tipo",children:[]}],b={toc:l};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"objetivo"},"Objetivo"),Object(c.b)("h3",{id:"placa-principal---rec"},"Placa principal - REC"),Object(c.b)("p",null,"A fun\xe7\xe3o desta placa \xe9 ativar os skibs e, consequentemente, ejetar os paraquedas. Para isso, um sistema que recebe que recebe 3 sinais diferentes foi elaborado. A placa cont\xe9m dois alt\xedmetros Commercial Off-The-Shelf (COTS), o StratoLogger da PerfectFlite e o PION Altimeter Lite, da Pion Labs. Ambos emitem sinais de ativa\xe7\xe3o dos paraquedas drogue - quando reconhecem o apogeu - e main - quando reconhecem a altitude pr\xe9-determinada. Concomitante a esses sinais h\xe1 os sinal que v\xeam do Teensy, localizado no CDHS. Esses sinais s\xe3o enviados quando, atrav\xe9s do processamento das informa\xe7\xf5es dos bar\xf4metros, o momento certo \xe9 reconhecido. O mesmo circuito de drive com dois MOSFETs utilizado no EPS \xe9 utilizado na REC, de modo que o sinal de 3v3 enviado pelo Teensy consegue chavear os 9V utilizados na ativa\xe7\xe3o dos skibs. Uma porta l\xf3gica or \xe9 constru\xedda atrav\xe9s de 3 diodos e um resistor pull-down, de modo que quando houver pelo menos um sinal o skib ser\xe1 explodido. O mesmo processo ocorre na ativa\xe7\xe3o dos dois paraquedas. Al\xe9m disso, h\xe1 uma chave RBF para que os dois alt\xedmetros COTS sejam ligados."),Object(c.b)("h3",{id:"placa-associada---recb"},"Placa associada - RECB"),Object(c.b)("p",null,"Como os alt\xedmetros COTS s\xe3o alimentados com 9V, outra placa foi adicionada. Essa placa, chamada de RECB, se comunica com a REC atrav\xe9s de um barramento diferente localizado no extremo oposto do conector do barramento principal. Nela est\xe3o duas baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v em paralelo e um TP4056 cuja fun\xe7\xe3o \xe9 carregar as baterias. Al\xe9m disso, a placa tamb\xe9m cont\xe9m o m\xf3dulo COTS Featherweight GPS Tracker. A antena omnidirecional deste m\xf3dulo ser\xe1 realocada de modo a ficar paralela ao corpo do foguete."),Object(c.b)("h2",{id:"componentes"},"Componentes"),Object(c.b)("h3",{id:"rec"},"REC"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Componente"),Object(c.b)("th",{parentName:"tr",align:null},"Qtd"),Object(c.b)("th",{parentName:"tr",align:null},"Obs"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"40 pins flat connector"),Object(c.b)("td",{parentName:"tr",align:null},"2"),Object(c.b)("td",{parentName:"tr",align:null},"1x Barramento avi\xf4nica, 1x Barramento RECB")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"StratoLogger"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"Alt\xedmetro COTS")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Pion Altimeter"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"Alt\xedmetro COTS")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Mini-lock Connector"),Object(c.b)("td",{parentName:"tr",align:null},"3"),Object(c.b)("td",{parentName:"tr",align:null},"1x RBF, 1x Drogue, 1x Main")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"MOSFET"),Object(c.b)("td",{parentName:"tr",align:null},"4"),Object(c.b)("td",{parentName:"tr",align:null},"2x P55N06, 2x IRF9540")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Resistor"),Object(c.b)("td",{parentName:"tr",align:null},"10"),Object(c.b)("td",{parentName:"tr",align:null},"6x 10k\u03a9, 2x 100\u03a9, 2x (10\u03a9 2w)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Diode"),Object(c.b)("td",{parentName:"tr",align:null},"3"),Object(c.b)("td",{parentName:"tr",align:null},"3x 1N4007")))),Object(c.b)("h3",{id:"recb"},"RECB"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Componente"),Object(c.b)("th",{parentName:"tr",align:null},"Qtd"),Object(c.b)("th",{parentName:"tr",align:null},"Obs"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"40 pins flat connector"),Object(c.b)("td",{parentName:"tr",align:null},"2"),Object(c.b)("td",{parentName:"tr",align:null},"Barramento REC")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"18650 Battery"),Object(c.b)("td",{parentName:"tr",align:null},"2"),Object(c.b)("td",{parentName:"tr",align:null},"3.7V")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Battery Holder"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"TP4056"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"U3V70F9"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"Bateria dos COTS")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Mini-Lock Connector"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"Carregamento da bateria")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Featherweight GPS"),Object(c.b)("td",{parentName:"tr",align:null},"1"),Object(c.b)("td",{parentName:"tr",align:null},"GPS COTS")))),Object(c.b)("h2",{id:"esquem\xe1tico"},"Esquem\xe1tico"),Object(c.b)("h3",{id:"rec-1"},"REC"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(307).default})),Object(c.b)("h3",{id:"rec_eps"},"REC_EPS"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(308).default})),Object(c.b)("h2",{id:"pcb"},"PCB"),Object(c.b)("h3",{id:"rec-2"},"REC"),Object(c.b)("h4",{id:"vers\xe3o-pc104"},"Vers\xe3o PC104"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(309).default})),Object(c.b)("h4",{id:"vers\xe3o-do-prot\xf3tipo"},"Vers\xe3o do prot\xf3tipo"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(310).default})),Object(c.b)("h3",{id:"recb-1"},"RECB"),Object(c.b)("h4",{id:"vers\xe3o-pc104-1"},"Vers\xe3o PC104"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(311).default})),Object(c.b)("h4",{id:"vers\xe3o-do-prot\xf3tipo-1"},"Vers\xe3o do prot\xf3tipo"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(312).default})),Object(c.b)("h2",{id:"simula\xe7\xf5es"},"Simula\xe7\xf5es"),Object(c.b)("h3",{id:"3v3-on--9v-off--9v-off"},"3v3 on | 9v off | 9v off"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(313).default}),"\n",Object(c.b)("img",{alt:"img",src:a(314).default}),"\n",Object(c.b)("img",{alt:"img",src:a(315).default})),Object(c.b)("h3",{id:"3v3-off--9v-on--9v-off"},"3v3 off | 9v on | 9v off"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(316).default}),"\n",Object(c.b)("img",{alt:"img",src:a(317).default}),"\n",Object(c.b)("img",{alt:"img",src:a(318).default})),Object(c.b)("h3",{id:"3v3-off--9v-off--9v-off"},"3v3 off | 9v off | 9v off"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(319).default}),"\n",Object(c.b)("img",{alt:"img",src:a(320).default}),"\n",Object(c.b)("img",{alt:"img",src:a(321).default})),Object(c.b)("h3",{id:"3v3-on--9v-on--9v-on"},"3v3 on | 9v on | 9v on"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(322).default}),"\n",Object(c.b)("img",{alt:"img",src:a(323).default}),"\n",Object(c.b)("img",{alt:"img",src:a(324).default})),Object(c.b)("h2",{id:"testes-no-prot\xf3tipo"},"Testes no Prot\xf3tipo"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Pendente"))))}d.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,p=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return a?r.a.createElement(p,i(i({ref:t},b),{},{components:a})):r.a.createElement(p,i({ref:t},b))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},307:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_schem-25775177b79cfe2d66287affc2c0f514.jpg"},308:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/recb_schem-13b5d25f7a24f4c47711ef209e5314c7.jpg"},309:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_104pcb-fdea2178751ed8c77420c87ae2fd73d1.jpg"},310:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_87pcb-5eb31622b7be229b9d0d2c9b50167a5c.jpg"},311:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/recb_104pcb-fb7d4b59e0e836bceac3e4e9df922b47.jpg"},312:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/recb_87pcb-1253ad4022a64b71b39e80c1f175e8aa.jpg"},313:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_3v3on_i-e80e262ef9fc829c1392c65e38a284f9.png"},314:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_3v3on_v-d88f0bd4a6c0150891689b1b9d3c3d60.png"},315:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_3v3on_w-947de29a4be9058747fe97d4b3784865.png"},316:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_9von_i-552ec73df35c33a2615a970821c5c9f0.png"},317:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_9von_v-d6ecfbaf255730bde70a986577a65f11.png"},318:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_9von_w-0abd6771c616164190e167d3c7fe5d8b.png"},319:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_alloff_i-be27950e605afc5fbf5dfaa83a264f7d.png"},320:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_alloff_v-fc6c9c7a45aab639215c7e9fd1614def.png"},321:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_alloff_w-eaa2870d2337ebf7ffd7d18339a87cb5.png"},322:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_allon_i-2e6655594ab521da08bbe42cded4c22b.png"},323:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_allon_v-73fe7dfb7b3166fd7b00ac7ea836dcd9.png"},324:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rec_allon_w-4ccef1e54c2a8096263e214da069e9f7.png"}}]);