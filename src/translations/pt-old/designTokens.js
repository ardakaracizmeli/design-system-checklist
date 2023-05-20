export default {
  title: "Tokens de Design",
  description:
    "Variáveis que armazenam valores para a camada base do seu Design System, como cor e tipografia. Elas são usadas em componentes, portanto, as alterações nesse nível se refletirão em todo o sistema.",
  sections: {
    "dt-color": {
      title: "Cor",
      description:
        "Não é apenas uma maneira eficiente de exibir sua marca, mas também uma maneira eficiente de se comunicar com seus usuários. Paletas de cores criadas com um propósito em mente, em vez de apenas estética, podem te ajudar a criar padrões de design intuitivos adicionando significado à interface.",
      checklist: {
        "dt-color-a11y": {
          title: "Acessibilidade",
          description:
            "Certifique-se de ter combinações acessíveis entre as cores principais em sua paleta. Mais importante ainda, certifique-se de que as cores de fundo e de texto tenham pelo menos uma proporção de contraste padrão AA entre elas.",
        },
        "dt-color-functional": {
          title: "Cores funcionais",
          description:
            "Além das cores da sua marca, certifique-se de ter cores definidas e transformadas em variáveis ​​para funções como estados desativados, planos de fundo, ações e texto de alto contraste.",
        },
        "dt-color-dark-mode": {
          title: "Modo escuro",
          description:
            "Preparar uma versão de modo escuro de sua paleta de cores permitirá que seu Design System se adapte ao modo escuro e respeite o que seu usuário deseja ver.",
        },
        "dt-color-guidelines": {
          title: "Diretrizes",
          description:
            "Forneça diretrizes sobre como e quando usar as cores em sua paleta, o que ter em mente ao trabalhar com elas e como não usá-las.",
        },
      },
    },
    "dt-layout": {
      title: "Layout",
      description:
        "Um layout bem pensado vai longe. O uso consistente de uma grade e espaçamento facilita o entendimento da interface e do conteúdo pelos usuários.",
      checklist: {
        "dt-layout-units": {
          title: "Unidades",
          description:
            "As unidades são os blocos de construção mais granulares para o layout. Definir um conjunto de valores com incrementos consistentes (como 4, 8, 12 e 16 para um sistema de 4 pontos) fornecerá a base quando você estiver projetando suas grades e valores de espaçamento.",
        },
        "dt-layout-grid": {
          title: "Grid",
          description:
            "Todo layout deve se encaixar em uma grade que traga ordem e hierarquia para a interface. Defina uma grade separadamente para dispositivos móveis, tablet e desktop com colunas, margens e espaços para que sua interface possa se adaptar a qualquer plataforma facilmente.",
        },
        "dt-layout-breakpoints": {
          title: "Breakpoints",
          description:
            "São os pontos de quebra da interface, ou seja, tamanhos de tela e orientações aos quais sua grade se adapta.",
        },
        "dt-layout-spacing": {
          title: "Espaçamento",
          description:
            "Os ritmos horizontal e vertical desempenham um papel importante em um layout. É importante que seja fácil adicionar espaço entre os elementos da interface, independentemente de sua grade.",
        },
      },
    },
    "dt-typography": {
      title: "Tipografia",
      description:
        "A tipografia é uma das principais formas de apresentar o conteúdo em produtos. Uma hierarquia clara e estilos contrastantes em sua escala tipográfica facilitarão a leitura e ajudarão na estrutura geral do seu produto. Também é uma oportunidade para mostrar a personalidade e presença da sua marca.",
      checklist: {
        "dt-typography-mobile": {
          title: "Responsividade",
          description:
            "Dispositivos desktop geralmente podem ter tamanhos de fonte maiores em comparação com dispositivos móveis. Criar uma escala tipográfica que se adapte ao tamanho da tela ajudará a ter uma hierarquia mais significativa.",
        },
        "dt-typography-grid": {
          title: "Relação com o grid",
          description:
            "Tamanhos de fonte e espaçamento devem corresponder ao seu grid para permitir uma melhor combinação entre texto e outros elementos de UI. Um bom exemplo disso é o texto acompanhado de ícones em que as caixas delimitadoras têm a mesma altura.",
        },
        "dt-typography-readability": {
          title: "Legibilidade",
          description:
            "Otimizar o espaçamento das letras (tracking), altura da linha (leading) e comprimento da linha para sua escala tipográfica ajudará na legibilidade do texto.",
        },
        "dt-typography-performance": {
          title: "Desempenho",
          description:
            "Fontes personalizadas precisam ser baixadas antes de serem exibidas, especialmente na web, então certifique-se de ter substitutos com tempo de carregamento rápido para sua fonte. Usar fontes do sistema resolve esse problema de desempenho.",
        },
        "dt-typography-guidelines": {
          title: "Diretrizes",
          description:
            "Forneça diretrizes sobre como e quando usar as combinações em sua escala tipográfica, o que ter em mente ao trabalhar com elas e como não usá-las.",
        },
      },
    },
    "dt-iconography": {
      title: "Iconografia",
      description:
        "Ícones são símbolos que representam funcionalidade e conteúdo. Eles são especialmente úteis em interfaces de usuário, já que seu significado pode ser reconhecido e compreendido com um olhar. Embora possam ser usados apenas para decoração, seu potencial completo pode ser alcançado quando são usados ​​de maneira significativa e consistente.",
      checklist: {
        "dt-iconography-a11y": {
          title: "Acessibilidade",
          description:
            "Para ícones que transmitem um significado ou servem a uma função, ofereça um nome acessível padrão que expresse o mesmo significado ou função. Esse nome pode ser usado por leitores de tela e outras tecnologias assistivas para orientar o usuário sobre a interface. Para ícones puramente decorativos, um nome não é necessário. Se seu Design System exporta código front-end, certifique-se de que o nome do ícone esteja incluído, por exemplo, usando aria-label.",
        },
        "dt-iconography-style": {
          title: "Estilo",
          description:
            "Certifique-se de que sua família de ícones faça sentido visualmente como um todo. Escolher um estilo, como preenchido ou em linhas, e mantê-lo, trará mais previsibilidade e consistência visual.",
        },
        "dt-iconography-naming": {
          title: "Nomeação",
          description:
            "Dê nomes aos seus ícones com base em seu propósito comunicativo, em vez de como eles parecem. Por exemplo, um ícone de botão de reprodução de mídia triangular deve ser chamado de 'play', não de 'triângulo'. Você ainda pode adicionar palavras-chave relacionadas para melhorar a encontrabilidade.",
        },
        "dt-iconography-grid": {
          title: "Relação com o grid",
          description:
            "Desenhe seus ícones em uma caixa delimitadora que se ajuste bem ao seu grid. Isso torna melhor o pareamento com outros elementos da interface do usuário. Um bom exemplo disso seriam ícones com caixas delimitadoras acompanhados do texto.",
        },
        "dt-iconography-sizes": {
          title: "Tamanhos",
          description:
            "Forneça diferentes tamanhos de ícones que se relacionam com sua grade. Forneça um tamanho mínimo e remova detalhes desnecessários para seus ícones menores.",
        },
        "dt-iconography-keywords": {
          title: "Palavras-chave",
          description:
            "Adicionar palavras-chave melhora a descoberta de cada ícone e fornece uma melhor experiência para quem usar seu sistema.",
        },
        "dt-iconography-reserved": {
          title: "Ícones restritos",
          description:
            "Restringir o uso de ícones que representam ações comuns impedirá seu uso em qualquer outro contexto. Ícones do sistema para navegação, adição e exclusão são um bom exemplo.",
        },
        "dt-iconography-guidelines": {
          title: "Diretrizes",
          description:
            "Forneça diretrizes sobre como e quando usar ícones, o que ter em mente ao trabalhar com eles e como não usá-los.",
        },
      },
    },
  },
};
