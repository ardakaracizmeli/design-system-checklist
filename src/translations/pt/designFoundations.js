export default {
  title: "Fundamentos",
  description:
    "Elementos de design e tokens são elementos que armazenam os valores fundamentais do seu sistema de design, como cores e tipografia. Eles são usados nos componentes, portanto, as alterações nesse nível terão impacto em todo o sistema.",
  sections: {
    "df-color": {
      title: "Cor",
      description:
        "Não apenas uma forma eficiente de exibir sua marca, mas também uma maneira eficaz de se comunicar com seus usuários. Paletas de cores criadas com propósito, em vez de apenas estética, podem ajudar você a desenvolver padrões de design intuitivos, adicionando significado à sua interface.",
      checklist: {
        "df-color-a11y": {
          title: "Acessibilidade",
          description:
            "Certifique-se de ter combinações acessíveis entre as cores principais da sua paleta. Além disso, é fundamental garantir que as cores de fundo e de texto tenham um índice de contraste mínimo de acordo com o padrão AA.",
        },
        "df-color-semantic": {
          title: "Cores semânticas",
          description:
            "Além das cores da sua marca, assegure-se de definir e utilizar cores em variáveis para funções como estados desativados, fundos, ações e texto de alto contraste.",
        },
        "df-color-dark-mode": {
          title: "Tema escuro",
          description:
            "Preparar uma versão de tema escuro da sua paleta de cores permitirá que o seu design system se adapte às preferências de cor do sistema operacional do usuário.",
        },
        "df-color-guidelines": {
          title: "Diretrizes",
          description:
            "Disponibilize diretrizes sobre como e quando utilizar as cores da sua paleta, incluindo informações importantes a serem consideradas ao trabalhar com elas, bem como orientações sobre como evitar usos inadequados.",
        },
      },
    },
    "df-layout": {
      title: "Layout",
      description:
        "Um layout bem planejado faz toda a diferença. Ao utilizar um grid e espaçamentos de forma consistente, você facilita a escaneabilidade da interface pelo usuário e a compreensão do conteúdo",
      checklist: {
        "df-layout-units": {
          title: "Unidades",
          description:
            "As unidades são os elementos de construção mais granulares do layout. Ao definir um conjunto de valores com incrementos consistentes (como 4, 8, 12 e 16 para um sistema de 4 pontos), você estabelece a base para projetar os valores do grid e de espaçamento.",
        },
        "df-layout-grid": {
          title: "Grid",
          description:
            "Cada layout deve se basear em um grid que traga ordem e hierarquia para a interface. Defina uma grade separadamente para dispositivos móveis, tablets e desktops, com colunas, espaçamentos e margens, para que sua interface possa se adaptar de forma ágil a qualquer plataforma.",
        },
        "df-layout-breakpoints": {
          title: "Breakpoints",
          description:
            "Pré-defina os tamanhos de tela e orientações às quais seu grid irá se adaptar.",
        },
        "df-layout-spacing": {
          title: "Espaçamento",
          description:
            "O ritmo horizontal e vertical desempenha um papel significativo em um layout. Você deve fornecer métodos diretos para adicionar espaçamento entre os elementos da interface, independentemente do seu grid.",
        },
      },
    },
    "df-typography": {
      title: "Tipografia",
      description:
        "A tipografia é uma das principais formas de apresentar conteúdo em produtos. Uma hierarquia clara e estilos contrastantes na escala tipográfica facilitarão a leitura e contribuirão para a estrutura geral do seu produto. É também uma oportunidade para visualizar a personalidade e presença da sua marca.",
      checklist: {
        "df-typography-mobile": {
          title: "Responsividade",
          description:
            "Em dispositivos desktop, é comum utilizar tamanhos de fonte maiores em comparação com dispositivos móveis. Criar uma escala tipográfica que se adapte ao tamanho da tela ajudará a estabelecer uma hierarquia e um layout mais coerentes e significativos.",
        },
        "df-typography-grid": {
          title: "Relação do grid",
          description:
            "Os tamanhos de fonte e o espaçamento devem estar alinhados com o seu grid para permitir uma melhor harmonização entre o texto e os demais elementos da interface. Um bom exemplo disso é o texto combinado com ícones que possuam caixas delimitadoras.",
        },
        "df-typography-readability": {
          title: "Legibilidade",
          description:
            "Otimizar o espaçamento entre letras (tracking), a altura das linhas (leading) e o comprimento das linhas para a sua escala tipográfica ajudará na legibilidade do texto.",
        },
        "df-typography-performance": {
          title: "Desempenho",
          description:
            "Fontes personalizadas precisam ser baixadas antes de serem exibidas, especialmente na web. Certifique-se de ter substituições adequadas e um tempo de carregamento rápido para seus recursos tipográficos. Utilizar fontes do sistema resolve esse problema de desempenho.",
        },
        "df-typography-guidelines": {
          title: "Diretrizes",
          description:
            "Disponibilize diretrizes sobre como e quando utilizar as combinações da sua escala tipográfica, incluindo informações importantes a serem consideradas ao trabalhar com elas, e orientações sobre como evitar usos inadequados.",
        },
      },
    },
    "df-elevation": {
      title: "Elevação",
      description:
        "A elevação controla a distância relativa entre duas superfícies ao longo do eixo z. No modo claro, geralmente é destacada pelo valor de sombra aplicado a uma superfície, enquanto no modo escuro, é comunicada usando o valor da cor de fundo.",
      checklist: {
        "df-elevation-shadows": {
          title: "Sombras",
          description:
            "Forneça múltiplos valores de sombra com base nos níveis de elevação suportados. Na maioria das vezes, você precisará de 3 a 4 níveis de elevação em seu produto.",
        },
        "df-elevation-background": {
          title: "Cores de fundo",
          description:
            "Cada valor de sombra deve ter uma cor de fundo associada. No modo claro, essas cores podem ser todas resolvidas para a cor branca, já que são usadas juntamente com a sombra. No modo escuro, elas serão utilizadas em vez da sombra para comunicar a distância do eixo-z de uma superfície.",
        },
        "df-elevation-z": {
          title: "Z-index",
          description:
            "Defina um sistema de valores de z-index para controlar quais elementos têm prioridade para serem renderizados acima dos outros.",
        },
      },
    },
    "df-motion": {
      title: "Motion",
      description:
        "O uso de valores de motion compartilhados proporciona uma experiência do usuário mais coerente e alinhada com a identidade da marca.",
      checklist: {
        "df-motion-easing": {
          title: "Easing",
          description:
            "Forneça funções de easing padrão usadas em todo o sistema para as transições dos componentes. Como ponto de partida, você pode usar funções de easing padrão, aceleradas e desaceleradas, que devem abranger os casos de uso comuns dos componentes.",
        },
        "df-motion-duration": {
          title: "Duração",
          description:
            "Defina múltiplos valores para a duração da animação para manter as transições de componentes consistentes em todo o produto.",
        },
        "df-motion-a11y": {
          title: "Acessibilidade",
          description:
            "Esteja atento às preferências do usuário em relação a movimentos reduzidos e adapte as animações para serem menos chamativas ou remova-as completamente, se necessário.",
        },
      },
    },
    "df-iconography": {
      title: "Iconografia",
      description:
        "Ícones são símbolos que representam funcionalidades ou conteúdos. Eles são especialmente reconhecíveis e úteis em interfaces de usuário, pois seu significado pode ser compreendido rapidamente. Embora possam ser usados apenas para decoração, seu potencial completo pode ser percebido quando são utilizados de forma significativa e consistente.",
      checklist: {
        "df-iconography-a11y": {
          title: "Acessibilidade",
          description:
            "Para ícones que transmitem um significado ou têm uma função específica, ofereça um nome acessível padrão que expresse esse mesmo significado ou função. Leitores de tela e outras tecnologias assistivas podem usar esse nome para orientar o usuário sobre a interface. Para ícones puramente decorativos, um nome não é necessário. Se o seu sistema de design exporta código front-end, certifique-se de incluir o nome do ícone, por exemplo, usando o atributo aria-label.",
        },
        "df-iconography-style": {
          title: "Estilo",
          description:
            "Certifique-se de que a sua família de ícones tenha uma coesão visual. Escolher um estilo contornado ou preenchido e mantê-lo em todo o produto resultará em uma melhor consistência visual e previsibilidade.",
        },
        "df-iconography-naming": {
          title: "Nomenclatura",
          description:
            "Atribua nomes aos seus ícones com base em seu propósito comunicativo, em vez de sua aparência. Por exemplo, um ícone de botão de reprodução em formato triangular em um player de mídia deve ser nomeado como 'play' e não como 'triângulo'. Você ainda pode adicionar palavras-chave relacionadas para melhorar a facilidade de descoberta.",
        },
        "df-iconography-grid": {
          title: "Relação com o grid",
          description:
            "Crie seus ícones dentro de uma caixa delimitadora que esteja alinhada com seu grid. Isso proporcionará uma melhor harmonia com os outros elementos da interface. Um bom exemplo disso é o uso de ícones com caixas delimitadoras combinados com texto.",
        },
        "df-iconography-keywords": {
          title: "Palavras-chave",
          description:
            "A adição de palavras-chave melhorará a capacidade de descoberta de cada ícone e proporcionará uma melhor experiência do usuário para quem estiver usando seu sistema.",
        },
        "df-iconography-reserved": {
          title: "Ícones reservados",
          description:
            "A reserva de ícones que representam ações comuns evita o uso deles em qualquer outro contexto. Ícones do sistema de navegação, adição e exclusão são bons exemplos. Isso resulta em uma experiência do usuário mais intuitiva.",
        },
        "df-iconography-guidelines": {
          title: "Diretrizes",
          description:
            "Forneça diretrizes sobre como e quando usar ícones, o que ter em mente ao trabalhar com eles e como não utilizá-los.",
        },
      },
    },
  },
};
