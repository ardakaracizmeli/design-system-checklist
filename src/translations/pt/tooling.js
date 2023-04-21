export default {
  title: "Ferramentas",
  description:
    "Para tornar as coisas eficientes para todos que utilizam seu Design System, priorize as ferramentas mais importantes. Encontre os fluxos de trabalho que podem ser otimizados e integrados com as ferramentas que as pessoas já utilizam. Isso ajuda a difundir seu Design System organicamente e torná-lo crucial para o trabalho diário das pessoas.",
  sections: {
    "t-design": {
      title: "Design",
      description:
        "O UI e UX em um Design System precisam estar relacionados ao desenvolvimento o máximo possível. As ferramentas neste checklist podem ajudar designers e desenvolvedores a trabalhar melhor juntos construindo Design Systems.",
      checklist: {
        "t-design-editor": {
          title: "Ferramentas de design",
          description:
            "Existem muitas ferramentas de design disponíveis no mercado hoje, sendo os mais populares o Sketch, o Figma e o Adobe XD. Se você não tem certeza de qual caminho seguir, é melhor conversar com sua equipe.",
        },
        "t-design-plugins": {
          title: "Plugins",
          description:
            "A maioria das ferramentas de design (especialmente o Sketch e o Figma) possuem suporte a plugins de terceiros. Embora seja melhor usar as ferramentas nativas dessas ferramentas para montar seus componentes, os plugins podem trazer uma variedade de dados e interações.",
        },
        "t-design-version": {
          title: "Controle de versão",
          description:
            "Ter controle da sua versão de design com versionamento semântico permitirá alinhar facilmente o design com o desenvolvimento, reverter alterações defeituosas e lançar alterações em código e design ao mesmo tempo.",
        },
        "t-design-contribution": {
          title: "Diretrizes de contribuição",
          description:
            "Defina o processo de contribuição do seu Design System e documente-o em um local de fácil acesso para que todos possam contribuir.",
        },
      },
    },
    "t-development": {
      title: "Desenvolvimento",
      description:
        "Um dos principais desafios no desenvolvimento de um Design System não é construir os componentes, e sim tornar seu código estável, fácil de ler e contribuir.",
      checklist: {
        "t-development-catalog": {
          title: "Catálogo de componentes",
          description:
            "Isole o ambiente da UI dos seus componentes fora da base de código do seu produto para garantir que eles não dependam de quaisquer dependências globais e possam ser facilmente reutilizados.",
        },
        "t-development-documentation": {
          title: "Documentação",
          description:
            "Documentar seu código é fundamental para impulsionar a adoção e reduzir a carga sobre os contribuidores.",
        },
        "t-development-style": {
          title: "Estilo de código",
          description:
            "Ter um estilo de código definido ajuda a alinhar a maneira como o código é escrito no Design System e aumenta a velocidade de desenvolvimento. O estilo deve ser automatizado com as ferramentas fornecidas para cada plataforma.",
        },
        "t-development-unit-testing": {
          title: "Testes unitários",
          description:
            "Cada parte do Design System deve ser coberta por testes unitários. Uma vez que o sistema é adotado, qualquer mudança no ambiente isolado pode afetar o funcionamento do produto.",
        },
        "t-development-a11y-testing": {
          title: "Testes de acessibilidade",
          description:
            "Os Design Systems devem ser o mais acessível possível. Tornar isso automático reduz o risco de componentes ou fluxos de usuários inacessíveis no produto.",
        },
        "t-development-version": {
          title: "Versionamento semântico",
          description:
            "Versão do seu código com versionamento semântico que dita como os números de versão são atribuídos e incrementados.",
        },
        "t-development-release": {
          title: "Estratégia de lançamento",
          description:
            "Os lançamentos do Design System devem ser automatizados e idealmente usar scripts executados localmente ou em pipelines remotos de CI para evitar lançamentos quebrados.",
        },
        "t-development-changelog": {
          title: "Diretrizes de mensagem de commit e changelog",
          description:
            "Automatize a geração do changelog adotando diretrizes de mensagem de commit que categorizem e definam as mudanças sendo feitas.",
        },
        "t-development-mr": {
          title: "Modelos de solicitação de merge (MR)",
          description:
            "Crie modelos de solicitação de merge que detalhem a alteração proposta para facilitar discussões produtivas.",
        },
        "t-development-contribution": {
          title: "Diretrizes de contribuição",
          description:
            "Defina o processo de contribuição para o código do Design System. Documente tudo em um lugar de fácil acesso para tornar mais fácil para todos contribuírem.",
        },
      },
    },
  },
};
