export default {
  title: "工具",
  description:
    "为了让使用你的设计系统的任何人都能高效，工具是必不可少的。找到能与人们使用的工具整合的工作流程，这有助于更好地传播你的设计系统，使之成为人们日常工作的关键。",
  sections: {
    "t-design": {
      title: "设计 (Design)",
      description:
        "设计系统中的UI和UX需要尽可能地与开发结合起来。希望本清单中的工具可以帮助设计师和开发人员更好地合作。",
      checklist: {
        "t-design-editor": {
          title: "设计工具",
          description:
            "现在市场上有很多设计工具，最流行的是Sketch、Figma和Adobe XD。如果不确定该选哪个，最好与团队一起沟通商量。",
        },
        "t-design-plugins": {
          title: "插件",
          description:
            "大多数流行的设计工具（尤其是Sketch和Figma）都有第三方插件支持。虽然最好使用设计工具内置的工具来布置你的组件，但插件可以带来一系列有用的数据来填充它们。",
        },
        "t-design-version": {
          title: "版本控制",
          description:
            "使用语义化版本控制来管理设计版本，可以方便地协调设计和开发工作，撤销错误更改，并在代码和设计同时发布变更。",
        },
        "t-design-contribution": {
          title: "贡献指南",
          description:
            "定义贡献设计系统UI和UX的过程，并将其文档化并放置在易于发现的位置，以便每个人都可以更轻松地做出贡献。",
        },
      },
    },
    "t-development": {
      title: "开发 (Development)",
      description:
        "开发一个设计系统的主要挑战之一不是构建组件，而是使代码稳定，易于阅读和贡献。",
      checklist: {
        "t-development-catalog": {
          title: "组件目录",
          description:
            "将你的UI组件的环境隔离在你的产品代码库之外，以确保它们不依赖于任何全局性的依赖，并且可以很容易地重复使用。",
        },
        "t-development-documentation": {
          title: "文档",
          description:
            "将你的代码记录下来是推动采用和减少贡献者负担的关键。",
        },
        "t-development-style": {
          title: "代码风格",
          description:
            "定义代码风格有助于统一系统中编写代码的方式，提高开发速度。应该利用每个平台提供的工具来自动化这个过程。",
        },
        "t-development-unit-testing": {
          title: "单元测试",
          description:
            "设计系统的每个部分都应该有单元测试覆盖。一旦系统被采用，孤立环境中的任何更改都可能影响产品的运作。",
        },
        "t-development-a11y-testing": {
          title: "可访问性（无障碍）测试",
          description:
            "设计系统应尽可能涵盖无障碍设计。将这一点自动化可以降低产品中存在无法访问的组件或用户流程的风险。",
        },
        "t-development-version": {
          title: "语义版本控制",
          description:
            "使用语义版本管理对你的代码进行版本管理，语义版本管理规定了版本号的分配和递增方式。",
        },
        "t-development-release": {
          title: "发布策略",
          description:
            "设计系统的发布应该自动化，并且最好使用本地或远程CI流水线中运行的脚本来防止发布出现问题。",
        },
        "t-development-changelog": {
          title: "提交信息指南和更新日志",
          description:
            "通过采用提交信息指南，自动生成你的变更日志，对正在进行的变更进行分类和定义。",
        },
        "t-development-mr": {
          title: "合并请求模板",
          description:
            "创建合并请求模板以概述所建议的更改，以促进有效的讨论。",
        },
        "t-development-contribution": {
          title: "贡献指南",
          description:
            "定义对设计系统代码做出贡献的流程。将所有内容记录在易于发现的位置，以便每个人都可以更轻松地做出贡献。",
        },
      },
    },
  },
};
