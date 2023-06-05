export default {
  title: "Manutenção",
  description:
    "Design systems não são diferentes de qualquer outro projeto que sua equipe possa assumir. Para construir e manter um com sucesso, é necessário ter uma estratégia clara que seja bem executada diariamente, além de criar oportunidades para que seus colegas possam fornecer feedback e colaborar no desenvolvimento do design system.",
  sections: {
    "m-documentation": {
      title: "Documentação",
      description:
        "Documentação é uma parte fundamental de qualquer design system, pois economiza tempo e esforço da equipe e de todos que utilizam o sistema.  Isso possibilita que as pessoas aprendam os detalhes e encontrem respostas para as perguntas mais frequentes sem precisar entrar em contato direto com a equipe",
      checklist: {
        "m-documentation-principles": {
          title: "Princípios do design system",
          description:
            "Liste seus princípios fundamentais ao construir um design system, a fim de comunicar aos designers e desenvolvedores quais são seus valores e quais são os principais fatores considerados em sua equipe para tomada de decisões.",
        },
        "m-documentation-start": {
          title: "Primeiros passos",
          description:
            "Auxilie os outros nos primeiros passos de configuração e uso do seu design system, o que permitirá que eles possam desenvolver suas primeiras funcionalidades ou produtos sem precisar contatar você diretamente.",
        },
        "m-documentation-design": {
          title: "Melhores práticas de design",
          description:
            "Compartilhe dicas sobre como projetar produtos de forma escalável utilizando o design system, evitando armadilhas comuns e como aproveitar ao máximo o potencial da sua ferramenta de design.",
        },
        "m-documentation-dev": {
          title: "Melhores práticas de desenvolvimento",
          description:
            "Compartilhe dicas sobre o desenvolvimento de produtos utilizando o design system, as dependências técnicas recomendadas e como evitar armadilhas comuns.",
        },
        "m-documentation-anatomy": {
          title: "Anatomia do componente",
          description:
            "Forneça uma visão geral da anatomia de design dos componentes para auxiliar na compreensão das limitações do layout do componente e quais partes dele podem ser personalizadas.",
        },
        "m-documentation-props": {
          title: "Propriedades do componente",
          description:
            "Documente as propriedades suportadas pelos seus componentes tanto no design quanto no código. Recomendamos alinhar a maioria delas entre as plataformas para facilitar o processo de transição do design.",
        },
        "m-documentation-composition": {
          title: "Exemplos de composição do componente",
          description:
            "Ao construir componentes de baixo nível que possuam slots para inserção de outros conteúdos, forneça exemplos que demonstrem como utilizá-los para criar composições mais avançadas.",
        },
        "m-documentation-sandbox": {
          title: "Ambiente de teste do produto",
          description:
            "Se você não tem uma forma de testar seus componentes no próprio produto, você pode construir uma aplicação simples que simula layouts reais do produto. Assim, você poderá avaliar o comportamento dos seus componentes e experimentar novas funcionalidades do sistema de design antes de lançá-las.",
        },
        "m-documentation-env": {
          title: "Compatibilidade com navegadores e sistemas operacionais",
          description:
            "Estabeleça o nível de suporte que você oferece para diferentes sistemas operacionais e navegadores, e assegure-se de estar alinhado com o produto nesse aspecto.",
        },
        "m-documentation-release": {
          title: "Ciclo de lançamento",
          description:
            "Estabeleça e documente um ciclo de lançamento previsível para as versões principais que envolvam alterações significativas. Isso permitirá que as equipes de produto planejem as migrações em seu próprio ambiente de forma adequada.",
        },
      },
    },
    "m-local": {
      title: "Bibliotecas locais",
      description:
        "O objetivo do design system é, geralmente, construir os padrões centrais e recorrentes para acelerar as equipes de produto. Isso significa que você não precisa implementar todos os elementos de interface por conta própria. As equipes de produto ainda criarão componentes locais utilizando o sistema de design para resolver seus cenários específicos.",
      checklist: {
        "m-local-when": {
          title: "Quando construir",
          description:
            "Compartilhe suas expectativas sobre quando as equipes de produto devem construir componentes personalizados em vez de solicitar um novo recurso no design system ou usar um componente existente.",
        },
        "m-local-types": {
          title: "Bibliotecas horizontais e verticais",
          description:
            "Explicite a distinção entre as bibliotecas horizontais, que são empregadas em diversos produtos, e as bibliotecas verticais, que são usadas apenas pela equipe que as constrói.",
        },
        "m-local-expectations": {
          title: "Expectativas em relação à biblioteca",
          description:
            "Documente o conjunto mínimo de requisitos para lançar uma biblioteca local. Descreva suas expectativas em relação à qualidade, documentação e manutenção da biblioteca.",
        },
        "m-local-release": {
          title: "Alinhamento do ciclo de lançamento",
          description:
            "Assegure que as bibliotecas locais estejam alinhadas com o ciclo de lançamento do design system. Elas devem ser compatíveis com as novas versões principais recentemente publicadas do sistema, evitando assim impedimentos na atualização do produto.",
        },
      },
    },
    "m-process": {
      title: "Processos da equipe",
      description:
        "Equipes que alcançaram sucesso na escalabilidade de seus sistemas de design o fizeram estabelecendo processos sólidos para trabalhar com seus stakeholders e a comunidade. À medida que você continua desenvolvendo o sistema, esses processos pouparão inúmeras horas e evitarão que você precise responder repetidamente às mesmas perguntas.",
      checklist: {
        "m-process-log": {
          title: "Registro de tomada de decisões",
          description:
            "Para os tópicos que você precisa lidar repetidamente, faça registros sobre como você toma essas decisões. Isso permitirá que você não perca nenhum requisito contextual e evitará a necessidade de reuniões adicionais para alinhamento.",
        },
        "m-process-roadmap": {
          title: "Cronograma",
          description:
            "Tente planejar seu trabalho a longo prazo e destinar apenas uma parte do seu tempo para o suporte à comunidade. Isso ajudará você a evoluir o sistema ao longo do tempo, em vez de se concentrar apenas em correções de pequenos bugs e solicitações de novas funcionalidades.",
        },
        "m-process-stakeholder": {
          title: "Mapeamento dos stakeholders",
          description:
            "Faça uma lista dos principais stakeholders envolvidos em todos os produtos que você está apoiando. Isso inclui pessoas que trabalham no desenvolvimento e design, mas também não se esqueça dos líderes que podem ajudar a impulsionar a adoção do sistema.",
        },
        "m-process-analytics": {
          title: "Análises",
          description:
            "Estabeleça um método para acompanhar o uso e o valor das bibliotecas e ferramentas que você disponibiliza. Você pode começar com métricas fáceis de configurar, como análises do site de documentação, pesquisas de feedback e análises do uso dos componentes na sua ferramenta de design.",
        },
        "m-process-shifts": {
          title: "Rotação contínua de suporte",
          description:
            "Se várias pessoas trabalham na mesma plataforma, distribua e planeje as responsabilidades de suporte à comunidade entre elas. Isso permitirá que os membros da equipe se concentrem nas tarefas planejadas, evitando distrações com solicitações e perguntas.",
        },
        "m-process-sla": {
          title: "SLA (Acordo de nível de serviço)",
          description:
            "Defina prazos para o tempo de resposta às solicitações recebidas e aos relatórios de bugs, a fim de ajudar as equipes de produto a decidir se devem aguardar o lançamento oficial ou buscar uma solução temporária.",
        },
      },
    },
    "m-community": {
      title: "Suporte à comunidade",
      description:
        "É fundamental auxiliar os designers e desenvolvedores de produto a aumentarem sua produtividade com o sistema de design, solucionar os bugs encontrados nos produtos e atender às suas necessidades. Para garantir que você obtenha esse feedback, o seu objetivo é tornar fácil e seguro para todos compartilharem suas descobertas.",
      checklist: {
        "m-community-channels": {
          title: "Canais de suporte",
          description:
            "Crie canais de suporte nas ferramentas que você utiliza para comunicação. É uma boa ideia separá-los por plataforma, para que todos possam compartilhar de maneira confortável os detalhes específicos da plataforma relacionados aos seus problemas.",
        },
        "m-community-template": {
          title: "Templates",
          description:
            "Elabore templates para criar solicitações de funcionalidade e relatórios de bugs. Utilize-os para solicitar links de reprodução, propostas de design e outras informações contextuais necessárias para tomar decisões, em vez de procurar manualmente por essas informações.",
        },
        "m-community-updates": {
          title: "Atualizações regulares",
          description:
            "Você está arriscando a adoção das novas funcionalidades se estiver apenas focado na implementação, sem nunca discuti-las com a comunidade. Estabelecer uma frequência para suas atualizações ajuda a criar o hábito das equipes de produto de conferir regularmente o que há de novo no sistema e como podem aproveitá-lo ao máximo.",
        },
        "m-community-slots": {
          title: "Horários de disponibilidade",
          description:
            "Haverá perguntas que não podem ser resolvidas em um único ticket ou chat. Reserve alguns horários disponíveis em seu calendário para que outras equipes possam agendar consultas ou discutir a implementação de funcionalidades com a sua equipe.",
        },
      },
    },
    "m-contribution": {
      title: "Contribuição",
      description:
        "Construir design systems é um trabalho em equipe. Certifique-se de incluir as equipes de produto nessa jornada, auxiliando-as a contribuir para o sistema e permitindo que elas o defendam em toda a empresa.",
      checklist: {
        "m-contribution-rules": {
          title: "Regras da casa para o sistema",
          description:
            "Explique às equipes de produto como funciona o seu processo de design e desenvolvimento. As equipes de design system geralmente trabalham em um ritmo mais lento do que as equipes de produto, pois há maior responsabilidade em tomar decisões escaláveis nos componentes que afetam o produto como um todo.",
        },
        "m-contribution-guidelines": {
          title: "Orientações de contribuição",
          description:
            "Explique o que os colaboradores precisam configurar para preparar seu ambiente de design e desenvolvimento para adicionar e testar novas funcionalidades.",
        },
        "m-contribution-template": {
          title: "Template para proposta de nova funcionalidade",
          description:
            "Elabore um template padrão para iniciar o trabalho em uma nova funcionalidade. Esse modelo deve garantir que as alterações propostas sejam aplicadas em todas as plataformas e não comprometam a utilização atual dos componentes no produto.",
        },
        "m-contribution-engagement": {
          title: "Engajamento",
          description:
            "Assegure-se de destacar e recompensar o trabalho dos colaboradores ao fazer anúncios sobre as novas funcionalidades e ajude-os a obter apoio de seus gerentes quando eles contribuírem.",
        },
      },
    },
  },
};
