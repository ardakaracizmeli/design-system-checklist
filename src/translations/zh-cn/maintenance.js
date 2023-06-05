export default {
  title: "维护",
  description:
    "设计系统与您的团队可能承担的任何其他项目没有区别。为了成功地构建和维护一个设计系统，您需要一个清晰的战略，每天都要执行得很好，并且您需要创造机会让您的同事提供反馈，以帮助共享您的设计系统。",

  sections: {
    "m-documentation": {
      title: "文档",
      description:
        "文档资源是任何设计系统的核心部分，因为它为团队和所有使用设计系统的人节省了时间和精力。它使人们能够学习绳索并找到最常问的问题的答案，而无需联系团队。",
      checklist: {
        "m-documentation-principles": {
          title: "设计系统原则",
          description:
            "列出您在构建设计系统时的核心原则，让设计师和开发人员了解您的价值观以及哪些是您团队决策的主要因素。",
        },
        "m-documentation-start": {
          title: "入门指南",
          description:
            "指导他人完成设置和使用您的设计系统的第一步，这可以帮助他们构建他们的第一个功能或产品，而无需直接联系您。",
        },
        "m-documentation-design": {
          title: "设计最佳实践",
          description:
            "分享如何以可扩展的方式使用设计系统设计产品的技巧，避免常见陷阱，并充分利用您的设计工具。",
        },
        "m-documentation-dev": {
          title: "开发最佳实践",
          description:
            "分享使用设计系统开发产品的技巧、推荐的技术依赖项以及避免常见陷阱。",
        },
        "m-documentation-anatomy": {
          title: "组件解剖",
          description:
            "提供组件设计解剖的概述，以帮助每个人了解组件布局的限制以及哪些部分是可自定义的。",
        },
        "m-documentation-props": {
          title: "组件属性",
          description:
            "记录组件在设计和代码中支持的属性。我们建议在各个平台上对它们进行大部分 的对齐，以便更顺畅地进行设计移交流程。",
        },
        "m-documentation-composition": {
          title: "组件组合示例",
          description:
            "在构建支持插入其他内容的低级组件时，提供如何使用它们创建更高级组合的示例。",
        },
        "m-documentation-sandbox": {
          title: "沙盒产品示例",
          description:
            "如果您没有自己在产品中测试组件的方法，可以构建一个简单的应用程序，模拟实际产品布局，以测试您的组件在实际情况下的行为，并在发布新的设计系统功能之前尝试它们。",
        },
        "m-documentation-env": {
          title: "浏览器/操作系统支持",
          description:
            "定义您为各种操作系统和浏览器提供的支持级别，并确保您在这个主题上与产品保持一致。",
        },
        "m-documentation-release": {
          title: "发布周期",
          description:
            "为包含破坏性更改的主要版本建立和记录可预测的发布周期。这样，产品团队就可以计划他们的迁移。",
        },
      },
    },

    "m-local": {
      title: "本地库",
      description:
        "设计系统的范围通常是构建核心重复模式，以增加产品团队的速度。这意味着您不会自己实现所有 UI 元素。产品团队仍将使用设计系统构建本地组件，以解决其特定场景。",
      checklist: {
        "m-local-when": {
          title: "何时构建",
          description:
            "分享您的期望，即产品团队何时应构建自定义组件，而不是请求设计系统中的新功能或使用现有组件。",
        },
        "m-local-types": {
          title: "水平和垂直库",
          description:
            "概述用于多个产品的水平库和仅由构建它的团队使用的垂直库之间的区别。",
        },
        "m-local-expectations": {
          title: "库期望",
          description:
            "记录发布本地库的最低要求。描述您对库质量、文档和维护的期望。",
        },
        "m-local-release": {
          title: "发布周期对齐",
          description:
            "确保本地库与设计系统的发布周期同步。它们应支持您最新发布的系统主要版本，以避免阻止产品进行更新。",
        },
      },
    },

    "m-process": {
      title: "团队流程",
      description:
        "所有成功扩展其设计系统的团队都是通过建立与利益相关者和社区合作的强大流程来实现的。随着您不断开发系统，它们将为您节省无数时间，并避免重复回答相同的问题。",
      checklist: {
        "m-process-log": {
          title: "决策日志",
          description:
            "对于您必须重复处理的主题，记录您如何做出这些决策的日志。您不会错过任何上下文要求，并避免额外的对齐会议。",
        },
        "m-process-roadmap": {
          title: "路线图",
          description:
            "尝试规划您的长期工作，并仅分配部分时间用于社区支持。这将帮助您随着时间的推移发展系统，而不仅仅是专注于较小的错误修复和功能请求。",
        },
        "m-process-stakeholder": {
          title: "利益相关者映射",
          description:
            "列出您支持的所有产品中的主要利益相关者。这些人可能是在开发和设计方面工作的人，但也不要错过可以帮助您增加采用率的领导人。",
        },
        "m-process-analytics": {
          title: "分析",
          description:
            "定义一种跟踪您提供的库和工具的使用和价值的方式。您可以从易于设置的指标开始，例如文档网站的分析、反馈调查或设计工具中组件使用情况的分析。",
        },
        "m-process-shifts": {
          title: '持续支持"轮班"',
          description:
            "如果多个人在同一平台上工作，请分配和计划他们的社区支持工作。这将使团队成员专注于计划的工作，而不是被请求和问题分散注意力。",
        },
        "m-process-sla": {
          title: "服务级别协议",
          description:
            "定义处理传入请求和错误报告所需的时间表，以帮助产品团队了解他们是否应等待您的发布或寻找临时解决方案。",
        },
      },
    },

    "m-community": {
      title: "社区支持",
      description:
        "帮助产品设计师和开发人员更有效地使用设计系统，修复他们在产品中发现的错误并解决他们的需求至关重要。为了确保您获得反馈，您的目标是使每个人都能轻松安全地分享他们的发现。",
      checklist: {
        "m-community-channels": {
          title: "支持渠道",
          description:
            "在您用于通信的工具中创建支持渠道。将它们分开以使每个人都可以舒适地分享其问题的平台特定细节是个好主意。",
        },
        "m-community-template": {
          title: "模板",
          description:
            "准备用于创建功能请求和错误报告的模板。使用它们来要求复制链接、设计提案和其他您需要的上下文信息，而不是手动查找这些信息。",
        },
        "m-community-updates": {
          title: "定期更新",
          description:
            "如果您只专注于实施而从不与社区讨论，您将冒着新功能采用的风险。为更新定义一个节奏有助于建立习惯，让产品团队来检查系统中的新内容以及他们如何利用它。",
        },
        "m-community-slots": {
          title: "开放时间",
          description:
            "有些问题无法在单个工单或聊天中解决。为其他团队保留一些可预订的日历时间，以便他们获得咨询或与您的团队讨论其功能实现。",
        },
      },
    },

    "m-contribution": {
      title: "贡献",
      description:
        "构建设计系统是一个团队游戏。确保在旅程中包括产品团队，帮助他们为系统做出贡献，并让他们在公司内推广它。",
      checklist: {
        "m-contribution-rules": {
          title: "系统的内部规则",
          description:
            "向产品团队解释您的设计和开发流程的工作方式。设计系统团队通常比产品团队移动得更慢，因为在影响整个产品的组件中做出可扩展的决策更加负责。",
        },
        "m-contribution-guidelines": {
          title: "贡献指南",
          description:
            "解释贡献者需要设置什么来准备他们的设计和开发环境，以添加和测试新功能。",
        },
        "m-contribution-template": {
          title: "功能提案模板",
          description:
            "为启动新功能的工作准备一个标准模板。此模板应确保所提出的更改将应用于所有平台，并且不会破坏产品中现有的组件使用。",
        },
        "m-contribution-engagement": {
          title: "参与度",
          description:
            "在宣布新功能时确保突出和奖励贡献者的工作，并在他们做出贡献时帮助他们获得他们的经理支持。",
        },
      },
    },
  },
};
