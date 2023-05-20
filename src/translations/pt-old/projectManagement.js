export default {
  title: "Gerenciamento de projetos",
  description:
    "Um Design System não é diferente de qualquer outro projeto que sua equipe possa aceitar. Para construir e mantê-lo com sucesso, é preciso adotar uma estratégia clara que seja bem executada diariamente, além de criar oportunidades para seus colegas darem feedback e ajudarem a compartilhar o Design System.",
  sections: {
    "pm-task-management": {
      title: "Gerenciamento de tarefas",
      description:
        "Um gerenciamento de tarefas e fluxos de trabalho sólidos são um passo crucial para executar qualquer projeto. Adotar uma metodologia como Agile ou Kanban ajuda você a cobrir muito terreno.",
      checklist: {
        "pm-task-management-roadmap": {
          title: "Roadmap",
          description:
            "Definir tarefas de curto e longo prazo podem te ajudar a decidir os próximos passos, entender seu lugar no quadro geral e priorizar as tarefas do dia a dia.",
        },
        "pm-task-management-milestones": {
          title: "Objetivos",
          description:
            "Defina marcos que atuem como grandes épicos em seu gerenciamento de projetos com a ajuda de seu roadmap. Isso ajudará você a entender seu progresso.",
        },
        "pm-task-management-ticketing": {
          title: "Acompanhamento de tarefas",
          description:
            "Facilite o acompanhamento do seu progresso diário usando um software de acompanhamento de tarefas como Jira, Trello ou GitHub. Isso tornará mais fácil para os outros enviar propostas de recursos ou relatórios de erros.",
        },
      },
    },
    "pm-communications": {
      title: "Comunicação",
      description:
        "Seus usuários desempenham um grande papel na formação do seu Design System. Criar canais de comunicação onde eles possam levantar suas vozes ajuda você a acompanhar como estão usando o DS. Esta ação também pode melhorar seu senso de propriedade e a adoção do sistema por parte dos seus colegas.",
      checklist: {
        "pm-communications-meetings": {
          title: "Reuniões com a comunidade",
          description:
            "Agende reuniões com todos que usam o Design System. Compartilhe seu conhecimento e faça propostas para melhorar o senso de comunidade.",
        },
        "pm-communications-channel": {
          title: "Canal de comunicação",
          description:
            "A maioria do trabalho de desenvolvimento de produtos acontece digitalmente, então crie um canal digital onde as pessoas possam entrar em contato e fazer perguntas.",
        },
        "pm-communications-open-hours": {
          title: "Horário livre",
          description:
            "Crie horários livres nos quais você possa envolver sua audiência em um ambiente mais privado e discutir as coisas com mais detalhes. Você também pode usar esses horários como oportunidades de criar componentes em equipe, seja na ferramenta de design ou no código.",
        },
        "pm-communications-faq": {
          title: "FAQ",
          description:
            "Para economizar tempo de todos, defina quais perguntas são frequentemente feitas por seu público e as documente em um local de fácil acesso.",
        },
      },
    },
    "pm-analytics": {
      title: "Análise de dados",
      description:
        "Manter um olhar atento sobre como o sistema é usado por designers e desenvolvedores pode ajudar a informar sua estratégia para o futuro.",
      checklist: {
        "pm-analytics-component": {
          title: "Análise de componentes",
          description:
            "Acompanhe o uso de seus componentes. Você pode usar ferramentas integradas como o Design System Analytics do Figma ou ter uma maneira separada de rastrear por plataforma, dependendo da tecnologia.",
        },
        "pm-analytics-logging": {
          title: "Registro de erros",
          description:
            "Implemente uma maneira de rastrear e identificar erros relacionados a componentes em seu produto.",
        },
        "pm-analytics-tooling": {
          title: "Análise de ferramentas",
          description:
            "Acompanhe quais ferramentas estão sendo usadas para o seu Design System. Descubra quais são as mais usadas e quais recursos são os mais populares.",
        },
        "pm-analytics-health": {
          title: "Métricas de serviço e saúde",
          description:
            "Defina métricas de serviço e saúde para seu Design System para estabelecer uma referência sobre o quão bem você está indo. Exemplos comuns podem ser o número de tickets fechados, melhorias realizadas ou bugs corrigidos.",
        },
      },
    },
  },
};
