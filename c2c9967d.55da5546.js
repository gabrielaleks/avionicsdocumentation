(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{143:function(a,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return l})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return u}));var o=r(3),t=r(7),s=(r(0),r(179)),n=["components"],i={id:"fresadora",title:"Uso da Fresadora PCB-Proto",sidebar_label:"Uso da Fresadora PCB-Proto"},l={unversionedId:"outros/fresadora",id:"outros/fresadora",isDocsHomePage:!1,title:"Uso da Fresadora PCB-Proto",description:"Autor: Daniel Relva | Originalmente escrito em 31/08/20",source:"@site/docs/outros/fresadora.md",slug:"/outros/fresadora",permalink:"/avionicsdocumentation/docs/outros/fresadora",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/outros/fresadora.md",version:"current",sidebar_label:"Uso da Fresadora PCB-Proto",sidebar:"Docs",previous:{title:"PS 2021.2",permalink:"/avionicsdocumentation/docs/ps/2021.2"},next:{title:"Dicas gerais",permalink:"/avionicsdocumentation/docs/outros/dicasgerais"}},c=[{value:"Programas",id:"programas",children:[]},{value:"\xcdndice",id:"\xedndice",children:[]},{value:"Roteiro (seguindo as orienta\xe7\xf5es do fabricante)",id:"roteiro-seguindo-as-orienta\xe7\xf5es-do-fabricante",children:[{value:"Bot\xf5es da Fresadora",id:"bot\xf5es-da-fresadora",children:[]},{value:"Como preparar o arquivo das PCBs",id:"como-preparar-o-arquivo-das-pcbs",children:[]},{value:"Iniciando a Fresadora",id:"iniciando-a-fresadora",children:[]},{value:"Preparando a PCB",id:"preparando-a-pcb",children:[]},{value:"Escolha da ferramenta",id:"escolha-da-ferramenta",children:[]},{value:"Desenho das trilhas e altera\xe7\xf5es da altura da ferramenta",id:"desenho-das-trilhas-e-altera\xe7\xf5es-da-altura-da-ferramenta",children:[]},{value:"Furo das placas",id:"furo-das-placas",children:[]}]},{value:"Adaptando o programa para PCBs pequenas",id:"adaptando-o-programa-para-pcbs-pequenas",children:[]},{value:"Detalhes adicionais",id:"detalhes-adicionais",children:[]}],d={toc:c};function u(a){var e=a.components,i=Object(t.a)(a,n);return Object(s.b)("wrapper",Object(o.a)({},d,i,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Autor: Daniel Relva | Originalmente escrito em 31/08/20")," "),Object(s.b)("h2",{id:"programas"},"Programas"),Object(s.b)("p",null,"Al\xe9m do Altium, dois softwares s\xe3o utilizados no processo de prototipagem: "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"PCB Proto Studio: Utilizado para gerar, a partir dos arquivos gerados no Altium, os arquivos que ser\xe3o lidos pela fresadora."),Object(s.b)("li",{parentName:"ul"},"PCB Proto Interface: Utilizado para comandar a fresadora.")),Object(s.b)("p",null,"Os dois podem ser encontrados ",Object(s.b)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1GY1ISUg-SnS6vbzS-CC62xDb-ym06xY9"},"aqui"),"."),Object(s.b)("h2",{id:"\xedndice"},"\xcdndice"),Object(s.b)("p",null,"1) Roteiro (seguindo as orienta\xe7\xf5es do fabricante)"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"a) Bot\xf5es da Fresadora"),Object(s.b)("li",{parentName:"ul"},"b) Como preparar o arquivo da PCB"),Object(s.b)("li",{parentName:"ul"},"c) Iniciando a Fresadora"),Object(s.b)("li",{parentName:"ul"},"d) Preparando a PCB"),Object(s.b)("li",{parentName:"ul"},"e) Escolha da ferramenta"),Object(s.b)("li",{parentName:"ul"},"f) Desenho das trilhas e altera\xe7\xf5es da altura da - ferramenta"),Object(s.b)("li",{parentName:"ul"},"g) Furo das placas")),Object(s.b)("p",null,"2) Adaptando o programa "),Object(s.b)("p",null,"3) Detalhes adicionais"),Object(s.b)("h2",{id:"roteiro-seguindo-as-orienta\xe7\xf5es-do-fabricante"},"Roteiro (seguindo as orienta\xe7\xf5es do fabricante)"),Object(s.b)("h3",{id:"bot\xf5es-da-fresadora"},"Bot\xf5es da Fresadora"),Object(s.b)("p",null,"A Fresadora PCB-Proto possui 3 bot\xf5es: um vermelho de emerg\xeancia; um switch on-off; e um azul.\nO Switch serve para ligar e desligar a m\xe1quina.\nO vermelho serve para desligar a fresadora em caso de urg\xeancia. Por exemplo, caso ocorra um mal funcionamento que pode comprometer o status da m\xe1quina. Para desativar o bot\xe3o, \xe9 s\xf3 gira-lo.\nO azul ir\xe1 destravar os motores ap\xf3s a tampa for fechada. Toda a vez que a tampa for aberta, deve-se apertar este bot\xe3o para que a fresa possa funcionar."),Object(s.b)("h3",{id:"como-preparar-o-arquivo-das-pcbs"},"Como preparar o arquivo das PCBs"),Object(s.b)("p",null,"  Abra o FlatCAM e v\xe1 em File->Open Gerber. Nas 3 primeiras op\xe7\xf5es, selecione os arquivos GBL (bottom layer), GTL (Top Layer) e GKO. Na 4\xb0, selecione o arquivo .txt.\nFeito isso, clique em gerar objeto e verifique se est\xe1 como foi projetado. Salve."),Object(s.b)("h3",{id:"iniciando-a-fresadora"},"Iniciando a Fresadora"),Object(s.b)("p",null,"Ligue a fresadora. Abra a PCB-Proto Interface e clique em Conectar."),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:r(314).default})),Object(s.b)("p",null,"Aperte o bot\xe3o azul e espere ela orientar os seus eixos. Feito isso, clique em ejetar para o pr\xf3ximo passo."),Object(s.b)("h3",{id:"preparando-a-pcb"},"Preparando a PCB"),Object(s.b)("p",null,"Pegue a PCB e prenda fita dupla face na sua superf\xedcie. Abra a tampa da fresadora e cole a PCB na mesa de sacrif\xedcio (Tente colar o mais perpendicular poss\xedvel). Feche a tampa, aperte o bot\xe3o azul e, no programa, mande a fresadora localizar a placa."),Object(s.b)("h3",{id:"escolha-da-ferramenta"},"Escolha da ferramenta"),Object(s.b)("p",null,"A m\xe1quina aceita alguns tipos de ferramenta: piramidal, engraving, topo reto e brocas. Sendo piramidais e engraving para desenhos, topo reto para tirar o cobre e brocas para furos."),Object(s.b)("p",null,"Para coloc\xe1-la na fresadora, voc\xea deve selecionar o tipo desejado e clicar em\nTrocar Ferramenta. Isso far\xe1 com que a m\xe1quina v\xe1 para uma posi\xe7\xe3o melhor. Ap\xf3s trocar, clique em altura de zeramento para que voc\xea possa ajustar para a melhor altura."),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:r(315).default})),Object(s.b)("p",null,"Para ajustar a altura de brocas e topos retos, basta apenas encost\xe1-los na mesa de sacrif\xedcio. "),Object(s.b)("p",null,"A piramidal \xe9 um caso \xe0 parte: antes de coloc\xe1-la na altura de zeramento, certifique-se que ela esteja mais alta que o sensor. Ao zerar a altura, deixe a piramidal o mais pr\xf3ximo poss\xedvel da mesa, mas n\xe3o encoste.\nUma dica \xe9 passar uma fita por baixo. Se arranhar, a altura est\xe1 adequada."),Object(s.b)("h3",{id:"desenho-das-trilhas-e-altera\xe7\xf5es-da-altura-da-ferramenta"},"Desenho das trilhas e altera\xe7\xf5es da altura da ferramenta"),Object(s.b)("p",null,"Carregue o arquivo e envie. Observe como est\xe1 a espessura das trilhas. "),Object(s.b)("p",null,'Caso estiverem muito rasas, edite o c\xf3digo no bloco de notas e procure pela linha "G01 Z-0.0400". Esta linha \xe9 a respons\xe1vel pela altura da ferramenta durante a fresa, especialmente o valor ap\xf3s Z. Copie ela e v\xe1 em  Editar -> Substituir. Altere 0.0400 para um valor maior e clique em \u201cSubstituir tudo\u201d.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:r(316).default})),Object(s.b)("p",null,"Salve, carregue o programa, e teste novamente. Continue alterando o c\xf3digo at\xe9 atingir uma altura satisfat\xf3ria."),Object(s.b)("h3",{id:"furo-das-placas"},"Furo das placas"),Object(s.b)("p",null,"Caso for usar apenas um lado da PCB, apenas carregue o arquivo dos furos. Caso contr\xe1rio, ser\xe1 necess\xe1ria uma etapa a mais."),Object(s.b)("p",null,"Quando se utiliza ambos os lados, o programa ir\xe1 gerar um arquivo que vai fazer 4 furos nas bordas. Carregue ele e prenda um prego em pelo menos dois desses furos. Vire a placa e coloque-a novamente na mesa, utilizando os pregos como refer\xeancia."),Object(s.b)("h2",{id:"adaptando-o-programa-para-pcbs-pequenas"},"Adaptando o programa para PCBs pequenas"),Object(s.b)("p",null,"Em alguns casos, a PCB-Proto n\xe3o ir\xe1 aceitar fresar por falta de espa\xe7o para a margem. Para contornar isso, vamos precisar alterar dois arquivos gerados ao localizar a placa. "),Object(s.b)("p",null,"Primeiro, mandaremos a fresadora localizar a placa. Ap\xf3s isso, abra os arquivos last.loc e last.map. "),Object(s.b)("p",null,"Para alterar o arquivo last.map, basta apenas abrir o arquivo Hack."),Object(s.b)("p",null,"J\xe1 o last.loc, ser\xe1 necess\xe1rio identificar os valores referentes \xe0s dimens\xf5es da placa e substitu\xed-los pelos valores desejados."),Object(s.b)("p",null,"O modelo de last.loc \xe9:\n",Object(s.b)("strong",{parentName:"p"},", "),", ",Object(s.b)("strong",{parentName:"p"},", "),", ",Object(s.b)("strong",{parentName:"p"},", aa, bb, cc, dd, ee, ff, "),'\nIgnorando os valores representados por "*" e usando um eixo (x,y) de coordenadas, teremos:\n(a,b) -> Tamanho da placa\n(c,d) -> Ponto de origem da placa\n(e,f) -> Final da placa'),Object(s.b)("h2",{id:"detalhes-adicionais"},"Detalhes adicionais"),Object(s.b)("p",null,"Furo de 1.4 - PCB Proto Studio\nDimens\xf5es 31,5 x 31,5 mm"))}u.isMDXComponent=!0},179:function(a,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return m}));var o=r(0),t=r.n(o);function s(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function n(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.push.apply(r,o)}return r}function i(a){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(a,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))}))}return a}function l(a,e){if(null==a)return{};var r,o,t=function(a,e){if(null==a)return{};var r,o,t={},s=Object.keys(a);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||(t[r]=a[r]);return t}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(o=0;o<s.length;o++)r=s[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(t[r]=a[r])}return t}var c=t.a.createContext({}),d=function(a){var e=t.a.useContext(c),r=e;return a&&(r="function"==typeof a?a(e):i(i({},e),a)),r},u=function(a){var e=d(a.components);return t.a.createElement(c.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.a.createElement(t.a.Fragment,{},e)}},b=t.a.forwardRef((function(a,e){var r=a.components,o=a.mdxType,s=a.originalType,n=a.parentName,c=l(a,["components","mdxType","originalType","parentName"]),u=d(r),b=o,m=u["".concat(n,".").concat(b)]||u[b]||p[b]||s;return r?t.a.createElement(m,i(i({ref:e},c),{},{components:r})):t.a.createElement(m,i({ref:e},c))}));function m(a,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var s=r.length,n=new Array(s);n[0]=b;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=a,i.mdxType="string"==typeof a?a:o,n[1]=i;for(var c=2;c<s;c++)n[c]=r[c];return t.a.createElement.apply(null,n)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},314:function(a,e,r){"use strict";r.r(e),e.default=r.p+"assets/images/fresadora1-41f0d7996183e38998ae433e5486998c.jpg"},315:function(a,e,r){"use strict";r.r(e),e.default=r.p+"assets/images/fresadora2-010f706e0e4ad8d7accbb961efbf8164.jpg"},316:function(a,e,r){"use strict";r.r(e),e.default=r.p+"assets/images/fresadora3-2b883d82742eabbde1d3cc22a6699aa7.jpg"}}]);