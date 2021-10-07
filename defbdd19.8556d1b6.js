(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var r=t(3),n=t(7),o=(t(0),t(179)),i=["components"],l={id:"drc",title:"Design Rule Check (DRC)",sidebar_label:"Design Rule Check (DRC)"},c={unversionedId:"aurorav2/hardware/altium/drc",id:"aurorav2/hardware/altium/drc",isDocsHomePage:!1,title:"Design Rule Check (DRC)",description:"Autor: Gabriel Aleksandravicius | Originalmente escrito em 17/08/20",source:"@site/docs/aurorav2/hardware/altium/drc.md",slug:"/aurorav2/hardware/altium/drc",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/altium/drc",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/aurorav2/hardware/altium/drc.md",version:"current",sidebar_label:"Design Rule Check (DRC)",sidebar:"Docs",previous:{title:"Tutorial",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/altium/tutorial"},next:{title:"Consumo do Sistema",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/consumo"}},s=[{value:"Criando as regras no Altium",id:"criando-as-regras-no-altium",children:[]},{value:"Realizando o Design Rule Checking",id:"realizando-o-design-rule-checking",children:[]},{value:"Regras Importantes",id:"regras-importantes",children:[{value:"<em>Manufacturing \xbb Hole Size</em>",id:"manufacturing-\xbb-hole-size",children:[]},{value:"<em>Routing \xbb Routing Via Style</em>",id:"routing-\xbb-routing-via-style",children:[]},{value:"<em>Manufacturing \xbb Minimum Annular Ring</em>",id:"manufacturing-\xbb-minimum-annular-ring",children:[]},{value:"<em>Manufacturing \xbb Hole to Hole Clearance</em>",id:"manufacturing-\xbb-hole-to-hole-clearance",children:[]},{value:"<em>Manufacturing \xbb Minimum Solder Mask Sliver</em>",id:"manufacturing-\xbb-minimum-solder-mask-sliver",children:[]},{value:"<em>Electrical \xbb Clearance</em>",id:"electrical-\xbb-clearance",children:[]},{value:"<em>Manufacturing \xbb Silk To Solder Mask Clearance</em>",id:"manufacturing-\xbb-silk-to-solder-mask-clearance",children:[]},{value:"<em>Manufacturing \xbb Board Outline Clearance</em>",id:"manufacturing-\xbb-board-outline-clearance",children:[]},{value:"<em>Mask \xbb Solder Mask Expansion</em>",id:"mask-\xbb-solder-mask-expansion",children:[]},{value:"<em>Routing \xbb Width</em>",id:"routing-\xbb-width",children:[]}]},{value:"Anexo I - PAR\xc2METROS DRC PARA FRESADORA PCB-PROTO-1S",id:"anexo-i---par\xe2metros-drc-para-fresadora-pcb-proto-1s",children:[]}],m={toc:s};function u(e){var a=e.components,l=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},m,l,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Autor: Gabriel Aleksandravicius | Originalmente escrito em 17/08/20")),Object(o.b)("p",null,"As design rules s\xe3o limita\xe7\xf5es impostas para uma PCB (Printed Circuit Board) durante sua confec\xe7\xe3o.  Ele existe para impedir que os criadores das placas cometam erros, tornando desse modo o projeto mais confi\xe1vel. \xc9 chamado Design Rule Checking (DRC) o processo de verifica\xe7\xe3o dessas limita\xe7\xf5es, ou seja, checa-se se o projeto est\xe1 de acordo com as regras f\xedsicas e l\xf3gicas previamente estabelecidas como necess\xe1rias para um projeto funcional."),Object(o.b)("p",null,"O software que utilizamos para a cria\xe7\xe3o e edi\xe7\xe3o de nossas PCBs, Altium Designer 19, possui fun\xe7\xf5es para a cria\xe7\xe3o das regras e posterior an\xe1lise do projeto. O tutorial abaixo foi feito baseado na documenta\xe7\xe3o das ",Object(o.b)("a",{parentName:"p",href:"https://www.altium.com/documentation/altium-designer/constraining-the-design-design-rules-ad?version=19.0"},"Design Rules"),", do ",Object(o.b)("a",{parentName:"p",href:"https://www.altium.com/documentation/altium-designer/pcb-dlg-form-designrulespcb-rules-and-constraints-editor-ad?version=19.0"},"editor de Regras e Limita\xe7\xf5es")," e do ",Object(o.b)("a",{parentName:"p",href:"https://www.altium.com/documentation/altium-designer/design-rule-checking-ad?version=19.0"},"Design Checking"),"."),Object(o.b)("h2",{id:"criando-as-regras-no-altium"},"Criando as regras no Altium"),Object(o.b)("p",null,"As regras de design s\xe3o criadas e editadas em ",Object(o.b)("em",{parentName:"p"},"Design \xbb Rules\u2026")," . A caixa de di\xe1logo que abrir ter\xe1 duas se\xe7\xf5es. Na esquerda est\xe1 a \xe1rvore de op\xe7\xf5es que representam as diferentes categorias em que regras podem ser aplicadas (ex: roteamento). Na direita est\xe3o as informa\xe7\xf5es referentes \xe0 categoria selecionada. Essas informa\xe7\xf5es s\xe3o: o nome da regra, sua prioridade (sendo 1 a maior), seu estado (se est\xe1 ativa ou n\xe3o), seu tipo, sua categoria, seu escopo e seus atributos."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(352).default}),"\n",Object(o.b)("em",{parentName:"p"},"Editor dispon\xedvel no Altium para a cria\xe7\xe3o e edi\xe7\xe3o de regras de design da PCB")),Object(o.b)("p",null,"Para criar uma nova regra, selecione a categoria que ela dever\xe1 fazer parte na se\xe7\xe3o esquerda e clique no bot\xe3o new rule. A caixa de di\xe1logo que aparecer te permite editar as caracter\xedsticas da regra. Aqui voc\xea ir\xe1:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Nomear a regra"),Object(o.b)("li",{parentName:"ul"},"Adicionar um coment\xe1rio (descrevendo as especificidades da regra)"),Object(o.b)("li",{parentName:"ul"},"Definir um ID \xfanico para a regra - \xfatil quando ela \xe9 criada a partir do arquivo do .schdoc. Dessa maneira a regra ser\xe1 importada para o .pcbdoc, permitindo n\xe3o s\xf3 que ela seja usada a partir desse arquivo como que quaisquer mudan\xe7as feitas em seus par\xe2metros sejam atualizadas automaticamente nos dois arquivos. Voc\xea n\xe3o precisa definir o ID manualmente, ele \xe9 criado automaticamente."),Object(o.b)("li",{parentName:"ul"},"Ver as test queries, que mostram o n\xfamero de objetos afetados pela regra."),Object(o.b)("li",{parentName:"ul"},"Definir o escopo da regra, ou seja, onde ela ser\xe1 aplicada."),Object(o.b)("li",{parentName:"ul"},"Definir as restri\xe7\xf5es que essa regra ter\xe1.")),Object(o.b)("p",null,"Exemplo: Suponhamos que voc\xea queira criar uma regra que se aplique \xe0s trilhas dos pinos de 9V sabendo que a corrente m\xe1xima que passar\xe1 por elas ser\xe1 de 7A. Existe uma espessura ideal para as trilhas em fun\xe7\xe3o da corrente, temperatura e espessura do cobre - assunto que discutiremos mais \xe0 frente. Para este exemplo vamos assumir a temperatura m\xe1xima de 10 \xbaC. Isso corresponde a 2.8mm de espessura. Portanto, devemos criar no Altium uma regra desse tipo: "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(353).default})),Object(o.b)("p",null,"Observa\xe7\xe3o: Caso a restri\xe7\xe3o que voc\xea precisa n\xe3o exista na lista disponibilizada, voc\xea pode criar sua pr\xf3pria ao clicar em ",Object(o.b)("em",{parentName:"p"},"Where The Object Matches \xbb Custom Query"),":"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(354).default})),Object(o.b)("p",null,"Aqui voc\xea consegue definir suas regras mais livremente. Vamos supor que queremos que a limita\xe7\xe3o de antes seja aplicada apenas a trilhas da camada superior da PCB. Podemos ent\xe3o escrever:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(355).default})),Object(o.b)("p",null,"Uma ferramenta \xfatil nesse processo \xe9 a Query Helper, que nos auxilia na escrita da regra ao nos mostrar os termos e operadores que o Altium utiliza. Voc\xea pode ver mais sobre isso na ",Object(o.b)("a",{parentName:"p",href:"https://www.altium.com/documentation/altium-designer/scoping-design-rules-ad?version=19.0"},"documenta\xe7\xe3o")," do Altium.\n\xc9 muito importante para o funcionamento correto das nossas regras que utilizemos corretamente o sistema de prioridades. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(356).default})),Object(o.b)("p",null,"Nossa nova regra est\xe1 com uma prioridade menor que a regra padr\xe3o para trilhas - que determina espessura de 0.254mm - e, portanto, n\xe3o ser\xe1 aplicada. Para corrigir isso devemos acessar a janela de edi\xe7\xe3o de prioridades, que est\xe1 marcada com uma seta vermelha na imagem acima. Nessa janela n\xf3s podemos aumentar e diminuir prioridades de regras espec\xedficas:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(357).default})),Object(o.b)("p",null,"Outra quest\xe3o importante \xe9 a verifica\xe7\xe3o da aplica\xe7\xe3o correta das regras aos objetos que elas deveriam limitar. O Altium nos fornece dois m\xe9todos para isso:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a) Podemos selecionar o objeto e verificar as regras que se aplicam a ele. Clique no objeto que voc\xea deseja com o bot\xe3o direito do mouse e selecione a op\xe7\xe3o Applicable Unary Rules. Voc\xea ver\xe1 todas as regras de design aplic\xe1veis a este objeto e elas est\xe3o sendo aplicadas ou n\xe3o. Por exemplo, se seguirmos este procedimento para uma trilha que criarmos a partir de um pino de 9V:")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(358).default})),Object(o.b)("p",null,"A cruz vermelha em uma das regras do item ",Object(o.b)("em",{parentName:"p"},"Width Constraint")," mostra que ela foi substitu\xedda por outra que tem maior prioridade.\nTamb\xe9m podemos escolher a op\xe7\xe3o ",Object(o.b)("em",{parentName:"p"},"Applicable Binary Rules")," e verificar quais regras se aplicam entre dois objetos posicionados."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"b) Podemos selecionar a regra e verificar quais objetos se submetem a ela. Isso pode ser acessado atrav\xe9s do PCB Rules and Violations, que pode ser acessado atrav\xe9s de View \xbb Panels \xbb PCB Rules And Violations. Nesse painel, al\xe9m de todas as regras existentes, podemos tamb\xe9m checar se alguma viola\xe7\xe3o est\xe1 ocorrendo. Para verificar em que objetos determinada regra est\xe1 aplicada, selecione a regra e clique em apply. Os objetos que que utilizam a regra ser\xe3o selecionados.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(359).default})),Object(o.b)("p",null,"Devemos, por fim, gerar um ",Object(o.b)("em",{parentName:"p"},"Design Rules Report"),". Esse relat\xf3rio pode conter todas as categorias de regras, alguma categoria espec\xedfica ou apenas uma regra espec\xedfica. Para gerar o relat\xf3rio primeiro acesse ",Object(o.b)("em",{parentName:"p"},"Design \xbb Rules\u2026")," . A seguir, selecione o escopo daquilo que voc\xea quer gerar o relat\xf3rio com o bot\xe3o direito do mouse e escolha ",Object(o.b)("em",{parentName:"p"},"Report\u2026")," . Uma p\xe1gina contendo todas as informa\xe7\xf5es pertinentes da(s) regra(s) ser\xe1 mostrada. Exemplo:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(360).default}),"\n",Object(o.b)("em",{parentName:"p"},"Gerando um relat\xf3rio da categoria \u2018Routing\u2019, que cont\xe9m nosso exemplo da trilha de 9V")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(361).default}),"\n",Object(o.b)("em",{parentName:"p"},"Relat\xf3rio gerado. Podemos imprimi-lo ou export\xe1-lo como PDF.")),Object(o.b)("h2",{id:"realizando-o-design-rule-checking"},"Realizando o Design Rule Checking"),Object(o.b)("p",null,"Agora que suas regras personalizadas j\xe1 foram criadas podemos executar o ",Object(o.b)("em",{parentName:"p"},"Design Rule Checking"),". Essa ferramenta do Altium - acessada atrav\xe9s de ",Object(o.b)("em",{parentName:"p"},"Tools \xbb Design Rule Check\u2026")," - nos permite checar o projeto inteiro. Qualquer viola\xe7\xe3o existente aparecer\xe1 na aba ",Object(o.b)("em",{parentName:"p"},"Messages")," e no ",Object(o.b)("em",{parentName:"p"},"Report File")," que \xe9 poss\xedvel gerar com a ferramenta.\nPodemos definir as caracter\xedsticas do relat\xf3rio em ",Object(o.b)("em",{parentName:"p"},"Report Options")," e determinar quais regras ficar\xe3o ativadas/desativadas no modo Online e no modo Batch."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(362).default}),"\n",Object(o.b)("em",{parentName:"p"},"Janela do Design Rule Checker. Aqui voc\xea configura o relat\xf3rio que ser\xe1 gerado ap\xf3s executar o Design Rule Check")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(363).default}),"\n",Object(o.b)("em",{parentName:"p"},"Janela do Design Rule Checker. Aqui voc\xea configura quais regras est\xe3o no modo Online e quais est\xe3o no modo Batch")),Object(o.b)("p",null,"O modo online \xe9 executado em tempo real, portanto caso alguma viola\xe7\xe3o seja cometida o usu\xe1rio \xe9 avisado imediatamente. Por outro lado, o modo batch deve ser executado manualmente. O output dele \xe9 obtido quando voc\xea seleciona Run Design Rule Check\u2026 no canto inferior esquerdo da caixa de di\xe1logo (as viola\xe7\xf5es aparecem na aba Messages e, caso o usu\xe1rio queira, no relat\xf3rio)."),Object(o.b)("h2",{id:"regras-importantes"},"Regras Importantes"),Object(o.b)("p",null,"Agora que j\xe1 sabemos como criar regras e executar a checagem de viola\xe7\xf5es, veremos quais regras s\xe3o essenciais. Antes, vejamos duas regras que s\xe3o importantes no momento da encomenda da placa:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Board Thickness")," (espessura da placa): 1.6 mm (de acordo com o ",Object(o.b)("a",{parentName:"p",href:"https://pc104.org/wp-content/uploads/2015/02/PC104_Spec_v2_6.pdf"},"padr\xe3o PC104"),")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Copper Weight")," (espessura do cobre): 1 oz "),Object(o.b)("p",null,"Para muitas das regras podemos usar como refer\xeancia as (informa\xe7\xf5es fornecidas)","[https://jlcpcb.com/capabilities/Capabilities]"," pela JLCPCB, a principal fabricante de PCBs da equipe. Para outras, vamos nos basear naquilo que \xe9 importante para o projeto. Vejamos quais s\xe3o os par\xe2metros para regras em fun\xe7\xe3o do local em que elas podem ser definidas dentro de ",Object(o.b)("em",{parentName:"p"},"Rules and Constraints"),"."),Object(o.b)("h3",{id:"manufacturing-\xbb-hole-size"},Object(o.b)("em",{parentName:"h3"},"Manufacturing \xbb Hole Size")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Drill Hole Size")," (tamanho do furo mec\xe2nico):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"0.20 mm - 6.30 mm\t")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(364).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Via Hole Size")," (tamanho do furo da via):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"M\xednimo: 0.3 mm\t")),Object(o.b)("h3",{id:"routing-\xbb-routing-via-style"},Object(o.b)("em",{parentName:"h3"},"Routing \xbb Routing Via Style")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Via Hole Size")," (tamanho da via):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tamanho m\xednimo: 0.3 mm")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Via Diameter")," (di\xe2metro da via):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Di\xe2metro m\xednimo: 0.6 mm")),Object(o.b)("h3",{id:"manufacturing-\xbb-minimum-annular-ring"},Object(o.b)("em",{parentName:"h3"},"Manufacturing \xbb Minimum Annular Ring")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Minimum Annular Ring"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tamanho m\xednimo (via): 0.13 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(365).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tamanho m\xednimo (pad): 0.3 mm (Custom Query: IsPad)")),Object(o.b)("p",null,"(Bom tamanho para as vias: Di\xe2metro 0.6 mm e Hole Size 0.3 mm)"),Object(o.b)("h3",{id:"manufacturing-\xbb-hole-to-hole-clearance"},Object(o.b)("em",{parentName:"h3"},"Manufacturing \xbb Hole to Hole Clearance")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hole to hole clearance"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hole to Hole Clearance: 0.54 mm (Custom Query nos dois objetos: IsPad) ")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(366).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Via to Via Clearance: 0.254 mm (Custom Query nos dois objetos: IsVia)")),Object(o.b)("h3",{id:"manufacturing-\xbb-minimum-solder-mask-sliver"},Object(o.b)("em",{parentName:"h3"},"Manufacturing \xbb Minimum Solder Mask Sliver")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pad to Pad Clearance"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Minimum Solder Mask Sliver: 0.54mm (Pad Class and Layer > All Pads, Multi-Layer)")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(367).default})),Object(o.b)("h3",{id:"electrical-\xbb-clearance"},Object(o.b)("em",{parentName:"h3"},"Electrical \xbb Clearance")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Via to Track"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Via x Track: 0.254 mm")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PTH to Track"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"TH Pad x Track: 0.33 mm")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NPTH to Track")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hole x Track: 0.254 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(368).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"SMD Pad to SMD Pad"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SMD Pad x SMD Pad: 0.127 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(369).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Minimum Spacing"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Track x Track: 0.2 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(370).default})),Object(o.b)("h3",{id:"manufacturing-\xbb-silk-to-solder-mask-clearance"},Object(o.b)("em",{parentName:"h3"},"Manufacturing \xbb Silk To Solder Mask Clearance")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pad To Silkscreen"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Silkscreen To Object Minimum Clearance: 0.15 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(371).default})),Object(o.b)("h3",{id:"manufacturing-\xbb-board-outline-clearance"},Object(o.b)("em",{parentName:"h3"},"Manufacturing \xbb Board Outline Clearance")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Trace to Outline"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Minimum Clearance: 0.2 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(372).default})),Object(o.b)("h3",{id:"mask-\xbb-solder-mask-expansion"},Object(o.b)("em",{parentName:"h3"},"Mask \xbb Solder Mask Expansion")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Trace to Outline"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Expansion Top: 0.05 mm")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(373).default})),Object(o.b)("h3",{id:"routing-\xbb-width"},Object(o.b)("em",{parentName:"h3"},"Routing \xbb Width")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Minimum Trace Width")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Min. Width: A espessura da trilha deve mudar em fun\xe7\xe3o da corrente que passa por ela. Al\xe9m disso, o ideal \xe9 levar em considera\xe7\xe3o o aumento de temperatura esperado na trilha. Utilize a imagem abaixo para determinar a espessura.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(374).default})),Object(o.b)("p",null,"Caso o aumento de temperatura seja de 10 \xbaC (normal para a maior parte das aplica\xe7\xf5es):"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(375).default})),Object(o.b)("p",null,"Todas as regras comentadas foram utilizadas na confec\xe7\xe3o das placas do Aurora v2. Elas podem ser encontradas ",Object(o.b)("a",{parentName:"p",href:"https://drive.google.com/drive/u/1/folders/1NlARz-iSZpqst5JnE4Xp6-IWxfrMm1uJ"},"nesta pasta")," no arquivo chamado ",Object(o.b)("em",{parentName:"p"},"StandardRules.RUL"),". Para inclu\xed-las no seu projeto basta abrir o editor de regras e clicar com o bot\xe3o esquerdo em ",Object(o.b)("em",{parentName:"p"},"Design Rules \xbb Import Rules"),". Depois \xe9 s\xf3 selecionar o arquivo baixado."),Object(o.b)("h2",{id:"anexo-i---par\xe2metros-drc-para-fresadora-pcb-proto-1s"},"Anexo I - PAR\xc2METROS DRC PARA FRESADORA PCB-PROTO-1S"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tabela"),": Caracter\xedsticas t\xe9cnicas limites da Fresadora PCB Proto 1S."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Par\xe2metro"),Object(o.b)("th",{parentName:"tr",align:null},"M\xednimo"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Trilha entre Trilha"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm (8 mils)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Furo"),Object(o.b)("td",{parentName:"tr",align:null},"0.3 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Board Thickness"),Object(o.b)("td",{parentName:"tr",align:null},"1.6 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Copper Weight"),Object(o.b)("td",{parentName:"tr",align:null},"1 oz")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Maximum Dimensions"),Object(o.b)("td",{parentName:"tr",align:null},"150 x 200 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Maximum Layers"),Object(o.b)("td",{parentName:"tr",align:null},"2 (top + bottom)")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Par\xe2metro"),Object(o.b)("th",{parentName:"tr",align:null},"M\xednimo"),Object(o.b)("th",{parentName:"tr",align:null},"Recomendado"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Drill Hole Size"),Object(o.b)("td",{parentName:"tr",align:null},"0.3 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Via Hole Size"),Object(o.b)("td",{parentName:"tr",align:null},"0.3 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Via Diameter"),Object(o.b)("td",{parentName:"tr",align:null},"0.7 mm"),Object(o.b)("td",{parentName:"tr",align:null},"1.0 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Minimum Annular Ring"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Hole to Hole Clearance"),Object(o.b)("td",{parentName:"tr",align:null},"0.6 mm"),Object(o.b)("td",{parentName:"tr",align:null},"1.6 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Pad to Pad Clearance"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Via to Track"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.8 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"PTH to Track"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.8 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"NPTH to Track"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.8 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"SMD Pad to SMD Pad"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Pad to Silkscreen"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Trace to Outline Clearance"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Minimum Spacing Track to Track"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Minimum Trace Width"),Object(o.b)("td",{parentName:"tr",align:null},"0.2 mm (8 mils)"),Object(o.b)("td",{parentName:"tr",align:null},"0.4 mm (16 mils)")))))}u.isMDXComponent=!0},179:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return p}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),m=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=m(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,p=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?n.a.createElement(p,l(l({ref:a},s),{},{components:t})):n.a.createElement(p,l({ref:a},s))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},352:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc1-7858e46e4b68238a8763d6f22da3ea82.png"},353:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc2-52783fdefe01865522d8174c22bf6f61.png"},354:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc3-ed8bc2adff07084db717442c862b0a86.png"},355:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc4-177a1f1633f5176a547a0af066e52ca5.png"},356:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc5-8e757d80fef9d5e0114e9aff7c79f63e.png"},357:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc6-68ed48fff9de0cf9aec91f03d673950d.png"},358:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc7-07fce93aeec0be3ae81030029f808f97.png"},359:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc8-e74e803b9985535cdc174c1a788c8787.png"},360:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc9-63f0f473267c63d122558bdd8efd30b4.png"},361:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc10-7c041427268564725805e5de3f3d23da.png"},362:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc11-5393a3a19da8ea365fcbaf4056f9ae88.png"},363:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc12-d8301f6f6f01176c31bb500e3dfa0b17.png"},364:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc13-c52bd52e5c6fd9f34eafbc14162e0896.png"},365:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc14-63868549a62e8da6db3d0faa5d1e8d20.png"},366:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc15-04c9360eb48767d459f73729486b44c9.png"},367:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc16-846cb276a4399c5187e2794543fa68da.png"},368:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc17-5255c42d8a20819f519c55c3c4678393.png"},369:function(e,a,t){"use strict";t.r(a),a.default="data:image/png;base64,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"},370:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc21-a1e0b5454cfdd726e3f8dca3c9e3bdc4.png"},371:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc19-28646b425f87758a8757abf6da790a2b.png"},372:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc20-d99a9f7ccee252bc7316184a5816afac.png"},373:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc22-ce300e6b825720b93998b5ba02a240bc.png"},374:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc23-ff433563f858eca61aa713de0b9a61af.png"},375:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/drc24-64e30a11563e56ed5676734af36df768.png"}}]);