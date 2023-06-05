export default {
  title: "Componentes principais",
  description:
    "Os componentes são os principais elementos de construção das interfaces de usuário. Criar uma biblioteca de componentes reutilizáveis aprimora o fluxo de trabalho de desenvolvimento do seu produto, reduzindo a dívida de design e tecnologia e acelerando o processo. Os componentes centrais não podem ser decompostos em partes menores sem perder seu significado.",
  sections: {
    "c-accordion": {
      title: "Accordion",
      description:
        "O Accordion alterna a visibilidade das regiões de conteúdo quando o elemento de acionamento é pressionado.",
      checklist: {
        "c-accordion-active": {
          title: "Estado ativo",
          description:
            "O Accordion possui dois estados para alternar a visibilidade do seu conteúdo. Se um acionador de accordion exibe um ícone, ele deve ser visualmente distinto entre os estados.",
        },
        "c-accordion-composition": {
          title: "Composição",
          description:
            "A área de conteúdo deve ser flexível o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-accordion-transition": {
          title: "Transição de alternância",
          description:
            "Adicione uma animação sutil para ajudar os usuários a compreender e acompanhar o comportamento do componente ao alternar entre os estados.",
        },
        "c-accordion-a11y-relation": {
          title: "Relação entre o conteúdo e o acionador",
          description:
            "Quando a área de conteúdo recebe foco por meio de tecnologias assistivas, ela deve anunciar um contexto adicional do elemento de acionamento.",
        },
      },
    },
    "c-alert": {
      title: "Alerta",
      description:
        "Os alertas exibem uma mensagem proeminente sobre toda a página ou uma área específica dela.",
      checklist: {
        "c-alert-colors": {
          title: "Cores",
          description:
            "É fundamental diferenciar a aparência visual do alerta com base em sua função. Se estiver utilizando cores de fundo para diferenciá-los, assegure-se de que haja um contraste suficiente em relação ao conteúdo exibido dentro do alerta.",
        },
        "c-alert-title": {
          title: "Suporte a titulo",
          description:
            "Oferecer suporte à título pode ajudar o usuário a compreender o contexto da mensagem mais rapidamente, especialmente em casos de mensagens de alerta mais longas.",
        },
        "c-alert-icon": {
          title: "Suporte a ícones",
          description:
            "O ícone ilustra o papel do alerta e oferece uma dica adicional para auxiliar pessoas com daltonismo a compreendê-lo.",
        },
        "c-alert-actions": {
          title: "Ações suplementares",
          description:
            "As ações nos alertas devem estar relacionadas ao seu texto e proporcionar uma forma de reagir à mensagem enviada ao usuário.",
        },
        "c-alert-responsive": {
          title: "Responsividade",
          description:
            "Os alertas podem se ajustar ao tamanho da tela, geralmente ocupando a largura total em dispositivos móveis para economizar espaço.",
        },
        "c-alert-a11y-roles": {
          title: "Role de acessibilidade",
          description:
            "Ao utilizar tecnologias assistivas, os alertas devem anunciar corretamente sua role de acessibilidade.",
        },
      },
    },
    "c-avatar": {
      title: "Avatar",
      description:
        "Miniatura de uma foto do usuário, organização ou uma representação visual de outros tipos de conteúdo.",
      checklist: {
        "c-avatar-image": {
          title: "Imagem",
          description:
            "Os avatares devem mascarar uma imagem em sua forma e funcionar com qualquer tamanho de imagem, uma vez que podem obter essa imagem de fontes de dados desconhecidas.",
        },
        "c-avatar-image-fallback": {
          title: "Recurso alternativo de imagem",
          description:
            "Quando não for fornecida uma imagem ou ocorrer um erro ao carregar a imagem, os avatares devem ser capazes de exibir um recurso alternativo com uma imagem, ícone ou iniciais de texto diferentes.",
        },
        "c-avatar-sizes": {
          title: "Tamanhos",
          description:
            "Há vários contextos nos quais é necessário utilizar um avatar, exigindo diferentes tamanhos para o componente. Em projetos comuns, é recomendado utilizar pelo menos 2-3 tamanhos distintos e garantir que haja pelo menos um tamanho pequeno disponível.",
        },
        "c-avatar-colors": {
          title: "Cores",
          description:
            "Quando utilizado sem uma imagem, o avatar deve ter uma cor de fundo aplicada à sua forma. Certifique-se de que os ícones e o texto possuam um contraste adequado em relação ao fundo, seguindo o padrão WCAG AA.",
        },
        "c-avatar-shape": {
          title: "Formas",
          description:
            "Os avatares podem ter suporte a múltiplas formas, como quadrado ou círculo, dependendo da área em que são utilizados.",
        },
        "c-avatar-group": {
          title: "Grupos de avatares",
          description:
            "Múltiplos avatares podem ser empilhados juntos para representar um grupo de usuários.",
        },
        "c-avatar-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "O avatar deve fornecer uma label acessível quando utilizado para imagens não decorativas e não possui uma representação textual de seus conteúdos.",
        },
      },
    },
    "c-badge": {
      title: "Badge",
      description:
        "Elemento compacto que representa o status de um objeto ou entrada do usuário.",
      checklist: {
        "c-badge-colors": {
          title: "Cores",
          description:
            "Os badges podem desempenhar várias funções em seu produto, e ter uma cor pré-definida para cada função deve ajudar os usuários a entender seu significado. Ao alterar as cores, certifique-se de que o texto tenha uma proporção de contraste adequada com o fundo, de acordo com o padrão WCAG AA.",
        },
        "c-badge-variants": {
          title: "Variantes",
          description:
            "Com base no local em que os badges são exibidos no produto, é possível oferecer várias variantes do componente. Por exemplo, é possível ter alguns badges com um fundo desbotado para evitar chamar muita atenção.",
        },
        "c-badge-sizes": {
          title: "Tamanhos",
          description:
            "Os badges podem ser apresentados em vários tamanhos, dependendo de onde são utilizados. Por exemplo, você pode usar o tamanho grande em páginas de marketing.",
        },
        "c-badge-icon-support": {
          title: "Suporte a ícones",
          description:
            "Para ilustrar melhor o significado de um badge, você pode exibir um ícone ao lado do texto. Certifique-se de que, para badges pequenos, o conteúdo do ícone ainda seja reconhecível.",
        },
        "c-badge-dismiss": {
          title: "Ação de descarte",
          description:
            "Os badges podem ser usados como uma forma dinâmica de exibir valores selecionados, e deve haver uma maneira de descartá-los.",
        },
        "c-badge-empty": {
          title: "Estado vazio",
          description:
            "Os distintivos podem ser utilizados sem nenhum conteúdo de texto interno. Isso geralmente requer a alteração de seus estilos para preservar a forma correta.",
        },
        "c-badge-positioning": {
          title: "Posicionamento",
          description:
            "Quando usado como um distintivo de status, como um indicador de notificação, você deve ser capaz de posicioná-lo em relação a esses elementos.",
        },
      },
    },
    "c-button": {
      title: "Botão",
      description:
        "Elemento interativo utilizado para ações de um único passo.",
      checklist: {
        "c-button-colors": {
          title: "Cores",
          description:
            "Botões podem desempenhar diferentes papéis em seu produto, e ter uma cor pré-definida para cada papel deve ajudar os usuários a entender seu significado. Ao alterar as cores, certifique-se de que o texto tenha uma proporção de contraste adequada com o fundo, de acordo com o padrão WCAG AA.",
        },
        "c-button-variants": {
          title: "Variantes",
          description:
            "Ao utilizar múltiplos botões, deve haver uma forma de diferenciar entre ações primárias e secundárias. Os botões podem desempenhar diferentes papéis para o usuário ou serem utilizados em diferentes superfícies, e é necessário que eles alterem sua aparência de acordo.",
        },
        "c-button-sizes": {
          title: "Tamanhos",
          description:
            "Dependendo de onde um botão será usado, ele pode ter vários tamanhos. Por exemplo, você pode usar o tamanho pequeno para áreas densas da sua aplicação.",
        },
        "c-button-icon": {
          title: "Suporte a ícones",
          description:
            "Ícones comunicam facilmente o propósito do botão quando utilizados ao lado de uma label ou podem ser usados sem texto quando há pouco espaço disponível. Certifique-se de fornecer uma label acessível quando utilizar apenas o ícone.",
        },
        "c-button-hover": {
          title: "Estado de hover",
          description:
            "Mostre claramente que o botão é interativo quando o cursor do mouse estiver sobre ele.",
        },
        "c-button-active": {
          title: "Estado ativo",
          description:
            "Forneça uma indicação visual quando um botão for pressionado, usado para selecionar um valor ou alternar outros elementos na página.",
        },
        "c-button-loading": {
          title: "Estado de carregamento",
          description:
            "Indique quando os usuários devem esperar pelo resultado de sua ação após pressionar um botão. Se um indicador de progresso (spinner) for usado para exibir esse estado, certifique-se de que ele não altere a largura ou altura original do botão.",
        },
        "c-button-disabled": {
          title: "Estado desabilitado",
          description:
            "Mostre visualmente que o botão não é interativo e impeça que ele seja pressionado.",
        },
        "c-button-a11y-role": {
          title: "Role de acessibilidade",
          description:
            "O botão deve anunciar corretamente as roles de acessibilidade do botão ou do link e resolvê-los automaticamente com base nas propriedades passadas para ele.",
        },
        "c-button-a11y-focus": {
          title: "Indicador de foco",
          description:
            "O botão deve ter um indicador de foco visível quando estiver em foco utilizando o teclado ou tecnologias assistivas.",
        },
      },
    },
    "c-breadcrumbs": {
      title: "Breadcrumbs",
      description:
        "Navegação principal do produto que ajuda o usuário a compreender a localização da página atual e navegar de volta aos seus respectivos níveis superiores.",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "Suporte a ícones",
          description:
            "Ícones ajudam a comunicar os papéis das páginas às quais os itens do menu de navegação apontam. Na maioria das vezes, é importante garantir que sejam usados de forma consistente, não apenas para itens aleatórios na lista.",
        },
        "c-breadcrumbs-disabled": {
          title: "Estado desabilitado",
          description:
            "Cada item da lista pode ser desabilitado individualmente para impedir que os usuários naveguem para a página.",
        },
        "c-breadcrumbs-collapsed": {
          title: "Estado colapsado",
          description:
            "Se os itens do menu de navegação não couberem no contêiner pai, a lista deve oferecer suporte ao colapso de itens apenas para manter visíveis aqueles relevantes para o usuário.",
        },
        "c-breadcrumbs-separator": {
          title: "Separador personalizado",
          description:
            "Dependendo do contexto de uso, os itens na lista de breadcrumbs podem utilizar diferentes estilos de separadores.",
        },
      },
    },
    "c-calendar": {
      title: "Calendário",
      description:
        "Grid que exibe os dias de um ou mais meses e permite que os usuários selecionem uma única data ou um intervalo de datas.",
      checklist: {
        "c-calendar-modes": {
          title: "Modos de exibição",
          description:
            "O calendário pode ser utilizado em diversas áreas e tamanhos de tela do produto. Certifique-se de suportar diferentes modos de exibição para mostrar mais de um mês ou um layout vertical.",
        },
        "c-calendar-selected": {
          title: "Estado selecionado",
          description:
            "O calendário deve suportar a seleção de uma única data e um intervalo de datas. As datas selecionadas devem ser destacadas visualmente, e o intervalo entre as datas selecionadas deve ser visível para os usuários.",
        },
        "c-calendar-month-selection": {
          title: "Seleção de mês",
          description:
            "Para ajudar os usuários a navegar por intervalos de datas mais longos, o calendário deve fornecer uma maneira fácil de alternar entre os meses exibidos.",
        },
        "c-calendar-day-names": {
          title: "Nomes dos dias",
          description:
            "Fornecer labels curtas para os nomes dos dias da semana, além dos números das datas, para facilitar a navegação na seleção de datas pelos usuários.",
        },
        "c-calendar-i18n": {
          title: "Internacionalização",
          description:
            "Os calendários devem ser adaptados para todas as regiões e países suportados pelo produto. Isso inclui formatos de data e a correta ordenação dos dias da semana, de acordo com as convenções locais.",
        },
        "c-calendar-a11y-keyboard": {
          title: "Navegação por teclado",
          description:
            "As datas do calendário devem ser acessíveis pelo teclado e por tecnologias assistivas. A navegação nas datas pode ser feita usando as setas do teclado ou as opções de navegação do leitor de tela. Além disso, é importante permitir a troca de mês ao navegar para fora de uma coluna ou linha.",
        },
        "c-calendar-a11y-state": {
          title: "Anúncio de estado",
          description:
            "As datas selecionadas devem ser anunciadas pelas tecnologias assistivas quando recebem foco.",
        },
      },
    },
    "c-card": {
      title: "Card",
      description:
        "Container para agrupar informações sobre assuntos e suas ações relacionadas.",

      checklist: {
        "c-card-composition": {
          title: "Composição de conteúdo",
          description:
            "A área de conteúdo deve ser flexível o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-card-media-sections": {
          title: "Seções de mídia",
          description:
            "Os cards são frequentemente utilizados em conjunto com conteúdo de mídia. As opções mais populares são ter uma área de largura total acima do conteúdo ou uma área em um dos lados do card.",
        },
        "c-card-actions": {
          title: "Ações suplementares",
          description:
            "Os cards podem ser utilizados com ações geralmente posicionadas na parte inferior do card, ou o próprio card pode ser clicável, representando uma ação.",
        },
        "c-card-responsive": {
          title: "Responsividade",
          description:
            "Nos dispositivos móveis, os cards geralmente ocupam toda a largura da tela para economizar espaço para o conteúdo.",
        },
        "c-card-groups": {
          title: "Grupos de cards",
          description:
            "Vários cards podem ser agrupados em uma única lista de seções de conteúdo.",
        },
      },
    },
    "c-carousel": {
      title: "Carrossel",
      description:
        "Áreas com rolagem horizontal usadas para exibir conteúdo agrupado.",
      checklist: {
        "c-carousel-navigation": {
          title: "Controles de navegação",
          description:
            "Os carrosséis devem ser acessíveis para navegar seu conteúdo em dispositivos que utilizam o mouse em vez de eventos de toque.",
        },
        "c-carousel-composition": {
          title: "Composição de itens",
          description:
            "A área de conteúdo dos itens do carrossel deve ser flexível o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-carousel-item-size": {
          title: "Tamanhos dos itens",
          description:
            "O layout dos itens deve ser flexível para suportar diferentes tipos de conteúdo. Para dispositivos móveis, certifique-se de mostrar uma parte do item do carrossel que não cabe na tela para indicar a área rolável.",
        },
        "c-carousel-touch": {
          title: "Navegação por toque",
          description:
            "O conteúdo do carrossel deve ser renderizado dentro de uma área rolável para suportar eventos de toque.",
        },
        "c-carousel-responsive": {
          title: "Responsividade",
          description:
            "O layout dos itens do carrossel pode exigir ajustes com base no espaço disponível.",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "Navegação por teclado",
          description:
            "Usuários de teclado e tecnologias assistivas devem ser capazes de navegar pelo conteúdo do carrossel sem depender dos controles de navegação por clique.",
        },
      },
    },
    "c-checkbox": {
      title: "Checkbox",
      description:
        "Campo de formulário usado para selecionar um ou vários valores da lista.",
      checklist: {
        "c-checkbox-label": {
          title: "Label",
          description:
            "Deve haver uma label de texto vinculada ao campo de checkbox. Clicar no rótulo também deve acionar a seleção do checkbox. Se o rótulo não for exibido na página, as tecnologias assistivas ainda devem anunciá-lo.",
        },
        "c-checkbox-checked": {
          title: "Estado selecionado",
          description:
            "Exiba quando o checkbox for selecionado e utilizado para a submissão do formulário.",
        },
        "c-checkbox-error": {
          title: "Estado de erro",
          description:
            "Utilize um estado de erro para a validação do formulário quando o erro estiver relacionado ao campo de checkbox. Sempre utilize um texto de erro juntamente com uma cor de campo diferente.",
        },
        "c-checkbox-disabled": {
          title: "Estado desabilitado",
          description:
            "Utilize um estado desabilitado para impedir interações com o checkbox e remover o seu valor dos valores enviados pelo formulário.",
        },
        "c-checkbox-indeterminate": {
          title: "Estado indeterminado",
          description:
            "Visualmente, indique quando a checkbox possui elementos filhos selecionáveis e somente alguns estão selecionados.",
        },
        "c-checkbox-group": {
          title: "Grupo de checkboxes",
          description:
            "Os checkboxes podem ser agrupados para trabalhar com múltiplos valores ao mesmo tempo.",
        },
        "c-checkbox-a11y-keyboard": {
          title: "Suporte ao teclado",
          description:
            "As seleções dos checkboxes devem ser acionados com o teclado. Usar elementos nativos para isso deve fornecer esse tipo de interação automaticamente.",
        },
      },
    },
    "c-divider": {
      title: "Divisor",
      description: "Elemento para separação visual de conteúdo",
      checklist: {
        "c-divider-direction": {
          title: "Direção",
          description:
            "Divisores devem separar tanto listas de conteúdo horizontal quanto vertical.",
        },
        "c-divider-a11y-role": {
          title: "Role de acessibilidade",
          description:
            "Se o divisor desempenha um papel funcional no layout, além do papel decorativo, seu papel deve ser anunciado pelas tecnologias assistivas.",
        },
      },
    },
    "c-dropdown": {
      title: "Dropdown",
      description: "Lista de ações contextuais que os usuários podem acionar.",
      checklist: {
        "c-dropdown-composition": {
          title: "Composição de conteúdo",
          description:
            "Dropdowns podem ser usados para menus contextuais, navegação de produtos e outros fins. A área de conteúdo deles deve ser flexível o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-dropdown-hover": {
          title: "Acionamento por hover",
          description:
            "O dropdown deve suportar a exibição do seu conteúdo em eventos de hover. O mesmo comportamento deve ocorrer para usuários de teclado quando o seu acionador recebe foco.",
        },
        "c-dropdown-positioning": {
          title: "Posicionamento dinâmico",
          description:
            "O conteúdo do dropdown deve ser exibido com base na posição atual do elemento de gatilho na tela e sempre permanecer visível para o usuário.",
        },
        "c-dropdown-responsive": {
          title: "Responsividade",
          description:
            "O conteúdo do dropdown deve ser ajustado se não couber na tela da mesma forma em dispositivos móveis como em desktop.",
        },
        "c-dropdown-a11y-focus": {
          title: "Captura de foco",
          description:
            "Quando o conteúdo do dropdown é aberto, o foco deve ser movido para dentro da área de conteúdo e retornar ao elemento acionador quando fechado.",
        },
        "c-dropdown-a11y-keyboard": {
          title: "Suporte ao teclado",
          description:
            "O dropdown deve ser acessível para teclado e tecnologias assistivas. Os usuários devem ser capazes de fechar o dropdown usando uma ação separada de fechamento ou ao pressionar uma área fora do conteúdo do dropdown.",
        },
      },
    },
    "c-icon": {
      title: "Ícone",
      description:
        "Wrapper para elementos SVG para controlar sua apresentação visual",
      checklist: {
        "c-icon-colors": {
          title: "Cores",
          description:
            "Os ícones devem suportar os valores de cor disponíveis nos tokens do design system. Além disso, é uma boa prática permitir a herança de cor a partir do elemento pai.",
        },
        "c-icon-sizes": {
          title: "Tamanhos",
          description:
            "Os ícones devem possuir diversos tamanhos pré-definidos para oferecer uma experiência completa em todo o produto. É recomendável utilizar combinações tipográficas para esses valores de tamanho, assegurando que estejam alinhados com os tamanhos do texto.",
        },
        "c-icon-a11y-decoration": {
          title: "Interatividade",
          description:
            "A maioria das vezes, os ícones são usados como elementos decorativos. Se um ícone tiver a intenção de ser interativo, essa funcionalidade deve ser incluída usando botões, links ou outros componentes interativos.",
        },
      },
    },
    "c-image": {
      title: "Imagem",
      description:
        "Utilitário para exibir imagens e controlar o seu comportamento.",
      checklist: {
        "c-image-sizes": {
          title: "Tamanhos",
          description:
            "A imagem deve ser flexível em termos de tamanhos suportados. Além de suportar apenas largura e altura, adicione suporte para proporção de aspecto para dimensionar suas proporções com base no elemento pai de forma dinâmica.",
        },
        "c-image-fallback": {
          title: "Recurso alternativo de imagem",
          description:
            "Exiba um recurso alternativo quando a URL da imagem estiver incorreta ou indefinida. Isso pode ser uma caixa vazia com um fundo, um ícone ou uma imagem estática de substituição.",
        },
        "c-image-density": {
          title: "Suporte à densidade de tela",
          description:
            "Para atender à densidade de tela, é recomendado suportar o carregamento de múltiplos recursos de imagem em tamanhos diferentes e servir o mais adequado ao usuário.",
        },
        "c-image-a11y-alt": {
          title: "Texto alternativo",
          description:
            "Quando a imagem não for apenas decorativa, é importante fornecer um texto alternativo (alt text) descrevendo o conteúdo da imagem.",
        },
      },
    },
    "c-link": {
      title: "Link",
      description:
        "Elemento de texto interativo usado para navegação dentro dos parágrafos de texto.",
      checklist: {
        "c-link-icon": {
          title: "Suporte a ícones",
          description:
            "Um ícone pode ser usado ao lado do link para comunicar o propósito do link. Ícones não devem ser usados dentro de um link sem uma label de texto.",
        },
        "c-link-colors": {
          title: "Cores",
          description:
            "Os links podem desempenhar diversos papéis no seu produto, e ter uma cor pré-definida para cada papel deve ajudar os usuários a entender o seu significado. Como o link é um elemento de texto, ele deve ser capaz de herdar automaticamente a cor definida pelo seu elemento pai, assim como outros conteúdos de texto.",
        },
        "c-link-disabled": {
          title: "Estado desabilitado",
          description:
            "Indique visualmente que o link não é interativo e impeça que seja pressionado.",
        },
        "c-link-font-inheritance": {
          title: "Herança de fonte",
          description:
            "Os links devem ser capazes de herdar os estilos tipográficos quando usados como parte do elemento de texto.",
        },
        "c-link-multiline": {
          title: "Exibição de várias linhas",
          description:
            "Quando usados dentro de um parágrafo de texto, os links devem suportar a exibição de várias linhas sem interromper o fluxo do texto.",
        },
        "c-link-a11y-role": {
          title: "Role de acessibilidade",
          description:
            "Os links devem anunciar corretamente as funções de acessibilidade do botão ou do link, resolvendo-as automaticamente com base nas propriedades passadas para ele.",
        },
      },
    },
    "c-list": {
      title: "Lista",
      description: "A lista é usada para exibir uma lista de itens.",
      checklist: {
        "c-list-order": {
          title: "Ordem",
          description:
            "Os itens da lista podem utilizar estilos e tipos de ordenação como marcadores, numerados e outros.",
        },
        "c-list-composition": {
          title: "Composição de conteúdo",
          description:
            "As áreas de conteúdo dos itens da lista devem ser flexíveis o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-list-a11y-role": {
          title: "Role acessível",
          description:
            "As tecnologias assistivas devem anunciar listas com a role correta e o número de itens exibidos.",
        },
      },
    },
    "c-loading-indicator": {
      title: "Indicador de carregamento",
      description:
        "Elemento animado que indica o progresso sem informar a duração exata do processo.",
      checklist: {
        "c-loading-indicator-colors": {
          title: "Cores",
          description:
            "Os indicadores de carregamento podem ser utilizados em elementos com diferentes funções e devem seguir o esquema de cores correspondente a esses elementos.",
        },
        "c-loading-indicators-sizes": {
          title: "Tamanhos",
          description:
            "Os indicadores de carregamento podem oferecer diferentes tamanhos, de acordo com o tamanho das áreas em que são exibidos.",
        },
        "c-loading-indicator-time": {
          title: "Duração do carregamento",
          description:
            "Em alguns casos, o tempo de espera não pode ser determinado. O indicador de carregamento deve ser exibido até que o carregamento seja concluído ou ocorra um erro. Em outros casos, é melhor indicar o tempo restante até que o carregamento seja concluído.",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "Animação reduzida",
          description:
            "O indicador de carregamento deve estar sincronizado com as configurações de movimento do sistema e reduzir a velocidade de animação quando as configurações de movimento reduzido estiverem ativadas.",
        },
        "c-loading-indicator-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "Se o indicador de carregamento estiver isolado, forneça uma label acessível para a área de conteúdo que está sendo carregada.",
        },
      },
    },
    "c-modal": {
      title: "Modal",
      description:
        "Contêiner que aparece na frente do conteúdo principal para fornecer informações críticas ou um conteúdo acionável.",
      checklist: {
        "c-modal-composition": {
          title: "Composição de conteúdo",
          description:
            "A área de conteúdo principal deve ser flexível o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-modal-actions": {
          title: "Ações suplementares",
          description:
            "Como o conteúdo no modal pode ser acionável, é essencial ter uma área para elementos de ação. Essa área geralmente está localizada na parte inferior do contêiner modal.",
        },
        "c-modal-close": {
          title: "Ação de fechar",
          description:
            "Os modais devem oferecer uma forma direta de fechamento, pois eles bloqueiam o conteúdo quando estão abertos. Isso pode ser feito através de um botão de fechar separado ou como uma das ações complementares disponíveis.",
        },
        "c-modal-positioning": {
          title: "Posicionamento",
          description:
            "Os modais podem ser posicionados no centro da tela ou exibidos como painéis deslizantes em um dos lados da tela.",
        },
        "c-modal-sizes": {
          title: "Tamanhos",
          description:
            "Forneça suporte para alterar a altura e largura do modal com base no conteúdo que você exibe.",
        },
        "c-modal-a11y-focus": {
          title: "Captura de foco",
          description:
            "Ao abrir o modal, o foco do usuário deve ser movido para o primeiro elemento com foco e permanecer restrito a ele. Quando o modal for fechado, o foco deve retornar ao último elemento ativo.",
        },
        "c-modal-a11y-keyboard": {
          title: "Navegação por teclado",
          description:
            "Deve ser possível fechar um modal ao pressionar a tecla Esc, e todos os elementos com foco dentro do contêiner do modal devem ser acessíveis por meio da navegação pelo teclado.",
        },
        "c-modal-a11y-labels": {
          title: "Título e subtítulo",
          description:
            "Os modais devem usar a role de acessibilidade correta e devem ser caracterizados pelos elementos de título e subtítulo. Se não houver título ou subtítulo visível, a modal pode usar uma label acessível.",
        },
      },
    },
    "c-pagination": {
      title: "Paginação",
      description:
        "A paginação permite a seleção de uma variedade de páginas dentro de um intervalo.",
      checklist: {
        "c-pagination-selected": {
          title: "Estado da página selecionada",
          description:
            "Destaque visualmente a página selecionada na lista e torne-a não interativa.",
        },
        "c-pagination-ranges": {
          title: "Intervalos de exibição de páginas",
          description:
            "Defina os intervalos de páginas a serem renderizadas ao redor da página selecionada. Isso ajuda a exibir apenas um número limitado de páginas, permitindo que os usuários naveguem mais rapidamente do que se tivessem que avançar uma página de cada vez.",
        },
        "c-pagination-amount": {
          title: "Quantidade de itens por página",
          description:
            "Forneça uma opção para selecionar o número de itens paginados exibidos na página.",
        },
        "c-pagination-indeterminate": {
          title: "Quantidade indeterminada de páginas",
          description:
            "Quando você não conhece antecipadamente o número total de páginas disponíveis, utilize um modo de exibição diferente que permita navegar pelas páginas individualmente.",
        },
        "c-pagination-a11y-label": {
          title: "Labels de paginação",
          description:
            "A paginação deve fornecer labels claras e dinâmicas para cada página, a fim de oferecer informações contextuais às tecnologias assistivas, em vez de apenas anunciar o número da página sem contexto.",
        },
        "c-pagination-a11y-state": {
          title: "Anúncio de estado",
          description:
            "A paginação deve anunciar quando uma página selecionada está em foco.",
        },
      },
    },
    "c-progress": {
      title: "Barra de progresso",
      description:
        "Barra de progresso que exibe o avanço de uma tarefa que leva muito tempo ou consiste em várias etapas.",
      checklist: {
        "c-progress-label": {
          title: "Label",
          description:
            "Ofereça suporte para exibir visualmente uma label que explique qual é a responsabilidade da barra de progresso.",
        },
        "c-progress-sizes": {
          title: "Tamanhos",
          description:
            "Os indicadores de carregamento podem oferecer diferentes tamanhos, dependendo do tamanho das áreas em que são renderizados.",
        },
        "c-progress-duration": {
          title: "Duração",
          description:
            "Em alguns casos, o tempo de espera não pode ser determinado. O indicador de carregamento deve ser exibido até que o carregamento seja concluído ou ocorra um erro. Em outras situações, é preferível indicar o tempo restante até que o carregamento seja concluído.",
        },
        "c-progress-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "Forneça suporte para adicionar uma label acessível caso não seja possível exibir um rótulo na interface.",
        },
      },
    },
    "c-radio": {
      title: "Radio",
      description:
        "O radio é um elemento de formulário usado para selecionar uma opção em uma lista.",
      checklist: {
        "c-radio-label": {
          title: "Label",
          description:
            "Deve haver uma label de texto vinculada ao radio. Clicar na label também deve acionar a marcação do checkbox. Se a label não for renderizada na página, as tecnologias assistivas ainda devem anunciá-la.",
        },
        "c-radio-checked": {
          title: "Estado selecionado",
          description:
            "Exiba quando o radio está selecionado e é utilizado para o envio do formulário",
        },
        "c-radio-error": {
          title: "Estado de erro",
          description:
            "Use um estado de erro para validação de formulário quando o erro estiver relacionado ao componente de radio. Sempre use um texto de erro junto com uma cor de campo diferente.",
        },
        "c-radio-disabled": {
          title: "Estado desativado",
          description:
            "Utilize um estado desativado para evitar interações com os botões de radio e remova o seu valor dos valores enviados pelo formulário.",
        },
        "c-radio-group": {
          title: "Grupo de radios",
          description:
            "Os botões de radio são sempre usados em grupo para evitar a fixação da seleção após um dos botões de radio ser marcado.",
        },
        "c-radio-a11y-keyboard": {
          title: "Suporte ao teclado",
          description:
            "A seleção do radio deve ser acionada com o teclado. O uso de elementos nativos para isso deve proporcionar esse tipo de interação automaticamente.",
        },
      },
    },
    "c-select": {
      title: "Select",
      description:
        "O select permite que você escolha um único valor em uma lista de opções.",
      checklist: {
        "c-select-label": {
          title: "Label",
          description:
            "Labels de texto vinculadas ao campo de select podem fornecer aos usuários um contexto adicional. Clicar na label também deve abrir o dropdown.",
        },
        "c-select-error": {
          title: "Estado de erro",
          description:
            "Utilize um estado de erro para validação do formulário quando o erro estiver relacionado apenas à seleção. Exiba um ícone de erro adicional para melhor a acessibilidade.",
        },
        "c-select-disabled": {
          title: "Estado desativado",
          description:
            "Utilize um estado desativado para impedir interações com o select e remova o seu valor dos valores enviados pelo formulário.",
        },
        "c-select-placeholder": {
          title: "Placeholder",
          description:
            "Quando nenhum valor é selecionado, exiba um placeholder. Você pode usar o mesmo valor do placeholder para permitir que os usuários redefinam o valor da seleção de volta para o padrão.",
        },
        "c-select-helper": {
          title: "Texto auxiliar",
          description:
            "Forneça aos usuários um contexto adicional sobre o propósito da seleção e os requisitos para a escolha.",
        },
        "c-select-icon": {
          title: "Suporte a ícones",
          description:
            "Adicione uma área para exibir um ícone no início do campo para comunicar o propósito do select como um componente ou o valor selecionado.",
        },
        "c-select-prefix": {
          title: "Prefixo",
          description:
            "Adicione uma área para conteúdo personalizado para tornar a seleção mais contextual para o usuário. Por exemplo, você pode exibir bandeiras de países na seleção de códigos de país.",
        },
        "c-select-sizes": {
          title: "Tamanhos",
          description:
            "Dependendo de onde a seleção será usada, ela pode ter vários tamanhos. Por exemplo, você pode usar o tamanho pequeno para áreas mais densas da sua aplicação.",
        },
        "c-select-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "Se você não fornecer uma label de texto visual para a seleção, certifique-se de fornecer uma label acessível que ainda descreva o propósito do componente.",
        },
      },
    },
    "c-skeleton": {
      title: "Skeleton",
      description:
        "Placeholder que substitui elementos da página enquanto os dados estão sendo carregados.",
      checklist: {
        "c-skeleton-sizes": {
          title: "Tamanhos",
          description:
            "O skeleton deve ser capaz de se adaptar aos componentes de vários tamanhos disponíveis no seu design system, evitando deslocamentos de layout desnecessários assim que os dados forem carregados.",
        },
        "c-skeleton-shapes": {
          title: "Formatos",
          description:
            "O Skeleton deve ser capaz de se adequar aos componentes de várias formas disponíveis no seu design system, garantindo que o estado de carregamento esteja alinhado com o layout real dos componentes.",
        },
        "c-skeleton-composition": {
          title: "Composição",
          description:
            "Você pode compor skeletons simples em layouts mais avançados. Você não precisa mapear a interface do seu aplicativo 1:1 com os skeletons.",
        },
        "c-skeleton-a11y-motion": {
          title: "Animação reduzida",
          description:
            "Reduza ou remova completamente a animação para a preferência do usuário com movimento reduzido.",
        },
      },
    },
    "c-switch": {
      title: "Switch",
      description:
        "Toggle para alterar imediatamente o estado de um único item.",
      checklist: {
        "c-switch-label": {
          title: "Label",
          description:
            "Deve haver uma label de texto associada ao switch. Clicar na label também deve ativar a seleção do switch. Se a label não estiver visível na página, as tecnologias assistivas ainda devem anunciá-la.",
        },
        "c-switch-checked": {
          title: "Estado selecionado",
          description:
            "Exiba quando o switch é selecionado e ative a funcionalidade subjacente. Frequentemente, um switch é usado para atualizar imediatamente os dados após ser selecionado.",
        },
        "c-switch-disabled": {
          title: "Estado desativado",
          description:
            "Utilize o estado desativado para impedir interações com o switch.",
        },
        "c-switch-a11y-keyboard": {
          title: "Navegação por teclado",
          description:
            "A seleção do switch deve ser acionada pelo teclado. O uso de elementos nativos para isso deve fornecer esse tipo de interação automaticamente.",
        },
        "c-switch-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "Caso você não forneça uma label de texto visual para o switch, certifique-se de fornecer uma label acessível que descreva o propósito do componente.",
        },
      },
    },
    "c-tabs": {
      title: "Tabs",
      description: "Navegação entre várias páginas ou seções de conteúdo.",
      checklist: {
        "c-tabs-composition": {
          title: "Composição de conteúdo",
          description:
            "A área de conteúdo deve ser flexível o suficiente para suportar diversos tipos de conteúdo, incluindo outros componentes.",
        },
        "c-tabs-variants": {
          title: "Variantes",
          description:
            "Para suportar diferentes contextos de renderização, as tabs podem ter várias variantes. Por exemplo, elas podem ser renderizadas como pills quando usadas diretamente na página, enquanto utilizam uma variante sublinhada para abas renderizadas dentro de cards.",
        },
        "c-tabs-selected": {
          title: "Estado selecionado",
          description:
            "Como as tabs sempre exibem o conteúdo de um de seus painéis, um dos acionadores da tab deve estar sempre selecionado e destacado visualmente.",
        },
        "c-tabs-disabled": {
          title: "Estado desativado",
          description:
            "Os acionadores das tabs podem ser desativados para evitar que os usuários alterem para um painel de tab específico.",
        },
        "c-tabs-icon": {
          title: "Suporte a ícones",
          description:
            "Para ilustrar melhor o significado de cada tab, você pode exibir um ícone ao lado do texto do acionador da tab.",
        },
        "c-tabs-equal": {
          title: "Layout de largura igual",
          description:
            "Quando usados para ocupar toda a largura do contêiner pai, os acionadores das tabs podem ser esticados para ocupar espaços horizontais iguais.",
        },
        "c-tabs-a11y-keyboard": {
          title: "Suporte ao teclado",
          description:
            "Ao interagir com as tabs usando o teclado, elas devem suportar a navegação com as setas para alternar entre os painéis anterior e próximo. Os botões Home e End também devem mover a seleção para o primeiro e último painéis, respectivamente.",
        },
      },
    },
    "c-text-area": {
      title: "Área de texto",
      description:
        "Campo de formulário para inserir e editar texto multilinha.",
      checklist: {
        "c-text-area-label": {
          title: "Label",
          description:
            "Labels de texto vinculadas à área de texto podem fornecer aos usuários um contexto adicional. Clicar na label deve mover o foco para o campo.",
        },
        "c-text-area-error": {
          title: "Estado de erro",
          description:
            "Use um estado de erro para a validação do formulário quando o erro estiver relacionado apenas à área de texto.",
        },
        "c-text-area-disabled": {
          title: "Estado desativado",
          description:
            "Use o estado desabilitado para impedir interações com a área de texto e remover o seu valor dos valores do formulário enviados.",
        },
        "c-text-area-placeholder": {
          title: "Placeholder",
          description:
            "Quando o valor da área de texto estiver vazio, exiba um valor placeholder. Certifique-se de que ele não seja usado no lugar da label.",
        },
        "c-text-area-helper": {
          title: "Texto auxiliar",
          description:
            "Forneça aos usuários um contexto adicional sobre o objetivo da área de texto e os requisitos para o valor esperado.",
        },
        "c-text-area-sizes": {
          title: "Tamanhos",
          description:
            "Dependendo de onde a text rea será usada, ela pode ter vários tamanhos. Por exemplo, você pode usar o tamanho grande para os formulários em páginas de marketing.",
        },
        "c-text-area-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "Caso não seja fornecida uma label de texto visual para a área de texto, certifique-se de fornecer uma label acessível que descreva o propósito do componente.",
        },
      },
    },
    "c-text-field": {
      title: "Campo de texto",
      description:
        "Campo de formulário para inserir e editar texto de uma única linha.",
      checklist: {
        "c-text-field-label": {
          title: "Label",
          description:
            "Labels de texto vinculadas ao campo de texto podem fornecer aos usuários um contexto adicional. Clicar na label deve mover o foco para o campo.",
        },
        "c-text-field-error": {
          title: "Estado de erro",
          description:
            "Use um estado de erro para a validação do formulário quando o erro estiver relacionado apenas ao campo de texto.",
        },
        "c-text-field-disabled": {
          title: "Estado desativado",
          description:
            "Use o estado desabilitado para impedir interações com o campo de texto e remover o seu valor dos valores do formulário enviados.",
        },
        "c-text-field-placeholder": {
          title: "Placeholder",
          description:
            "Quando o valor do campo de texto estiver vazio, exiba um valor placeholder. Certifique-se de que ele não seja usado no lugar da label.",
        },
        "c-text-field-helper": {
          title: "Texto auxiliar",
          description:
            "Forneça aos usuários um contexto adicional sobre o objetivo do campo de texto e os requisitos para o valor esperado.",
        },
        "c-text-field-icon": {
          title: "Suporte a ícones",
          description:
            "Adicione uma área para exibir um ícone no início do campo para comunicar o objetivo do campo de texto como um componente ou o valor do campo.",
        },
        "c-text-field-affix": {
          title: "Prefixo / Sufixo",
          description:
            "Adicione uma área para conteúdo personalizado para tornar a seleção mais contextual para o usuário. Por exemplo, você pode exibir provedores de pagamento no campo de texto para números de cartão de crédito.",
        },
        "c-text-field-sizes": {
          title: "Tamanhos",
          description:
            "Dependendo de onde o campo de texto será usado, ele pode ter vários tamanhos. Por exemplo, você pode usar o tamanho grande para os formulários em páginas de marketing.",
        },
        "c-text-field-a11y-label": {
          title: "Label de acessibilidade",
          description:
            "Caso você não forneça uma etiqueta visual de texto para o campo de texto, certifique-se de fornecer uma label acessível que descreva o propósito do componente.",
        },
      },
    },
    "c-toast": {
      title: "Toast",
      description:
        "Mensagem de notificação ou uma informação exibida acima do conteúdo da página.",
      checklist: {
        "c-toast-composition": {
          title: "Composição de conteúdo",
          description:
            "A área de conteúdo deve ser flexível o suficiente para suportar vários tipos de conteúdo, incluindo outros componentes.",
        },
        "c-toast-colors": {
          title: "Cores",
          description:
            "Dependendo da função da notificação exibida no toast, ela pode ter cores diferentes. Por exemplo, pode ser vermelha para notificações de erro.",
        },
        "c-toast-icon": {
          title: "Suporte a ícones",
          description:
            "Adicione uma área para exibir um ícone no início do toast para comunicar o objetivo da notificação. Isso ajudará os usuários a identificarem rapidamente o tipo de notificação e sua finalidade.",
        },
        "c-toast-timeout": {
          title: "Timeout",
          description:
            "Os toasts geralmente são fechados automaticamente após um determinado período de tempo. Certifique-se de fornecer um tempo de duração suficientemente longo para que os usuários possam ler a mensagem. Caso não haja um tempo de duração definido, inclua um botão para fechar a notificação.",
        },
        "c-toast-stacking": {
          title: "Empilhamento",
          description:
            "Quando vários toasts são acionados, empilhe-os um sobre o outro para evitar a desordem na tela.",
        },
        "c-toast-action": {
          title: "Ação suplementar",
          description:
            "As ações nas notificações devem ser contextuais ao propósito da notificação. Por exemplo, se você notificar o usuário sobre a exclusão de conteúdo, um elemento de ação pode ajudá-lo a desfazer essa operação.",
        },
        "c-toast-a11y-focus": {
          title: "Gerenciamento de foco",
          description:
            "Quando os toasts possuem ações, elas devem ser acessíveis por meio do teclado para serem acionadas. Enquanto o foco estiver dentro do contêiner do toast, o timeout deve ser desabilitado.",
        },
        "c-toast-a11y-motion": {
          title: "Animação reduzida",
          description:
            "Reduza ou remova completamente a animação para a preferência do usuário com movimento reduzido.",
        },
      },
    },
    "c-tooltip": {
      title: "Tooltip",
      description:
        "Exibição de informações textuais contextuais ao passar o mouse ou focar em um elemento.",
      checklist: {
        "c-tooltip-positioning": {
          title: "Posicionamento",
          description:
            "Quando a posição padrão da tooltip não permite que ela caiba na tela, certifique-se de alternar dinamicamente sua posição para outro valor.",
        },
        "c-tooltip-timeout": {
          title: "Timeout",
          description:
            "Aguarde brevemente antes de abrir a tooltip para garantir que ela não seja aberta enquanto o usuário move o cursor pela tela.",
        },
        "c-tooltip-a11y-keyboard": {
          title: "Suporte ao teclado",
          description:
            "As tooltips devem ser acessíveis não apenas ao passar o mouse sobre o elemento acionador, mas também ao focar nele.",
        },
      },
    },
  },
};
