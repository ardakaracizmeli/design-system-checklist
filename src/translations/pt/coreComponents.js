export default {
  title: "Componentes principais",
  description:
    "Componentes são os principais blocos de construção para interfaces de usuário. A construção de uma biblioteca de componentes reutilizáveis aprimora e acelera o fluxo de trabalho e contribui para redução das dívidas técnicas de design e desenvolvimento. Os componentes principais não podem ser desmembrados em peças granulares sem perder seu significado.",
  sections: {
    "cc-avatar": {
      title: "Avatar",
      description:
        "Avatares são usados para mostrar uma miniatura de uma foto do usuário ou uma uma representação visual de outro tipo de conteúdo.",
      checklist: {
        "cc-avatar-image": {
          title: "Imagem",
          description:
            "Os avatares devem adequar a imagem ao seu formato e funcionar com qualquer tamanho de imagem, já que podem receber essa imagem de fontes de dados desconhecidas.",
        },
        "cc-avatar-image-fallback": {
          title: "Substituto de imagem",
          description:
            "Quando não há imagem disponível, o substituto deve ser exibido. Isso pode ser feito com imagens definidas anteriormente ou com iniciais.",
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
            "Quando usados com ícones ou texto, a cor de fundo do avatar deve ser uma das que foram definidas nos tokens de cor do Design System. Certifique-se de que ícones e texto tenham uma relação de contraste suficiente com o fundo de acordo com o padrão WCAG AA.",
        },
      },
    },
    "cc-badge": {
      title: "Badge",
      description:
        "Também conhecido como tag, os badges são elementos que representam o status de um objeto ou trazem informações complementares sobre um outro elemento.",
      checklist: {
        "cc-badge-appearance": {
          title: "Aparência",
          description:
            "Os badges podem desempenhar vários papéis em seu produto e ter uma cor predefinida para cada papel ajuda os usuários a entender seu significado. Ao alterar as cores, certifique-se de que o texto tenha relação de contraste suficiente com o fundo de acordo com o padrão WCAG AA.",
        },
        "cc-badge-dismiss": {
          title: "Ação de fechar",
          description:
            "Quando os badges são usados como uma maneira dinâmica de exibir informações, deve haver uma maneira de fechá-los.",
        },
      },
    },
    "cc-banner": {
      title: "Banner",
      description:
        "Banners exibem mensagens normalmente acompanhadas de uma ação e são utilizados de forma destacada na interface para se comunicar com o usuário.",
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
          title: "Ação de fechar",
          description:
            "Inclua uma opção de fechar no banner para não sobrecarregue o usuário com muitas informações na página. Isso pode ser feito com um botão separado de fechar ou com uma das ações fornecidas.",
        },
        "cc-banner-a11y": {
          title: "Acessibilidade",
          description:
            "Se um banner aparecer dinamicamente na página, deve ser anunciado ao usuário por sua tecnologia assistiva.",
        },
        "cc-banner-mobile": {
          title: "Responsividade",
          description:
            "Os banners devem se adaptar ao tamanho da tela. Isso geralmente significa que eles se adaptam para ocupar largura total em dispositivos móveis para fornecer mais espaço.",
        },
      },
    },
    "cc-button": {
      title: "Botão",
      description:
        "Botões são elementos interativos usados ​​para ações de um único passo.",
      checklist: {
        "cc-button-hover": {
          title: "Estado de hover",
          description:
            "Do inglês, hover significa flutuar. Por isso, este estado é ativado quando o cursor do mouse está passando por cima do botão. Essa interação mostra para o usuário que o botão é interativo.",
        },
        "cc-button-active": {
          title: "Estado ativo",
          description:
            "Usado quando um botão é pressionado.",
        },
        "cc-button-focus": {
          title: "Estado de foco",
          description:
            "Usado quando um botão é selecionado por meio da navegação pelo teclado.",
        },
        "cc-button-icon": {
          title: "Ícones",
          description:
            "Os ícones comunicam facilmente o propósito do botão quando usados ​​ao lado do texto da ação, ou podem ser usados ​​sem texto quando não há espaço suficiente. Certifique-se de que a etiqueta de acessibilidade seja fornecida quando usada com um ícone apenas.",
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
            "Por padrão, os botões têm a largura de seu conteúdo, mas eles também devem ter uma variante de ocupar a largura total que funcione bem em dispositivos móveis.",
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
      title: "Cards",
      description:
        "Cards são usados para agrupar informações sobre assuntos e suas ações relacionadas. Seu nome em inglês remete a cartões que agrupam conteúdos.",
      checklist: {
        "cc-card-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Os cards são um dos componentes mais usados no produto, então eles devem ser flexíveis o suficiente para suportar quaisquer outros componentes colocados neles.",
        },
        "cc-card-structure": {
          title: "Estrutura de informações",
          description:
            "Não importa o quão flexíveis os cards são, é importante que eles tenham uma estrutura específica para seus elementos, buscando manter a consistência do produto.",
        },
        "cc-card-media": {
          title: "Mídia",
          description:
            "Um dos cenários de uso mais populares quando falamos de cards envolve conteúdo de mídia. As opções mais comuns são ter uma área ocupando a largura total na parte superior do conteúdo ou uma área ocupando a altura total em um dos lados do card.",
        },
        "cc-card-actions": {
          title: "Ações complementares",
          description:
            "Os cards podem ser usados com ações geralmente colocadas na parte inferior do cartão, ou o próprio card pode ser tocável e representar uma ação.",
        },
        "cc-card-mobile": {
          title: "Responsividade",
          description:
            "Em telas móveis, os cards geralmente têm largura total para fornecer espaço para o conteúdo.",
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
            "Carrosséis devem ser roláveis em dispositivos de toque. Algumas das melhores práticas são usar rolagem nativa e garantir que você esteja suportando o mesmo comportamento para todos os dispositivos de toque, não apenas telefones.",
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
      title: "Dropdown",
      description:
        "Este componente é utilizado para exibir uma lista de opções ou ações por cima da interface, mas ancorada à área de origem. Também é conhecido como menu suspenso, em português.",
      checklist: {
        "cc-dropdown-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Os dropdowns podem ser usados em muitos contextos, como seleção de datas, seleção de idioma ou outras características do produto.",
        },
        "cc-dropdown-menu": {
          title: "Menu de ações",
          description:
            "Um dos cenários mais usados para dropdowns é fornecer um menu de ações para o usuário, portanto, é útil ter esse layout definido.",
        },
        "cc-dropdown-trap": {
          title: "Foco restrito",
          description:
            "Uma vez que o dropdown é aberto, o foco deve funcionar apenas para os elementos dentro do próprio componente. Quando ele é fechado, o foco deve ir para o botão de abrir o dropdown.",
        },
        "cc-dropdown-close": {
          title: "Ação de fechar",
          description:
            "Algumas ações dentro do dropdown  devem fechá-lo ou deve haver um botão separado de fechar. Também é uma boa prática fechar o dropdown quando o usuário clica fora dele.",
        },
        "cc-dropdown-keyboard": {
          title: "Navegação por teclado",
          description:
            "Deve ser possível navegar pelos elementos do dropdown com o teclado e fechá-lo com a tecla Esc.",
        },
        "cc-dropdown-position": {
          title: "Posicionamento dinâmico",
          description:
            "O conteúdo deve ser exibido com base na posição atual do botão de abrir o dropdown na tela e sempre estar visível para o usuário.",
        },
        "cc-dropdown-mobile": {
          title: "Responsividade",
          description:
            "O conteúdo do dropdown deve ser adaptado para dispositivos móveis, pois pode ocupar muito espaço.",
        },
      },
    },
    "cc-icon": {
      title: "Ícone",
      description:
        "O componente de ícone é uma forma de padronizar a exibição de diferentes ícones no produto independente do momento.",
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
      title: "Checkbox",
      description:
        "É um elemento de formulário usado para selecionar uma ou várias opções.",
      checklist: {
        "cc-checkbox-checked": {
          title: "Estado selecionado",
          description:
            "Usado quando o checkbox está selecionado e utilizará seu valor para a submissão do formulário.",
        },
        "cc-checkbox-disabled": {
          title: "Estado desabilitado",
          description:
            "Impede interações com o checkbox e remove seu valor da submissão do formulário.",
        },
        "cc-checkbox-indeterminate": {
          title: "Estado indeterminado",
          description:
            "Usado quando o checkbox tem elementos selecionáveis filhos e somente alguns deles estão selecionados.",
        },
        "cc-checkbox-label": {
          title: "Texto descritivo",
          description:
            "Deve haver um texto descritivo de texto vinculado ao campo do checkbox. Clicar no texto também deve acionar o checkbox.",
        },
        "cc-checkbox-error": {
          title: "Estado de erro",
          description:
            "O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao checkbox. Sempre use um texto de erro junto com a mudança da cor do campo.",
        },
        "cc-checkbox-keyboard": {
          title: "Suporte ao teclado",
          description:
            "As seleções do checkbox devem ser acionadas com a tecla de Espaço. Usar elementos nativos para isso deve fornecer esse tipo de interação pronta para uso.",
        },
        "cc-checkbox-group": {
          title: "Grupo de caixas de seleção",
          description:
            "Os checkbox podem ser agrupados para funcionar com múltiplos valores ao mesmo tempo.",
        },
      },
    },
    "cc-radio": {
      title: "Radio button",
      description:
        "É um elemento de formulário usado para selecionar apenas uma opção de uma lista.",
      checklist: {
        "cc-radio-checked": {
          title: "Estado selecionado",
          description:
            "Usado quando o radio button é selecionado e seu valor é enviado com o formulário. O radio button não pode ser desselecionado ao clicar novamente nele.",
        },
        "cc-radio-disabled": {
          title: "Estado desativado",
          description:
            "Impede a interação com o radio button e remove seu valor do envio do formulário.",
        },
        "cc-radio-label": {
          title: "Texto descritivo",
          description:
            "Deve haver um texto descritivo vinculado ao radio button. Clicar no texto também deve selecionar o radio button.",
        },
        "cc-radio-error": {
          title: "Estado de erro",
          description:
            "O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo do radio button. Sempre use uma mensagem de erro de texto juntamente com a alteração da cor do campo.",
        },
        "cc-radio-keyboard": {
          title: "Suporte ao teclado",
          description:
            "A seleção de um radio button deve ser feita quando a tecla Espaço é pressionada. O uso de elementos nativos deve fornecer esse tipo de interação.",
        },
        "cc-radio-group": {
          title: "Grupo de rádio",
          description:
            "Os radio button devem sempre ser usados em grupo. Se um deles for selecionado, só poderá ser desmarcado escolhendo outro radio button.",
        },
      },
    },
    "cc-text-field": {
      title: "Campo de texto",
      description: "Também conhecidos como inputs, permite que os usuários insiram e editem texto.",
      checklist: {
        "cc-text-field-disabled": {
          title: "Estado desativado",
          description:
            "Impede interações de entrada e remove seu valor do envio do formulário.",
        },
        "cc-text-field-placeholder": {
          title: "Conteúdo provisório",
          description:
            "Quando nenhum valor é inserido, é possível mostrar um conteúdo provisório com um exemplo de valor potencial. Não use conteúdos provisórios como rótulos para os campos.",
        },
        "cc-text-field-label": {
          title: "Título descritivo",
          description:
            "Deve haver um título descritivo vinculado ao campo de texto. Clicar no título deve mover o foco para o campo.",
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
          title: "Ícones",
          description:
            "Ícones são usados para expressar o estado de um campo de texto ou fornecer contexto adicional.",
        },
      },
    },
    "cc-switch": {
      title: "Switches",
      description:
        "Do inglês, os switches funcionam como interruptores que alternam o estado de um único item. A interação com o switch gera uma resposta imediata na interface, ao invés de depender do envio do formulário como em outros componentes.",
      checklist: {
        "cc-switch-checked": {
          title: "Estado ativo",
          description:
            "Usado quando um switch é ativado. É uma boa prática uma maneira adicional de indicar o estado ativo além de apenas alterar a cor.",
        },
        "cc-switch-disabled": {
          title: "Estado desativado",
          description: "Impede a interação com um switch.",
        },
        "cc-switch-label": {
          title: "Texto descritivo",
          description:
            "Deve haver um texto descritivo vinculado ao switch. Clicar no texto também deve acionar o switch.",
        },
        "cc-switch-keyboard": {
          title: "Suporte de teclado",
          description:
            "Um switch deve ser acionada quando a tecla Espaço é pressionada.",
        },
      },
    },
    "cc-list": {
      title: "Lista",
      description:
        "As listas definem o layout do conteúdo da página ou grupos de elementos, empilhando-os vertical ou horizontalmente..",
      checklist: {
        "cc-list-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Podem ser usadas em qualquer contexto e devem ter uma estrutura funcional para aceitar outros componentes dentro do seu layout.",
        },
        "cc-list-horizontal": {
          title: "Empilhamento horizontal",
          description:
            "É importante gerenciar como os elementos das listas são empilhados horizontalmente, mantendo o padrão de espaçamento do seu Design System e garantindo que as linhas tenham um bom respiro entre si.",
        },
        "cc-list-divided": {
          title: "Divisores",
          description:
            "É uma boa prática incluir divisores entre as linhas da sua lista, sendo aconselhada por muitas diretrizes de plataforma (especialmente em dispositivos móveis).",
        },
        "cc-list-action": {
          title: "Suporta conteúdo interativo",
          description:
            "Às vezes, as listas são usadas para agrupar componentes interativos, onde toda a área do item da lista deve ser clicável.",
        },
      },
    },
    "cc-loading-indicator": {
      title: "Indicador de carregamento",
      description:
        "O indicador de carregamento mostra que uma operação está sendo realizada e quanto tempo o processo levará.",
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
          title: "Variante de cor",
          description:
            "O indicador de carregamento deve respeitar o fundo do elemento pai e fornecer uma variante a ser usada em cores de fundo mais claras e mais escuras.",
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
        "Modais são contêineres que aparecem na frente do conteúdo principal para fornecer informações importantes ou um conteúdo interativo.",
      checklist: {
        "cc-modal-supports-content": {
          title: "Suporta qualquer tipo de conteúdo",
          description:
            "Os modais podem ser usados em diferentes cenários e deve ser possível usá-los com qualquer outro componente interno.",
        },
        "cc-modal-actions": {
          title: "Suporta conteúdo interativo",
          description:
            "Como o conteúdo no modal pode ser interativo, é importante ter uma área para estes elementos, como botões. Esta área geralmente fica localizada na parte inferior do modal.",
        },
        "cc-modal-close": {
          title: "Ação de fechar",
          description:
            "Os modais devem fornecer uma maneira clara de serem fechados, pois bloqueiam o conteúdo principal quando estão abertos. Isso pode ser um botão de fechar separado ou uma das ações apresentadas.",
        },
        "cc-modal-structure": {
          title: "Estrutura de informações",
          description:
            "Embora os modais possam ser usados como um contêiner vazio para o conteúdo, eles precisam de uma estrutura de informações definida para fornecer uma experiência holística. Isso pode incluir a definição de como os títulos e subtítulos parecem por padrão ou onde fica a área do elemento de interação.",
        },
        "cc-modal-keyboard": {
          title: "Suporte à navegação por teclado",
          description:
            "Deve ser possível fechar um modal pressionando a tecla Esc e todos os elementos com foco dentro do contêiner do modal devem ser acessíveis por navegação por teclado.",
        },
        "cc-modal-trap": {
          title: "Foco",
          description:
            "Uma vez que um modal é aberto, o foco deve ser movido para o primeiro elemento dentro do modal e deve ser mantido dentro do contêiner do modal. Fechar o modal deve retornar o foco para o último elemento com foco na página.",
        },
      },
    },
    "cc-tabs": {
      title: "Guias",
      description:
        "Também conhecidas como tabs, esses componentes organizam a navegação entre várias páginas ou seções de conteúdo.",
      checklist: {
        "cc-tabs-active": {
          title: "Estado ativo",
          description:
            "Deve haver uma diferenciação clara entre as guias ativas e não ativas.",
        },
        "cc-tabs-icon": {
          title: "Ícones",
          description:
            "Ícones ajudam a mostrar o propósito das guias quando usados ao lado do texto.",
        },
        "cc-tabs-equal": {
          title: "Guias com mesmo tamanho ",
          description:
            "Guias podem ser usadas em um espaço relativamente pequeno, onde você precisa alternar entre um número definido de seções. Para esses cenários, é recomendado ter uma variante em que a área do botão é dividida igualmente.",
        },
        "cc-tabs-keyboard": {
          title: "Navegação por teclado",
          description:
            "Deve ser possível navegar entre as guias pelas teclas do teclado.",
        },
        "cc-tabs-mobile": {
          title: "Responsividade",
          description:
            "Se não for possível exibir todas em uma tela com espaço reduzido, como a de dispositivos móveis, os usuários ainda devem ter acesso a todos os botões de guia. É possível resolver isso permitindo uma rolagem lateral no grupo de guias ou mostrar um botão “Mais” contendo um dropdown com o restante dos botões.",
        },
      },
    },
    "cc-toast": {
      title: "Toast",
      description:
        "Toasts fornecem mensagens curtas e significativas sobre os resultados das ações. Seu nome vem de um movimento comum que ele faz ao aparecer na tela, aparecendo de baixo para cima, como uma torrada na torradeira.",
      checklist: {
        "cc-toast-auto": {
          title: "Dispensado automaticamente",
          description:
            "Mensagens de toast devem ter um tempo definido para aparecer, uma vez que não devem interromper o fluxo do usuário, bloquear a tela por muito tempo ou exigir uma ação adicional do usuário.",
        },
        "cc-toast-action": {
          title: "Suporta conteúdo interativo",
          description:
            "Além de exibir a mensagem, os toasts também podem fornecer uma ação relacionada à mensagem, como desfazer uma ação.",
        },
        "cc-toast-queue": {
          title: "Empilhamento de toasts",
          description:
            "Embora não aconteça com frequência, os toasts podem ser chamados de várias fontes ao mesmo tempo e todos os toasts resultantes devem ser empilhados. É uma boa prática não mostrar todas as mensagens ao mesmo tempo.",
        },
        "cc-toast-a11y": {
          title: "Acessibilidade",
          description:
            "As mensagens de toast devem ser anunciadas pela tecnologia de assistência de voz e sua ação deve ser facilmente acessível pelo teclado.",
        },
        "cc-toast-mobile": {
          title: "Responsividade",
          description:
            "Os toasts devem estar otimizados para telas menores, como de dispositivos móveis, facilitando a leitura e a interação com o componente.",
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
          title: "Variante de cor",
          description:
            "O tooltip deve respeitar o fundo do elemento pai e fornecer uma variante a ser usada em cores de fundo mais claras e mais escuras.",
        },
        "cc-tooltip-group": {
          title: "Transição instantânea",
          description:
            "Se houver um grupo de elementos usando tooltips, passar o mouse sobre outro elemento enquanto um tooltip já está ativo não deve acionar a animação.",
        },
      },
    },
  },
};
