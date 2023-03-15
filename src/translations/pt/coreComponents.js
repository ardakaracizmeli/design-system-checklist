export default {
  title: "Componentes principais",
  description:
    "Componentes são os principais blocos de construção para interfaces de usuário. A construção de uma biblioteca de componentes reutilizáveis aprimora o fluxo de trabalho de desenvolvimento do produto, reduzindo o design e a dívida tecnológica e acelerando o processo. Os componentes principais não podem ser desmembrados em peças granulares sem perder seu significado.",
  sections: {
    "cc-avatar": {
      title: "Avatar",
      description:
        "Avatares são usados para mostrar uma miniatura de uma foto do usuário ou uma representação visual de qualquer outro tipo de conteúdo.",
      checklist: {
        "cc-avatar-image": {
          title: "Imagem",
          description:
            "Os avatares devem mascarar uma imagem em sua forma e funcionar com qualquer tamanho de imagem, já que podem receber essa imagem de fontes de dados desconhecidas.",
        },
        "cc-avatar-image-fallback": {
          title: "Fallback de imagem",
          description:
            "Deve haver fallbacks quando não há imagem disponível. Isso pode ser feito com imagens de espaço reservado ou iniciais.",
        },
        "cc-avatar-a11y": {
          title: "Acessibilidade",
          description:
            "Sempre forneça uma descrição para leitores de tela descrevendo o que é exibido na imagem do avatar em vez de apenas nomear sua função.",
        },
        "cc-avatar-sizes": {
          title: "Tamanhos",
          description:
            "Existem muitos contextos para o uso de avatares e todos eles requerem tamanhos diferentes para o componente. Para projetos médios, use pelo menos 2-3 tamanhos diferentes e certifique-se de que haja pelo menos um tamanho pequeno disponível.",
        },
        "cc-avatar-icon": {
          title: "Ícone",
          description:
            "Os avatares podem ser usados com um ícone em vez de uma imagem para enfatizar áreas que não necessariamente têm (ou precisam) de uma imagem associada.",
        },
        "cc-avatar-bg": {
          title: "Cores de fundo",
          description:
            "Quando usados com ícones ou texto, deve haver uma cor de fundo dos tokens de cor do sistema de design aplicada à forma do avatar. Certifique-se de que ícones e texto tenham uma relação de contraste suficiente com o fundo de acordo com o padrão WCAG AA.",
        },
      },
    },
    "cc-badge": {
      title: "Crachá",
      description:
        "Crachás (em inglês: badges) são elementos que representam o status de um objeto ou valor de entrada do usuário.",
      checklist: {
        "cc-badge-appearance": {
          title: "Aparência",
          description:
            "Os crachás podem desempenhar vários papéis em seu produto e ter uma cor predefinida para cada papel deve ajudar os usuários a entender seu significado. Ao alterar as cores, certifique-se de que o texto tenha relação de contraste suficiente com o fundo de acordo com o padrão WCAG AA.",
        },
        "cc-badge-dismiss": {
          title: "Ação de dispensar",
          description:
            "Os crachás podem ser usados como uma maneira dinâmica de exibir valores selecionados e deve haver uma maneira de dispensá-los.",
        },
      },
    },
    "cc-banner": {
      title: "Banner",
      description:
        "Banners exibem uma mensagem acionável usada como forma proeminente de comunicação com seus usuários.",
      checklist: {
        "cc-banner-appearance": {
          title: "Aparência",
          description:
            "Os banners são usados para exibir diferentes tipos de mensagens e é importante diferenciar sua aparência visual com base no papel que desempenham. Se estiver usando cores de fundo para diferenciação de papéis, certifique-se de que haja uma taxa de contraste suficiente com o conteúdo de acordo com o padrão WCAG AA.",
        },
        "cc-banner-image": {
          title: "Área para ícones ou imagens",
          description:
            "Os banners podem complementar sua mensagem usando um ícone ou imagem de suporte. Eles não devem ser usados ​​em vez do conteúdo de texto.",
        },
        "cc-banner-actions": {
          title: "Ações",
          description:
            "As ações nos banners devem estar relacionadas ao seu texto e fornecer uma maneira de reagir à mensagem enviada ao usuário.",
        },
        "cc-banner-dismiss": {
          title: "Ação dispensável",
          description:
            "Não sobrecarregue o usuário com banners na página e inclua uma ação dispensável. Isso pode ser um botão separado de fechar ou uma das ações fornecidas.",
        },
        "cc-banner-a11y": {
          title: "Acessibilidade",
          description:
            "Se um banner aparecer dinamicamente na página, deve ser anunciado ao usuário por sua tecnologia assistiva.",
        },
        "cc-banner-mobile": {
          title: "Responsividade",
          description:
            "Os banners devem se adaptar ao tamanho da tela. Isso geralmente significa que eles se tornam de largura total para dispositivos móveis para economizar espaço.",
        },
      },
    },
    "cc-button": {
      title: "Botão",
      description:
        "Botões são elementos interativos usados ​​para ações de um único passo.",
      checklist: {
        "cc-button-hover": {
          title: "Estado de destaque",
          description:
            "Mostre claramente que o botão é interativo quando ele é destacado com um cursor de mouse.",
        },
        "cc-button-active": {
          title: "Estado ativo",
          description:
            "Usado quando um botão é pressionado. O mesmo estado pode ser usado para representar o botão responsável por alternar outro elemento na página enquanto esse elemento estiver visivelmente aberto.",
        },
        "cc-button-focus": {
          title: "Estado de foco",
          description:
            "Usado quando um botão é selecionado por meio da navegação pelo teclado.",
        },
        "cc-button-icon": {
          title: "Suporte a ícones",
          description:
            "Os ícones comunicam facilmente o propósito do botão quando usados ​​ao lado de seu rótulo ou podem ser usados ​​sem texto quando não há espaço suficiente. Certifique-se de que a etiqueta de acessibilidade seja fornecida quando usado com um ícone apenas.",
        },
        "cc-button-disabled": {
          title: "Desativado",
          description:
            "Mostra visualmente que um botão não é interativo e o impede de ser pressionado.",
        },
        "cc-button-loading": {
          title: "Carregando",
          description:
            "Usado quando os usuários têm que esperar pelo resultado de sua ação depois de pressionar um botão. Se um spinner for usado para exibir esse estado, certifique-se de que ele não está alterando a largura ou altura original do botão.",
        },
        "cc-button-full-width": {
          title: "Largura total",
          description:
            "Por padrão, os botões têm a largura de seu conteúdo, mas eles também devem ter uma variante de largura total que funcione bem em dispositivos móveis.",
        },
        "cc-button-variants": {
          title: "Variantes",
          description:
            "Ao usar vários botões, deve haver uma maneira de diferenciar entre ações primárias e secundárias. Os botões podem desempenhar funções diferentes para o usuário ou serem usados em diferentes tipos de superfícies e precisam mudar a maneira como parecem.",
        },
        "cc-button-sizes": {
          title: "Tamanhos",
          description:
            "Os botões podem ser usados em diferentes áreas do site e podem ter vários tamanhos predefinidos. Em dispositivos móveis, as áreas de toque devem ter no mínimo 48px para serem acessíveis de acordo com as diretrizes de acessibilidade do iOS e Android.",
        },
      },
    },
    "cc-card": {
      title: "Cartão",
      description:
        "Os cartões (em inglês: cards) são usados para agrupar informações sobre assuntos e suas ações relacionadas.",
      checklist: {
        "cc-card-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Os cartões são um dos componentes mais usados no produto, então eles devem ser flexíveis o suficiente para suportar quaisquer outros componentes colocados neles.",
        },
        "cc-card-structure": {
          title: "Estrutura de informações",
          description:
            "Não importa o quão flexíveis os cartões são, é importante que eles tenham uma estrutura específica para seus elementos para consistência do produto.",
        },
        "cc-card-media": {
          title: "Suporta seções de mídia",
          description:
            "Um dos cenários mais populares para usar cartões é misturá-los com conteúdo de mídia. As opções mais populares são ter uma área de largura total na parte superior do conteúdo ou uma área de altura total em um dos lados do cartão.",
        },
        "cc-card-actions": {
          title: "Ações complementares",
          description:
            "Os cartões podem ser usados com ações geralmente colocadas na parte inferior do cartão, ou o próprio cartão pode ser tocável e representar uma ação.",
        },
        "cc-card-mobile": {
          title: "Responsividade",
          description:
            "Em viewports móveis, os cartões geralmente têm largura total para economizar espaço para o conteúdo.",
        },
      },
    },
    "cc-carousel": {
      title: "Carrossel",
      description:
        "Carrosséis empilham o mesmo tipo de itens e permitem rolar horizontalmente através deles.",
      checklist: {
        "cc-carousel-controls": {
          title: "Controles de navegação",
          description:
            "Carrosséis devem ter controles de navegação fáceis de encontrar para rolar através do conteúdo.",
        },
        "cc-carousel-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Carrosséis podem ser usados em diferentes contextos e não devem ser limitados a um componente filho específico. Em alguns cenários, você pode querer que os itens dentro do mesmo carrossel sejam diferentes uns dos outros.",
        },
        "cc-carousel-width": {
          title: "Personalização da largura dos itens",
          description:
            "Para produtos simples, pode ser bom usar vários tamanhos pré-definidos para os itens do carrossel. Para mais flexibilidade, é bom fornecer uma maneira de definir uma largura personalizada.",
        },
        "cc-carousel-touch": {
          title: "Suporte a eventos de toque",
          description:
            "Carrosséis devem ser roláveis em dispositivos de toque. Algumas das melhores práticas são usar rolagem nativa e garantir que você esteja suportando o mesmo comportamento para todos os dispositivos de toque, não apenas telefones móveis.",
        },
        "cc-carousel-keyboard": {
          title: "Navegação por teclado",
          description:
            "Deve ser possível rolar pelo conteúdo com as setas do teclado quando focado nos controles de navegação.",
        },
        "cc-carousel-mobile": {
          title: "Responsividade",
          description:
            "É uma boa prática ocultar ou reduzir o tamanho dos controles de navegação para visualizações móveis para melhorar a visibilidade do conteúdo.",
        },
      },
    },
    "cc-dropdown": {
      title: "Menu suspenso",
      description:
        "Os menus suspensos (em inglês: dropdowns) são usados para exibir uma subvisualização contextual com uma lista de ações ou conteúdo relacionado à área onde o menu suspenso está.",
      checklist: {
        "cc-dropdown-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Os menus suspensos podem ser usados em muitos contextos, como seleção de datas, seleção de idioma ou outras características do produto.",
        },
        "cc-dropdown-menu": {
          title: "Menu de ações",
          description:
            "Um dos cenários mais usados para menus suspensos é fornecer um menu de ações para o usuário, portanto, é útil ter esse layout definido.",
        },
        "cc-dropdown-trap": {
          title: "Foco restrito",
          description:
            "Uma vez que o menu suspenso é aberto, o foco deve funcionar apenas para os elementos dentro do próprio menu. Quando ele é fechado, o foco deve ir para o botão de abrir o menu suspenso.",
        },
        "cc-dropdown-close": {
          title: "Ação de fechar",
          description:
            "Algumas ações dentro do menu suspenso devem fechá-lo ou deve haver um botão separado de fechar. Também é uma boa prática fechar o menu suspenso quando o usuário clica fora dele.",
        },
        "cc-dropdown-keyboard": {
          title: "Navegação por teclado",
          description:
            "Deve ser possível navegar pelos elementos do menu suspenso com o teclado e fechá-lo com a tecla Esc.",
        },
        "cc-dropdown-position": {
          title: "Posicionamento dinâmico",
          description:
            "O conteúdo do menu suspenso deve ser exibido com base na posição atual do botão de abrir o menu na tela e sempre visível para o usuário.",
        },
        "cc-dropdown-mobile": {
          title: "Responsividade",
          description:
            "O conteúdo do menu suspenso deve ser adaptado para dispositivos móveis, pois pode ocupar muito espaço em desktops.",
        },
      },
    },
    "cc-icon": {
      title: "Ícone",
      description:
        "O componente de ícone é uma forma de alinhar a exibição de ativos estáticos de ícones no produto.",
      checklist: {
        "cc-icon-sizes": {
          title: "Tamanhos",
          description:
            "Os ícones devem ter vários tamanhos pré-definidos para fornecer uma experiência holística em todo o produto. Combinações de tipografia podem ser usadas para esses valores de tamanho para garantir que estejam alinhados com os tamanhos de texto.",
        },
        "cc-icon-colors": {
          title: "Cores",
          description:
            "Os ícones devem utilizar valores da paleta de cores do sistema de design. Usar a cor do texto do elemento pai para a cor de preenchimento do ícone pode tornar isso automático.",
        },
      },
    },
    "cc-checkbox": {
      title: "Caixa de seleção",
      description:
        "Uma caixa de seleção (em inglês: checkbox) é um elemento de formulário usado para selecionar uma ou várias opções.",
      checklist: {
        "cc-checkbox-checked": {
          title: "Estado selecionado",
          description:
            "Usado quando a caixa de seleção está selecionada e utilizará seu valor para a submissão do formulário.",
        },
        "cc-checkbox-disabled": {
          title: "Estado desabilitado",
          description:
            "Impede interações com a caixa de seleção e remove seu valor da submissão do formulário.",
        },
        "cc-checkbox-indeterminate": {
          title: "Estado indeterminado",
          description:
            "Usado quando a caixa de seleção tem elementos selecionáveis filhos e somente alguns deles estão selecionados.",
        },
        "cc-checkbox-label": {
          title: "Rótulo",
          description:
            "Deve haver um rótulo de texto vinculado ao campo da caixa de seleção. Clicar no rótulo também deve acionar a seleção da caixa de seleção.",
        },
        "cc-checkbox-error": {
          title: "Estado de erro",
          description:
            "O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo da caixa de seleção. Sempre use um erro de texto junto com a mudança da cor do campo.",
        },
        "cc-checkbox-keyboard": {
          title: "Suporte ao teclado",
          description:
            "As seleções da caixa de seleção devem ser acionadas com a tecla de Espaço. Usar elementos nativos para isso deve fornecer esse tipo de interação pronta para uso.",
        },
        "cc-checkbox-group": {
          title: "Grupo de caixas de seleção",
          description:
            "As caixas de seleção podem ser agrupadas para funcionar com múltiplos valores ao mesmo tempo.",
        },
      },
    },
    "cc-radio": {
      title: "Seleção de rádio",
      description:
        "Um campo de seleção de rádio (em inglês: radio button) é um elemento de formulário usado para selecionar uma opção de uma lista.",
      checklist: {
        "cc-radio-checked": {
          title: "Estado selecionado",
          description:
            "Usado quando a opção de rádio é selecionada e seu valor é enviado com o envio do formulário. Uma opção de rádio não pode ser desselecionada ao clicar novamente nela.",
        },
        "cc-radio-disabled": {
          title: "Estado desativado",
          description:
            "Impede a interação com a opção de rádio e remove seu valor do envio do formulário.",
        },
        "cc-radio-label": {
          title: "Rótulo",
          description:
            "Deve haver um rótulo de texto vinculado ao campo de seleção de rádio. Clicar no rótulo também deve selecionar a opção de rádio.",
        },
        "cc-radio-error": {
          title: "Estado de erro",
          description:
            "O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de seleção de rádio. Sempre use uma mensagem de erro de texto juntamente com a alteração da cor do campo.",
        },
        "cc-radio-keyboard": {
          title: "Suporte ao teclado",
          description:
            "A seleção de uma opção de rádio deve ser feita quando a tecla Espaço é pressionada. O uso de elementos nativos deve fornecer esse tipo de interação.",
        },
        "cc-radio-group": {
          title: "Grupo de rádio",
          description:
            "As opções de rádio devem sempre ser usadas em grupo. Se uma delas for selecionada, só poderá ser desmarcada escolhendo outra opção de rádio.",
        },
      },
    },
    "cc-text-field": {
      title: "Campo de texto",
      description: "Campo de texto permite que os usuários insiram e editem texto.",
      checklist: {
        "cc-text-field-disabled": {
          title: "Estado desativado",
          description:
            "Impede interações de entrada e remove seu valor do envio do formulário.",
        },
        "cc-text-field-placeholder": {
          title: "Marcador de posição",
          description:
            "Quando nenhum valor é inserido, mostrar um marcador de posição com um exemplo de valor potencial. Não use marcadores de posição como rótulos para os campos.",
        },
        "cc-text-field-label": {
          title: "Rótulo",
          description:
            "Deve haver um rótulo de texto vinculado ao campo de texto. Clicar no rótulo deve mover o foco para o campo.",
        },
        "cc-text-field-error": {
          title: "Estado de erro",
          description:
            "O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de texto. Sempre use uma mensagem de erro de texto juntamente com a alteração da cor do campo.",
        },
        "cc-text-field-focused": {
          title: "Estado focado",
          description:
            "O estado focado deve destacar o campo de texto quando os usuários começam a interagir com ele. Sempre há apenas um campo em foco no formulário.",
        },
        "cc-text-field-autocomplete": {
          title: "Autocompletar",
          description:
            "Quando aplicável, adicionar suporte para o atributo de autocompletar do HTML permitirá que os usuários insiram facilmente diferentes tipos de dados.",
        },
        "cc-text-field-icon": {
          title: "Suporte a ícones",
          description:
            "Ícones são usados para descrever métodos de entrada, expressar o estado de um campo de texto ou fornecer funcionalidade adicional.",
        },
      },
    },
    "cc-switch": {
      title: "Interruptor de entrada",
      description:
        "Os interruptores de entrada (em inglês: switches) alternam o estado de um único item. Comparados à caixa de seleção de entrada, suas alterações geralmente se aplicam sem nenhum envio adicional.",
      checklist: {
        "cc-switch-checked": {
          title: "Estado verificado",
          description:
            "Usado quando um interruptor de entrada é ativado. É melhor fornecer uma maneira adicional de indicar o estado verificado além de alterar sua cor quando aplicável.",
        },
        "cc-switch-disabled": {
          title: "Estado desativado",
          description: "Impede a interação com um interruptor de entrada.",
        },
        "cc-switch-label": {
          title: "Etiqueta",
          description:
            "Deve haver uma etiqueta de texto vinculada ao campo do interruptor. Clicar na etiqueta também deve acionar a seleção de entrada.",
        },
        "cc-switch-keyboard": {
          title: "Suporte de teclado",
          description:
            "Uma seleção de interruptor deve ser acionada quando a tecla Espaço é pressionada.",
        },
      },
    },
    "cc-list": {
      title: "Lista",
      description:
        "As listas definem o layout do conteúdo da página ou grupos de elementos, empilhando-os vertical ou horizontalmente.",
      checklist: {
        "cc-list-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "As listas podem ser usadas em qualquer contexto, desde o layout em nível de página até a gestão de compensações entre componentes granulares. Elas devem funcionar com qualquer componente usado dentro.",
        },
        "cc-list-horizontal": {
          title: "Empilhamento horizontal",
          description:
            "As listas podem ser usadas para elementos inline e devem gerenciar como eles são empilhados horizontalmente, incluindo o gerenciamento de compensações entre várias linhas de elementos.",
        },
        "cc-list-divided": {
          title: "Variante dividida",
          description:
            "Listas com divisores são as melhores práticas aconselhadas por muitas diretrizes de plataforma (especialmente em dispositivos móveis).",
        },
        "cc-list-action": {
          title: "Suporta conteúdo acionável",
          description:
            "Às vezes, as listas são usadas para agrupar componentes acionáveis, onde toda a área do item da lista deve ser clicável.",
        },
      },
    },
    "cc-loading-indicator": {
      title: "Indicador de carregamento",
      description:
        "O indicador de carregamento (em inglês: loading) mostra que uma operação está sendo realizada e quanto tempo o processo levará.",
      checklist: {
        "cc-loading-indicator-variants": {
          title: "Variantes linear e não linear",
          description:
            "Dependendo do contexto e do componente para o qual é usado, o indicador de carregamento pode ser representado tanto com uma variante linear quanto com uma variante não linear (por exemplo, circular).",
        },
        "cc-loading-indicator-wait": {
          title: "Tempo de espera determinado ou indeterminado",
          description:
            "Em alguns casos, o tempo de espera não pode ser determinado. O indicador de carregamento deve ser mostrado até que o carregamento seja concluído ou ocorra um erro. Em outros casos, é melhor indicar quanto tempo falta para que o carregamento seja concluído.",
        },
        "cc-loading-indicator-light": {
          title: "Variante clara",
          description:
            "O indicador de carregamento deve respeitar o fundo do elemento pai e fornecer uma variante a ser usada em cores de fundo mais escuras.",
        },
        "cc-loading-indicator-reduced": {
          title: "Movimento reduzido",
          description:
            "O indicador de carregamento deve estar sincronizado com as configurações de movimento do sistema e reduzir a velocidade de animação quando as configurações de movimento reduzido estiverem ativadas.",
        },
      },
    },
    "cc-modal": {
      title: "Modal",
      description:
        "Modais são contêineres que aparecem na frente do conteúdo principal para fornecer informações críticas ou um conteúdo acionável.",
      checklist: {
        "cc-modal-supports-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Assim como qualquer outro contêiner, os modais podem ser usados em diferentes cenários e você deve ser capaz de usá-los com qualquer outro componente interno.",
        },
        "cc-modal-actions": {
          title: "Ações suplementares",
          description:
            "Como o conteúdo no modal pode ser acionável, é importante ter uma área para elementos de ação. Esta área geralmente fica localizada na parte inferior do contêiner modal.",
        },
        "cc-modal-close": {
          title: "Ação de fechamento",
          description:
            "Os modais devem fornecer uma maneira clara de serem fechados, pois bloqueiam o conteúdo quando estão abertos. Isso pode ser um botão de fechar separado ou uma das ações suplementares.",
        },
        "cc-modal-structure": {
          title: "Estrutura de informações",
          description:
            "Embora os modais possam ser usados como um contêiner vazio para o conteúdo, eles precisam de uma estrutura de informações definida para fornecer uma experiência holística. Isso pode incluir a definição de como os títulos e subtítulos parecem por padrão ou onde fica a área do elemento de ação.",
        },
        "cc-modal-keyboard": {
          title: "Suporte à navegação por teclado",
          description:
            "Deve ser possível fechar um modal pressionando a tecla Esc e todos os elementos com foco dentro do contêiner do modal devem ser acessíveis por navegação por teclado.",
        },
        "cc-modal-trap": {
          title: "Captura de foco",
          description:
            "Uma vez que um modal é aberto, o foco deve ser movido para o primeiro elemento dentro do modal e deve ser mantido dentro do contêiner do modal. Fechar o modal deve retornar o foco para o último elemento com foco na página.",
        },
      },
    },
    "cc-tabs": {
      title: "Guias",
      description:
        "Guias (em inglês: tabs) organizam a navegação entre várias páginas ou seções de conteúdo.",
      checklist: {
        "cc-tabs-active": {
          title: "Estado ativo do botão",
          description:
            "Deve haver uma diferenciação clara entre os botões de guia selecionados e não selecionados.",
        },
        "cc-tabs-icon": {
          title: "Suporte a ícones nos botões",
          description:
            "Ícones ajudam a mostrar o propósito dos botões de guia quando usados ao lado de sua etiqueta.",
        },
        "cc-tabs-equal": {
          title: "Botões de guia com tamanho igual",
          description:
            "Guias podem ser usadas em um contêiner de tamanho relativamente pequeno, onde você precisa alternar entre um número definido de seções. Para esses cenários, é melhor suportar uma variante em que a área do botão é dividida igualmente.",
        },
        "cc-tabs-keyboard": {
          title: "Navegação por teclado",
          description:
            "Todos os botões de guia devem ser focalizáveis e a navegação entre os componentes de guia deve ser acessível pelo teclado.",
        },
        "cc-tabs-mobile": {
          title: "Responsividade",
          description:
            "Se todas as guias em dispositivos móveis não couberem na janela de visualização, os usuários ainda devem ter acesso a todos os botões de guia. As formas de resolver isso podem ser tornar a área do botão rolável para dispositivos móveis ou mostrar um botão Mais contendo um menu suspenso com o restante dos botões.",
        },
      },
    },
    "cc-toast": {
      title: "Toast",
      description:
        "Toasts fornecem mensagens curtas e significativas sobre os resultados das ações.",
      checklist: {
        "cc-toast-auto": {
          title: "Dispensado automaticamente",
          description:
            "Mensagens de toast não devem interromper o fluxo do usuário, bloquear a tela por muito tempo ou exigir uma ação adicional do usuário.",
        },
        "cc-toast-action": {
          title: "Suporte a ação",
          description:
            "Além de exibir a mensagem, os toasts também podem fornecer uma ação relacionada à mensagem, como desfazer uma ação.",
        },
        "cc-toast-queue": {
          title: "Lida com múltiplas instâncias",
          description:
            "Embora não aconteça com frequência, os toasts podem ser chamados de várias fontes ao mesmo tempo e todos os toasts resultantes devem ser enfileirados. É uma boa prática não mostrar todas as mensagens ao mesmo tempo.",
        },
        "cc-toast-a11y": {
          title: "Acessibilidade",
          description:
            "As mensagens de toast devem ser anunciadas pela tecnologia de assistência de voz e sua ação deve ser facilmente acessível pelo teclado.",
        },
        "cc-toast-mobile": {
          title: "Responsividade",
          description:
            "Os toasts devem estar alinhados com a viewport móvel e sua ação deve ser facilmente acessível para tocar.",
        },
      },
    },
    "cc-tooltip": {
      title: "Tooltip",
      description:
        "Tooltips são componentes exclusivos para desktop que exibem informações adicionais quando o cursor do mouse é colocado sobre ou um elemento é focado.",
      checklist: {
        "cc-tooltip-keyboard": {
          title: "Suporte para foco com teclado",
          description:
            "Os tooltips devem ser acessíveis quando um elemento é focado usando o teclado.",
        },
        "cc-tooltip-position": {
          title: "Posicionamento dinâmico",
          description:
            "O conteúdo do tooltip deve ser exibido com base na posição atual do elemento de gatilho na tela e sempre visível para o usuário.",
        },
        "cc-tooltip-timeout": {
          title: "Tempo de espera de exibição",
          description:
            "Ter um pequeno tempo de espera antes de acionar um tooltip ajudará a evitar a exibição ocasional de tooltips enquanto os usuários movem o cursor do mouse.",
        },
        "cc-tooltip-light": {
          title: "Variante clara",
          description:
            "O tooltip deve respeitar o plano de fundo do elemento pai e fornecer uma variante a ser usada em cores de fundo mais escuras.",
        },
        "cc-tooltip-group": {
          title: "Transição instantânea para grupos de elementos",
          description:
            "Se houver um grupo de elementos usando tooltips, passar o mouse sobre outro elemento enquanto um tooltip já está ativa não deve acionar a animação.",
        },
      },
    },
  },
};
